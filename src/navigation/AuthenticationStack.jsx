import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '../screens/auth/login';
import Splash from '../screens/Splash';
import Otp from '../screens/auth/otp';

// Stack Hooks
const Stack = createNativeStackNavigator();

// Auth Stack

const AuthenticationStack = () => (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name='Splash'
        component={Splash}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  );

export default AuthenticationStack;
