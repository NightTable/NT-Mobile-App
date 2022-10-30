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
    Dimensions } from 'react-native';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

const baseiPhoneWidth = (1/428);
const baseiPhoneHeight = (1/926);

const widthRatio = windowWidth * baseiPhoneWidth;
const heightRatio = windowHeight * baseiPhoneHeight;

const PurpleLayoutBubbleComp = (props) => {

    return (
        <View style={[{
            marginTop: 10 * heightRatio,
            backgroundColor: Colors.black,
            borderColor: Colors.textColorGold,
            borderWidth: 2,
            borderRadius: 50,
            paddingBottom: 60 * heightRatio,
            width: '100%'
        }, {
            shadowColor: Colors.black,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 3,
            shadowOpacity: 0.5,
            elevation: 10
        }]}>
            <View style={{
                marginTop: 50 * widthRatio,
                marginLeft: 10 * widthRatio,
                marginRight: 10 * widthRatio,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderColor: Colors.textColorGold
            }}>
                <Text style={{
                    color: Colors.textColorGold,
                    fontFamily: Fonts.mainFontReg,
                    marginBottom: 2 * heightRatio,
                    fontSize: 20 * heightRatio}}>{props.label}</Text>
                <TouchableOpacity>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.textColorGold,
                        fontSize: 20 * heightRatio}}> + </Text>
                </TouchableOpacity>
            </View>
            {props.children}
        </View>)
};

export default PurpleLayoutBubbleComp;