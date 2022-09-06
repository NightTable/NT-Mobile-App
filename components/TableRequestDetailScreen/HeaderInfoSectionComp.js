// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text,
    Image,
    TouchableOpacity,
    ImageBackground, 
    TouchableOpacityBase} from 'react-native';

import { Dimensions, heightRatioProMax, widthRatioNorm, widthRatioProMax } from '../../dimensions/Dimensions';

import sampleNightClubPic from '../../assets/samplenightclub.jpeg';
import sampleGirl from '../../assets/younggirl1.jpeg';
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import instaLogo from '../../assets/instalogo.png';

const HeaderInfoSectionComp = (props) => {


    return (<View>
        <ImageBackground 
            style={{
                width: '100%',
                flexDirection: 'column',
                height: 250 * heightRatioProMax
            }}
            source={sampleNightClubPic}>
                <View style={{
                    width: '100%',
                    flex: 3
                }}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column-reverse',
                    }}>
                        <View style={{
                            marginLeft: 5 * widthRatioProMax,
                            borderRadius: 10 * heightRatioProMax,
                            width: '70%',
                            height: '60%',
                            justifyContent: 'center',
                            backgroundColor: 'black'
                        }}>
                           <Text style={{
                               marginLeft: 10 * widthRatioProMax,
                               fontSize: 15 * heightRatioProMax,
                               color: Colors.white,
                               fontFamily: Fonts.mainFontReg
                           }}>organizer: <Text style={{
                                fontFamily: Fonts.mainFontBold
                           }}>Janelle May</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 7,
                    flexDirection: 'row',
                    width: '100%',
                    height: 100 * heightRatioProMax
                }}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        flex: 2,
                    }}>
                        <TouchableOpacity 
                        onPress={props.onImagePress}
                        style={{

                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Image 
                                style={{
                                    borderRadius: 10 * heightRatioProMax,
                                    marginTop: 5 * heightRatioProMax,
                                    width: '95%',
                                    height: '95%'
                                }}
                                source={sampleGirl}></Image>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 2,
                        flexDirection: 'column',

                    }}>
                        <View style={{
                            marginTop: 10 * heightRatioProMax,
                            flex: 4,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: Colors.white,
                                height: 52 * heightRatioProMax,
                                width: 52 * heightRatioProMax,
                                justifyContent: 'center', 
                                alignItems: 'center',
                                borderRadius: 9 * heightRatioProMax,
                            }}>
                                <Image 
                                    style={{
                                        width: 50 * heightRatioProMax,
                                        height: 50 * heightRatioProMax
                                    }}
                                    source={instaLogo}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderRadius: 5 * heightRatioProMax,
                                paddingTop: 5 * heightRatioProMax,
                                paddingBottom: 5 * heightRatioProMax,
                                paddingLeft: 8 * widthRatioProMax,
                                paddingRight: 8 * widthRatioProMax,
                                marginLeft: 10 * widthRatioProMax,
                                backgroundColor: Colors.white
                            }}>
                                <Text style={{
                                    fontFamily: Fonts.mainFontReg,
                                    color: Colors.orange
                                }}>browse photos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 8,
                            flexDirection: 'column-reverse',
                        }}>
                            <View style={{

                                flexDirection: 'row-reverse'
                            }}>
                                <View style={{
                                    width: '80%',
                                    marginBottom: 6 * heightRatioProMax,
                                    borderRadius: 8 * heightRatioProMax,
                                    justifyContent: 'center',
                                    height: 40 * heightRatioProMax,
                                    backgroundColor: Colors.purple
                                }}>
                                    <Text style={{
                                        marginLeft: 15 * widthRatioProMax,
                                        textAlign: 'left',
                                        fontFamily: Fonts.mainFontBold,
                                        color: Colors.white,
                                        fontSize: 18 * heightRatioProMax,
                                    }}>the grand</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
        </ImageBackground>
    </View>)

};

export default HeaderInfoSectionComp;

