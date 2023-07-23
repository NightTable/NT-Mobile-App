import React, { useEffect, useState } from "react";

import { colors, typography } from "../../theme";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  
} from "react-native";
import { Box } from "native-base";
// import FastImage from "react-native-fast-image";

// import { getDistanceFromLatLonInMi } from "./algo";
// import { API_URL_IOS, API_URL_ANDROID } from "@env";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../components/Header";
import { Button } from "../../components/Buttons";

const Club = ({ route, navigation }) => {
  const [club_data, setclub_data] = useState(route?.params?.clubData);

  const [clubPhotosArray, setClubPhotosArray] = useState([
    "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ]);

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
            {club_data?.Address?.Address}
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
            {club_data?.website}
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
            {club_data?.instaHandle}
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
            {club_data?.phoneNumber}
          </Text>
        </Box>
      </>
    );
  };
  return (
    <Box safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title={club_data?.name}
        icon={"arrowleft"}
        iconDirectory={"AntDesign"}
        onSubmit={() => {
          navigation.navigate("Home");
        }}
      />

      <Box style={[styles.mainBox]}>
        {club_data?.photos.map((ele) => {
          console.log("ele======>", ele);
          return (
            <>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: "row",
                  backgroundColor: "red",
                }}
              >
                <Box>
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                      uri: ele,
                      // priority: FastImage.priority.high,
                    }}
                  />
                </Box>
              </ScrollView>
            </>
          );
        })}

        <ClubDetails />
        <Box style={{ width: "100%", alignSelf: "center", margin: 20 }}>
          <Button
            onSubmit={() => {
              // validation();
              navigation.navigate("ClubEvents", {
                clubId: route?.params?.clubData?._id,
                clubName: route?.params?.clubData?.name,
                // // clubPhotos: route?.params?.clubData?.photos[0]
                clubPhotos: clubPhotosArray[0],
                clubData: route?.params?.clubData,
              });
            }}
            backgroundColor={colors.gold.gold200}
            text={"Check for Club Event "}
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
    // borderBottomColor: Colors.gold,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    // placeholderTextColor: Colors.gold,
    // selectionColor: Colors.gold,
    // color: Colors.gold,
    // fontFamily: Fonts.mainFontReg,
  },
  goldColor: {
    color: colors.gold.gold200,
  },
});

export default Club;
