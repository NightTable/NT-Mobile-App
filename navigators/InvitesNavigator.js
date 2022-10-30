// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform
 } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import { heightRatioNorm, heightRatioProMax, widthRatioNorm } from '../dimensions/Dimensions';
import whiteMenuPic from '../assets/goldmenu.png';
import whiteBackButtonPic from '../assets/goldenbackbutton.png';
import UserProfileScreen from '../screens/UserProfileScreen';
import PhotoDetailListScreen from '../screens/PhotoDetailListScreen';
import PhotoListScreen from '../screens/PhotoListScreen';
import MessagesDetailScreen from '../screens/MessagesDetailScreen';
import TableInvitesOverviewScreen from '../screens/TableInvitesOverviewScreen'
import TableInvitesDetailScreen from '../screens/TableInvitesDetailScreen'
import PollingRoomScreen from '../screens/PollingRoomScreen'
import ActiveTableGroupScreen from '../screens/ActiveTableGroupScreen'
import EndOutingScreen from '../screens/EndOutingScreen'
let Stack;

if (Platform.OS === 'android') {
    Stack = createStackNavigator();
} else {
    Stack = createNativeStackNavigator();
}

const InvitesNavigator = (props) => {

    return (
            <Stack.Navigator 
            screenOptions={{headerStyle: {
                backgroundColor: Colors.black,
                shadowOpacity: 0,
            }}}>
                <Stack.Screen
                    component={TableInvitesOverviewScreen}
                    name="invNav-TableInvitesOverviewScreen"
                    options={{
                        headerTitle: 'Table Invites Overview',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.openDrawer()}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{

                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteMenuPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.gold,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={TableInvitesDetailScreen}
                    name="invNav-TableInvitesDetailScreen"
                    options={{
                        headerTitle: 'Table Invite Details',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('invNav-TableInvitesOverviewScreen')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{

                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.gold,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={UserProfileScreen}
                    name="invNav-UserProfileScreen"
                    options={(props) => { 

                        return ({
                            headerTitle: 'User Profile',
                            headerTitleStyle: {
                                fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            },
                            headerLeft: () => (
                                <TouchableOpacity 
                                onPress={() => { 
                                    
                                    if (props.route.params !== undefined && props.route.params.prevScreen === 'invTableInviteDetail') {
                                        props.navigation.navigate('invNav-TableInvitesDetailScreen');
                                    } else {
                                        props.navigation.navigate('invNav-PollingRoomScreen');
                                    }
  
                                }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                        style={{

                                            width: 40*widthRatioNorm,
                                            height: 40*heightRatioNorm
                                        }}
                                        source={whiteBackButtonPic}></Image>
                                </TouchableOpacity>),
                            headerTintColor: Colors.gold,
                            headerShadowVisible: false
                        }) 
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={ActiveTableGroupScreen}
                    name="invNav-ActiveTableGroupScreen"
                    options={{
                        headerTitle: "Live Table Groupings",
                        headerLeft: (props) => null,

                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerTintColor: Colors.gold,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                component={EndOutingScreen}
                name="invNav-EndOutingScreen"
                options={{
                    headerLeft: (props) => null,
                    headerTitle: "Thank You",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerTintColor: Colors.gold,
                }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={PollingRoomScreen}
                    name="invNav-PollingRoomScreen"
                    options={{
                        headerTitle: 'Polling Room',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('invNav-TableInvitesDetailScreen')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{

                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.white,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={PhotoListScreen}
                    name="invNav-PhotoListScreen"
                    options={{
                        headerTitle: 'Photos',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('invNav-UserProfileScreen')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{
                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.gold,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={PhotoDetailListScreen}
                    name="invNav-PhotoDetailListScreen"
                    options={{
                        headerTitle: 'Photos',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('invNav-PhotoListScreen')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{

                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.white,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={MessagesDetailScreen}
                    name="invNav-MessagesDetailScreen"
                    options={{
                        headerTitle: 'Message',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('invNav-UserProfileScreen')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    style={{

                                        width: 40*widthRatioNorm,
                                        height: 40*heightRatioNorm
                                    }}
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>),
                        headerTintColor: Colors.white,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
            </Stack.Navigator>

    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    clubListContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 400 * heightRatioNorm
    },
    text: {
        fontFamily: Fonts.mainFontBold,
        fontSize: 20*heightRatioNorm,
        color: Colors.purple
    }
})

export default InvitesNavigator;