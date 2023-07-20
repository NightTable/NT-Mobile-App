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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { getDistanceFromLatLonInMi } from "./algo";

// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
// import axios from "axios";

// import curvedWhiteLinePic from "../assets/whitecurvesmall.png";
// import reignPic from "../assets/reignpic.png";

// import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";
//THEME
import { colors, typography } from "../../theme";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../components/Header";

const Dashboard = (props) => {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [clubList, setClubList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [index, setIndex] = useState(null);
  const navigation = useNavigation();
  const handleChangeText = (inputText) => {
    setCity(inputText);
  };
  useEffect(() => {
    //need to integrate location from connect -- geolocation service
    let getNearByClubs = async () => {
      // let clubs = await axios.get(`${LOCAL_URL}api/clubs/coordinates/:lat/:long`);
      // let clubs = await axios.get(
      //   `${LOCAL_URL}api/clubs/coordinates/38.494/-74.443`
      // );

      // // if (clubs.length) {
      // setClubList(clubs.data.data);
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
    // console.log("props+++>>>>>", props.props.name, props.props.distance);

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
        onPress={() => {
          // console.log("++++_____======",props)
          // alert(`${props.props.name} pressed.`);
          navigation.navigate("Club", {
            clubData: props.props,
          });
        }}
      >
        <Box style={{ width: "50%" }}>
          <Text>{props.props.name}</Text>
        </Box>
        <Box style={{ width: "50%", alignItems: "flex-end" }}>
          <Text>
            {Math.round(props.props.distance.calculated * 0.00062137119)}.0 mi
          </Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title={"NightTable"}
        icon={"menu"}
        iconDirectory={"Entypo"}
        onSubmit={() => {
          navigation.openDrawer();
        }}
      />
      <Box
        style={{
          backgroundColor: "green",

          paddingHorizontal: 18,
          flex: 1,
        }}
      >
        <Text
          style={[
            typography.bold.bold16,
            {
              color: colors.gold.gold200,
              paddingTop: 20,
            },
          ]}
        >
          Welcome back, {userName}
        </Text>
      </Box>
      <Box
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
            color: colors.gold.gold200,
          }}
        ></TextInput>
      </Box>

      <Box style={{ alignItems: "center", width: "100%" }}>
        <FlatList
          data={clubList}
          renderItem={({ item }) => {
            return <ClubCards props={item} />;
          }}
          keyExtractor={(item) => item._id.toString()}
        />
        {/* ) : (
          <Text>No Clubs Found</Text>
        )}  */}
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
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
