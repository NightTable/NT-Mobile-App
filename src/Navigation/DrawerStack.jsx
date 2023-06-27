import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import EntryDashboardNavigator from "../../navigators/EntryDashboardNavigator";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Club from "../Screens/Dashboard/Club";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "black",
        },
        //   drawerActiveBackgroundColor: Colors.purple,
        //   drawerActiveTintColor: Colors.white,
        //   drawerInactiveTintColor: Colors.black,
        //   drawerLabelStyle: {
        //     marginLeft: -20 * widthRatioNorm,
        //     fontFamily: Fonts.mainFontReg,
        //     fontSize: 15 * heightRatioNorm,
        //     color: Colors.gold,
        //   },
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
