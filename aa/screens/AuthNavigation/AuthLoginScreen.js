// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';
import { 
    Platform, 
    TouchableOpacity, 
    StyleSheet, 
    View,
    Image } from 'react-native';

import axios from 'axios';

import { API_URL } from "@env";

import { Colors } from '../../colors/Colors'
import whiteCurvePic from '../../assets/whitecurvesmall.png';
import AuthNavPurpleButton from '../../components/AuthNavigation/AuthNavPurpleButton';
import AuthNavHeader from '../../components/AuthNavigation/AuthNavHeader';
import AuthNavInput from '../../components/AuthNavigation/AuthNavInput';
import AuthNavWhiteButton from '../../components/AuthNavigation/AuthNavWhiteButton';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

import { 
    widthRatioNorm, 
    heightRatioNorm,
    windowHeight} from '../../dimensions/Dimensions';


const AuthLoginScreen = (props) => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleLoginButtonPress = () => {

        axios.post(API_URL + 'api/auth/login/inhouse', {
            username: username,
            password: password
        })
        .then((res) => {

            if (res.status === 200) {
                props.handleLoginTransition("profilesetup");
            }
        })
        .catch((err) => {
            throw err;
        });


    };

    const handleRegisterButtonPress = () => {

        props.handleLoginTransition("register")

    };

    const usernameHandler = (username) => {

        setUsername(username);

    };

    const passwordHandler = (password) => {

        setPassword(password)
    }
    
    return (
        <Animated.View 
        entering={FadeInRight.duration(1000).delay(400)} 
        exiting={FadeOutLeft}>
            <AuthNavHeader
                customStyle={{alignSelf: 'center'}}
                containerHeight={70 * heightRatioNorm}
                containerWidth={(350 * widthRatioNorm)}
                containerMarginTop={60 * heightRatioNorm}
                containerMarginBottom={50 * heightRatioNorm}
                title="NightTable"
                textFontSize={30 * heightRatioNorm}
            >
            </AuthNavHeader>
            <View style={[styles.loginComponentBox, styles.shadowProp]}>
                <Image 
                style={{
                    width: '115%', 
                    height: windowHeight < 700 ? '30%' : '40%', 
                    position: 'absolute',
                    top: Platform.OS === 'ios' ? (windowHeight < 700 ? '63%' : '60%') : '55%'}}
                    source={whiteCurvePic}>
                </Image>
                <AuthNavInput
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={35 * heightRatioNorm}
                    textInputWidth='80%'
                    textInputMarginBottom={30 * heightRatioNorm}
                    textInputFontSize={25 * heightRatioNorm}
                    inputTitle="username"
                    onChangeText={usernameHandler}
                >
                </AuthNavInput>
                <AuthNavInput
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={35 * heightRatioNorm}
                    textInputWidth='80%'
                    textInputMarginBottom={45 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    inputTitle="password"
                    onChangeText={passwordHandler}
                >
                </AuthNavInput>
                <AuthNavPurpleButton
                    onPress={handleLoginButtonPress}
                    boldEnabled={false}
                    buttonMarginBottom = {20 * heightRatioNorm}
                    buttonHeight = {50 * heightRatioNorm}
                    buttonWidth = {190 * widthRatioNorm}
                    title = "login" 
                    textFontSize = {Platform.OS === 'ios' ? (30 * heightRatioNorm) :(20 * heightRatioNorm)} 
                ></AuthNavPurpleButton>
                <AuthNavWhiteButton
                    onPress={handleRegisterButtonPress}
                    title="new?"
                    textFontSize={Platform.OS === 'ios' ? 30 * heightRatioNorm :20 * heightRatioNorm}
                    containerWidth={150 * heightRatioNorm}
                    containerHeight={50 * heightRatioNorm}
                ></AuthNavWhiteButton>
                <View style={{
                    width: '80%',
                    flexDirection: 'row', 
                    justifyContent: 'space-evenly', 
                    marginTop: Platform.OS === 'ios'? 130 * heightRatioNorm: 160 * heightRatioNorm,
                    marginBottom: windowHeight < 700 ? 100 : 0}}>
                    <TouchableOpacity
                        style={[{justifyContent: 'center', alignItems: 'center'}, styles.shadowProp]}
                    >
                        <Image
                            style={styles.facebookSpecs}
                            source={require('../../assets/NC10-38/facebooklogo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{justifyContent: 'center', alignItems: 'center'}, styles.shadowProp]}
                    >
                        <Image
                            style={styles.googleSpecs}
                            source={require('../../assets/NC10-38/googlelogo.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            </Animated.View>
    )
};

const styles = StyleSheet.create({
    loginComponentBox: {
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
        padding: 15 * heightRatioNorm,
        marginRight: 1 * widthRatioNorm,
        marginLeft: 1 * widthRatioNorm,
        marginBottom: 20 * heightRatioNorm,
        borderRadius: 40 * heightRatioNorm,
        height: Platform.OS === 'ios'? ( windowHeight < 700 ? 560 * heightRatioNorm : 540 * heightRatioNorm) : 620 * heightRatioNorm,
        width: 350 * widthRatioNorm,
        backgroundColor: Colors.purple,
        alignSelf: 'center'
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    shadowProp: {
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5 * heightRatioNorm,
        shadowRadius: 10 * heightRatioNorm,
        elevation: 10 * heightRatioNorm
    },
    instaSpecs :{
        width: 50,
        height: 50
    },
    googleSpecs :{
        width: 50,
        height: 50
    },
    facebookSpecs :{
        width: 50,
        height: 50,
    }
})

export default AuthLoginScreen;
