// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import {
    Text, 
    TouchableOpacity,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';

import { Fonts } from '../../fonts/Fonts';

const AuthNavPurpleButton = (props) => {

    return (<TouchableOpacity
        disabled={props.disabled}
        onPress={props.onPress}
        style={[{...styles.buttonContainerStyle,
        ...props.customStyle, 
        width: props.buttonWidth,
        opacity: props.disabled ? 0.2 : 1,
        marginTop: props.buttonMarginTop,
        marginBottom: props.buttonMarginBottom,
        height: props.buttonHeight}, styles.buttonContainerShadowStyle]}>
            <Text
            style={{...styles.textStyle, 
                fontSize: props.textFontSize,
                fontFamily: props.boldEnabled ? Fonts.mainFontBold : Fonts.mainFontReg}}
            >{props.title}</Text>
        </TouchableOpacity>)

};

const styles = StyleSheet.create({

    buttonContainerStyle: {
        backgroundColor: Colors.purple,
        justifyContent: 'center',
    },
    buttonContainerShadowStyle: {
        shadowOpacity: 0.5, 
        shadowRadius: 10,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 10
    },
    textStyle: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.mainFontBold,
    }
});

export default AuthNavPurpleButton;