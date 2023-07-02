// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhiteBubbleLayoutComp = (props) => {


    return (<View style={{
        marginTop: 20 * heightRatioProMax,
        backgroundColor: Colors.white,
        width: '100%',
        borderRadius: 50 * heightRatioProMax,
        height: 800 * heightRatioProMax
    }}>
        {props.children}
    </View>)
}

export default WhiteBubbleLayoutComp;