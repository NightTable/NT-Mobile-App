import SInfo from 'react-native-sensitive-info';

//for Storing Data
export const StoretoLocalData = async (key, value) => {
  return new Promise(async (resolve, reject) => {
    const savingData = await SInfo.setItem(key, value, {
      sharedPreferencesName: 'connectApp',
      keychainService: 'connectApp',
    }).then(() => {
      resolve('Data Saved');
    });
  });
};

//Retrive Data
export const GetLocalPhoneData = key => {
  try {
    return new Promise(async (resolve, reject) => {
      const gettingFirstData = await SInfo.getItem(key, {
        sharedPreferencesName: 'NTMobile',
        keychainService: 'NTMobile',
      }).then(value => {
        resolve(value);
      });
    });
  } catch (error) {
    return error;
  }
};

export const deleteItemFromLocalData = async key => {
  return new Promise(async (resolve, reject) => {
    const deletingData = await SInfo.deleteItem(key, {
      sharedPreferencesName: 'NTMobile',
      keychainService: 'NTMobile',
    }).then(() => {
      resolve('Data Deleted');
    });
  });
};
