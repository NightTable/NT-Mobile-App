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
import { useNavigation, useRoute } from "@react-navigation/native";

// import { getDistanceFromLatLonInMi } from "./algo";

// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
import axios from "axios";

// import curvedWhiteLinePic from "../assets/whitecurvesmall.png";
// import reignPic from "../assets/reignpic.png";

import { API_URL_IOS, API_URL_ANDROID } from "@env";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../Components/Header";
import { Button } from "../../Components/Buttons";

const Club = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log("route====>>>>>", route.params);
  const [clubPhotosArray, setClubPhotosArray] = useState([
    "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <HeaderWithLeftIcon
          title={route?.params?.clubData?.name}
          icon={"arrowleft"}
          iconDirectory={"AntDesign"}
          onSubmit={() => {
            navigation.navigate("Dashboard");
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          paddingLeft: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {route?.params?.clubData?.name}
        </Text>
      </View>
      <View
        style={{
          height: "40%",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          // margin: 20,
          // backgroundColor: "red",
          // flexDirection: "row",
        }}
      >
        {clubPhotosArray.map((ele) => {
          return (
            <View
              style={{
                // backgroundColor: "green",
                height: "50%",
                width: "70%",
                // justifyContent: "center",
                alignItems: "center",
              }}
              
            >
              <Image
                style={{ width: "70%", height: "60%" }}
                // source={{ uri: encodeURIComponent(route?.params?.clubData?.photos[0]) }}
                source={{
                  uri: ele,
                }}
              />
            </View>
          );
        })}
      </View>
      <View
        style={{
          width: "100%",
          // justifyContent: "center",
          paddingLeft: 20,
          padding: 10,
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
          Address : {"     "}
        </Text>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {route?.params?.clubData?.Address?.Address}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          // justifyContent: "center",
          paddingLeft: 20,
          padding: 10,
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
          Website : {"     "}
        </Text>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {route?.params?.clubData?.website}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          // justifyContent: "center",
          paddingLeft: 20,
          padding: 10,
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
          Instagram : {"     "}
        </Text>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {route?.params?.clubData?.instaHandle}
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          // justifyContent: "center",
          paddingLeft: 20,
          padding: 10,
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
          Phone Number : {"     "}
        </Text>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {route?.params?.clubData?.phoneNumber}
        </Text>
      </View>

      <View style={{ width: "70%", alignSelf: "center", margin: 20 }}>
        <Button
          onSubmit={() => {
            // validation();
            navigation.navigate("ClubEvents", {
              clubId: route?.params?.clubData?._id,
              clubName: route?.params?.clubData?.name,
              // // clubPhotos: route?.params?.clubData?.photos[0]
              clubPhotos: clubPhotosArray[0],
              clubData: route?.params?.clubData
            });
          }}
          backgroundColor={colors.gold.gold200}
          text={"Select Club"}
        />
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

export default Club;
