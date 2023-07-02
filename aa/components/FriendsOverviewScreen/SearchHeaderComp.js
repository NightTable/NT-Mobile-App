// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import purpleSearchIcon from '../../assets/purplesearchicon.png';
import { Fonts } from '../../fonts/Fonts';

const SearchHeaderComp = (props) => {


    return (<View style={{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50 * heightRatioProMax,
        height: 100 * heightRatioProMax,
    }}>
        <TouchableOpacity style={{
            alignItems: 'center',
            flex: 2,
            justifyContent: 'center',
        }}>
            <Image 
                style={{
                    width: 50 * heightRatioProMax,
                    height: 50 * heightRatioProMax
                }}
                source={purpleSearchIcon}></Image>
        </TouchableOpacity>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 8,
            height: '100%'
        }}>
            <TextInput style={{
                height: 30 * heightRatioProMax,
                fontSize: 20 * heightRatioProMax,
                fontFamily: Fonts.mainFontReg,
                color: Colors.purple,
                marginTop: 20 * heightRatioProMax,
                width: '90%',
                borderBottomWidth: 1,
                borderBottomColor: Colors.purple
            }}></TextInput>
        </View>
    </View>)
}

export default SearchHeaderComp;