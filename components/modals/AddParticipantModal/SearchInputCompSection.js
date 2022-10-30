// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View,
    TouchableOpacity,
    TextInput, Image } from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Colors } from '../../../colors/Colors';

import purpleCheckImage from '../../../assets/purplecheckmark.png';
import { Fonts } from '../../../fonts/Fonts';

const SearchInputCompSection = (props) => {


    return (<View style={{
        flexDirection: 'row',
        marginTop: 50 * heightRatioProMax,
        height: 50 * heightRatioProMax,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <View style={{
            flex: 8
        }}>
            <TextInput
            style={{
                borderColor: Colors.gold,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                textAlign: 'center',
                color: Colors.gold,
                fontFamily: Fonts.mainFontReg,
                fontSize: 17 * heightRatioProMax,
                height: 20 * heightRatioProMax,
                borderBottomWidth: 1
            }}></TextInput>
        </View>
        <TouchableOpacity style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10 * widthRatioProMax,
        }}>
            <Image 
            style={{
                width: 50 * heightRatioProMax,
                height: 50 * heightRatioProMax
            }}
            source={purpleCheckImage}></Image>
        </TouchableOpacity>
    </View>)
}

export default SearchInputCompSection;
