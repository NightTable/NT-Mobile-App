// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet } from 'react-native';

import purpleCheckMarkPic from '../../assets/purplecheckmark.png';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const AdditionalCostSectionComp = (props) => {

    return (<View style={styles.additionalCostSectionContainer}>
        <Text style={{
            fontSize: 18 * heightRatioProMax,
            fontFamily: Fonts.mainFontReg,
            color: Colors.textColorGold
        }}>your cost</Text>
        <View style={styles.costDescriptionContainer}>
            <View style={styles.costDescriptionTextContainer}>
                <Text style={{
                    lineHeight: 17,
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 15 * heightRatioProMax,
                    color: Colors.textColorGold
                }}>Assuming that your table
                    will be filled up at the end of the polling period,
                    your minimum share will be $100, would you like to
                    contribute more?
                </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.yesButtonContainer}>
                <TouchableOpacity onPress={props.onYesButtonPress} style={[
                    props.isDesiredAdditionalCost ? styles.selectedButtonStyle : styles.notSelectedButtonStyle, {
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowRadius: 2,
                    shadowOpacity: 0.5,
                    elevation: 6
                }]}>
                    <Text style={{
                        color: props.isDesiredAdditionalCost ? Colors.black : Colors.textColorGold,
                        fontFamily: Fonts.mainFontReg,
                    }}>yes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.noButtonContainer}>
                <TouchableOpacity onPress={props.onNoButtonPress} style={[
                    props.isDesiredAdditionalCost ? styles.selectedButtonStyle : styles.notSelectedButtonStyle , {
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 0},
                        shadowRadius: 2,
                        shadowOpacity: 0.5,
                        elevation: 6
                }]}>
                    <Text style={{
                        color: props.isDesiredAdditionalCost ? Colors.black : Colors.textColorGold,
                        fontFamily: Fonts.mainFontReg,
                    }}>no</Text>
                </TouchableOpacity>
            </View>
        </View>
        { props.isDesiredAdditionalCost ? <React.Fragment><View style={styles.additionalAmountLabelContainer}>
            <View style={{
                width: '80%',
            }}>
                <Text style={{
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 15 * heightRatioProMax,
                    color: Colors.textColorGold
                }}>additional amount:</Text>
            </View>
        </View>
        <View style={styles.inputCheckContainer}>
            <View style={{
                marginTop: 10 * heightRatioProMax,
                flexDirection: 'row',
                alignItems: 'center',
                width: '75%'
            }}>
                <View style={{
                    flex: 7
                }}>
                    <TextInput 
                    onChangeText={(text) => props.onAdditionaAmountInputChange(text)}
                    value={props.additionalAmountValue} style={{
                        textAlign: 'center',
                        width: '100%',
                        color: props.isAdditionalAmountSaved ? Colors.greyDark : Colors.purple,
                        fontSize: 20 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 1,
                        height: 50 * heightRatioProMax,
                        borderColor: Colors.textColorGold
                    }}></TextInput>
                </View>
                <TouchableOpacity 
                onPress={props.onSaveAdditionalAmount}
                style={{
                    flex: 2
                }}>
                    <Image 
                        style={{
                            width: 40 * heightRatioProMax,
                            height: 40 * heightRatioProMax
                        }}
                        source={purpleCheckMarkPic}></Image>
                </TouchableOpacity>
            </View>
        </View></React.Fragment> : null }
    </View>)
}

const styles = StyleSheet.create({
    additionalCostSectionContainer: {
        marginTop: 30 * heightRatioProMax,
        width: '85%'
    },
    costDescriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20 * heightRatioProMax,
        width: '100%'
    },
    costDescriptionTextContainer: {
        width: '80%',
        marginBottom: 20 * heightRatioProMax,

    },
    buttonContainer: {
        marginTop: 10 * heightRatioProMax,
        flexDirection: 'row',
        height: 50 * heightRatioProMax,

    }, 
    yesButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 2,

    },
    noButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 2
    },
    additionalAmountLabelContainer: {
        marginTop: 40 * heightRatioProMax,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputCheckContainer: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    selectedButtonStyle: {
        marginLeft: 40 * widthRatioProMax,
        height: '90%',
        width: '60%',
        flexDirection: 'column',
        borderColor: Colors.black,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10 * heightRatioProMax,
        backgroundColor: Colors.gold
    },
    notSelectedButtonStyle: {
        marginLeft: 40 * widthRatioProMax,
        height: '90%',
        width: '60%',
        flexDirection: 'column',
        borderColor: Colors.gold,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10 * heightRatioProMax,
        backgroundColor: Colors.black
    }
    
})



export default AdditionalCostSectionComp;