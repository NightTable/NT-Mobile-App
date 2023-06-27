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
  Alert,
  FlatList,
  Pressable,
} from "react-native";

// import { getDistanceFromLatLonInMi } from "./algo";

// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
import axios from "axios";

// import curvedWhiteLinePic from "../assets/whitecurvesmall.png";
// import reignPic from "../assets/reignpic.png";

import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../Components/Header";

const Dashboard = (props) => {
  const [userName, setUserName] = useState("Amiya");
  const [city, setCity] = useState("");
  const [clubList, setClubList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const handleChangeText = (inputText) => {
    setCity(inputText);
  };
  useEffect(() => {
    //need to integrate location from connect -- geolocation service
    let getNearByClubs = async () => {
      // let clubs = await axios.get(`${LOCAL_URL}api/clubs/coordinates/:lat/:long`);
      let clubs = await axios.get(
        `${LOCAL_URL}api/clubs/coordinates/38.494/-74.443`
      );

      // if (clubs.length) {
      setClubList(clubs.data.data);
      setIsDataLoaded(true);
      // console.log("clubs api response", clubs.data.data);

      // console.log(clubs.data.data);
      // } else {
      // Alert.alert("No Club Found within 50Kms.");
      // }
    };

    getNearByClubs();
  }, []);

  const ClubCards = (props) => {
    console.log("props+++>>>>>", props.props.name, props.props.distance);

    return (
      <Pressable
        style={{
          backgroundColor: colors.gold.gold200,
          width: "90%",
          flexDirection: "row",
          margin: 6,
          borderRadius: 4,
          padding: 4,
          // justifyContent: "space-evenly",
          paddingHorizontal: 8,
        }}
        onPress={()=>{
          alert(`${props.props.name} pressed.`)
        }}
      >
        <View style={{ width: "50%" }}>
          <Text>{props.props.name}</Text>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Text>
            {Math.round(props.props.distance.calculated * 0.00062137119)}.0 mi
          </Text>
        </View>
      </Pressable>
    );
  };

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

      <View style={{ alignItems: "center", width: "100%" }}>
        {/* {console.log("clubs around me", clubList, isDataLoaded)} */}
        {/* {isDataLoaded ? ( */}
        <FlatList
          data={clubList}
          renderItem={({ item }) => {
            console.log("item======>>>>>>>>", item);
            return <ClubCards props={item} />;
          }}
          keyExtractor={(item) => item._id.toString()}
        />
        {/* ) : (
          <Text>No Clubs Found</Text>
        )}  */}
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
