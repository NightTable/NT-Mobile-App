// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text, 
    StyleSheet,
    Image } from 'react-native';

import { Colors } from '../../colors/Colors';


import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const HeaderLabelComp = (props) => {

    return (
        <View style={styles.screenContainer}>
            <Image style={{
                width: 50 * heightRatioProMax,
                height: 50 * heightRatioProMax,
                borderRadius: 25 * heightRatioProMax
            }} source={props.orgImageObj}></Image>
            <View style={{
                marginLeft: 10 * widthRatioProMax,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontFamily: Fonts.mainFontReg,
                    textAlign: 'center',
                    color: Colors.textColorGold
                    }}>table request organized by</Text>
                <Text style={{
                    textAlign: 'left',
                    color: Colors.textColorGold,
                    fontFamily: Fonts.mainFontBold}}>{props.name}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    screenContainer: {
        borderWidth: 1,
        borderColor: Colors.textColorGold,
        height: 75 * heightRatioProMax,
        borderRadius: 12 * heightRatioProMax,
        padding: 10 * heightRatioProMax,
        backgroundColor: Colors.black,
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
    }
});

export default HeaderLabelComp; 

