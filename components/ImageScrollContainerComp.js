// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Image, StyleSheet, Platform } from 'react-native';

import { 
    widthRatioProMax, 
    heightRatioProMax,
    windowWidth } from '../dimensions/Dimensions';

import { Colors } from '../colors/Colors';

const ImageScrollContainerComp = (props) => {


    return (
        <View style={{
            width: windowWidth,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>
            <View style={styles.imageWrapper}>
                <Image 
                source={props.image}
                style={{
                    height: '100%',
                    width: '100%'
                }}></Image>
                <View style={styles.imageWrapperCurve}>
                    <Image
                        source={require('../assets/curvedpicexample.png')}
                        style={{
                            top: 0,
                            left: 280 * widthRatioProMax,
                            width: 310 * widthRatioProMax,
                            height: 200 * heightRatioProMax
                        }}
                    ></Image>
                </View>
            </View>
        </View>
        );
};

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200 * heightRatioProMax,
        width: '90%',
        position: 'relative',
        backgroundColor: Colors.greyLight,
        overflow: 'hidden',
        marginLeft: Platform.OS === 'android' ? -2 * widthRatioProMax : -2 * widthRatioProMax
    },
    imageWrapperCurve: {
        position: 'absolute',
        zIndex: 0
    },
});

export default ImageScrollContainerComp;