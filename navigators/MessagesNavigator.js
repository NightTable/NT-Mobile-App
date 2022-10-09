import React from 'react';
import { View, 
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet
 } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import whiteMenuPic from '../assets/whitemenu.png';
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import MessagesOverviewScreen from '../screens/MessagesOverviewScreen';
import { heightRatioNorm } from '../dimensions/Dimensions';

let Stack;

if (Platform.OS === 'android') {
    Stack = createStackNavigator();
} else {
    Stack = createNativeStackNavigator();
}

const MessageNavigator = (props) => {
    return (
        <Stack.Navigator 
        screenOptions={{headerStyle: {
            backgroundColor: Colors.purple,
            shadowOpacity: 0,
        }}}>
            <Stack.Screen
                component={MessagesOverviewScreen}
                name="edNav-MessagesOverviewScreen"
                options={{
                    headerTitle: 'messages',
                    headerTitleStyle: {
                        fontSize: Platform.OS === 'ios' ? 20 * heightRatioNorm : 15 * heightRatioNorm,
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

export default MessageNavigator;