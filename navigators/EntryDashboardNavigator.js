// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { View, 
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet
 } from 'react-native';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import { heightRatioNorm, heightRatioProMax } from '../dimensions/Dimensions';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import whiteMenuPic from '../assets/whitemenu.png';
import whiteBackButtonPic from '../assets/whitebackbutton.png';

import EntryDashboardScreen from '../screens/EntryDashboardScreen';
import ClubMiniDetailScreen from '../screens/ClubMiniDetailScreen';
import ClubFullDetailScreen from '../screens/ClubFullDetailScreen';
import NewTableRequestScreen from '../screens/NewTableRequestScreen';
import SearchTableRequestsScreen from '../screens/SearchTableRequestsScreen';
import TableRequestDetailScreen from '../screens/TableRequestDetailScreen';
import InitialPaymentScreen from '../screens/InitialPaymentScreen';
import TableRequestConfirmationScreen from '../screens/TableRequestConfirmationScreen';
import PollingRoomScreen from '../screens/PollingRoomScreen';
import ActiveTableGroupScreen from '../screens/ActiveTableGroupScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import PhotoListScreen from '../screens/PhotoListScreen';
import MessagesDetailScreen from '../screens/MessagesDetailScreen';
import EndOutingScreen from '../screens/EndOutingScreen';
import { PROPERTY_TYPES } from '@babel/types';
import PhotoDetailListScreen from '../screens/PhotoDetailListScreen';


let Stack;

if (Platform.OS === 'android') {
    Stack = createStackNavigator();
} else {
    Stack = createNativeStackNavigator();
}

const EntryDashboardNavigator = (props) => {


    return (
        <Stack.Navigator 
        screenOptions={{headerStyle: {
            backgroundColor: Colors.purple,
            shadowOpacity: 0,
        }}}>
            <Stack.Screen
                component={EntryDashboardScreen}
                name="edNav-EntryDashboardScreen"
                options={{
                    headerTitle: 'NightTable',
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

                                    width: 40,
                                    height: 40
                                }}
                                source={whiteMenuPic}></Image>
                        </TouchableOpacity>),
                    headerTintColor: Colors.white,
                    headerShadowVisible: false
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                component={ClubMiniDetailScreen}
                name="edNav-ClubMiniDetailScreen"
                options={{
                    headerTitle: "the grand",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
                            <Image
                                style={{
                                    width: 30 * heightRatioNorm,
                                    height: 30 * heightRatioNorm
                                }} 
                                source={whiteBackButtonPic}></Image>
                        </TouchableOpacity>
                    ),
                    headerTintColor: Colors.white,
                    headerShadowVisible: false
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                component={ClubFullDetailScreen}
                name="edNav-ClubFullDetailScreen"
                options={{
                    headerTitle: "club page",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={NewTableRequestScreen}
                name="edNav-NewTableRequestScreen"
                options={{
                    headerTitle: "new table request",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={SearchTableRequestsScreen}
                name="edNav-SearchTableRequestsScreen"
                options={{
                    headerTitle: "search for requests",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={TableRequestDetailScreen}
                name="edNav-TableRequestDetailScreen"
                options={{
                    headerTitle: "request details",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={InitialPaymentScreen}
                name="edNav-InitialPaymentScreen"
                options={{
                    headerTitle: "payment",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={TableRequestConfirmationScreen}
                name="edNav-TableRequestConfirmationScreen"
                options={{
                    headerTitle: "confirmation",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={PollingRoomScreen}
                name="edNav-PollingRoomScreen"
                options={{
                    headerTitle: "polling room",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={ActiveTableGroupScreen}
                name="edNav-ActiveTableGroupScreen"
                options={{
                    headerTitle: "your table",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={UserProfileScreen}
                name="edNav-UserProfileScreen"
                options={{
                    headerTitle: "user profile",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={PhotoDetailListScreen}
                name="edNav-PhotoDetailListScreen"
                options={{
                    headerTitle: "photos",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={PhotoListScreen}
                name="edNav-PhotoListScreen"
                options={{
                    headerTitle: "photos",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                component={MessagesDetailScreen}
                name="edNav-MessagesDetailScreen"
                options={{
                    headerTitle: "chat",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
                name="edNav-EndOutingScreen"
                
                options={{
                    headerTitle: "thank you",
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioProMax : 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
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
        fontSize: 20,
        color: Colors.purple
    }
})

export default EntryDashboardNavigator;