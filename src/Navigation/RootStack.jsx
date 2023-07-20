import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from './DrawerStack';

import AuthenticationStack from "./AuthenticationStack";

//screens
//create stack navigator
const Stack = createNativeStackNavigator();

//main stack
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthenticationStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AuthenticationStack"
        component={AuthenticationStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;


