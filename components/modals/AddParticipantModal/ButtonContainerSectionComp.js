// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text,
    TouchableOpacity } from 'react-native';
import { heightRatioProMax } from '../../../dimensions/Dimensions';

import { Colors } from '../../../colors/Colors';
import { Fonts } from '../../../fonts/Fonts';

const ButtonContainerSectionComp = (props) => {

    return (<View style={{
        marginTop: 100 * heightRatioProMax,
        flexDirection: 'column',
        width: '70%'
    }}>
        <TouchableOpacity
        onPress={props.onAddPartButtonHandler}
        style={[{
            height: 50 * heightRatioProMax,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.green,
            borderWidth: 1
        }, {
            shadowColor: Colors.black,
            shadowRadius: 2,
            shadowOpacity: 0.4,
            shadowOffset: {
                width: 0,
                height: 0
            },
            elevation: 3
        }]}>
            <Text style={{
                color: Colors.green,
                fontFamily: Fonts.mainFontReg
            }}>add 2 participants</Text>
        </TouchableOpacity>
    </View>)
}

export default ButtonContainerSectionComp;