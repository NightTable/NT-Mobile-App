import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import {
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Image } from 'expo-image';
//component
import { HeaderWithLeftIcon } from "../../components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { colors, typography } from "../../theme";
import { ScrollView } from "react-native";
import CostSplittingSectionComp from "../../features/costSplitting";
import TableConfigComp from "../../features/NewTableReq/TableConfigComp"
import { TableConfigurationsCard } from "../../features/tableConfig/TableConfig";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DyModal from "../../components/Modal";
import { Button as ButtonComp } from "../../components/Buttons";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as SMS from 'expo-sms';
import { CardField, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';

const { width, height } = Dimensions.get("screen");
let paymentTypeMethod = [
  {
    id: 1,
    short_form: 'snpl',
    name: 'split-now-pay-later',
    description:
      ' method. This means that you are choosing to assign each participant a joining fee. Note that this method does not create an official reservation upon creation of the request; it only gives you the option to negotiate fees with participants before finalizing anything. You may lose your table selections to someone else who either chooses the pay-now-split-later method, or finalizes their reservation before yours.',
  },
  {
    id: 2,
    short_form: 'pnsl',
    name: 'pay-now-split-later',
    description:
      ' method. This means that you are reserving a table and are responsible for paying the full cost of the table initially upon creation of the request.',
  },
];
//main function
const NewTableReq = ({ navigation, route }) => {
  useEffect(() => {
    console.log(clubStore?.individualClubTableConfig);
  }, []);
  //Store
  const clubStore = useSelector((state) => state.club);

  const [selectedTableIds, setSelectedTableIds] = useState([]);
  const [defaultTableMinimum, setDefaultTableMinimum] = useState(0);

  const toggleTableSelection = (id) => {
    if (selectedTableIds.includes(id)) {
        setSelectedTableIds(prevIds => prevIds.filter(itemId => itemId !== id));
    } else {
        setSelectedTableIds(prevIds => [...prevIds, id]);
    }
  };

  //table-minimum
  const [tableMinimum, setTableMinimum] = useState(0);
  const [TableConfigModal, setTableConfigModal] = useState(false);
  const [tableConfigsData, settableConfigsData] = useState([]);

  // console.log("tableConfigsData::>>====>", tableConfigsData.length);
  //MODAL
  const [inviteParticipantModal, setinviteParticipantModal] = useState(false);
  const [inviteParticipantData, setinviteParticipantData] = useState('');
  const [InviteFrndsData, setInviteFrndsData] = useState([]);
  //SNPL - PNSL
  const [selectedPaymentType, setselectedPaymentType] = useState(2);
  //DATE
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  //modal- know-more (Snpl& pnsl)
  const [snpl_psnl_modal, setsnpl_psnl_modal] = useState(false);
  // ON DATE CHANGE
  const onDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const [selectedTables, setSelectedTables] = useState([]);
  const [ selectedTableConfigId, setSelectedTableConfigId ] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);
  const [joiningFee, setJoiningFee] = useState('');

  const club = "Caveau";
  const event = "Afrojack Tour";
  const fee = 500;
  const appStoreLink = "https://apps.apple.com/us/app/amex/id362348516";
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.americanexpress.android.acctsvcs.us&pcampaignid=web_share";

  const inviteMessage = `Hey!\n
I'm inviting you to a table at ${club} for the ${event}, requesting a minimum contribution of $${fee}.\n
Download NightTable on the App Store: ${appStoreLink}\n
or Play Store: ${playStoreLink},\n
make sure to sign up using the phone number on which you've recieved this message,\n
and join the table for a fun night!`;

  const promoterMessage = `Hey! I'm Amiya. I'd like your help in curating my night at ${club} for the ${event} via NightTable. Thank you!`;
  const promoterNumber = "+16178933910";
  const sendSMS = async () => {
    setIsSending(true);
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        try {
            const { result } = await SMS.sendSMSAsync([inputValue], inviteMessage);
            console.log(result);
            console.log(inputValue, typeof inputValue)
        } catch (error) {
            console.log(error);
        }
    } else {
        Alert.alert('Your device does not support SMS');
    }
    setIsSending(false);
  };

  const handleModifyTableMin = (min) => {
    setTableMinimum(tableMinimum + min);
    setDefaultTableMinimum(defaultTableMinimum + min);
  }

  const sendSMSPromoter = async (message, number) => {
    setIsSending(true);
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        try {
            const { result } = await SMS.sendSMSAsync([number], message);
            console.log(result);
            console.log(inputValue, typeof inputValue)
        } catch (error) {
            console.log(error);
        }
    } else {
        Alert.alert('Your device does not support SMS');
    }
    setIsSending(false);
  };

  const textPromoter = () => {
    if (isSending) {
        Alert.alert('Already sending a message, please wait...');
        return;
    }
    sendSMSPromoter(promoterMessage, promoterNumber);
  };

  const sendInvite = () => {
    if (isSending) {
        Alert.alert('Already sending an invite, please wait...');
        return;
    }

    if (inputValue.includes('@')) {
        // Logic for sending an email
    } else {
        sendSMS();
    }
    setModalVisible(false);
  };

  const handleRemoveParticipant = (indexToRemove) => {
    const updatedList = InviteFrndsData.filter((_, index) => index !== indexToRemove);
    setInviteFrndsData(updatedList);
  };

  const handleTableConfigPress = (idParam) => {
    let selectedTableList = selectedTables;
    setSelectedTableConfigId(idParam);
    if (selectedTableList.length === 0){
        for (let i = 0; i < tcs.length; i++){
            if (tcs[i].id === idParam){
                selectedTableList.push(tcs[i]);
            }
        }
    }
    else{
        let found = false;
        for (let i = 0; i < selectedTableList.length; i++) {
            if (selectedTableList[i].id === idParam){
                found = true;
                selectedTableList.splice(i);
                break
            }
        }
        if (!found) {
            for (let i = 0; i < tcs.length; i++){
                if (tcs[i].id === idParam){
                    selectedTableList.push(tcs[i]);
                }
            }
        } 
    }
    /*for (let i = 0; i < tcs.length; i++){
        console.log(i, "i from for loop")
        console.log(tcs[i].id, idParam, "tcs[i].id, idParam");
        if (tcs[i].id === idParam){ //these if statements have a bug
            //console.log(selectedTableList, "selectedTableList logging")
            console.log(selectedTableList.includes(tcs[i]), selectedTableList[i]["id"], tcs[i], "selectedTableList.includes(tcs[i]), selectedTableList, tcs[i]")
            if (!(selectedTableList.includes(tcs[i]))){
                selectedTableList.push(tcs[i]);
            }
            else{
                console.log(selectedTableList.includes(tcs[i]), "table list includes table\n");
                selectedTableList.pop();
            }
        }
    }*/
    setSelectedTables(selectedTableList);
  }

  // CLUB AND EVENT NAME CARD
  const ClubandEventNameCard = () => {
    return (
      <>
        <Box
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
          }}
        >
          <Text
            style={[
              typography.bold.bold16,
              {
                color: colors.gold.gold100,
              },
            ]}
          >
            {route?.params?.clubData?.name} :{' '}
          </Text>
          <Text
            style={[
              typography.bold.bold16,
              {
                color: colors.gold.gold100,
                textAlign: 'right',
              },
            ]}
          >
            {route?.params?.selectedEventData?.name}
          </Text>
        </Box>
      </>
    );
  };

  console.log('====================================');
  console.log('tableMinimum', tableMinimum);
  console.log('====================================');
  return (
    <>
      <View
        style={{
          paddingTop: 40,
          backgroundColor: colors.black.black800,
          flex: 1,
        }}
      >
        <HeaderWithLeftIcon
          title={'New Table Request'}
          icon={'back'}
          iconDirectory={'Entypo'}
          iconRightDirectory={'Entypo'}
          iconRight={''}
          onSubmit={() => {
            navigation.navigate('Hostsandpromoters', {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
            });
          }}
          onPressRight={() => {
            return null;
          }}
        />
        <Box style={{ height: '20%' }}>
          <ScrollView horizontal={true}>
            {route?.params?.clubData?.photos.map((image) => {
              return (
                <>
                  <Box>
                    <Image
                      style={{
                        width: width,
                        height: 160,
                      }}
                      source={{
                        uri: image,
                      }}
                    />
                  </Box>
                </>
              );
            })}
          </ScrollView>
          <ClubandEventNameCard />
        </Box>

        <Box style={styles.box2}>
          <Box style={styles.box2_first}>
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 12,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold16,
                  {
                    color: colors.gold.gold100,

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  },
                ]}
              >
                Organizer : {route?.params?.promoterData?.name}
              </Text>
              <TouchableOpacity 
                onPress={textPromoter} 
                style={{
                  backgroundColor: colors.gold.gold200, 
                  paddingHorizontal: 10, 
                  paddingVertical: 5, 
                  borderRadius: 5  // optional, for rounded corners
                }}
              >
                <Text style={[typography.regular.regular16, { color: 'black', fontSize: 18 }]}>
                  Text VIP Host
                </Text>
              </TouchableOpacity>
            </Box>
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 12,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold16,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                Current Table Minimum: ${tableMinimum}
              </Text>
              {/*<TextInput
                style={styles.input}
                onChangeText={setTableMinimum}
                // placeholder={`${defaultTableMinimum}`}
                placeholderTextColor={colors.gold.gold100}
                selectionColor={colors.gold.gold100}
                value={tableMinimum}
                keyboardType={'numeric'}
              />*/}
            </Box>
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold16,
                  {
                    color: colors.gold.gold100,
                    alignSelf: 'center',
                  },
                ]}
              >
                Estimated Time of Arrival :
              </Text>
              <DateTimePicker
                value={selectedDate}
                mode='time'
                display='default'
                onChange={onDateChange}
                style={{ width: 120 }} //add this
                themeVariant={'dark'}
              />
            </Box>

            <Box
                style={{
                    flexDirection: 'column', // Changed to 'column' to stack content vertically
                    paddingVertical: 10,
                }}
            >
                <Text
                    style={[
                        typography.semBold.semBold16,
                        {
                            color: colors.gold.gold100,
                            justifyContent: 'center', 
                            alignItems: 'center',
                        },
                    ]}
                >
                    Select Table Type :
                </Text>
                <View
                  style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingVertical: 5,
                      borderBottomColor: colors.gold.gold100,
                      //borderBottomWidth: 1,
                  }}
                  >
                  <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>ID</Text>
                  <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>TYPE</Text>
                  <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>MINIMUM</Text>
                </View>
                <ScrollView style={{ borderColor: colors.gold.gold100, borderWidth: 2, borderRadius: 5 }}>
                  {clubStore?.individualClubTableConfig.length > 0 ? (
                    clubStore?.individualClubTableConfig.map((item, index) => (
                      <TableConfigComp
                        key={index}
                        onOuterTableConfigPress={handleTableConfigPress}
                        handleTableMinimum={handleModifyTableMin}
                        id={item?.tableMapId}
                        type={item?.type}
                        price={item?.minPrice}
                      />
                      // Below is the original TouchableOpacity for reference
                      /*
                      <TouchableOpacity
                        key={index}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          padding: 10,
                          marginVertical: 5,
                          borderColor: colors.gold.gold100,
                          borderWidth: 1,
                          borderRadius: 5
                        }}
                        onPress={() => {
                          // Handle table config selection here
                        }}
                      >
                        <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>{item?.tableMapId}</Text>
                        <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>{item?.type}</Text>
                        <Text style={[typography.semBold.semBold16, { color: colors.gold.gold100 }]}>${item?.minPrice}</Text>
                      </TouchableOpacity>
                      */
                    ))
                  ) : (
                    <Text
                      style={[
                        typography.semBold.semBold14,
                        {
                          color: 'white',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                        },
                      ]}
                    >
                      NO TABLE'S AVAILABLE
                    </Text>
                  )}
                </ScrollView>


                {/*<Pressable
                    style={{ backgroundColor: 'silver', padding: 6, marginTop: 10 }} // Added marginTop for spacing
                    onPress={() => {
                        setTableConfigModal(true);
                    }}
                >
                    {/* Your existing Pressable content */}
                {/*</Pressable>*/}
            </Box>

            {/*<Box
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold16,
                  {
                    color: colors.gold.gold100,
                    justifyContent: 'center', //Centered vertically
                    alignItems: 'center', //Centered horizontally
                  },
                ]}
              >
                Select Table Type :
              </Text>

              <Pressable
                style={{ backgroundColor: 'silver', padding: 6 }}
                onPress={() => {
                  setTableConfigModal(true);
                }}
              >
                {tableConfigsData.length > 0 ? (
                  <>
                    {tableConfigsData?.map((item) => {
                      return (
                        <>
                          <Text
                            style={[
                              typography.semBold.semBold16,
                              {
                                color: 'black',
                                //   color: colors.gold.gold100,
                                justifyContent: 'center', //Centered vertically
                                alignItems: 'center', //Centered horizontally
                              },
                            ]}
                          >
                            {item?.tableMapId} : $ {item?.minPrice} ,
                          </Text>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <Text
                      style={[
                        typography.semBold.semBold14,
                        {
                          color: 'black',
                          justifyContent: 'center', //Centered vertically
                          alignItems: 'center', //Centered horizontally
                        },
                      ]}
                    >
                      NO TABLE CONFIG SELECTED
                    </Text>
                  </>
                )}
              </Pressable>
            </Box>*/}

            <Box>
              {/* Start of "Select Request Type" Box */}
              <Box
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 6,
                }}
              >
                <Text
                  style={[
                    typography.semBold.semBold14,
                    {
                      color: colors.gold.gold100,
                      justifyContent: 'center', //Centered vertically
                      alignItems: 'center', //Centered horizontally
                    },
                  ]}
                >
                  Select Request Type :
                </Text>
                <Pressable
                  onPress={() => {
                    setsnpl_psnl_modal(true);
                  }}
                >
                  <AntDesign name='questioncircle' size={20} color='silver' />
                </Pressable>
              </Box>
              <Box
                style={{
                  flexDirection: 'row',
                  paddingVertical: 8,
                  justifyContent: 'space-between',
                }}
              >
                {paymentTypeMethod?.map((item) => {
                  return (
                    <>
                      <Pressable
                        onPress={() => {
                          setselectedPaymentType(item.id);
                        }}
                        style={{
                          borderRadius: 6,
                          borderWidth: 1,
                          borderColor:
                            item.id === selectedPaymentType
                              ? colors.gold.gold100
                              : colors.black.black900,
                        }}
                      >
                        <Text
                          style={[
                            typography.bold.bold16,
                            {
                              color:
                                item.id === selectedPaymentType
                                  ? colors.gold.gold100
                                  : colors.grey.grey400,
                              padding: 12,
                            },
                          ]}
                        >
                          {item?.name}
                        </Text>
                      </Pressable>
                    </>
                  );
                })}
              </Box>
              {/* End of "Select Request Type" Box */}

              {/* Start of "Invite Friends" Box */}
              <Box>
                <Box
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={[
                      typography.semBold.semBold14,
                      {
                        color: colors.gold.gold100,
                        justifyContent: 'center', //Centered vertically
                        alignItems: 'center', //Centered horizontally
                      },
                    ]}
                  >
                    Invite Friends :
                  </Text>
                  <Pressable
                    onPress={() => {
                      setinviteParticipantModal(!inviteParticipantModal);
                    }}
                  >
                    <AntDesign name='plus' size={20} color='silver' />
                  </Pressable>
                </Box>
                <Box>
                  {InviteFrndsData?.map((item, index) => {
                    return (
                      <Text
                        key={index}
                        style={[
                          typography.semBold.semBold14,
                          {
                            color: colors.gold.gold100,
                          },
                        ]}
                      >
                        {item.emailOrPhone} - Fee: {item.fee}{' ,'}
                      </Text>
                    );
                  })}
                </Box>

              </Box>
              {/* End of "Invite Friends" Box */}
            </Box>

          </Box>

          <Box style={styles.box2_second}>
            <ButtonComp
              onSubmit={() => {
                if (tableMinimum != 0) {
                  Alert.alert('Please enter the table Minimum');
                } else if (tableConfigsData.length === 0) {
                  Alert.alert('Please select the table Configs');
                } else {
                  navigation.navigate('TableReqConfirmation', {
                    clubData: route?.params?.clubData,
                    selectedEventData: route?.params?.selectedEventData,
                    promoterData: route?.params?.promoterData,
                    tableMinimum: tableMinimum,
                    arrivalDate: selectedDate,
                    selectedConfigData: tableConfigsData,
                    InviteFrndsData: InviteFrndsData,
                  });
                }
              }}
              text={'continue'}
              backgroundColor={colors.gold.gold100}
            />
          </Box>
        </Box>
      </View>

      <DyModal
        bgColor={colors.black.black800}
        children={
          <>
            <Box style={{ height: height, paddingHorizontal: 18 }}>
              <Text
                style={[
                  typography.bold.bold24,
                  { color: colors.gold.gold100, paddingBottom: 20 },
                ]}
              >
                Select Tables
              </Text>
              <TableConfigurationsCard
                data={clubStore?.individualClubTableConfig}
                selectedTableConfigsData={tableConfigsData}
                selectedTableConfigsIds={() => {
                  let tempArr = [];
                  if (tableConfigsData.length > 0) {
                    tableConfigsData.map((item) => {
                      tempArr.push(item?._id);
                    });
                    return tempArr;
                  } else {
                    return [];
                  }
                }}
                onpress_return_selectedTableConfigs={(item) => {
                  let mintableAmount = item
                    ?.map((item) => item.minPrice)
                    .reduce((prev, curr) => prev + curr, 0);

                  settableConfigsData(item);
                  // console.log('setTableMinimum', setTableMinimum);
                  setTableMinimum(Number(mintableAmount));
                  // settableMinimum('')
                }}
                showTables={false}
              />
              <ButtonComp
                disabled={false}
                onSubmit={() => {
                  setTableConfigModal(false);
                }}
                backgroundColor={colors.gold.gold100}
                text={'Continue '}
              />
            </Box>
          </>
        }
        openActionSheet={TableConfigModal}
        setopenActionSheet={setTableConfigModal}
        onClosepress={() => {
          setTableConfigModal(false);
        }}
      />

      <DyModal
        children={
          <CostSplittingSectionComp selectedPaymentType={selectedPaymentType} />
        }
        onClosepress={() => {
          setsnpl_psnl_modal(!snpl_psnl_modal);
        }}
        bgColor={colors.black.black800}
        openActionSheet={snpl_psnl_modal}
        setopenActionSheet={setsnpl_psnl_modal}
      />

      <DyModal
        children={
          <>
            <Box style={{ paddingHorizontal: 18 }}>
              <Text
                style={[
                  typography.bold.bold24,
                  { color: colors.gold.gold100, paddingVertical: 12 },
                ]}
              >
                Invite Friends
              </Text>

              <CardField
                postalCodeEnabled={true}
                placeholders={{ number: '4242 4242 4242 4242' }}
                cardStyle={{
                  placeholderColor: '#e4d0b5',
                  textColor: '#e4d0b5',
                  backgroundColor: 'black',
                  fontSize: 15,
                  borderColor: '#e4d0b5',
                  borderWidth: 2,
                  borderRadius: 10
                }}
                style={{ width: '100%', height: 50, marginVertical: 20 }}
                onCardChange={(cardDetails) => {
                  console.log('cardDetails', cardDetails);
                              if (cardDetails.complete && cardDetails.validNumber) {
                          setIsCardValid(true);
                      } else {
                          setIsCardValid(false);
                    }
                }}
                onFocus={(focusedField) => {
                  console.log('focusField', focusedField);
                }}
              />

              <Text
                style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
              >
                Enter Phone Number (include country code)
              </Text>

              <Box
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
              >
                <TextInput
                  style={styles.inputInviteParticipant}
                  onChangeText={(e) => setinviteParticipantData(e)}
                  placeholder={``}
                  placeholderTextColor={colors.gold.gold100}
                  selectionColor={colors.gold.gold100}
                  value={inviteParticipantData}
                  keyboardType={'numeric'}
                />
              </Box>

              <Text
                style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
              >
                Joining Fee
              </Text>

              <Box
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
              >

                <TextInput
                  style={styles.inputInviteParticipant}
                  onChangeText={(fee) => setJoiningFee(fee)}
                  placeholder={"Enter fee"}
                  placeholderTextColor={colors.gold.gold100}
                  selectionColor={colors.gold.gold100}
                  keyboardType={'numeric'}
                />
              </Box>

              <Box style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Pressable
                  style={{ borderRadius: 20 / 2, padding: 4 }}
                  onPress={() => {
                    if (isCardValid) {
                      let tempArr = [...InviteFrndsData, { emailOrPhone: inviteParticipantData, fee: joiningFee }];
                      console.log(tempArr, "the tempArr\n")
                      setInviteFrndsData(tempArr);
                      setinviteParticipantData('');
                      setJoiningFee('');
                    } else {
                        alert('Please enter a valid credit card to invite friends.');
                    }
                  }}
                  disabled={!isCardValid}
                >
                  <Text
                    style={[
                      typography.semBold.semBold16,
                      {
                        backgroundColor: colors.gold.gold100,
                        padding: 6,
                        borderRadius: 12,
                      },
                    ]}
                  >
                    Send Invitation
                  </Text>
                </Pressable>
              </Box>

              <Box>
                <Text
                  style={[
                    typography.bold.bold16,
                    { color: colors.gold.gold100, paddingVertical: 10 },
                  ]}
                >
                  Participants:
                </Text>

                {/*<Text
                  style={[
                    typography.regular.regular14,
                    {
                      color: colors.gold.gold100,
                      paddingVertical: 6,
                      lineHeight: 20,
                    },
                  ]}
                >
                  Note: that only organizers of a table that are promoters or
                  part of the club stuff can change their own minimum joining
                  fee to 0
                </Text>*/}

                <Box style={{ paddingVertical: 14 }}>
                  <ScrollView style={{ paddingBottom: 420 }}>
                  {InviteFrndsData &&
                    InviteFrndsData.map((item, index) => {
                      return (
                        <Box
                          key={index}
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: colors.gold.gold100,
                            padding: 8,
                            borderRadius: 12,
                            marginVertical: 2,
                          }}
                        >
                          <Text
                            style={[
                              typography.regular.regular14,
                              {
                                paddingVertical: 6,
                                lineHeight: 10,
                                paddingHorizontal: 4,
                              },
                            ]}
                          >
                            {item.emailOrPhone} - Fee: {item.fee}
                          </Text>

                          <TouchableOpacity onPress={() => handleRemoveParticipant(index)}>
                            <Text style={[typography.regular.regular16, { color: colors.black.black800}]}>X</Text>
                          </TouchableOpacity>
                        </Box>
                      );
                    })}

                  </ScrollView>
                </Box>
              </Box>
            </Box>
          </>
        }
        onClosepress={() => setinviteParticipantModal(!inviteParticipantModal)}
        bgColor={colors.black.black800}
        openActionSheet={inviteParticipantModal}
        setopenActionSheet={setinviteParticipantModal}
      />


    </>
  );
};

export default NewTableReq;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
    height: '100%',
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1,
  },
  textHeading: {
    color: colors.gold.gold100,
    paddingTop: 20,
  },
  input: {
    height: 20,
    borderWidth: 1,
    borderColor: colors.gold.gold100,
    borderBottomColor: colors.gold.gold100,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    placeholderTextColor: colors.gold.gold100,
    selectionColor: colors.gold.gold100,
    color: colors.gold.gold100,
    fontSize: 14,
    width: '20%',
    textAlign: 'center',
  },
  inputInviteParticipant: {
    height: 20,
    borderWidth: 1,
    borderColor: colors.gold.gold100,
    borderBottomColor: colors.gold.gold100,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    placeholderTextColor: colors.gold.gold100,
    selectionColor: colors.gold.gold100,
    color: colors.gold.gold100,
    fontSize: 14,
    width: "50%",
    // textAlign: "center",
  },
  box2: {
    borderRadius: 30,
    borderColor: colors.gold.gold100,
    borderWidth: 1,
    paddingHorizontal: 18,
    height: '80%',
  },
  box2_first: {
    height: '80%',
    justifyContent: 'space-evenly',
    // backgroundColor: "red",
  },
  box2_second: {
    height: '20%',
  },
});
