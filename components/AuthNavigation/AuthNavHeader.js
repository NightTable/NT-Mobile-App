// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';

import { Fonts } from '../../fonts/Fonts';

const AuthNavHeader = (props) => {

    return (
        <View
        style={{...styles.containerStyle,
            ...props.customStyle,
            height: props.containerHeight,
            width: props.containerWidth,
            marginTop: props.containerMarginTop,
            marginBottom: props.containerMarginBottom}}>
            <Text style={{...styles.textStyle,
            fontSize: props.textFontSize,
            marginTop: props.textMarginTop
            }}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.purple,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 10
    },
    textStyle: {
        fontFamily: Fonts.mainFontBold,
        color: Colors.white,
    }
})

export default AuthNavHeader;