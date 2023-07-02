import React, { useEffect, useState } from "react";

import { colors } from "../../Theme/colors";
// import { Fonts } from "../fonts/Fonts";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";

// import { getDistanceFromLatLonInMi } from "./algo";

// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
import axios from "axios";

// import curvedWhiteLinePic from "../assets/whitecurvesmall.png";
// import reignPic from "../assets/reignpic.png";

import { API_URL_IOS, API_URL_ANDROID } from "@env";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../Components/Header";

const Dashboard = (props) => {
  const [userName, setUserName] = useState("Amiya");
  const [city, setCity] = useState("");
  const [clubList, setClubList] = useState([]);
  const handleChangeText = (inputText) => {
    setCity(inputText);
  };
  //   useEffect(() => {
  //     axios
  //       .get(
  //         `${
  //           Platform.OS === "android" ? API_URL_ANDROID : API_URL_IOS
  //         }api/clubs/coordinates/42.35313/-71.047218`
  //       )
  //       .then((res) => {
  //         let firstResponse = res.data;

  //         firstResponse = firstResponse.map((result) => {
  //           return {
  //             ...result,
  //             picture: reignPic,
  //           };
  //         });

  //         setClubList(firstResponse);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  //   const handleBubblePress = () => {
  //     props.navigation.navigate("edNav-ClubMiniDetailScreen");
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <HeaderWithLeftIcon
          title={"NightTable"}
          icon={"menu"}
          iconDirectory={"Entypo"}
          onSubmit={() => {
            //   navigation.navigate("Dashboard");
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          paddingLeft: 20,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          Welcome back, {userName}
        </Text>
      </View>
      <View
        style={{
          height: "20%",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          Enter City :{"  "}
        </Text>
        <TextInput
          value={city}
          onChangeText={handleChangeText}
          placeholder="                 "
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gold.gold200,
          }}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
    // position: "relative",
  },
  clubListContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 400 * height,
  },
  input: {
    height: 40 * height,
    margin: 12 * height,
    borderWidth: 1 * width,
    padding: 10 * height,
    // borderBottomColor: Colors.gold,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    // placeholderTextColor: Colors.gold,
    // selectionColor: Colors.gold,
    // color: Colors.gold,
    // fontFamily: Fonts.mainFontReg,
  },
});

export default Dashboard;
