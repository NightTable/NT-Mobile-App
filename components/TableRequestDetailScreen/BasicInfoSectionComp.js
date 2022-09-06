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
    StyleSheet,
    TouchableOpacity} from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import WhiteBubbleLayoutComp from '../../components/TableRequestDetailScreen/WhiteBubbleLayoutComp';

import { Colors } from '../../colors/Colors';

const BasicInfoSectionComp = (props) => {

    return (<View style={styles.basicInfoSectionContainer}>
        <Text style={{
            marginBottom: 20 * heightRatioProMax,
            marginLeft: 20 * widthRatioProMax,
            fontFamily: Fonts.mainFontReg,
            fontSize: 15 * heightRatioProMax,
        }}>basic info</Text>
        <WhiteBubbleLayoutComp>
            <View style={styles.innerTextContainer}>
                <Text style={styles.detailTextLabelStyle}>table size:  <Text style={{
                    fontFamily: Fonts.mainFontBold
                }}>{props.tableObj.tableSize}</Text></Text>
                <Text style={styles.detailTextLabelStyle}>table type:  <Text
                style={{
                    fontFamily: Fonts.mainFontBold
                }}>{props.tableObj.tableType}</Text></Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.detailTextLabelStyle}>request type:  <Text style={{
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.orange
                    }}>{props.tableObj.requestType}</Text></Text>
                    <TouchableOpacity style={{
                        borderRadius: 5 * heightRatioProMax,
                        marginLeft: 7 * widthRatioProMax,
                        paddingHorizontal: 10 * widthRatioProMax,
                        height: 20 * heightRatioProMax,
                        backgroundColor: Colors.greyMedium
                    }}>
                        <Text>?</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.detailTextLabelStyle}>table price:  <Text style={{
                    fontFamily: Fonts.mainFontBold
                }}>${props.tableObj.tablePrice}</Text> </Text>
                <Text style={styles.detailTextLabelStyle}>minimum cost:  <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    color: Colors.red
                }}>${props.tableObj.costContribution}</Text></Text>
                <View style={styles.differentCostButtonContainer}>
                    <TouchableOpacity style={{
                        width: '60%',
                        borderWidth: 1,
                        borderRadius: 10 * heightRatioProMax,
                        borderColor: Colors.purple,
                        padding: 13 * heightRatioProMax,
                    }}>
                        <Text style={{
                            color: Colors.purple,
                            fontFamily: Fonts.mainFontReg,
                            textAlign: 'center'
                        }}>request different cost</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.detailTextLabelStyle}>available seats: <Text
                style={{
                    color: Colors.green,
                    fontFamily: Fonts.mainFontBold
                }}>{props.tableObj.availableSeats}</Text></Text>
                <View style={styles.additionalAmountContainer}>
                    <View style={{
                        flex: 4
                    }}>
                        <Text style={styles.detailTextLabelStyle}>additional amount: </Text>
                    </View>
                    <View style={{
                        marginLeft: 7 * widthRatioProMax,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        flex: 2,
                    }}>
                        <TextInput 
                            style={{
                                textAlign: 'center',
                                fontFamily: Fonts.mainFontReg,
                            }}
                            placeholder={"$0"}></TextInput>
                    </View>
                    <View style={{
                        flex: 3
                    }}>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: Colors.purple,
                            padding: 10 * heightRatioProMax,
                            borderRadius: 10 * heightRatioProMax,
                        }}>
                            <Text style={{
                                color: Colors.purple,
                                textAlign: 'center',
                                fontFamily: Fonts.mainFontReg
                            }}>update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.additionalAmountDivider}></View>
                <Text style={{
                    marginTop: 15 * heightRatioProMax,
                    fontFamily: Fonts.mainFontBold,
                    fontSize: 18 * heightRatioProMax,
                }}>cost to you: <Text style={{
                    color: Colors.red
                }}>${props.tableObj.costContribution}</Text> </Text>
            </View>
        </WhiteBubbleLayoutComp>
    </View>)
}

const styles = StyleSheet.create({
    basicInfoSectionContainer: {
        marginTop: 20 * heightRatioProMax,
        flexDirection: 'column',
        width: '100%'
    },
    detailTextLabelStyle: {
        marginTop: 10 * heightRatioProMax,
        fontFamily: Fonts.mainFontReg,
        fontSize: 15 * heightRatioProMax,
        marginBottom: 8 * heightRatioProMax
    },
    innerTextContainer: {
        marginTop: 40 * heightRatioProMax,
        width: '80%'
    },
    additionalAmountDivider: {
        width: '100%',
        marginTop: 20 * heightRatioProMax,
        marginBottom: 10 * heightRatioProMax,
        height: 1 * heightRatioProMax,
        backgroundColor: Colors.purple,
    },  
    differentCostButtonContainer: {
        marginTop: 20 * heightRatioProMax,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10 * heightRatioProMax
    },
    additionalAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    }
})

export default BasicInfoSectionComp;