// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text } from 'react-native';
import { Colors } from '../../../colors/Colors';
import { heightRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const MessageHorizComp = (props) => {

    return (<View style={{
        flexDirection: 'row',
        justifyContent: props.isSourceUser ? 'flex-end' : 'flex-start',
        width: '100%'
    }}>
        <View style={{
            padding: 5 * heightRatioProMax,
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            borderRadius: 5 * heightRatioProMax,
            minHeight: 30 * heightRatioProMax,
            backgroundColor: props.isSourceUser ? Colors.gold : Colors.black,
            borderWidth: 1,
            borderColor: props.isSourceUser ? Colors.black : Colors.gold
        }}>
            <View style={{width: '90%'}}>
                <Text style={{
                    lineHeight: 25 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 15 * heightRatioProMax,
                    color: props.isSourceUser ? Colors.black : Colors.gold
                }}>{props.content}</Text>
            </View>
        </View>
    </View>)
}

export default MessageHorizComp;