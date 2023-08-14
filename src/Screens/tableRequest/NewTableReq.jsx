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
} from "react-native";
import { Image } from "expo-image";
//component
import { HeaderWithLeftIcon } from "../../components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { colors, typography } from "../../theme";
import { ScrollView } from "react-native";
import CostSplittingSectionComp from "../../features/costSplitting";
const { width, height } = Dimensions.get("screen");

//main function
const NewTableReq = ({ navigation, route }) => {
  //table-minimum
  const [tableMinimum, setTableMinimum] = useState(0);
  const [defaultTableMinimum, setDefaultTableMinimum] = useState(0);

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
              typography.bold.bold16,
              {
                color: colors.gold.gold100,
              },
            ]}
          >
            {route?.params?.clubData?.name} :{" "}
          </Text>
          <Text
            style={[
              typography.semBold.semBold14,
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
      <SafeAreaView style={styles.container}>
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
            returnnull;
          }}
        />
        <Box style={[styles.mainBox]}>
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
            height: "70%",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderColor: colors.gold.gold100,
            borderWidth: 1,
            borderBottomColor: colors.black.black500,
            padding: 18,
          }}
        >
          <ScrollView>
            <Text
              style={[
                typography.semBold.semBold14,
                {
                  color: colors.gold.gold100,
                  paddingVertical: 12,
                },
              ]}
            >
              Organizer : {route?.params?.promoterData?.name}
            </Text>
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
                Select Request Type :
              </Text>
              <Box style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    typography.bold.bold16,
                    {
                      color: colors.gold.gold100,
                      margin: 12,
                      borderRadius: 6,
                      borderWidth: 0.6,
                    },
                  ]}
                >
                  SNPL
                </Text>
                <Text
                  style={[
                    typography.bold.bold16,
                    {
                      color: colors.gold.gold100,
                      margin: 12,
                      borderRadius: 6,
                      borderWidth: 0.6,
                    },
                  ]}
                >
                  PSNL
                </Text>
              </Box>
            </Box>

            <CostSplittingSectionComp />
          </ScrollView>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default NewTableReq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
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
