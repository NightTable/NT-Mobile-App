// Imported Libraries

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
// libraries
import { Box } from 'native-base';
// REDUX
import { useSelector } from 'react-redux';
// components
import { Button } from '../../components/Buttons';
// Utils
// Theme
import { typography, colors } from '../../theme';
import { HeaderWithLeftIcon } from '../../components/Header';
import { getProfileData, updateProfileData } from '../../services/user';

// Main Function

const Profile = ({ route, navigation }) => {
  // REDUX

  const loginStore = useSelector((state) => state.login.otpNumberData);
  // console.log("loginStore====>", loginStore.data.phoneNumber);

  const [profileData, setprofileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    instaHandle: '',
    facebookEmail: ''
    // data: {},
  });

  const [profileAllData, setprofileAllData] = useState({});

  useEffect(() => {
    async function loadData() {
      if (loginStore?.data?.phoneNumber != undefined) {
        // disableLoader()
        getUserProfileData(loginStore.data.phoneNumber);
      }
    }
    loadData();

    return () => {
      //  second
    };
  }, [navigation]);

  const getUserProfileData = async (phoneNumber) => {
    try {
      const obj = {
        phoneNumber
      };
      const response = await getProfileData(obj);

      setprofileData({
        firstName: `${response.data?.data?.firstName}`,
        email: response.data?.data?.email,
        phoneNumber: `${loginStore.data.phoneNumber} `,
        instaHandle: `${response.data?.data?.instaHandle} `,
        facebookEmail: `${response.data?.data?.firstName} `,
        lastName: `${response.data?.data?.lastName} `
      });
      setprofileAllData(response.data?.data);
    } catch (error) {
      return error;
    }
  };

  const updateUserProfileData = async (text) => {
    // enableLoader();
    delete profileAllData?.firstName;
    delete profileAllData?.lastName;
    delete profileAllData?.email;
    delete profileAllData?.instaHandle;
    delete profileAllData?._id;
    delete profileAllData?.__v;
    delete profileAllData?.isDeleted;
    delete profileAllData?.createdAt;
    delete profileAllData?.updatedAt;
    try {
      const obj = {
        ...profileAllData,
        ...profileData
      };

      const response = await updateProfileData(obj);
      alert('profile updated successfully!');
    } catch (error) {
      return error;
    }
  };

  return (
    <Box safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title='Profile'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />
      <Box style={[styles.mainBox]}>
        <Box style={styles.inputBox}>
          <Text style={[styles.heading, typography.bold.bold16]}>First Name</Text>
          <TextInput
            autoFocus
            style={[typography.regular.regular16, styles.input]}
            onChangeText={(text) => {
              setprofileData((previousState) => ({
                ...previousState,
                firstName: text
              }));
            }}
            value={profileData.firstName}
            placeholder='First Name'
            placeholderTextColor={colors.grey.grey800}
            keyboardType='numeric'
          />
        </Box>
        <Box style={styles.inputBox}>
          <Text style={[styles.heading, typography.bold.bold16]}>Last Name</Text>
          <TextInput
            autoFocus
            style={[typography.regular.regular16, styles.input]}
            onChangeText={(text) => {
              setprofileData((previousState) => ({
                ...previousState,
                lastName: text
              }));
            }}
            value={profileData.lastName}
            placeholder='Last Name '
            placeholderTextColor={colors.grey.grey800}
            keyboardType='numeric'
          />
        </Box>
        <Box style={styles.inputBox}>
          <Text style={[styles.heading, typography.bold.bold16]}>Email</Text>
          <TextInput
            style={[typography.regular.regular16, styles.input]}
            onChangeText={(text) => {
              setprofileData((previousState) => ({
                ...previousState,
                email: text
              }));
            }}
            value={profileData.email}
            placeholder='Email Id'
            placeholderTextColor={colors.grey.grey800}
            keyboardType='numeric'
          />
        </Box>
        <Box style={styles.inputBox}>
          <Text style={[styles.heading, typography.bold.bold16]}>Instagram Id</Text>
          <TextInput
            autoFocus
            style={[typography.regular.regular16, styles.input]}
            onChangeText={(text) => {
              setprofileData((previousState) => ({
                ...previousState,
                instaHandle: text
              }));
            }}
            value={profileData.instaHandle}
            placeholder='Instagram Id'
            placeholderTextColor={colors.grey.grey800}
            keyboardType='numeric'
          />
        </Box>
        <Box
          style={{
            paddingTop: 60
          }}>
          <Button
            onSubmit={() => {
              //  submit();
              updateUserProfileData();
            }}
            //  disabled={otp.length === 6 ? false : true}
            backgroundColor={colors.gold.gold200}
            text='Update Profile '
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
    flex: 1
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 6,
    backgroundColor: colors.black.black900,
    borderColor: colors.gold.gold200,
    borderRadius: 6,
    color: colors.gold.gold200,
    fontSize: 22
  },
  inputBox: {
    paddingVertical: 10
  },
  heading: {
    color: colors.gold.gold200,
    paddingVertical: 8
  }
});

export default Profile;
