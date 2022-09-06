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
        marginTop: 10 * heightRatioProMax,
        flexDirection: 'row'
    }}>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 2
        }}>
            <TouchableOpacity onPress={props.onCancelPress} style={[{
                height: 50 * heightRatioProMax,
                width: '85%',
                backgroundColor: Colors.white,
                borderColor: Colors.red,
                alignItems: 'center',
                justifyContent: 'center',
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
                    fontFamily: Fonts.mainFontReg,
                    color: Colors.red
                }}>cancel</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 2
        }}>
            <TouchableOpacity 
            onPress={props.onLocalConfirmButtonPress}
            style={[{
                height: 50 * heightRatioProMax,
                width: '85%',
                backgroundColor: Colors.white,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: Colors.lightGreen
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
                    color: Colors.lightGreen,
                    fontFamily: Fonts.mainFontReg
                }}>confirm</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

export default ButtonContainerComp;