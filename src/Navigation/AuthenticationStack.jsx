import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Login from '../screens/Auth/Login';
import Splash from '../screens/Splash';

//Stack Hooks
const Stack = createNativeStackNavigator();

//Auth Stack

const AuthenticationStack = () => {
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
          gestureEnabled:false,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
