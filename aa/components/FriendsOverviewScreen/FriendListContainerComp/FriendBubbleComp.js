// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    TouchableOpacity,
    Image } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';


const FriendBubbleComp = (props) => {

    return (<TouchableOpacity style={{
        backgroundColor: Colors.white,
        borderColor: Colors.purple,
        borderRadius: 15 * heightRatioProMax,
        padding: 10 * heightRatioProMax,
        borderWidth: 1,
        width: '90%',
        height: 70 * heightRatioProMax,
        flexDirection: 'row',
        marginBottom: 1 * heightRatioProMax,
    }}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
        }}>
            <Image 
                style={{
                    width: 45 * heightRatioProMax,
                    height: 45 * heightRatioProMax,
                    borderRadius: (45/2) * heightRatioProMax,
                }}
                source={props.image}></Image>
        </View>
        <View style={{
            flex: 12,
            justifyContent: 'center'
        }}>
            <Text style={{
                marginLeft: 10 * widthRatioProMax,
                fontFamily: Fonts.mainFontReg
            }}>{props.name}</Text>
        </View>
    </TouchableOpacity>)
}

export default FriendBubbleComp;

