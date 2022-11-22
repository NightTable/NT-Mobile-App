// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDrawerStatus } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileNavigator from './ProfileNavigator';
import InvitesNavigator from './InvitesNavigator';
import MessageNavigator from './MessagesNavigator';
import FriendsNavigator from './FriendsNavigator';
import PhotosNavigator from './PhotosNavigator';
import TableRequestsNavigator from './TableRequestsNavigator';
import EntryDashboardNavigator from './EntryDashboardNavigator';
import {Image, StyleSheet} from 'react-native';
import ProfilePic from '../assets/personcircle.png';
import DashboardPic from '../assets/dashboardpic.png';
import InvitePic from '../assets/invitepnggold.png';
import BottlePic from '../assets/champagne.png';
import ChatPic from '../assets/chatpng.png';
import FriendPic from '../assets/friendgold.png';
import PhotoPic from '../assets/photoreal.png';
import { Colors } from '../colors/Colors';
import { widthRatioNorm, heightRatioNorm } from '../dimensions/Dimensions';
import {Fonts} from '../fonts/Fonts';
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        
        <NavigationContainer>
            <Drawer.Navigator 
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: Colors.black,
                    },
                    drawerActiveBackgroundColor: Colors.purple,
                    drawerActiveTintColor: Colors.white,
                    drawerInactiveTintColor: Colors.black,
                    drawerLabelStyle: {
                        marginLeft: -20*widthRatioNorm,
                        fontFamily: Fonts.mainFontReg,
                        fontSize: 15*heightRatioNorm,
                        color: Colors.gold
                    },
                }}>
                <Drawer.Screen name="dashboard" component={EntryDashboardNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={styles.icon}
                                source={DashboardPic}>
                            </Image>
                        ),
                    }}                
                />
                <Drawer.Screen name="profile" component={ProfileNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={styles.icon}
                                source={ProfilePic}>
                            </Image>
                        ),
                    }}
                />
                <Drawer.Screen name="invites" component={InvitesNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={{height: 25*heightRatioNorm, width: 35*heightRatioNorm}}
                                source={InvitePic}>
                            </Image>
                        ),
                    }}                
                />
                <Drawer.Screen name="table requests" component={TableRequestsNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={styles.icon}
                                source={BottlePic}>
                            </Image>
                        ),
                    }}                     
                />
                <Drawer.Screen name="messages" component={MessageNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={styles.icon}
                                source={ChatPic}>
                            </Image>
                        ),
                    }}                    
                />
                <Drawer.Screen name="friends" component={FriendsNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={{height: 25*heightRatioNorm, width: 35*heightRatioNorm}}
                                source={FriendPic}>
                            </Image>
                        ),
                    }}            
                />
                <Drawer.Screen name="photos" component={PhotosNavigator}
                    options={{
                        drawerIcon: () => (
                            <Image
                                style={styles.icon}
                                source={PhotoPic}>
                            </Image>
                        ),
                    }}      
                />
            </Drawer.Navigator>
        </NavigationContainer>)

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
        height: 35*heightRatioNorm,
        width: 35*heightRatioNorm,
    }
});
export default MainNavigator;