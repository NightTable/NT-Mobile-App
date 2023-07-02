// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Image } from 'react-native';
import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const PartHorizComp = (props) => {

    return (<View style={{
        width: '70%',
        flexDirection: 'row',
        height: 70 * heightRatioProMax,
        backgroundColor: Colors.gold,
        borderRadius: 10 * heightRatioProMax,
        alignItems: 'center',
        borderRadius: 12 * heightRatioProMax,
        marginBottom: 3 * heightRatioProMax
    }}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 7 * widthRatioProMax
        }}>
            <Image
                style={{
                    borderRadius: 25 * heightRatioProMax,
                    width: 50 * heightRatioProMax,
                    height: 50 * heightRatioProMax
                }} 
                source={props.image}></Image>
        </View>
        <View style={{
            marginLeft: 10 * widthRatioProMax
        }}>
            <Text style={{
                color: Colors.black,
                fontFamily: Fonts.mainFontReg
            }}>{props.name}</Text>
        </View>
    </View>)
}

export default PartHorizComp;