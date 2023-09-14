import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  View,
} from "react-native";
import { Image } from "expo-image";
//component
import { HeaderWithLeftIcon } from "../../Components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { colors, typography } from "../../Theme";
import { ScrollView } from "react-native";
import CostSplittingSectionComp from "../../Features/costSplitting";
import { TableConfigurationsCard } from "../../Features/tableConfig/TableConfig";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DyModal from "../../Components/Modal";
import { Button as ButtonComp } from "../../Components/Buttons";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width, height } = Dimensions.get("screen");
let paymentTypeMethod = [
  {
    id: 1,
    short_form: "snpl",
    name: "split-now-pay-later",
    description:
      " method. This means that you are choosing to assign each participant a joining fee. Note that this method does not create an official reservation upon creation of the request; it only gives you the option to negotiate fees with participants before finalizing anything. You may lose your table selections to someone else who either chooses the pay-now-split-later method, or finalizes their reservation before yours.",
  },
  {
    id: 2,
    short_form: "pnsl",
    name: "pay-now-split-later",
    description:
      " method. This means that you are reserving a table and are responsible for paying the full cost of the table initially upon creation of the request.",
  },
];
//main function
const NewTableReq = ({ navigation, route }) => {
  //Store
  const clubStore = useSelector((state) => state.club);

  //table-minimum
  const [tableMinimum, setTableMinimum] = useState(0);
  const [defaultTableMinimum, setDefaultTableMinimum] = useState(0);
  const [TableConfigModal, setTableConfigModal] = useState(false);
  const [tableConfigsData, settableConfigsData] = useState([]);

  console.log("tableConfigsData::>>====>", tableConfigsData.length);
  //MODAL
  const [inviteParticipantModal, setinviteParticipantModal] = useState(false);
  const [inviteParticipantData, setinviteParticipantData] = useState("");
  const [InviteFrndsData, setInviteFrndsData] = useState([]);
  //SNPL - PNSL
  const [selectedPaymentType, setselectedPaymentType] = useState(1);
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
  // CLUB AND EVENT NAME CARD
  const ClubandEventNameCard = () => {
    return (
      <>
        <Box
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
          }}
        >
          <Text
            style={[
              typography.semBold.semBold14,
              {
                color: colors.gold.gold100,
              },
            ]}
          >
            {route?.params?.clubData?.name} :{" "}
          </Text>
          <Text
            style={[
              typography.bold.bold16,
              {
                color: colors.gold.gold100,
                textAlign: "right",
              },
            ]}
          >
            {route?.params?.selectedEventData?.name}
          </Text>
        </Box>
      </>
    );
  };
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
          title={"New Table Request"}
          icon={"back"}
          iconDirectory={"Entypo"}
          iconRightDirectory={"Entypo"}
          iconRight={""}
          onSubmit={() => {
            navigation.navigate("Hostsandpromoters", {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
            });
          }}
          onPressRight={() => {
            return null;
          }}
        />
        <Box style={{ height: "26%" }}>
          <ScrollView horizontal={true}>
            {route?.params?.clubData?.photos.map((image) => {
              return (
                <>
                  <Box>
                    <Image
                      style={{
                        width: width - 40,
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

        <Box
          style={{
            borderRadius: 30,
            borderColor: colors.gold.gold100,
            borderWidth: 1,
            padding: 18,
            height: "74%",
            // backgroundColor: "red",
          }}
        >
          <Box
            style={{
              height: "80%",
              justifyContent: "space-evenly",
              // backgroundColor: "green",
            }}
          >
            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 12,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold14,
                  {
                    color: colors.gold.gold100,

                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  },
                ]}
              >
                Organizer : {route?.params?.promoterData?.name}
              </Text>
              <Ionicons name="ios-chatbox" size={18} color={"silver"} />
            </Box>
            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 12,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold14,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                Select Custom Table Minimum :
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={setTableMinimum}
                placeholder={`${defaultTableMinimum}`}
                placeholderTextColor={colors.gold.gold100}
                selectionColor={colors.gold.gold100}
                value={tableMinimum}
                keyboardType={"numeric"}
              />
            </Box>
            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold14,
                  {
                    color: colors.gold.gold100,
                    alignSelf: "center",
                  },
                ]}
              >
                Estimated Time of Arrival :
              </Text>
              <DateTimePicker
                value={selectedDate}
                mode="time"
                display="default"
                onChange={onDateChange}
                style={{ width: 120 }} //add this
                themeVariant={"dark"}
              />
            </Box>
            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  typography.semBold.semBold14,
                  {
                    color: colors.gold.gold100,
                    justifyContent: "center", //Centered vertically
                    alignItems: "center", //Centered horizontally
                  },
                ]}
              >
                Select Table Type :
              </Text>

              <Pressable
                style={{ backgroundColor: "silver", padding: 6 }}
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
                                color: "black",
                                //   color: colors.gold.gold100,
                                justifyContent: "center", //Centered vertically
                                alignItems: "center", //Centered horizontally
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
                          color: "black",
                          justifyContent: "center", //Centered vertically
                          alignItems: "center", //Centered horizontally
                        },
                      ]}
                    >
                      NO TABLE CONFIG SELECTED
                    </Text>
                  </>
                )}
              </Pressable>
            </Box>
            <Box>
              <Box
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={[
                    typography.semBold.semBold14,
                    {
                      color: colors.gold.gold100,
                      justifyContent: "center", //Centered vertically
                      alignItems: "center", //Centered horizontally
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
                  <AntDesign name="plus" size={20} color="silver" />
                </Pressable>
              </Box>
              <Box></Box>
            </Box>
            <Box>
              <Box
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 6,
                }}
              >
                <Text
                  style={[
                    typography.semBold.semBold14,
                    {
                      color: colors.gold.gold100,
                      justifyContent: "center", //Centered vertically
                      alignItems: "center", //Centered horizontally
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
                  <AntDesign name="questioncircle" size={20} color="silver" />
                </Pressable>
              </Box>

              <Box
                style={{
                  flexDirection: "row",
                  paddingVertical: 8,
                  justifyContent: "space-between",
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

          <Box
            style={{
              height: "20%",
              // justifyContent: "flex-end",
              // backgroundColor: "yellow",
            }}
          >
            <ButtonComp
              onSubmit={() => {
                navigation.navigate("TableReqCont", {
                  clubData: route?.params?.clubData,
                  selectedEventData: route?.params?.selectedEventData,
                  promoterData: [],
                });
              }}
              text={"continue"}
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
                  console.log(
                    "onpress_return_selectedTableConfigs::item=====>",
                    item
                  );
                  settableConfigsData(item);
                }}
                showTables={false}
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

              <Text
                style={[typography.bold.bold16, { color: colors.gold.gold100 }]}
              >
                Enter Email / Phone
              </Text>
              <Box
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box style={{ paddingVertical: 12, width: "60%" }}>
                  <TextInput
                    style={styles.inputInviteParticipant}
                    onChangeText={(e) => {
                      setinviteParticipantData(e);
                    }}
                    placeholder={``}
                    placeholderTextColor={colors.gold.gold100}
                    selectionColor={colors.gold.gold100}
                    value={inviteParticipantData}
                    keyboardType={"numeric"}
                  />
                </Box>
                <Box style={{ width: "40%", alignItems: "flex-end" }}>
                  <Pressable
                    style={{ borderRadius: 20 / 2, padding: 4 }}
                    onPress={() => {
                      let tempArr = [...InviteFrndsData, inviteParticipantData];
                      setInviteFrndsData(tempArr);
                      setinviteParticipantData('')
                    }}
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
              </Box>
              <Box>
                <Box>
                  <Text
                    style={[
                      typography.bold.bold16,
                      { color: colors.gold.gold100, paddingVertical: 10 },
                    ]}
                  >
                    Participants:
                  </Text>
                  <Text
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
                    fee to 0{" "}
                  </Text>
                </Box>
                <Box style={{ paddingVertical: 14, }}>
                  <ScrollView style={{ paddingBottom: 420 }}>
                    {InviteFrndsData &&
                      InviteFrndsData.map((item) => {
                        return (
                          <>
                            <Box
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                backgroundColor: colors.gold.gold100,
                                padding: 8,
                                borderRadius: 12,
                                marginVertical: 2,
                              }}
                            >
                              <Box>
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
                                  {item}
                                </Text>
                              </Box>
                              <Box></Box>
                            </Box>
                          </>
                        );
                      })}
                  </ScrollView>
                </Box>
              </Box>
            </Box>
          </>
        }
        onClosepress={() => {
          setinviteParticipantModal(!inviteParticipantModal);
        }}
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
    height: "100%",
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
    width: "20%",
    textAlign: "center",
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
    // width: "20%",
    // textAlign: "center",
  },
});
