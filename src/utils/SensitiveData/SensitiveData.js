// import SInfo from "react-native-sensitive-info";
import AsyncStorage from '@react-native-async-storage/async-storage';
// for Storing Data
export const StoretoLocalData = async (key, value) => new Promise(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);
      const data = await AsyncStorage.setItem(key, jsonValue);
      // console.log("==========Data Saved==========================", data);
      resolve('Data Saved');
    } catch (e) {
      console.log('', e);
    }
  });

// Retrive Data
export const GetLocalPhoneData = (key) => {
  // try {
  //   return new Promise(async (resolve, reject) => {
  //     const gettingFirstData = await SInfo.getItem(key, {
  //       sharedPreferencesName: "NTMobile",
  //       keychainService: "NTMobile",
  //     }).then((value) => {
  //       resolve(value);
  //     });
  //   });
  // } catch (error) {
  //   return error;
  // }
};

