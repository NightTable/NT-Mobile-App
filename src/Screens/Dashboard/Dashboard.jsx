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
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//component
import { HeaderWithLeftIcon } from "../../components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//THEME
import { colors, typography } from "../../theme";
import { getEventOfClub } from "../../store/action/clubs";
//DIMENSIONS
const { width, height } = Dimensions.get("screen");

// import { getDistanceFromLatLonInMi } from "./algo";
// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
// import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";

const Dashboard = ({ navigation }) => {
  //SELECTORS
  const dispatch = useDispatch();

  const clubStore = useSelector((state) => state.club);

  // console.log("clubStore====>", clubStore);

  // const [userName, setUserName] = useState("");
  // const [city, setCity] = useState("");
  // const [clubList, setClubList] = useState([]);
  // const [index, setIndex] = useState(null);
  // const navigation = useNavigation();
  // const handleChangeText = (inputText) => {
  //   setCity(inputText);
  // };
  // useEffect(() => {
  //   //need to integrate location from connect -- geolocation service
  //   let getNearByClubs = async () => {
  //     // let clubs = await axios.get(`${LOCAL_URL}api/clubs/coordinates/:lat/:long`);
  //     // let clubs = await axios.get(
  //     //   `${LOCAL_URL}api/clubs/coordinates/38.494/-74.443`
  //     // );

  //     // // if (clubs.length) {
  //     // setClubList(clubs.data.data);
  //     setIsDataLoaded(true);
  //     // console.log("clubs api response", clubs.data.data);

  //     // console.log(clubs.data.data);
  //     // } else {
  //     // Alert.alert("No Club Found within 50Kms.");
  //     // }
  //   };

  //   getNearByClubs();
  // }, []);

  const ClubCards = ({ props }) => {
    return (
      <>
        <Pressable
          style={{
            backgroundColor: colors.gold.gold200,
            flexDirection: "row",
            margin: 6,
            borderRadius: 4,
            padding: 14,
          }}
          onPress={() => {
            // console.log("props======>", props._id);
            dispatch(getEventOfClub(props._id));
            navigation.navigate("Club", {
              clubData: props,
            });
          }}
        >
          <Box style={{ width: "50%" }}>
            <Text>{props?.name}</Text>
          </Box>
          <Box style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              style={{ height: 20, width: 50 }}
              source={{ uri: props?.photos[0] }}
            />
            {/* <Text>
            {Math.round(props.props.distance.calculated * 0.00062137119)}.0 mi
          </Text> */}
          </Box>
        </Pressable>
      </>
    );
  };

  const logoutBtn = () =>
    Alert.alert("Logout", "Are you sure want to logout ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("Login");
        },
      },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title={"NightTable"}
        icon={"menu"}
        iconDirectory={"Entypo"}
        iconRightDirectory={"Entypo"}
        iconRight={"log-out"}
        onSubmit={() => {
          navigation.openDrawer();
        }}
        onPressRight={() => {
          logoutBtn();
        }}
      />
      <Box style={styles.mainBox}>
        <Text style={[typography.bold.bold16, styles.textHeading]}>
          Welcome back,
        </Text>

        <Box style={{ alignItems: "center", paddingTop: 20 }}>
          <FlatList
            data={clubStore?.allClubs}
            renderItem={({ item }) => {
              return <ClubCards props={item} />;
            }}
            keyExtractor={(item) => item._id.toString()}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1,
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
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  textHeading: {
    color: colors.gold.gold200,
    paddingTop: 20,
  },
});

export default Dashboard;
{
  /*<Box
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
          }}
        > <Text
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
          /> </Box>*/
}
