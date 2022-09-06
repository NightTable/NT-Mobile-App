// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { Image, 
    View, 
    Text,
    TouchableOpacity } from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const PendingPartHorizComp = (props) => {

    return (<View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25 * heightRatioProMax,
        marginBottom: 25 * heightRatioProMax
    }}>
        <TouchableOpacity style={{
            marginRight: 30 * widthRatioProMax,
            flexDirection: 'column',
            justifyContent: 'center'
        }}
        onPress={props.handlePress}>
            <Image 
                style={{
                    width: 125 * heightRatioProMax,
                    height: 125 * heightRatioProMax,
                    borderRadius: (125 / 2) * heightRatioProMax
                }}
                source={props.imageObjOne}></Image>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                fontSize: 15 * heightRatioProMax,
                marginTop: 10 * heightRatioProMax,
                textAlign: 'center'}}>{props.nameLabelOne}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={props.handlePress}>
            <Image 
                style={{
                    width: 125 * heightRatioProMax,
                    height: 125 * heightRatioProMax,
                    borderRadius: (125 / 2) * heightRatioProMax
                }}
                source={props.imageObjTwo}></Image>
            <Text
            style={{
                fontFamily: Fonts.mainFontReg,
                fontSize: 15 * heightRatioProMax,
                marginTop: 10 * heightRatioProMax,
                textAlign: 'center'}}
            >{props.nameLabelTwo}</Text>
        </TouchableOpacity>
    </View>)

};

export default PendingPartHorizComp;