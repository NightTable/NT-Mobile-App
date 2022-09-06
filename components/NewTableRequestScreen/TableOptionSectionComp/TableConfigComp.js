// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const TableConfigComp = (props) => {


    return (<TouchableOpacity style={[
        {...styles.configCompContainer,
        borderColor: props.selectedId === props.id ? Colors.lightGreen : null,
        borderWidth: props.selectedId === props.id ? 1 : 0,},
        styles.configCompContainerShadow]} onPress={() => props.onTableConfigPress(props.id)}>
        <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                textAlign: 'center',
                flexDirection: 'column',
                fontFamily: Fonts.mainFontReg,
                width: '80%'
            }}>{props.type}</Text>
        </View>
        <View style={{
            flex: 2
        }}>
            <Text style={{
                textAlign: 'center',
                fontFamily: Fonts.mainFontReg
            }}>${props.price}</Text>
        </View>
        <View style={{
            flex: 2
        }}>
            <Text style={{
                textAlign: 'center',
                fontFamily: Fonts.mainFontReg,
            }}>fits {props.size}</Text>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({

    configCompContainer: {
        marginTop: 1 * heightRatioProMax,
        marginBottom: 1 * heightRatioProMax,
        width: '100%',
        borderRadius: 8 * heightRatioProMax,
        flexDirection: 'row',
        height: 50 * heightRatioProMax,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.greyMedium
    },
    configCompContainerShadow: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 6
    }
});

export default TableConfigComp; 

