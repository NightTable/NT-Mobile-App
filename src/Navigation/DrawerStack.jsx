import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import EntryDashboardNavigator from "../../navigators/EntryDashboardNavigator";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Club from "../Screens/Dashboard/Club";
import ClubEvents from "../Screens/Dashboard/ClubEvents";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../Theme/colors";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: colors.gold.gold200,
          paddingVertical: 20,
        },
        drawerActiveBackgroundColor: colors.grey.grey600,
        // drawerActiveTintColor: colors.black.black400,
        // drawerInactiveTintColor: colors.gold.gold200,
        drawerLabelStyle: {
          marginLeft: 20,
          // fontFamily: Fonts.mainFontReg,
          fontSize: 15,
          color: colors.gold.gold200,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        // options={{
        //     drawerIcon: () => (
        //         <Image
        //             style={styles.icon}
        //             source={DashboardPic}>
        //         </Image>
        //     ),
        // }}
      />

      <Drawer.Screen
        name="Club"
        component={Club}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ClubEvents"
        component={ClubEvents}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
