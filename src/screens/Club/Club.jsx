import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { colors, typography } from "../../theme";
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Box } from "native-base";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HeaderWithLeftIcon } from "../../components/Header";
import { Button } from "../../components/Buttons";
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
          <Text style={[typography.regular.regular14, styles.goldColor]}>
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
          <Text style={[typography.regular.regular14, styles.goldColor]}>
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
          <Text style={[typography.regular.regular14, styles.goldColor]}>
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
          <Text style={[typography.regular.regular14, styles.goldColor]}>
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

      <ScrollView horizontal={true}>
        {route?.params?.clubData?.photos.map((image) => {
          return (
            <>
              <Box>
                <Image
                  style={{ width: 300, height: 300 }}
                  source={{
                    uri: image,
                  }}
                />
              </Box>
            </>
          );
        })}
      </ScrollView>
      <Box style={[styles.mainBox]}>
        <ClubDetails />
        <Box style={{ width: "100%", alignSelf: "center", margin: 20 }}>
          <Button
            onSubmit={() => {
              // validation();
              if (clubStore?.individualClubEvents?.length > 0) {
                navigation.navigate("UpcomingEvents", {
                  clubData: route?.params?.clubData,
                });
              }
            }}
            backgroundColor={
              checkClubEvent() === "Check for Upcoming Events"
                ? colors.gold.gold200
                : colors.grey.grey300
            }
            text={checkClubEvent()}
          />
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
    color: colors.gold.gold200,
  },
});

export default Club;
