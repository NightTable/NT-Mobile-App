// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useReducer, useState} from 'react';

import { 
    StyleSheet, 
    View, 
    Text, 
    KeyboardAvoidingView,
    Platform } from 'react-native';

import axios from 'axios';

import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import { API_URL } from '@env'; 

import { 
    windowWidth,
    widthRatioNorm,
    heightRatioNorm } from '../../dimensions/Dimensions';

import AuthNavPurpleButton from '../../components/AuthNavigation/AuthNavPurpleButton';
import AuthNavInput from '../../components/AuthNavigation/AuthNavInput';
import AuthNavHeader from '../../components/AuthNavigation/AuthNavHeader';
import Animated, {FadeInRight, FadeOutLeft} from 'react-native-reanimated';
import {Types} from './AuthRegisterDispatchTypes';


const initialReducerState = {

    inputValues: {
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        password: "",
        reEnterPassword: ""
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        gender: false,
        email: false,
        phoneNumber: false,
        password: false,
        reEnterPassword: false
    },
    totalFormValidity: false

};

const reducerFunction = (state = initialReducerState, action) => {

    let newFirstNameValidity = state.inputValidities.firstName;
    let newLastNameValidity = state.inputValidities.lastName;
    let newGenderValidity = state.inputValidities.gender;
    let newEmailValidity = state.inputValidities.email;
    let newPhoneNumberValidity = state.inputValidities.phoneNumber;
    let newPasswordValidity = state.inputValidities.password;
    let newReEnterPasswordValidity = state.inputValidities.reEnterPassword;

    let newFirstNameValue = state.inputValues.firstName;
    let newLastNameValue = state.inputValues.lastName;
    let newGenderValue = state.inputValues.gender;
    let newEmailValue = state.inputValues.email;
    let newPhoneNumberValue = state.inputValues.phoneNumber;
    let newPasswordValue = state.inputValues.password;
    let newReEnterPasswordValue = state.inputValues.reEnterPassword;

    if (action.type === Types.firstNameChange) {

        newFirstNameValidity = (action.textContent.length > 3);
        newFirstNameValue = action.textContent;


    } else if (action.type === Types.lastNameChange) {

        newLastNameValidity = (action.textContent.length > 3)
        newLastNameValue = action.textContent;

    } else if (action.type === Types.genderChange) {


        newGenderValidity = (action.textContent !== 'male' || action.textContent !== 'female');
        newGenderValue = action.textContent;

    } else if (action.type === Types.emailChange) {

        newEmailValidity = (action.textContent.includes('@') && action.textContent.includes('.'));
        newEmailValue = action.textContent;

    } else if (action.type === Types.phoneNumberChange) {

        newPhoneNumberValidity = (action.textContent.length > 9);
        newPhoneNumberValue = action.textContent;

        
    } else if (action.type === Types.passwordChange) {

        newPasswordValidity = (action.textContent.length > 8);
        newPasswordValue = action.textContent;

        
    } else if (action.type === Types.renterPasswordChange) {

        newReEnterPasswordValidity = (action.textContent.length > 8);
        newReEnterPasswordValue = action.textContent;
    }

    let newTotalFormValidity = (
        newFirstNameValidity &&
        newLastNameValidity &&
        newGenderValidity &&
        newEmailValidity &&
        newPhoneNumberValidity &&
        newPasswordValidity &&
        newReEnterPasswordValidity
    )

    return {
        inputValues: {
            firstName: newFirstNameValue,
            lastName: newLastNameValue,
            gender: newGenderValue,
            email: newEmailValue,
            phoneNumber: newPhoneNumberValue,
            password: newPasswordValue,
            reEnterPassword: newReEnterPasswordValue
        },
        inputValidities: {
            firstName: newFirstNameValidity,
            lastName: newLastNameValidity,
            gender: newGenderValidity,
            email: newEmailValidity,
            phoneNumber: newPhoneNumberValidity,
            password: newPasswordValidity,
            reEnterPassword: newReEnterPasswordValidity
        },
        totalFormValidity: newTotalFormValidity
    }
        
};

const AuthRegisterScreen = (props) => {

    const [reducerState, dispatch] = useReducer(reducerFunction, initialReducerState);
    const [keyboardAvoidingOn, setKeyboardAvoidingOn] = useState(false);
    const [lowerInputSelected, setLowerInputSelected] = useState(false);

    const handleRegisterButtonPress = () => {


        axios.post(API_URL + 'api/auth/register', {
            firstName: reducerState.inputValues.firstName,
            lastName: reducerState.inputValues.lastName,
            gender: reducerState.inputValues.gender,
            email: reducerState.inputValues.email,
            phoneNumber: reducerState.inputValues.phoneNumber,
            password: reducerState.inputValues.password,
            isIntermediarySetup: true
        })
        .then((res) => {

            console.log(res.status);
            props.handleRegisterTransition("regconfirmation");
        })
        .catch((err) => {
            
            throw err;
        });

    }

    return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={-20}
    enabled={keyboardAvoidingOn}
    behavior={Platform.OS === 'android' ? '' : 'position'}>
    <Animated.View 
    entering={FadeInRight.duration(1000).delay(400)}
    exiting={FadeOutLeft}
    style={styles.registerScreenContainer}>
            <AuthNavHeader
                title="NightTable"
                customStyle={{alignSelf: 'center'}}
                containerHeight={70 * heightRatioNorm}
                containerWidth={350 * widthRatioNorm}
                containerMarginTop={20 * heightRatioNorm}
                containerMarginBottom={5 * heightRatioNorm}
                textFontSize={20 * heightRatioNorm}
            ></AuthNavHeader>
            <View style={styles.registerComponentBox}>
                <Text style={styles.registerTitle}>Register</Text>
                <AuthNavInput
                    onChangeText={(text) => dispatch({
                        type: Types.firstNameChange,
                        textContent: text,
                        })}
                    onTouchStart={() => {
                        setLowerInputSelected(false);
                        setKeyboardAvoidingOn(false);
                    }}
                    inputTitle="first name"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    value={reducerState.inputValues.firstName}
                ></AuthNavInput>
                <AuthNavInput
                    onChangeText={(text) => dispatch({
                        type: Types.lastNameChange,
                        textContent: text,
                        })}
                    inputTitle="last name"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    onTouchStart={() => {
                        setLowerInputSelected(false);
                        setKeyboardAvoidingOn(false);
                    }}
                    value={reducerState.inputValues.lastName}
                ></AuthNavInput>
                <AuthNavInput
                    onChangeText={(text) => dispatch({
                        type: Types.genderChange,
                        textContent: text,
                        })}
                    inputTitle="gender"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    onBlur={() => {
                        if (!lowerInputSelected) {
                            setTimeout(() => {
                                setKeyboardAvoidingOn(false)
                            }, 500);}
                        }
                    }
                    onTouchStart={() => {
                        setLowerInputSelected(true);
                        setKeyboardAvoidingOn(true);}}
                    value={reducerState.inputValues.gender}
                ></AuthNavInput>
                <AuthNavInput
                    onChangeText={(text) => dispatch({
                        type: Types.emailChange,
                        textContent: text,
                        })}
                    inputTitle="email"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm }
                    onBlur={() => {
                        if (!lowerInputSelected) {
                            setTimeout(() => {
                                setKeyboardAvoidingOn(false)
                            }, 500);}
                        }
                    }
                    onTouchStart={() => {
                        setLowerInputSelected(true);
                        setKeyboardAvoidingOn(true);}}
                    value={reducerState.inputValues.email}
                ></AuthNavInput>
                <AuthNavInput
                    keyboardType="numeric"
                    onChangeText={(text) => dispatch({
                        type: Types.phoneNumberChange,
                        textContent: text,
                        })}
                    onBlur={() => {
                        if (!lowerInputSelected) {
                            setTimeout(() => {
                                setKeyboardAvoidingOn(false)
                            }, 500);}
                        }
                    }
                    onTouchStart={() => {
                        setLowerInputSelected(true);
                        setKeyboardAvoidingOn(true);}}
                    inputTitle="phone number"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    value={reducerState.inputValues.phoneNumber}
                ></AuthNavInput>
                <AuthNavInput
                    password
                    onChangeText={(text) => dispatch({
                        type: Types.passwordChange,
                        textContent: text,
                        })}
                    onBlur={() => {
                        if (!lowerInputSelected) {
                            setTimeout(() => {
                                setKeyboardAvoidingOn(false)
                            }, 500);}
                        }
                    }
                    onTouchStart={() => {
                        setLowerInputSelected(true);
                        setKeyboardAvoidingOn(true)}}
                    inputTitle="pass"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={40 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    value={reducerState.inputValues.password}
                ></AuthNavInput>
                <AuthNavInput
                    password
                    onChangeText={(text) => dispatch({
                        type: Types.renterPasswordChange,
                        textContent: text,
                        })}
                    onBlur={() => {
                        if (!lowerInputSelected) {
                            setTimeout(() => {
                                setKeyboardAvoidingOn(false)
                            }, 500);}
                        }
                    }
                    onTouchStart={() => {
                        setLowerInputSelected(true);
                        setKeyboardAvoidingOn(true);}}
                    inputTitle="re-enter pass"
                    textFontSize={20 * heightRatioNorm}
                    textInputHeight={25 * heightRatioNorm}
                    textInputMarginBottom={20 * heightRatioNorm}
                    textInputFontSize={20 * heightRatioNorm}
                    value={reducerState.inputValues.reEnterPassword}
                ></AuthNavInput>
                <AuthNavPurpleButton
                    disabled={!reducerState.totalFormValidity}
                    onPress={handleRegisterButtonPress}
                    title="register"
                    customStyle={{alignSelf: 'center'}}
                    buttonWidth={190 * widthRatioNorm}
                    textFontSize={Platform.OS === 'iOS' ? 30 * heightRatioNorm: 20 * heightRatioNorm}
                    buttonHeight={50 * heightRatioNorm}
                ></AuthNavPurpleButton>
            </View>
    </Animated.View>
    </KeyboardAvoidingView>
    )
};


const styles = StyleSheet.create({
    registerComponentBox: {
        flexDirection: 'column',
        borderRadius: 40 * heightRatioNorm,
        height: Platform.OS === 'ios' ? (720 * heightRatioNorm):(800 * heightRatioNorm), 
        width: 350 * widthRatioNorm,
        backgroundColor: Colors.purple,
        alignSelf: 'center',
    },
    registerScreenContainer: {
        justifyContent: "center",
        width: windowWidth,
        height: '100%'
    },
    shadowProp: {
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10 
    },
    registerTitle: {
        fontSize: 22 * heightRatioNorm,
        fontFamily: Fonts.mainFontBold,
        textAlign: 'center',
        marginBottom: 10 * heightRatioNorm,
        color: Colors.white,
        marginTop: 20 * heightRatioNorm
    }
})

export default AuthRegisterScreen;
