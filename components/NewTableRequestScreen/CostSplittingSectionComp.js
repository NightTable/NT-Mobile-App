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
    Image,
    StyleSheet,
    Platform} from 'react-native';

import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import filledInPurpleBoxImg from '../../assets/filledinpurplebox.png';
import unfilledInPurpleBoxImg from '../../assets/unfilledinbiggerborder.png';

const CostSplittingSectionComp = (props) => {


    return (<View style={styles.costSplittingContainer}>
        <Text style={{
            fontSize: 18 * heightRatioProMax,
            fontFamily: Fonts.mainFontReg
        }}>cost-splitting:</Text>
        <View style={{
            width: '100%',
            marginTop: 20 * heightRatioProMax,
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <View style={styles.agreementTextContainer}>
                <View>
                    <Text style={{
                        fontSize: 15 * heightRatioProMax,
                        lineHeight: 18 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    }}>You have chosen the <Text style={{
                        fontFamily: Fonts.mainFontBold,
                        fontSize: 15 * heightRatioProMax,
                        color: Colors.purple
                    }}>pay-now-split-later </Text>
                    method. This means that you are reserving a table and are responsible
                    for paying the full cost of the table initially upon creation of the request.</Text>
                </View>
                <View style={{
                    marginTop: 20 * heightRatioProMax,
                }}>
                    <Text style={{
                        fontSize: 15 * heightRatioProMax,
                        lineHeight: 18 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    }}>By selecting the create request button you are agreeing to paying
                        the full non-refundable amount of <Text style={{
                            fontSize: 15 * heightRatioProMax,
                            color: Colors.red
                        }}>$800</Text>.
                    </Text>
                </View>
                <View style={{
                    marginTop: 20 * heightRatioProMax,
                }}>
                    <Text style={{
                        fontSize: 15 * heightRatioProMax,
                        lineHeight: 18 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg
                    }}>You will be refunded small amounts incrementally
                    as more people join your table, such as invited participants or
                    new people joining in the polling or active table group room.
                    </Text>
                </View>
            </View>
        </View>
        <View style={{
            marginTop: 30 * heightRatioProMax,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={props.onTermsAgreementPress} style={{
                marginRight: 10 * widthRatioProMax,
                height: 50 * heightRatioProMax,
                width: 50 * widthRatioProMax,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                style={{
                    width: Platform.OS === 'ios' ? 40 * heightRatioProMax : 50 * heightRatioProMax,
                    height: Platform.OS === 'ios' ? 30 * heightRatioProMax : 40 * heightRatioProMax
                }}
                source={props.isCheckboxSelected ? filledInPurpleBoxImg : unfilledInPurpleBoxImg}></Image>
            </TouchableOpacity>
            <View>
                <Text style={{
                    fontFamily: Fonts.mainFontReg
                }}>i agree with the above statement</Text>
            </View>
        </View>
    </View>)

};

const styles = StyleSheet.create({
    costSplittingContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40 * heightRatioProMax,
        width: '85%'
    },
    agreementTextContainer: {
        width: '80%',
        flexDirection: 'column',
        color: Colors.black
    }
})

export default CostSplittingSectionComp;



