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
import { Button } from "../../components/Buttons";
//DIMENSIONS
const { width, height } = Dimensions.get("screen");

const InfluencerAppl = ({ navigation }) => {
  const [profileData, setprofileData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phoneNumber: "",
  });
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderWithLeftIcon
          title={"Club Promoter Application"}
          icon={"menu"}
          iconDirectory={"Entypo"}
          iconRightDirectory={"Entypo"}
          iconRight={""}
          onSubmit={() => {
            navigation.openDrawer();
          }}
          onPressRight={() => {}}
        />

        <Box style={[styles.mainBox]}>
          <Text style={[styles.heading]}>
            Want to become a club Influencer ? Please fill out this form and your
            Application will be sent to the club for review.
          </Text>

          <Box style={{ paddingBottom: 30 }}>
            <Box style={styles.inputBox}>
              <Text style={[styles.heading, typography.bold.bold16]}>
                First Name
              </Text>
              <TextInput
                autoFocus={true}
                style={[typography.regular.regular16, styles.input]}
                onChangeText={(text) => {
                  setprofileData((previousState) => ({
                    ...previousState,
                    Fname: text,
                  }));
                }}
                value={profileData.Fname}
                placeholder="Phone Number"
                placeholderTextColor={colors.grey.grey800}
                keyboardType="numeric"
              />
            </Box>
            <Box style={styles.inputBox}>
              <Text style={[styles.heading, typography.bold.bold16]}>
                Last Name
              </Text>
              <TextInput
                autoFocus={true}
                style={[typography.regular.regular16, styles.input]}
                onChangeText={(text) => {
                  setprofileData((previousState) => ({
                    ...previousState,
                    Lname: text,
                  }));
                }}
                value={profileData.Lname}
                placeholder="Phone Number"
                placeholderTextColor={colors.grey.grey800}
                keyboardType="numeric"
              />
            </Box>
            <Box style={styles.inputBox}>
              <Text style={[styles.heading, typography.bold.bold16]}>
                Email
              </Text>
              <TextInput
                autoFocus={true}
                style={[typography.regular.regular16, styles.input]}
                onChangeText={(text) => {
                  setprofileData((previousState) => ({
                    ...previousState,
                    email: text,
                  }));
                }}
                value={profileData.email}
                placeholder="Phone Number"
                placeholderTextColor={colors.grey.grey800}
                keyboardType="numeric"
              />
            </Box>
            <Box style={styles.inputBox}>
              <Text style={[styles.heading, typography.bold.bold16]}>
                Phone Number
              </Text>
              <TextInput
                autoFocus={true}
                style={[typography.regular.regular16, styles.input]}
                onChangeText={(text) => {
                  setprofileData((previousState) => ({
                    ...previousState,
                    phoneNumber: text,
                  }));
                }}
                value={profileData.phoneNumber}
                placeholder="Phone Number"
                placeholderTextColor={colors.grey.grey800}
                keyboardType="numeric"
              />
            </Box>
          </Box>
          <Button
            disabled={false}
            onSubmit={() => {
              if (
                profileData.Fname.trim() != "" &&
                profileData.Lnamename.trim() != "" &&
                profileData.email.trim() != "" &&
                profileData.phoneNumber.trim() != ""
              ) {
              } else {
                Alert.alert("All the details are mandatory!");
              }
            }}
            backgroundColor={colors.gold.gold100}
            text={"Submit"}
          />
        </Box>
      </SafeAreaView>
    </>
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
  textHeading: {
    color: colors.gold.gold100,
    paddingTop: 20,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 6,
    backgroundColor: colors.black.black900,
    borderColor: colors.gold.gold100,
    borderRadius: 6,
    color: colors.gold.gold100,
    fontSize: 16,
  },
  inputBox: {
    paddingVertical: 10,
  },
  heading: {
    color: colors.gold.gold100,
    paddingVertical: 8,
  },
});

export default InfluencerAppl;
