// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    Image } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const PartHorizComp = (props) => {


    return (<View style={{
        borderColor: Colors.purple,
        borderWidth: 1,
        marginBottom: 3 * heightRatioProMax,
        backgroundColor: Colors.greyLight,
        height: 70 * heightRatioProMax,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10 * heightRatioProMax
    }}>
        <View style={{flex: 2}}>
            <Image style={{
                marginLeft: 7 * widthRatioProMax,
                borderRadius: 25 * heightRatioProMax,
                height: 50 * heightRatioProMax,
                width: 50 * heightRatioProMax
            }} source={props.image}></Image>
        </View>
        <View style={{flex: 8}}>
            <Text style={{
                marginLeft: 10 * widthRatioProMax,
                fontFamily: Fonts.mainFontReg
            }}>{props.name}</Text>
        </View>
        <View style={{flex: 2}}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>
                ${props.price}
            </Text>
        </View>
    </View>)
}

export default PartHorizComp;