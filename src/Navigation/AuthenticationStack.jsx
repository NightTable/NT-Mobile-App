import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from '../Screens/Auth/Login';
import Splash from '../Screens/Splash';
import Otp from '../Screens/Auth/Otp';

//Stack Hooks
const Stack = createNativeStackNavigator();

//Auth Stack

const AuthenticationStack = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name='Splash'
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
