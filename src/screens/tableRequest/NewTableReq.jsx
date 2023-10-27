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
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Image } from 'expo-image';
import axios from "axios";
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
import { ObjectId } from 'bson';

const { width, height } = Dimensions.get("screen");

//main function
const NewTableReq = ({ navigation, route }) => {
  useEffect(() => {
    console.log("params\n");
    console.log(route?.params);
    console.log("params\n");
  }, []);

  useEffect(() => {
    console.log(selectedTableIds, "table ids");
}, [selectedTableIds]);


  const myIP = 'http://192.168.1.77'
  //const myIP = 'http://10.0.0.146'
  //Store
  const clubStore = useSelector((state) => state.club); // club store
  const [selectedTableIds, setSelectedTableIds] = useState([]); // ids of the selected tables
  const [defaultTableMinimum, setDefaultTableMinimum] = useState(0); // default table min = sum of the table minds of selected tables
  const [selectedTables, setSelectedTables] = useState([]); // tables of ids selected by user
  const [selectedTableConfigId, setSelectedTableConfigId ] = useState(""); // table config id of a selected table
  const [modalVisible, setModalVisible] = useState(false); //modal visibility 
  const [inputValue, setInputValue] = useState(''); // phone number of invitee
  const [isSending, setIsSending] = useState(false); // sms sending or not
  const [isCardValid, setIsCardValid] = useState(false); // card valid or not
  const [joiningFee, setJoiningFee] = useState(''); // joining fee of user
  const [tableName, setTableName] = useState(""); // name of your table 

  const [tableMinimum, setTableMinimum] = useState(0); // table minimum
  //const [TableConfigModal, setTableConfigModal] = useState(false); // modal for opening table configs
  //const [tableConfigsData, settableConfigsData] = useState([]); // data containing table configs
  
    // console.log("tableConfigsData::>>====>", tableConfigsData.length);
    //MODAL
    const [inviteParticipantModal, setinviteParticipantModal] = useState(false); // brings up payment and participant modal
    const [inviteParticipantData, setinviteParticipantData] = useState(''); // participant invite phone data
    const [InviteFrndsData, setInviteFrndsData] = useState([]); // list of friends invitied
    //SNPL - PNSL
    const [selectedPaymentType, setselectedPaymentType] = useState(2); // payment type
    //DATE
    const [selectedDate, setSelectedDate] = useState(new Date()); // time of table
    const [showDatePicker, setShowDatePicker] = useState(false); // date time picker
    //modal- know-more (Snpl& pnsl)
    const [snpl_psnl_modal, setsnpl_psnl_modal] = useState(false); // pnsl snpl selection
    // ON DATE CHANGE

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

  const club = "Caveau";
  const event = "Afrojack Tour";
  const fee = 500;
  const appStoreLink = "https://apps.apple.com/us/app/amex/id362348516";
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.americanexpress.android.acctsvcs.us&pcampaignid=web_share";

  const inviteMessage = `Hey!\n
I'm inviting you to a table at ${route?.params?.clubData?.name} for the ${route?.params?.selectedEventData?.name} event, requesting a minimum contribution of $${joiningFee}.\n
Download NightTable on the App Store: ${appStoreLink}\n
or Play Store: ${playStoreLink},\n
make sure to sign up using the phone number on which you've recieved this message,\n
and join the table for a fun night!`;

  const promoterMessage = `Hey! I'm Amiya. I'd like your help in curating my night at ${route?.params?.clubData?.name} for the ${route?.params?.selectedEventData?.name} event via NightTable. Thank you!`;
  const promoterNumber = "+16178933910";

  const { createPaymentMethod, handleNextAction } = useStripe();


  const toggleTableSelection = (id) => {
    if (selectedTableIds.includes(id)) {
        setSelectedTableIds(prevIds => prevIds.filter(itemId => itemId !== id));
    } else {
        setSelectedTableIds(prevIds => [...prevIds, id]);
    }
    //console.log(selectedTableIds);
  };

  function handleTouchOutside() {
    Keyboard.dismiss();
}

  /*
    Making payment and navigating to the next screen
    - creating internal customer
    - making sure the tables we've selected haven't been bought out
    - creating a snpl payment on the card, or pnsl, depending on the payment type 
    - navigate over to the next screen
  */


    const navToPollingRoomScreen = async (data) => {
      const createTRBody = {
        name: data.name,
        tableConfigId: data.tableConfigId,
        selectedTables: data.selectedTables,
        minimum: data.minimum,
        eventId: route?.params?.selectedEventData._id,
        joiningFee: data.joiningFee,
        organizerUserId: new ObjectId(),
        promoterId: route?.params?.promoterData._id,
        costSplitType: data.costSplitType,
        eta: data.eta,
        isPolling: data.costSplitType === "pnsl" ? false : true,
        isActive: data.costSplitType === "pnsl" ? true : false,
        isClosed: false,
        requestPlacementTime: new Date(), 
        clubId: route?.params?.clubData._id
      };

      const responseCreateNewTableRequest = await axios.get(`${myIP}:3000/api/tablerequests/tableReq`, createTRBody)

      /*
        if PNSL, move to active table group screen
        if SNPL, move to polling room screen
      */

      // clubData: route?.params?.clubData,
      // electedEventData: route?.params?.selectedEventData,
      // promoterData: route?.params?.promoterData,
      // tableMinimum: tableMinimum,
      // arrivalDate: selectedData
      // selectedConfigData: tableConfigsData,
      // InviteFrndsData: InviteFrndsData,
      // paymentMethod: paymentMethod or null
      // internalCustomer: internalCustomer
      // tableMinimum: tableMinimum
      // tableRequest: responseCreateNewTableRequest.data
    }
    const makePayment = async (chargeAmount) => {
      const clubData = route?.params?.clubData
      const handleError = (error, message) => {
          if (error.config && error.config.url) {
              console.error(`Error with endpoint: ${error.config.url}`, error.message);
          } else {
              console.error(message, error.message);
          }
          // Optionally, you can throw the error again if you want the calling function to handle it
          throw error; 
      };
  
      try {
          const extractedTableConfigIds = clubStore?.individualClubTableConfig
              .filter(table => selectedTableIds.includes(table.tableMapId))
              .map(table => table._id);
          console.log(extractedTableConfigIds, "selectedTables mp\n");
        
          // Fetching table requests for each extracted table config ID.
          const tableRequestsResponses = await Promise.all(
              extractedTableConfigIds.map(async tableConfigId => {
                  try {
                      return await axios.get(`${myIP}:3000/api/tablerequests/tableConfiguration/${tableConfigId}`);
                  } catch (error) {
                      handleError(error, `Error fetching table request for ID ${tableConfigId}`);
                      return null; // Handle individual request errors
                  }
              })
          );
        
          // Extract data from the axios responses, filtering out any null values from failed requests
          const tableRequestsArrays = tableRequestsResponses
              .filter(response => response) 
              .map(response => response.data.data);
        
          const tableRequests = tableRequestsArrays.flat();
          console.log('Fetched table requests:', tableRequests);
  
          if (!tableRequests || tableRequests.length === 0 || tableRequests.every(request => !request.isActive)) {
              const billingDetails = {
                  name: "Amiya Sekhar",
                  phone: '+48888000888',
              };
            
              const { paymentMethod, error } = await createPaymentMethod({
                  paymentMethodType: 'Card',
                  paymentMethodData: { billingDetails },
              });
  
              if (error) handleError(error, "Failed to create payment method.");
  
              console.log(paymentMethod, "payment method after pressing button\n");
  
              const createCustomerBody = {
                  userId: new ObjectId(),
                  paymentMethodId: paymentMethod.id,
              };
  
              const responseInternalCustomer = await axios.post(`${myIP}:3000/api/payments/create-customer`, createCustomerBody);
              console.log(responseInternalCustomer.data, "responseInternalCustomer\n");
  
              let customerId;
              const responseStripeCustomer = await axios.get(`${myIP}:3000/api/payments/get-stripe-customer/${responseInternalCustomer.data.stripeCustomerId}`);
              console.log(responseStripeCustomer.data, "responseStripeCustomer\n");
              customerId = responseStripeCustomer.data.id;
  
              const paymentType = selectedPaymentType == 1 ? 'snpl' : 'pnsl';
              const clubInfo = route?.params?.clubData;
              const tipPercentage = clubData?.lineItems.find(item => item.name === "Tip")?.percentage;
              const taxPercentage = clubData?.lineItems.find(item => item.name === "Tax")?.percentage;
              const modifiedPercentages = [tipPercentage, taxPercentage - taxPercentage];

              const createPaymentIntentBody = {
                  amount: chargeAmount,
                  lineItems: modifiedPercentages,
                  paymentType: paymentType,
                  paymentMethodId: paymentMethod.id,
                  customerId: customerId,
              };
              console.log(myIP);
              const responsePaymentIntent = await axios.post(`${myIP}:3000/api/payments/create-payment-intent`, createPaymentIntentBody);
              console.log("\n");
              console.log("responsePaymentIntent", responsePaymentIntent);
              console.log("\n");
              console.log(responsePaymentIntent.data, `responsePaymentIntent${paymentType.toUpperCase()}\n`);


              //if (paymentType)

              //create table request and nav to next screen
              const trData = {
                name: tableName,
                tableConfigId: selectedTables,
                minimum: tableMinimum,
                joiningFee: 300,
                costSplitType: paymentType,
                eta: selectedDate,
                invitedFriends: InviteFrndsData,
                paymentMethod: paymentMethod,
                stripeCustomer: responseStripeCustomer,
                internalCustomer: responseInternalCustomer
              };

              //navToPollingRoomScreen(trData);

                // clubData: route?.params?.clubData,
                // electedEventData: route?.params?.selectedEventData,
                // promoterData: route?.params?.promoterData,
                // tableMinimum: tableMinimum,
                // arrivalDate: selectedData
                // selectedConfigData: tableConfigsData,
                // InviteFrndsData: InviteFrndsData,
                // paymentMethod: paymentMethod or null
                // internalCustomer: internalCustomer
                // tableMinimum: tableMinimum
                // tableRequest: tableRequest
  
          } else {
              Alert.alert("Some of your tables have been bought out");
          }
  
      } catch (error) {
          console.error("General error in makePayment function:", error);
      }
    }
  

  

  const onDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };



  const sendSMS = async () => {
    setIsSending(true);
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        try {
            const { result } = await SMS.sendSMSAsync([inputValue], inviteMessage);
            setIsSending(false);
            return result === 'sent' ? 'sent' : 'error'; // Ensure a consistent return value
        } catch (error) {
            console.log(error);
            setIsSending(false); // Resetting the isSending flag in the catch block
            return 'error'; // Ensure a return value
        }
    } else {
        Alert.alert('Your device does not support SMS');
        setIsSending(false);
        return 'error'; // Ensure a return value
    }
  };

  //change table minimum based on how many configs selected
  const handleModifyTableMin = (min) => {
    let parsedMin = parseInt(min, 10);
    if (isNaN(parsedMin)) {parsedMin = 0}; // exit early if min is not a number
    setTableMinimum(tableMinimum + parsedMin);
    setDefaultTableMinimum(defaultTableMinimum + parsedMin);
  }

  //change the name of table group
  const toggleTableGroupName = (name) => {
    setTableName(name);
    console.log(name);
  }

  // for promoters when they want to modify the table minimum manually
  const toggleTableMin = (min) => {
    const parsedMin = parseFloat(min);
    setTableMinimum(isNaN(parsedMin) ? 0 : parsedMin);
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

  const sendInvite = async () => { // Making the function async
    if (isSending) {
        Alert.alert('Already sending an invite, please wait...');
        return 'error'; // Ensure a return value
    }

    let result;
    if (inputValue.includes('@')) {
        // Logic for sending an email
        // If there's a return value for email, update here
    } else {
        result = await sendSMS(); // Awaiting the result from sendSMS
    }
    setModalVisible(false);
    return result; // Return the result consistently
  };

  // remove a participant
  const handleRemoveParticipant = (indexToRemove) => {
    const updatedList = InviteFrndsData.filter((_, index) => index !== indexToRemove);
    setInviteFrndsData(updatedList);
  };

  // add / remove tables from your list of selected tables
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
  console.log('====================================');
  console.log(selectedTableIds, "table ids");
  console.log('====================================');
  console.log('default table mininum', defaultTableMinimum);
  console.log('====================================');
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
                Organizer: {route?.params?.promoterData?.name}
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

            <TouchableWithoutFeedback onPress={handleTouchOutside}>
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
                  Table Group Name: 
                </Text>
                <TextInput
                  style={{...styles.input, width: 250}}
                  placeholder={"Name your table group"}
                  onChangeText={(value) => toggleTableGroupName(value)}
                  placeholderTextColor={colors.gold.gold100}
                  selectionColor={colors.gold.gold100}
                />
              </Box>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleTouchOutside}>
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
                  Current Table Minimum:
                </Text>
                {selectedTableIds.length > 0 ? <TextInput
                  style={styles.input}
                  editable={true}
                  placeholder={`$${defaultTableMinimum}`}
                  onChangeText={(value) => toggleTableMin(value)}
                  placeholderTextColor={colors.gold.gold100}
                  selectionColor={colors.gold.gold100}
                  value={!isNaN(tableMinimum) ? tableMinimum : (!isNaN(defaultTableMinimum) ? defaultTableMinimum : '0')}
                  keyboardType={'numeric'}
                /> : null}
              </Box>
            </TouchableWithoutFeedback>

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
                Estimated Time of Arrival:
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
                    onTableSelected={toggleTableSelection} // Handles both selection and deselection
                    id={item?.tableMapId}
                    type={item?.type}
                    price={item?.minPrice}
                  />
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
            </Box>

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

            </Box>

          </Box>

          <Box style={styles.box2_second}>
            <ButtonComp
              onSubmit={() => {
                if (selectedTableIds.length === 0) {
                  console.log(tableConfigsData, "table config data when button pressed");
                  Alert.alert('Please select the table Configs');
                } else {
                  // Uncomment the below code if you want to use the modal toggle or any other functionality.
                  setinviteParticipantModal(!inviteParticipantModal);
                  
                }
              }}
              text={'Send Invites and Make payment'}
              backgroundColor={colors.gold.gold100}
            />

          </Box>

        </Box>
      </View>

      {/*<DyModal
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
                  setTableMinimum(Number(mintableAmount));
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
      />*/}

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

              {tableMinimum !== 0 && (
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
                      borderRadius: 10,
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
                )}

              {
                selectedPaymentType === 2 ? (  // if it's "pay-now-split-later"
                  <>
                    <Text
                      style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
                    >
                      My Joining Fee (Unmodifiable) $
                    </Text>
                    <TextInput
        style={[styles.inputInviteParticipant, { marginVertical: 10 }]} // Added margin
        value={`${tableMinimum}`}  // set to tableMinimum
                      editable={false}  // making it non-editable
                      placeholderTextColor={colors.gold.gold100}
                      selectionColor={colors.gold.gold100}
                      keyboardType={'numeric'}
                    />
                  </>
                ) : (  // if it's "split-now-pay-later"
                  <>
                    <Text
                      style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
                    >
                      My Joining Fee $
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
                        placeholder={``}
                        placeholderTextColor={colors.gold.gold100}
                        selectionColor={colors.gold.gold100}
                        keyboardType={'numeric'}
                      />
                    </Box>
                  </>
                )
              }
              <Text
                style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
              >
                Enter Invitee's Phone Number (include country code)
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
                  onChangeText={(e) => [setinviteParticipantData(e), setInputValue(e)]}
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
                Invitee Joining Fee $
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
                  placeholder={``}
                  placeholderTextColor={colors.gold.gold100}
                  selectionColor={colors.gold.gold100}
                  keyboardType={'numeric'}
                />
              </Box>

              <Box style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Pressable
                  style={{ borderRadius: 20 / 2, padding: 4 }}
                  onPress={ async() => {
                    if (!isCardValid && tableMinimum !== 0) {
                      alert('Please enter a valid credit card to invite friends.');
                      return;
                    }
                    if (!inviteParticipantData) {
                      alert('Please enter a phone number to invite friends.');
                      return;
                    }
                    if (!joiningFee) {
                      alert('Please specify a joining fee to invite friends.');
                      return;
                    }

                    const status = await sendInvite();
                    let tempArr = [...InviteFrndsData];
              
                    switch (status) {
                      case 'sent':
                        tempArr.push({ emailOrPhone: inviteParticipantData, fee: joiningFee });
                        setInviteFrndsData(tempArr);
                        setinviteParticipantData('');
                        // Assuming you want to reset this:
                        break;
                      case 'error':
                        Alert.alert('Error', 'There was an error sending the invitation. Please try again.');
                        break;
                      default:
                        Alert.alert('Unexpected Error', 'Something unexpected happened. Please try again.');
                        break;
                    }
                  }}
                  disabled={(!isCardValid && tableMinimum !== 0) || !inviteParticipantData || !joiningFee}
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
                  Invitees:
                </Text>

                <Box style={{ paddingVertical: 14 }}>
                <ScrollView 
                  style={{ 
                      paddingBottom: 50, 
                      borderWidth: 2,
                      borderRadius: 5,
                      borderColor: colors.gold.gold100,  // This line adds the gold border
                      height: '50%'
                  }}
                >
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
                                      marginHorizontal: 5,
                                      marginVertical: 5,

                                      
                                  }}
                              >
                                  <Text
                                      style={[
                                          typography.regular.regular14,
                                          {
                                              paddingVertical: 6,
                                              lineHeight: 10,
                                              paddingHorizontal: 4,
                                              color: colors.black.black800
                                          },
                                      ]}
                                  >
                                      +{item.emailOrPhone} - Fee: ${item.fee}
                                  </Text>
                              </Box>
                          );
                      })
                  }
              </ScrollView>
              <Text
                          style={[
                              typography.semBold.semBold12,
                              {
                                  color: colors.gold.gold200 // Assuming you want black text
                              },
                          ]}
                      >
                      You'll also be levied an additional fee of no more than 60% and no less than 30% to account for 
                      miscellaneous club fees, such as tip, tax, and service fees, and payment processing fees.
                  </Text>
                  <TouchableOpacity
                    style={{
                        backgroundColor: colors.gold.gold100,
                        padding: 10,
                        borderRadius: 12,
                        alignItems: 'center',
                        marginVertical: 10 // To add some spacing above and below the button
                    }}
                    onPress={async () => {
                        await makePayment(tableMinimum);
                        console.log('Confirm payment button pressed');
                    }}
                  >
                      <Text
                          style={[
                              typography.semBold.semBold16,
                              {
                                  color: colors.black.black800 // Assuming you want black text
                              },
                          ]}
                      >
                          Confirm Payment
                      </Text>
                  </TouchableOpacity>

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

/*


*/

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


// testing commit 