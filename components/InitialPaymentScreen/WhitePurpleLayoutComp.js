// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhitePurpleBubbleLayoutComp = (props) => {


    return (<View style={{
        marginTop: 60 * heightRatioProMax,
        backgroundColor: Colors.black,
        borderColor: Colors.gold,
        borderWidth: 1,
        borderRadius: 50 * heightRatioProMax,
        alignItems: 'center',
        flexDirection: 'column',
        height: 450 * heightRatioProMax,
    }}>
        {props.children}
    </View>)
}

export default WhitePurpleBubbleLayoutComp;