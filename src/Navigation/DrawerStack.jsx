// All information, source code contained in this document
// is the property of StrynDev Solutions, LLC. It must not
// be transmitted to others without the written consent of
// StrynDev Solutions. It must be returned to StrynDev Solutions
// when its authorized use is terminated.

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import EntryDashboardNavigator from "../../navigators/EntryDashboardNavigator";
import { Image, StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor:'black',
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
          name="dashboard"
          component={EntryDashboardNavigator}
          // options={{
          //     drawerIcon: () => (
          //         <Image
          //             style={styles.icon}
          //             source={DashboardPic}>
          //         </Image>
          //     ),
          // }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
//   icon: {
//     height: 35 * heightRatioNorm,
//     width: 35 * heightRatioNorm,
//   },
});
export default DrawerNavigator;
