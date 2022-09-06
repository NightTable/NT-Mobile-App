// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    Platform} from 'react-native';

import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import { API_URL } from '@env';

import AuthNavPurpleButton from '../../components/AuthNavigation/AuthNavPurpleButton';
import AuthNavHeader from '../../components/AuthNavigation/AuthNavHeader';    
import whiteCurvePic from '../../assets/whitecurvesmall.png';
import Animated, {FadeInRight, FadeOutLeft} from 'react-native-reanimated';

import { windowHeight, heightRatioProMax } from '../../dimensions/Dimensions';

const AuthRegisterConfirmationScreen = (props) => {

    const handleBackToLoginPress = () => {

        props.handleRegConfirmaionTransition("login");
        
    };

    return (<Animated.View 
    entering={FadeInRight.duration(1000).delay(400)}
    exiting={FadeOutLeft}
    style={styles.imageContainer}>
                <View style={{
                flex: 2,
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <AuthNavHeader
                    title="NightTable"
                    containerHeight={80 * heightRatioProMax}
                    containerWidth='85%'
                    containerMarginTop={Platform.OS === 'android' ? 70 * heightRatioProMax : 80 * heightRatioProMax}
                    textFontSize={28 * heightRatioProMax}
                    textMarginTop={Platform.OS === 'android' ? -10 * heightRatioProMax : 0}
                ></AuthNavHeader>
                <View style={styles.bodyComponent}>
                    <Image 
                    source={whiteCurvePic} 
                    style={{
                        position: 'absolute',
                        height: windowHeight < 700 ? '50%' : '40%',
                        width: windowHeight < 700 ? '105%' : '108%',
                        top: Platform.OS === 'android' ? '40%' : '35%' 
                    }}>
                    </Image>
                    <Text style={{
                        color: Colors.white,
                        marginTop: 35 * heightRatioProMax,
                        fontSize: 20 * heightRatioProMax,
                        fontFamily: Fonts.mainFontBold
                    }}>Thank you for registering!</Text>
                    <Text style={{
                        color: Colors.white,
                        fontFamily: Fonts.mainFontBold,
                        marginTop: 30 * heightRatioProMax,
                        width: '70%',
                        textAlign: 'center'
                    }}>Please check your inbox for an email verification message</Text>
                    <AuthNavPurpleButton
                        onPress={handleBackToLoginPress}
                        title="back to login"
                        buttonWidth='60%'
                        buttonMarginTop={150 * heightRatioProMax}
                        buttonHeight={60 * heightRatioProMax}
                        textFontSize={25 * heightRatioProMax}
                    ></AuthNavPurpleButton>
                </View>
            </View>
    </Animated.View>)
};

const styles = StyleSheet.create({
    imageContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bodyComponent: {
        marginTop: 20 * heightRatioProMax,
        width: '85%',
        backgroundColor: Colors.purple,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 60 * heightRatioProMax,
        height: '40%',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    }
});


export default AuthRegisterConfirmationScreen;


