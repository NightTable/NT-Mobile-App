// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Platform,
    Text,
    StyleSheet}  from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const WhiteBubbleLayoutComp = (props) => {


    return (<View style={[styles.whiteBubbleLayoutContainer, styles.whiteBubbleLayoutShadowStyle]}>
        {props.children}
    </View>)
}

const styles = StyleSheet.create({
    whiteBubbleLayoutContainer: {
        height: Platform.OS === 'ios' ? 500 * heightRatioProMax : 550 * heightRatioProMax,
        borderRadius: 80 * heightRatioProMax,
        backgroundColor: Colors.white,
        flexDirection: 'column',
        alignItems: 'center'
    },
    whiteBubbleLayoutShadowStyle: {
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 5
    }
})



export default WhiteBubbleLayoutComp;