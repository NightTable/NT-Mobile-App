// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../colors/Colors';
import { heightRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const ButtonContainerComp = (props) => {

    return (<View style={{
        flexDirection: 'row',
        marginTop: 80 * heightRatioProMax,
    }}>
        <View style={{
            flex: 2,
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={props.onCancelPress} style={[{
                backgroundColor: Colors.red,
                width: '80%',
                height: 40 * heightRatioProMax,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10*heightRatioProMax,
            }, {
                shadowColor: Colors.black,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 3,
                shadowOpacity: 0.2,
                elevation: 5
            }]}>
                <Text style={{
                    color: Colors.white,
                    fontFamily: Fonts.mainFontReg
                }}>Close</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

export default ButtonContainerComp;