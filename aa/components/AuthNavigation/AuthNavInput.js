// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text, 
    StyleSheet,
    Dimensions,
    TextInput } from 'react-native';

import { Colors } from '../../colors/Colors';

import  { Fonts } from '../../fonts/Fonts';

const width = Dimensions.get('window').width;

const AuthNavInput = (props) => {

    return (<View style={{width: '100%'}}>
        <Text style={{...styles.textStyle,
             fontSize: props.textFontSize
             }}>{props.inputTitle}</Text>
        <TextInput
            autoCapitalize="none"
            keyboardType={props.keyboardType}
            onBlur={props.onBlur}
            onTouchStart={props.onTouchStart}
            secureTextEntry={props.password}
            value={props.value}
            onChangeText={props.onChangeText}
            style={{...styles.inputFields,
            height: props.textInputHeight,
            width: props.textInputWidth,
            marginBottom: props.textInputMarginBottom,
            fontSize: props.textInputFontSize 
            }}
            placeholderTextColor={Colors.white}
        />
    </View>)
};

const styles = StyleSheet.create({

    textStyle: {
        paddingLeft: (25/390)*width,
        color: Colors.white,
        fontFamily: Fonts.mainFontBold,
    },
    inputFields: {
        marginLeft: (25/390)*width,
        marginRight: (25/390)*width,
        borderWidth: 1,
        color: Colors.white,
        borderColor: Colors.purple,
        fontFamily: Fonts.mainFontReg,
        borderBottomColor: Colors.white
    },
});


export default AuthNavInput;