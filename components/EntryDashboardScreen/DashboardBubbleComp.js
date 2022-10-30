// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { Colors } from '../../colors/Colors'

import { View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';

import { Fonts } from '../../fonts/Fonts';

import { widthRatioProMax, heightRatioProMax } from '../../dimensions/Dimensions';


const DashboardBubbleComp = (props) => {

    const imageDimValue = 50 * heightRatioProMax;

    return (<TouchableOpacity 
    onPress={props.onBubblePress}
    style={styles.container}>
        <View style={{
            flex: 2
        }}>
            <View style={styles.imageContainer}>
                <Image 
                source={props.image}
                style={{
                    width: imageDimValue,
                    height: imageDimValue,
                    borderRadius: imageDimValue / 2,
                    borderColor: Colors.dashboardCompGrey,
                    borderWidth: 1
                }}></Image>
            </View>
        </View>
        <View style={{
            flex: 7,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Text style={{
                marginLeft: 5 * widthRatioProMax,
                fontFamily: Fonts.mainFontReg,
                fontSize: 18 * heightRatioProMax
            }}>{props.clubName}</Text>
        </View>
        <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text
            style={{
                fontFamily: Fonts.mainFontReg,
                fontSize: 18 * heightRatioProMax
            }}
            >{props.miles} mi</Text>
        </View>
    </TouchableOpacity>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.textColorGold,
        borderRadius: 10 * heightRatioProMax,
        flexDirection: 'row',
        height: 60 * heightRatioProMax,
        width: '95%',
        padding: 5 * widthRatioProMax,
        marginBottom: 5 * heightRatioProMax
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DashboardBubbleComp;