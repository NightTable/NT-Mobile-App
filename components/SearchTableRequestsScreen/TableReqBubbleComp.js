// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

import { widthRatioProMax, heightRatioProMax } from '../../dimensions/Dimensions';


const TableReqBubbleComp = (props) => {


    return (
        <TouchableOpacity 
        onPress={props.onReqBubblePress}
        style={[{
            marginTop: 5 * widthRatioProMax,
            width: '100%',
            flexDirection: 'row',
            height: 60 * heightRatioProMax,
            borderRadius: 12 * heightRatioProMax,
            backgroundColor: Colors.white,
            alignItems: 'center'
        },  {
            shadowColor: Colors.black,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 3,
            shadowOpacity: 0.2,
            elevation: 5
    }]}>
            <View style={{
                flex: 5,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image 
                style={{
                    marginLeft: 10 * widthRatioProMax,
                    width: 30 * heightRatioProMax,
                    height: 30 * heightRatioProMax,
                    borderRadius: 15 * heightRatioProMax,
                    marginRight: 8 * widthRatioProMax,
                }}
                source={props.imageObj}></Image>
                <Text style={styles.requestLabelText}>{props.organizer}</Text>
            </View>
            <View style={{
                flex: 3
            }}>
                <Text style={styles.requestLabelText}>{props.name}</Text>
            </View>
            <View style={{
                flex: 3
            }}>
                <Text style={styles.requestLabelText}>{props.size}</Text>
            </View>
            <View style={{
                flex: 3
            }}>
                <Text style={{
                    ...styles.requestLabelText,
                    color: Colors.red}}>{props.available}</Text>
            </View>
            <View style={{
                flex: 3
            }}>
                <Text style={{
                    ...styles.requestLabelText,
                    color: Colors.green}}>{props.taken}</Text>
            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    requestLabelText: {
        textAlign: 'center',
        fontFamily: Fonts.mainFontReg,
        fontSize: 11 * widthRatioProMax
    }
});

export default TableReqBubbleComp;