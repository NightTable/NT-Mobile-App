import { Platform } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export const LocationPermission = async () => {
  if (Platform.OS === 'android' && !Device.isDevice) {
    return;
  }
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    // setErrorMsg("Permission to access location was denied");
    return;
  }

  const location = await Location.getCurrentPositionAsync({});

  return location;
};
