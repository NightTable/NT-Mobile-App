// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Image } from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Fonts } from '../../../fonts/Fonts';

import { Colors } from '../../../colors/Colors';

import sampleGirl from '../../../assets/person.jpeg';

const HeaderInquiryComp = (props) => {

    return (<View style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }}>
        <View style={{
            width: '70%',
        }}>
            <Text style={{
                fontSize: 18 * heightRatioProMax,
                fontFamily: Fonts.mainFontBold,
                color: Colors.gold
            }}>Are you sure you want to leave this group as table organizer?</Text>
        </View>
        <View style={{
            width: '100%',
            alignItems: 'center'
        }}>
            <View style={{
                marginTop: 20 * heightRatioProMax,
                flexDirection: 'row',
                width: '95%',
                marginBottom: 10 * heightRatioProMax
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold
                    }}>organizer</Text>    
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold
                    }}>name</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold
                    }}>size</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: Colors.gold,
                height: 65 * heightRatioProMax,
                borderRadius: 10 * heightRatioProMax,
                flexDirection: 'row',
                width: '95%'
            }}>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginLeft: 5 * widthRatioProMax,
                        marginRight: 10 * widthRatioProMax
                    }}>
                        <Image
                            style={{
                                borderRadius: 25 * heightRatioProMax,
                                height: 50 * heightRatioProMax,
                                width: 50 * heightRatioProMax
                            }}
                             source={sampleGirl}></Image>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 13 * heightRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.black
                        }}>Janelle May </Text>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2
                }}>
                    <Text style={{
                        fontSize: 13 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>ziprave</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2
                }}>
                    <Text style={{
                        fontSize: 13 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black 
                    }}>9</Text>
                </View>
            </View>
        </View>
    </View>)
}

export default HeaderInquiryComp;