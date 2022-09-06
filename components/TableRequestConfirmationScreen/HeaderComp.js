// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text} from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const HeaderComp = (props) => {


    return (<View style={{
        marginTop: 30 * heightRatioProMax,
    }}>
        <Text style={{
            marginLeft: 35 * widthRatioProMax,
            fontSize: 20 * heightRatioProMax,
            fontFamily: Fonts.mainFontBold,
        }}>your table request</Text>
        <Text style={{
            color: Colors.orange,
            fontFamily: Fonts.mainFontBold,
            marginLeft: 35 * heightRatioProMax,
            marginTop: 15 * heightRatioProMax,
        }}>split-now-pay-later</Text>
    </View>)
}

export default HeaderComp;