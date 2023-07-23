import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard/Dashboard";
//CLUBS SCRREN
import Club from "../screens/Club/Club";
import ClubEvents from "../screens/Club/ClubEvents";
//TABLE CONFIGURATIONS
import TableConfigurations from "../screens/TableConfig/TableConfigurations";
//STACKS
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//THEME
import { typography, colors } from "../theme";
import Profile from "../screens/Profile/Profile";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderWidth: 2,
          borderColor: colors.gold.gold200,
          paddingVertical: 20,
          borderLeftColor: "transparent",
          backgroundColor: colors.black.black800,
        },
        drawerActiveBackgroundColor: colors.grey.grey600,
        drawerLabelStyle: [
          typography.bold.bold24,
          {
            marginLeft: 20,
            fontSize: 15,
            color: colors.gold.gold200,
          },
        ],
      }}
      // drawerContent={props => {
      //   <>
      //   </>
      // }}
    >
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="Club"
        component={Club}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="ClubEvents"
        component={ClubEvents}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="TableConfigurations"
        component={TableConfigurations}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
