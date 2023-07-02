// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import { 
    View, 
    Text,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const WaitingInfoLabelComp = (props) => {

    return (<View style={styles.container}>
        <Text style={{
            color: Colors.white,
            fontFamily: Fonts.mainFontReg,
            color: Colors.textColorGold
        }}>Waiting for <Text style={{
            color: Colors.orange
        }}>3</Text>  more people...</Text>
    </View>)

};

const styles = StyleSheet.create({
    container: {
        //marginTop: 10 * heightRatioProMax,
        backgroundColor: Colors.black,
        height: 50 * heightRatioProMax,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default WaitingInfoLabelComp;