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

const AuthNavWhiteButton = (props) => {

    return (
    <TouchableOpacity 
    onPress={props.onPress}
    style={[{
        ...styles.containerStyle,
    width: props.containerWidth,
    height: props.containerHeight}, 
        styles.containerShadowStyle]}>
            <Text style={{...styles.textStyle,
            marginLeft: props.textMarginLeft,
            marginTop: props.textMarginTop,
            width: props.textWidth,
            fontSize: props.textFontSize}}>{props.title}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    containerShadowStyle:{
        shadowOpacity: 0.5, 
        shadowRadius: 10,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 10
    },
    textStyle:{
        width: '50%',
        fontFamily: Fonts.mainFontReg,
        color: Colors.black
    }
});

export default AuthNavWhiteButton;