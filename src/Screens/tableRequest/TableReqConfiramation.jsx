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
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "../../Components/Buttons";
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
const TableReqConfiramation = ({ navigation, route }) => {
  //Store
  const clubStore = useSelector((state) => state.club);
  

 
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

console.log('====================================');
console.log('route=====>',route?.params);
console.log('===================================='); 

  return (
    <>
      <View
        style={{
          paddingTop: 40,
          backgroundColor: colors.black.black800,
          height: "100%",
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
            
           
            
            <Box>
              <Box
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
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
              justifyContent: "flex-end",
            }}
          >
            {/* <Button
            //   onSubmit={() => {
            //     navigation.navigate("TableReqCont", {
            //       clubData: route?.params?.clubData,
            //       selectedEventData: route?.params?.selectedEventData,
            //       promoterData: data,
            //     });
            //   }}
              loader={false}
              text={"continue"}
              backgroundColor={colors.gold.gold100}
            /> */}
          </Box>
        </Box>
      </View>

      
     
    </>
  );
};

export default TableReqConfiramation;

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
