// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import { 
    View, 
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhiteBubbleLayoutComp = (props) => {

    return (<View style={styles.container}>
        {props.children}
    </View>)
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15 * heightRatioProMax,
        height: 400 * heightRatioProMax,
        borderRadius: 50 * heightRatioProMax,
        backgroundColor: Colors.white,
        flexDirection: 'column',
        alignItems: 'center',
        width: '95%'
    }
});

export default WhiteBubbleLayoutComp;