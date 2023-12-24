import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Dimensions, SafeAreaView, FlatList, Pressable, Image, Alert, View } from 'react-native';
// component
import { useDispatch, useSelector } from 'react-redux';
import { HeaderWithLeftIcon } from '../../components/Header';
// REDUX
// THEME
import { colors, typography } from '../../theme';
import { getEventOfClub } from '../../store/action/clubs';
// DIMENSIONS
const { width, height } = Dimensions.get('screen');

// import { getDistanceFromLatLonInMi } from "./algo";
// import DashboardBubbleComp from "../components/EntryDashboardScreen/DashboardBubbleComp";
// import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";

const Dashboard = ({ navigation }) => {
  // SELECTORS
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

  const ClubCards = ({ props }) => (
    <Pressable
      style={{
        backgroundColor: colors.gold.gold100,
        flexDirection: 'row',
        margin: 6,
        borderRadius: 4,
        padding: 14,
        height: 70,
        width: 400,
        alignItems: 'center' // Vertically center align the content
      }}
      onPress={() => {
        dispatch(getEventOfClub(props._id));
        navigation.navigate('Club', {
          clubData: props
        });
      }}>
      {/* Left Side: Club Name */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={typography.bold.bold14}>{props?.name}</Text>
      </View>

      {/* Right Side: Image */}
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <View
          style={{
            height: 54, // 50 (image height) + 2 (border width) * 2
            width: 54, // 50 (image width) + 2 (border width) * 2
            borderRadius: 27, // 54 / 2
            borderWidth: 4,
            borderColor: colors.gold.gold200,
            overflow: 'hidden'
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 5 // Circle shape
            }}
            source={{ uri: props?.photos[0] }}
          />
        </View>
      </View>
    </Pressable>
  );

  const logoutBtn = () =>
    Alert.alert('Logout', 'Are you sure want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Login');
        }
      }
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='NightTable'
        icon='menu'
        iconDirectory='Entypo'
        iconRightDirectory='Entypo'
        iconRight='log-out'
        onSubmit={() => {
          navigation.openDrawer();
        }}
        onPressRight={() => {
          logoutBtn();
        }}
      />
      <View style={styles.mainBox}>
        <Text style={[typography.bold.bold16, styles.textHeading]}>
          Welcome back, here's a list of clubs near your city
        </Text>

        <View style={{ alignItems: 'center', paddingTop: 20 /* borderColor: 'white', borderWidth: 5, */ }}>
          <FlatList
            style={{
              borderColor: colors.gold.gold200,
              borderWidth: 5,
              width: 420,
              borderRadius: 10
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator
            contentContainerStyle={{
              indicatorStyle: colors.gold.gold100, // change this to the color you desire; works only on iOS
              width: 5
            }}
            data={clubStore?.allClubs}
            renderItem={({ item }) => <ClubCards props={item} />}
            keyExtractor={(item) => item._id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1
  },
  clubListContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 400 * height
  },
  input: {
    height: 40 * height,
    margin: 12 * height,
    borderWidth: 1 * width,
    padding: 10 * height,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  textHeading: {
    color: colors.gold.gold200,
    paddingTop: 20
  }
});

export default Dashboard;
