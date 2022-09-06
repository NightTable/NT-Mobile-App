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
import whiteMenuPic from '../assets/whitemenu.png';
import whiteBackButtonPic from '../assets/whitebackbutton.png';
import TableRequestsHomeScreen from '../screens/TableRequestsHomeScreen';
import ClosedRequestDetailScreen from '../screens/ClosedRequestDetailScreen';
import ActiveTableGroupScreen from '../screens/ActiveTableGroupScreen';
import PollingRoomScreen from '../screens/PollingRoomScreen';
import EndOutingScreen from '../screens/EndOutingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import PhotoDetailListScreen from '../screens/PhotoDetailListScreen';
import PhotoListScreen from '../screens/PhotoListScreen';
import MessagesDetailScreen from '../screens/MessagesDetailScreen';
let Stack;

if (Platform.OS === 'android') {
    Stack = createStackNavigator();
} else {
    Stack = createNativeStackNavigator();
}

const TableRequestsNavigator = (props) => {

    return (
            <Stack.Navigator 
            screenOptions={{headerStyle: {
                backgroundColor: Colors.purple,
                shadowOpacity: 0,
            }}}>
                <Stack.Screen
                    component={TableRequestsHomeScreen}
                    name="trNav-TableRequestsHomeScreen"
                    options={{
                        headerTitle: 'table requests screen',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
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
                        headerTintColor: Colors.white,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={PollingRoomScreen}
                    name="trNav-PollingRoomScreen"
                    options={{
                        headerTitle: 'polling room',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-TableRequestsHomeScreen')}
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
                    component={UserProfileScreen}
                    name="trNav-UserProfileScreen"
                    options={{
                        headerTitle: 'live table requests',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-PollingRoomScreen')}
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
                    name="trNav-PhotoListScreen"
                    options={{
                        headerTitle: 'photos',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-UserProfileScreen')}
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
                    component={PhotoDetailListScreen}
                    name="trNav-PhotoDetailListScreen"
                    options={{
                        headerTitle: 'photos',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-PhotoListScreen')}
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
                    name="trNav-MessagesDetailScreen"
                    options={{
                        headerTitle: 'message',
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-UserProfileScreen')}
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
                    component={ActiveTableGroupScreen}
                    name="trNav-ActiveTableGroupScreen"
                    options={{
                        headerTitle: "live table groupings",
                        headerLeft: (props) => null,

                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerTintColor: Colors.white,
                        headerShadowVisible: false
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                    component={ActiveTableGroupScreen}
                    name="trNav-ActiveTableGroupScreen2"
                    options={{
                        headerTitle: "live table groupings",
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                            onPress={() => props.navigation.navigate('trNav-TableRequestsHomeScreen')}
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
                    component={ClosedRequestDetailScreen}
                    name="trNav-ClosedRequestDetailScreen"
                    options={{
                        headerTitle: "closed table requests",
                        headerTitleStyle: {
                            fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                            onPress={() => props.navigation.navigate('trNav-TableRequestsHomeScreen')}>
                                <Image
                                    style={{
                                        width: 30 * heightRatioNorm,
                                        height: 30 * heightRatioNorm
                                    }} 
                                    source={whiteBackButtonPic}></Image>
                            </TouchableOpacity>
                        ),
                        headerTintColor: Colors.white,
                    }}
                >
                </Stack.Screen>
                <Stack.Screen
                component={EndOutingScreen}
                name="trNav-EndOutingScreen"
                options={{
                    headerLeft: (props) => null,
                    headerTitle: "thank you",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerTintColor: Colors.white,
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

export default TableRequestsNavigator;