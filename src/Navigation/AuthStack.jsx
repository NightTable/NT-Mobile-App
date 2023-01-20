import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Login from '../Screens/Auth/Login';
import Otp from "../Screens/Auth/Otp"

// import ForgotPassword from '../screens/Auth/ForgotPassword';
import Splash from '../Screens/Splash';
//Stack Hooks
const Stack = createNativeStackNavigator();

//Auth Stack

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
