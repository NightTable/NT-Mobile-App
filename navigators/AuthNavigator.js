// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import clubBackgroundPic from '../assets/marqueeny.png';

import AuthLoginScreen from '../screens/AuthNavigation/AuthLoginScreen';
import AuthProfileSetupScreen from '../screens/AuthNavigation/AuthProfileSetupScreen';
import AuthRegisterConfirmationScreen from '../screens/AuthNavigation/AuthRegisterConfirmationScreen';
import AuthRegisterSceen from '../screens/AuthNavigation/AuthRegisterScreen';

const AuthNavigator = (props) => {

    // [loginShown, registerShown, profileSetup, regConfirmation]
    const [screenRenderFlag, setScreenRenderFlag] = useState([true, false, false, false]);


    const handleAuthScreenSwitch = (changeInstruction) => {


        if (changeInstruction === 'profilesetup') {

            setScreenRenderFlag([false, false, true, false]);

        } else if (changeInstruction === 'login') {

            setScreenRenderFlag([true, false, false, false]);

        } else if (changeInstruction === 'register') {

            setScreenRenderFlag([false, true, false, false]);
            
        } else if (changeInstruction === 'regconfirmation') {

            setScreenRenderFlag([false, false, false, true]);

        }

    };


    let dynamicScreen;

    if (screenRenderFlag[0]) {
        dynamicScreen = <AuthLoginScreen 
            handleLoginTransition={handleAuthScreenSwitch}></AuthLoginScreen>;
    } else if (screenRenderFlag[1]) {
        dynamicScreen = <AuthRegisterSceen
            handleRegisterTransition={handleAuthScreenSwitch}></AuthRegisterSceen>;
    } else if (screenRenderFlag[2]) {
        dynamicScreen = <AuthProfileSetupScreen
            handleProfileSetupTransition={handleAuthScreenSwitch}></AuthProfileSetupScreen>;
    } else if (screenRenderFlag[3]) {
        dynamicScreen = <AuthRegisterConfirmationScreen
            handleRegConfirmaionTransition={handleAuthScreenSwitch}></AuthRegisterConfirmationScreen>;
    }

    return (<ImageBackground 
        source={clubBackgroundPic}
        style={{
            height: '100%',
            width: '100%'
    }}>
        {dynamicScreen}
    </ImageBackground>)

};

export default AuthNavigator;