// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';

import { Fonts } from '../../fonts/Fonts';

const TableInformationSectionComp = (props) => {

    return (<View style={styles.informationSectionContainer}>
        <View style={{
            marginTop: 20 * heightRatioProMax,
            marginBottom: 30 * heightRatioProMax,
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                fontSize: 20 * heightRatioProMax,
                color: Colors.textColorGold
            }}>table information</Text>
        </View>
        <View style={styles.textViewContainer}>
            <Text style={styles.textLabelDescriptionStyle}>type: <Text style={{
                color: Colors.textColorGold
            }}>{props.type}</Text></Text>
        </View>
        <View style={styles.textViewContainer}>
            <Text style={styles.textLabelDescriptionStyle}>table price:<Text style={{color: Colors.textColorGold}}> ${props.price}</Text></Text>
        </View>
        <View style={styles.textViewContainer}>
            <Text style={styles.textLabelDescriptionStyle}>table size:<Text style={{
                color: Colors.textColorGold
            }}> {props.size}</Text></Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    informationSectionContainer: {
        marginTop: 30 * heightRatioProMax,
        width: '85%',
        marginBottom: 30 * heightRatioProMax,
    },
    textLabelDescriptionStyle: {
        marginLeft: 15 * widthRatioProMax,
        fontFamily: Fonts.mainFontReg,
        color: Colors.textColorGold

    },
    textViewContainer: {
        marginBottom: 20 * heightRatioProMax,
    }
})

export default TableInformationSectionComp;