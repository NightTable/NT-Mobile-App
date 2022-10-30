// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import { View} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const BlackBubbleLayoutComp = (props) => {


    return (<View style={{
        marginTop: 15 * heightRatioProMax,
        borderWidth: 1,
        borderColor: Colors.gold,
        backgroundColor: Colors.black,
        borderRadius: 15 * heightRatioProMax,
        height: 1050 * heightRatioProMax,
        width: '100%'
    }}>
        {props.children}
    </View>)
}

export default BlackBubbleLayoutComp;