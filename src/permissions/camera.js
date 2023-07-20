// import React, {useEffect, useCallback, useState} from 'react';
// import {Alert, Linking} from 'react-native';

// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// //camera handler permission
// export const getCameraPermission = async () => {
//   const data = await Camera.getAvailableCameraDevices();
//   if (data[0].devices === undefined || data[0].devices.length === 0) {
//     Alert.alert('CAMERA IS UN-AVAILABLE ');
//   } else {
//     const permissionStatus = await Camera.getCameraPermissionStatus();

//     if (permissionStatus === 'authorized') {
//       return permissionStatus;
//     } else if (permissionStatus == 'denied') {
//       const data = await requestCameraPermission();
//       return data;
//     } else if (permissionStatus == 'not-determined') {
//       const data = await requestCameraPermission();
//       return data;
//     }
//   }
// };

// export const requestCameraPermission = async () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const permission = await Camera.requestCameraPermission();
//       resolve(permission);
//       if (permission === 'denied') {
//         Linking.openSettings();
//       }
//     } catch (error) {
//       resolve(error);
//     }
//   });
// };
