// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text,
    StyleSheet } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhiteBubbleLayoutComp = (props) => {


    return (<View style={styles.mainContainer}>
        {props.children}
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 30 * heightRatioProMax,
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 75 * heightRatioProMax
    }
})

export default WhiteBubbleLayoutComp;