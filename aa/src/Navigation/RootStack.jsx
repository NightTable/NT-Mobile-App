import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../Navigation/AuthStack';
import DrawerNavigator from './DrawerStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
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
