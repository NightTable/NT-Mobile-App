// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text,
    StyleSheet,
    Image, 
    Platform,
    TextInput,
    KeyboardAvoidingView} from 'react-native';

import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import profileBlankPic from '../../assets/newprofilebackfinal.png';
import instaLogoPic from '../../assets/instalogo.png';
import AuthNavPurpleButton from '../../components/AuthNavigation/AuthNavPurpleButton';
import AuthNavHeader from '../../components/AuthNavigation/AuthNavHeader';
import AuthNavWhiteButton from '../../components/AuthNavigation/AuthNavWhiteButton';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

import { 
    widthRatioProMax, 
    heightRatioProMax,
    windowHeight } from '../../dimensions/Dimensions';

const AuthProfileSetupScreen = (props) => {

    const profileImageDim = 150 * heightRatioProMax;
    const instaImageDim = 50 * widthRatioProMax;

    const handleNextButtonPress = () => {

        props.handleProfileSetupTransition("login");

    };

    return (
        <KeyboardAvoidingView
        keyboardVerticalOffset={-70}
        behavior="position">
        <Animated.View 
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
                    title="profile setup"
                    containerHeight={80 * heightRatioProMax}
                    containerWidth='85%'
                    containerMarginTop={Platform.OS === 'android' ? 70 * heightRatioProMax : 80 * heightRatioProMax}
                    textFontSize={28 * heightRatioProMax}
                    textMarginTop={Platform.OS === 'android' ? -10 * heightRatioProMax : 0}
                ></AuthNavHeader>
            </View>
            <View style={{
                flex: 8,
                height: '100%',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.bodyStyle}>
                    <Image style={{
                        marginTop: 25 * heightRatioProMax,
                        height: profileImageDim,
                        width: profileImageDim
                    }} source={profileBlankPic}>
                    </Image>
                    <Text style={{
                        marginTop: 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white}}>1 - Choose profile photo
                    </Text>
                    <Image
                    source={instaLogoPic}
                    style={{
                        marginTop: 55 * heightRatioProMax,
                        height: instaImageDim, 
                        width: instaImageDim
                    }}
                    >
                    </Image>
                    <Text style={{
                        marginTop: 15 * heightRatioProMax,
                        marginBottom: 10 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white}}>2 - Link your instagram
                    </Text>
                    <TextInput autoCapitalize="none" style={{
                        width: '60%',
                        color: Colors.white,
                        textAlign: 'center',
                        fontFamily: Fonts.mainFontReg,
                        height: 40 * heightRatioProMax,
                        borderBottomWidth: 1,
                        padding: 0,
                        borderBottomColor: Colors.white}}>
                    </TextInput>
                    <Text style={{
                        marginTop: (Platform.OS === 'android' && windowHeight < 600) ? 50 * heightRatioProMax : 70 * heightRatioProMax,
                        marginBottom: 20 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white}}>3 - Add some pictures!
                    </Text>
                    <AuthNavWhiteButton
                        title="Import from photo library"
                        textMarginLeft={Platform.OS === 'android' ? 12 * widthRatioProMax : 14 * widthRatioProMax}
                        textMarginTop={Platform.OS === 'ios' ? 0 * heightRatioProMax : 0}
                        textWidth='50%'
                        textFontSize={Platform.OS === 'ios' ? 10 * heightRatioProMax : 12 * heightRatioProMax}
                        containerWidth='40%'
                        containerHeight={52 * heightRatioProMax}
                    ></AuthNavWhiteButton>
                    <AuthNavPurpleButton
                        onPress={handleNextButtonPress}
                        title='next'
                        buttonWidth = '60%'
                        buttonMarginTop = {30 * heightRatioProMax}
                        buttonHeight={70 * heightRatioProMax}
                        textFontSize={30 * heightRatioProMax}
                    ></AuthNavPurpleButton>
                </View>
            </View>
        </Animated.View>
        </KeyboardAvoidingView>);
};

const styles = StyleSheet.create({
    imageContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bodyStyle: {
        backgroundColor: Colors.purple,
        marginTop: Platform.OS === 'android' ? -25 * heightRatioProMax : -60 * heightRatioProMax,
        height: '100%',
        width: '85%',
        height: '95%',
        borderRadius: 40 * heightRatioProMax,
        borderColor: Colors.black,
        borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default AuthProfileSetupScreen;