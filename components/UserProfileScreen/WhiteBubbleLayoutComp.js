// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhiteBubbleLayoutComp = (props) => {

    return (<View style={{
        paddingTop: 40 * heightRatioProMax,
        width: '95%',
        borderRadius: 10 * heightRatioProMax,
        backgroundColor: Colors.black,
        minHeight: 500 * heightRatioProMax,
        borderWidth: 1,
        borderColor: Colors.gold
    }}>
        {props.children}
    </View>)
}

export default WhiteBubbleLayoutComp;