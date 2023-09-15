import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { colors, typography } from "../../Theme";
import { Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Box } from "native-base";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HeaderWithLeftIcon } from "../../Components/Header";
import { Button } from "../../Components/Buttons";
const { width, height } = Dimensions.get("screen");

//MAIN FUNCTION
const Club = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const clubStore = useSelector((state) => state.club);

  const checkClubEvent = () => {
    if (clubStore?.individualClubEvents?.length != undefined) {
      if (clubStore?.individualClubEvents?.length > 0) {
        const filteredData = clubStore?.individualClubEvents?.filter((item) => {
          return item?.isTableConfigAdded != false && item;
        });
        if (filteredData?.length > 0) {
          return "Check for Upcoming Events";
        } else {
          return "No Upcoming Events found";
        }
      } else {
        return "No Upcoming Events found";
      }
    } else {
      return "No Upcoming Events found";
    }
  };
  const ClubDetails = () => {
    return (
      <>
        <Box
          style={{
            width: "100%",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            Address : {"     "}
          </Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>
            {route?.params?.clubData?.Address?.Address}
          </Text>
        </Box>
        <Box
          style={{
            width: "100%",
            // justifyContent: "center",

            padding: 10,
            flexDirection: "row",
          }}
        >
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            Website : {"     "}
          </Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>
            {route?.params?.clubData?.website}
          </Text>
        </Box>
        <Box
          style={{
            width: "100%",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            Instagram : {"     "}
          </Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>
            {route?.params?.clubData?.instaHandle}
          </Text>
        </Box>

        <Box
          style={{
            width: "100%",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            Phone Number : {"     "}
          </Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>
            {route?.params?.clubData?.phoneNumber}
          </Text>
        </Box>
      </>
    );
  };
  return (
    <Box key={()=>{
      return String('Club_screen')
    }} safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title={route?.params?.clubData?.name}
        icon={"arrowleft"}
        iconDirectory={"AntDesign"}
        onSubmit={() => {
          navigation.navigate("Home");
        }}
      />

      <ScrollView 
        horizontal={true} 
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={{ 
          borderWidth: 1,  // Set the border width
          borderColor: colors.gold.gold100,  // Set the border color
          borderRadius: 5  // Optional, set the border radius if you want rounded corners
        }}
      >
        {route?.params?.clubData?.photos.map((image, index) => {
          return (
            <Box style={{ 
                width: Dimensions.get('window').width,  // Set width to screen width
                justifyContent: 'center', // Center vertically
                alignItems: 'center'  // Center horizontally
              }}>
              <Image
                style={{ 
                  width: Dimensions.get('window').width, 
                  height: Dimensions.get('window').width,
                }}
                source={{
                  uri: image,
                }}
              />
            </Box>
          );
        })}
      </ScrollView>
      <Box style={[styles.mainBox]}>
        <ClubDetails />
        <Box style={{ width: "100%", alignSelf: "center", margin: 20 }}>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              {
                backgroundColor: checkClubEvent() === "Check for Upcoming Events"
                  ? colors.gold.gold200
                  : colors.grey.grey300,
                borderColor: checkClubEvent() === "Check for Upcoming Events"
                  ? colors.gold.gold100
                  : colors.grey.grey400,
                borderWidth: 2
              }
            ]}
            onPress={() => {
              // validation();
              if (clubStore?.individualClubEvents?.length > 0) {
                navigation.navigate("UpcomingEvents", {
                  clubData: route?.params?.clubData,
                });
              }
            }}
          >
            <Text style={[typography.bold.bold16]}>{checkClubEvent()}</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
  },
  mainBox: {
    paddingHorizontal: 18,
  },

  goldColor: {
    color: colors.gold.gold100,
  },
  buttonStyle: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
});

export default Club;
