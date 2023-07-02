// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import {
    StyleSheet, 
    View, 
    Dimensions,
    Text} from 'react-native';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';
import { widthRatioProMax, heightRatioProMax } from '../../dimensions/Dimensions';

const TableConfigBubbleComp = (props) => {

    return (
    <View style={[{
            backgroundColor: Colors.textColorGold,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            borderRadius: 8 * heightRatioProMax,
            padding: 10 * heightRatioProMax,
            marginTop: 10 * heightRatioProMax
        }, {
            shadowColor: Colors.black,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 3,
            shadowOpacity: 0.5,
            elevation: 5
    }]}>
        <View style={{flex: 2}}>
            <Text style={{
                    ...styles.infoText,
                    marginLeft: 10 * widthRatioProMax,
                }}
            >{props.floorType}</Text>
        </View>
        <View style={{flex: 2}}>
            <Text style={{
                ...styles.infoText,
                textAlign: 'center'
            }}>${props.price}</Text>
        </View>
        <View style={{flex: 2}}>
            <Text style={{
                ...styles.infoText,
                textAlign: 'right',
                marginRight: 10 * widthRatioProMax,
            }}>fits {props.size}</Text>
        </View>
    </View>)

};

const styles = StyleSheet.create({
    infoText: {
        fontSize: 20 * heightRatioProMax,
        fontFamily: Fonts.mainFontReg,
        color: Colors.black
    }

});

export default TableConfigBubbleComp;