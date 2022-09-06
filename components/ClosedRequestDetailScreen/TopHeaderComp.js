// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text } from 'react-native';

import { Fonts } from '../../fonts/Fonts';

import { heightRatioProMax, widthRatioProMax} from '../../dimensions/Dimensions';

const TopHeaderComp = (props) => {

    return (<View style={{
        marginTop: 80 * heightRatioProMax
    }}>
        <Text style={{
            marginLeft: 20 * widthRatioProMax,
            fontFamily: Fonts.mainFontReg
        }}>your night at: </Text>
        <Text style={{
            marginLeft: 20 * widthRatioProMax,
            fontFamily: Fonts.mainFontBold
        }}>the grand</Text>
    </View>)
}

export default TopHeaderComp;