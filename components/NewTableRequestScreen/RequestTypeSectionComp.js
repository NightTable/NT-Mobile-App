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
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';



const RequestTypeSectionComp = (props) => {


    return (<View style={styles.requestTypeContainerComp}>
        <View style={{
            alignSelf: 'flex-start',
            marginTop: 20 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold,
                fontSize: 20 * heightRatioProMax,

            }}>Select Request Type: </Text>
        </View>
        <View style={styles.costTypeButtonContainer}>
            <View style={styles.snplButtonContainer}>
                <TouchableOpacity style={[
                    props.selectedRequestType === 'snpl' ? styles.selectedButtonStyle : styles.notSelectedButtonStyle, {
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowRadius: 2,
                    shadowOpacity: 0.5,
                    elevation: 6
                }]} onPress={props.onRequestTypeChange}>
                    <Text style={{
                        color: props.selectedRequestType === 'snpl' ? Colors.black : Colors.buttonColorGold,
                        fontFamily: Fonts.mainFontReg
                    }}>{props.isQuestionButtonSelected ? 'split-now-pay-later' : 'snpl'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.pnslButtonContainer}>
                <TouchableOpacity style={[
                        props.selectedRequestType === 'pnsl' ? styles.selectedButtonStyle : styles.notSelectedButtonStyle, {
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 0},
                        shadowRadius: 2,
                        shadowOpacity: 0.5,
                        elevation: 6
                }]} onPress={props.onRequestTypeChange}>
                    <Text style={{
                        color: props.selectedRequestType === 'pnsl' ? Colors.black : Colors.textColorGold,
                        fontFamily: Fonts.mainFontReg
                    }}>{props.isQuestionButtonSelected ? 'pay-now-split-later' : 'pnsl'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.questionButtonContainer}>
            <TouchableOpacity onPress={props.onQuestionMarkButtonToggle} style={[{
                width: '10%',
                height: '100%',
                borderRadius: 7 * heightRatioProMax,
                justifyContent: 'center',
                borderColor: Colors.orange,
                borderWidth: 1,
                backgroundColor: Colors.greyMedium
            }, {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 2,
                shadowOpacity: 0.5,
                elevation: 6
            }]}>
                <Text style={{
                    textAlign: 'center'
                }}>?</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    requestTypeContainerComp: {
        width: '85%',
        // backgroundColor: 'green',
        flexDirection: 'column',
        marginBottom: 20 * heightRatioProMax
    },
    costTypeButtonContainer: {
        flexDirection: 'row',
        height: 75 * heightRatioProMax
    },
    snplButtonContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pnslButtonContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedButtonStyle: {
        backgroundColor: Colors.textColorGold,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7 * heightRatioProMax,
        width: 160 * widthRatioProMax,
        height: 40 * heightRatioProMax,
        borderColor: Colors.textColorGold,
        borderWidth: 1
    },
    notSelectedButtonStyle: {
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7 * heightRatioProMax,
        width: 160 * widthRatioProMax,
        height: 40 * heightRatioProMax,
        borderColor: Colors.textColorGold,
        borderWidth: 1
    },
    questionButtonContainer: {
        height: 30 * heightRatioProMax,
        justifyContent: 'center',
        flexDirection: 'row'
    }
})

export default RequestTypeSectionComp;