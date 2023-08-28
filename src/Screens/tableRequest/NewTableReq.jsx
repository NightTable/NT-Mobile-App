import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
  Alert,
  Button,
  View,
} from "react-native";
import { Image } from "expo-image";
//component
import { HeaderWithLeftIcon } from "../../components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { colors, typography } from "../../theme";
import { ScrollView } from "react-native";
import CostSplittingSectionComp from "../../features/costSplitting";
import { TableConfigurationsCard } from "../../features/tableConfig/TableConfig";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DyModal from "../../components/Modal";
import { Button as ButtonComp } from "../../components/Buttons";
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

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
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
          }}
        >
          <Box
            style={{
              height: "70%",
              justifyContent: "space-evenly",
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
          </Box>

          <Box
            style={{
              height: "20%",
              justifyContent: "flex-end",
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
});
