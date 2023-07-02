import SInfo from "react-native-sensitive-info";

//for Storing Data
export const StoretoLocalData = async (key, value) => {
  console.log("storing in local storage")
  return SInfo.setItem('key', 'value', {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain'
  });
};

//Retrive Data
export const GetLocalPhoneData = async (key) => {
  try {
    const gettingFirstData = await SInfo.getItem(key, {
      sharedPreferencesName: "nightableapp",
      keychainService: "nightableapp",
    });
    console.log("data from local storage", gettingFirstData);
    // });
  } catch (error) {
    return error;
  }
};

export const deleteItemFromLocalData = async (key) => {
  try {
    const deletingData = await SInfo.deleteItem(key, {
      sharedPreferencesName: "nightableapp",
      keychainService: "nightableapp",
    });
    console.log("data deleted",deletingData);
  } catch (error) {
    console.log(error);
  }
};
