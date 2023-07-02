// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';

import { Colors } from '../../../../colors/Colors';
import { heightRatioProMax } from '../../../../dimensions/Dimensions';
import { Fonts } from '../../../../fonts/Fonts';

const PartHorizComp = (props) => {

    return (<TouchableOpacity style={[{
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 10 * heightRatioProMax,
        height: 70 * heightRatioProMax,
        borderRadius: 10 * heightRatioProMax,
        marginBottom: 5 * heightRatioProMax
    }, {
        shadowColor: Colors.black,
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 3
    }]}>
        <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 50 * heightRatioProMax,
                height: 50 * heightRatioProMax,
                borderRadius: 25 * heightRatioProMax,
            }} source={props.image}></Image>
        </View>
        <View style={{
            flex: 8
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
            }}>{props.name}</Text>
        </View>
    </TouchableOpacity>)
}

export default PartHorizComp;