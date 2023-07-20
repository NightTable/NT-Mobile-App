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
          //uncomment below line to hide this screen from drawer navigator
          // drawerItemStyle:{display:'none'}
        }}
      />

      <Drawer.Screen
        name="TableConfigurations"
        component={TableConfigurations}
        options={{
          headerShown: false,
          //uncomment below line to hide this screen from drawer navigator
          // drawerItemStyle:{display:'none'}
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
