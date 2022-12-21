import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';

import { Fonts } from '../../fonts/Fonts';

const TableInformationSectionComp = (props) => {

    const tableObj = props.table

    return (
    <ScrollView style={styles.informationSectionContainer}>
        {
            tableObj.map((table, index) => {
                console.log(table, "confirmed table");
                return (
                    <View 
                        style={{flex: 1, flexDirection: 'row',justifyContent: 'center', margin: 10 * heightRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold, borderRadius: 5 * widthRatioProMax}}
                        key={index}>
                        <View style={styles.textViewContainer}>
                            <Text style={{
                                color: Colors.textColorGold,
                                fontFamily: Fonts.mainFontReg,
                                justifyContent: 'center',
                                marginHorizontal: 25 * widthRatioProMax
                            }}>{table.id}</Text>
                        </View>
                        <View style={styles.textViewContainer}>
                            <Text style={{
                                color: Colors.textColorGold,
                                fontFamily: Fonts.mainFontReg,
                                justifyContent: 'center',
                                marginHorizontal: 25 * widthRatioProMax
                            }}>{table.type}</Text>
                        </View>
                        <View style={styles.textViewContainer}>
                            <Text style={{
                                color: Colors.textColorGold,
                                fontFamily: Fonts.mainFontReg,
                                justifyContent: 'center',
                                marginHorizontal: 25 * widthRatioProMax
                            }}>${table.minimum}</Text>
                        </View>
                        <View style={styles.textViewContainer}>
                            <Text style={{
                                color: Colors.textColorGold,
                                fontFamily: Fonts.mainFontReg,
                                justifyContent: 'center',
                                marginHorizontal: 25 * widthRatioProMax
                            }}>{table.fits}</Text>
                        </View>
                    </View>
                );
            })
        }

    </ScrollView>)
}

const styles = StyleSheet.create({
    informationSectionContainer: {
        marginTop: 30 * heightRatioProMax,
        width: '85%',
        marginBottom: 30 * heightRatioProMax,
        borderWidth: 1 * widthRatioProMax,
        borderColor: Colors.gold,
        borderRadius: 5
    },
    textLabelDescriptionStyle: {
        marginLeft: 15 * widthRatioProMax,
        fontFamily: Fonts.mainFontReg,
        color: Colors.textColorGold

    },
    textViewContainer: {
        marginBottom: 20 * heightRatioProMax,
        marginTop: 20 * heightRatioProMax
    }
})

export default TableInformationSectionComp;