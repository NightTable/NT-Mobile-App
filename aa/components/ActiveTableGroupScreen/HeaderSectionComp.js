// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    StyleSheet,
    Image} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import janelleMayPic from '../../assets/person.jpeg';

const HeaderSectionComp = (props) => {

    return (<View style={{
        width: '100%',
        flexDirection: 'row',
        height: 250 * widthRatioProMax,
    }}>
        <View style={{
            flexDirection: 'column',
            flex: 2,
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: Colors.black,
                width: '88%',
                borderRadius: 5 * heightRatioProMax,
                marginTop: 50 * heightRatioProMax,
                height: 60 * heightRatioProMax,
                justifyContent: 'center',
                paddingVertical: 10 * heightRatioProMax,
            }}>
                <Text style={{
                    marginLeft: 10 * widthRatioProMax,
                    textAlign: 'left',
                    color: Colors.gold,
                    lineHeight: 20 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg
                }}>organized by:{"\n"}<Text style={{
                    fontFamily: Fonts.mainFontBold
                }}>Janelle May</Text></Text>
            </View>
            <View style={{
                marginTop: 5 * heightRatioProMax,
            }}>
                <Image
                    style={{
                        width: 130 * heightRatioProMax,
                        height: 130 * heightRatioProMax,
                        borderRadius: (125 / 2) * heightRatioProMax,
                    }}
                    source={janelleMayPic}></Image>
            </View>
        </View>
        <View style={{
            flexDirection: 'column',
            flex: 2,
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: Colors.black,
                marginTop: 50 * heightRatioProMax,
                height: 190 * heightRatioProMax,
                width: '90%',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 15 * heightRatioProMax,
            }}>
                <View style={styles.headerTextInfoContainer}>
                    <Text style={{
                        textAlign: 'left',
                        color: Colors.gold,
                        fontFamily: Fonts.mainFontReg,
                    }}>your night at:{"\n"}<Text style={{
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.gold,
                    }}>the grand</Text></Text>
                </View>
                <View style={styles.headerTextInfoContainer}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        marginLeft: 10 * widthRatioProMax,
                        color: Colors.gold
                    }}>table size: {props.tableReqObj.size} </Text>
                </View>
                <View style={styles.headerTextInfoContainer}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        marginLeft: 10 * widthRatioProMax,
                        color: Colors.gold
                    }}>price: ${props.tableReqObj.price}</Text>
                </View>
                <View style={styles.headerTextInfoContainer}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        marginLeft: 10 * widthRatioProMax,
                        color: Colors.gold
                    }}>type: {props.tableReqObj.type}</Text>
                </View>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    headerTextInfoContainer: {
        width: '80%',
        flexDirection: 'row',
        marginTop: 10 * heightRatioProMax,
    }
})

export default HeaderSectionComp;