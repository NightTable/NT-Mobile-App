// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { View, 
    Text, 
    StyleSheet
 } from 'react-native';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import { heightRatioNorm } from '../dimensions/Dimensions';

const PhotosNavigator = () => {


    return (
        <View style={styles.container}>
            <View style={styles.clubListContainer}>
                <Text style={styles.text}>Photos Navigator in Progress</Text>
            </View>
        </View>    
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    clubListContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 400 * heightRatioNorm
    },
    text: {
        fontFamily: Fonts.mainFontBold,
        fontSize: 20,
        color: Colors.purple
    }
})

export default PhotosNavigator;