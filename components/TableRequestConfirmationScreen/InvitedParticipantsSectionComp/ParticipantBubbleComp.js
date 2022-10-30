// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    Image,
    StyleSheet } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Fonts } from '../../../fonts/Fonts';

const ParticipantBubbleComp = (props) => {


    return (<View style={{...styles.participantBubbleContainer, 
    height: props.externalUser ? 50 * heightRatioProMax : 70 * heightRatioProMax}}>
        {props.externalUser ? 
        <Text style={{
            marginLeft: 10 * widthRatioProMax,
            fontFamily: Fonts.mainFontReg,
            color: Colors.black
        }}>{props.email}</Text>
        : <View style={{
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        borderRadius: 25 * heightRatioProMax,
                        width: 50 * heightRatioProMax,
                        height: 50 * widthRatioProMax
                    }}
                     source={props.avatarImage}></Image>
            </View>
            <View style={{
                flex: 8,
                width: '100%',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: Colors.black,
                    fontSize: 18 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg,
                }}>{props.name}</Text>
            </View>
        </View>}

    </View>)
}

const styles = StyleSheet.create({

    participantBubbleContainer: {
        borderRadius: 5 * heightRatioProMax,
        paddingVertical: 10 * heightRatioProMax,
        marginVertical: 4 * heightRatioProMax,
        width: '100%',
        backgroundColor: Colors.textColorGold,
        justifyContent: 'center'
    }
})

export default ParticipantBubbleComp;