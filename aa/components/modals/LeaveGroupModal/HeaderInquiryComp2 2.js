// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Image } from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Fonts } from '../../../fonts/Fonts';

import { Colors } from '../../../colors/Colors';

import sampleGirl from '../../../assets/person.jpeg';

const HeaderInquiryComp = (props) => {

    return (
    <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }}>
        <View style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 18 * heightRatioProMax,
                fontFamily: Fonts.mainFontBold,
                color: Colors.gold
            }}>Item Cart</Text>
        </View>
    </View>)
}

export default HeaderInquiryComp;