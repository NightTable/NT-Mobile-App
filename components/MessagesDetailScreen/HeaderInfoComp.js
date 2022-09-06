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
    Image } from 'react-native';

import { Colors } from '../../colors/Colors';

import { heightRatioProMax, widthRatioProMax, windowHeight } from '../../dimensions/Dimensions';

import sampleGuyImage from '../../assets/younguy2.jpeg';
import { Fonts } from '../../fonts/Fonts';

const HeaderInfoComp = (props) => {

    const handleBlockUserButtonPress = () => {
        props.onBlockButtonPress();
    };

    return (<View style={{
        marginTop: 10 * heightRatioProMax,
        flexDirection: 'row',
        height: 200 * heightRatioProMax,
        marginBottom: 15 * heightRatioProMax,
    }}>
        <View style={{
            height: '100%',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={[{
                shadowColor: Colors.black,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 3,
                shadowOpacity: 0.4,
                elevation: 10,
                backgroundColor: Colors.greyLight,
                borderRadius: 85 * heightRatioProMax,
            }]}>
                <Image 
                    style={[{
                        width: 170 * heightRatioProMax,
                        height: 170 * heightRatioProMax,
                        borderRadius: 85 * heightRatioProMax
                    }]}
                    source={sampleGuyImage}></Image>
            </View>
        </View>
        <View style={{
            height: '100%',
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <View style={{
                marginTop: 15 * heightRatioProMax,
                marginRight: 20 * widthRatioProMax,
            }}>
                <Text style={{
                    marginBottom: 10 * heightRatioProMax,
                    textAlign: 'right',
                    fontSize: 18 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg
                }}>your messages with: </Text>
                <Text style={{
                    textAlign: 'right',
                    fontSize: 18 * heightRatioProMax,
                    fontFamily: Fonts.mainFontBold
                }}>{props.name}</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10 * heightRatioProMax,
                width: '100%'
            }}>
                <TouchableOpacity 
                onPress={handleBlockUserButtonPress}
                style={{
                    backgroundColor: Colors.white,
                    height: 35 * heightRatioProMax,
                    width: '65%',
                    borderRadius: 5 * heightRatioProMax,
                    borderColor: Colors.red,
                    borderWidth: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: Colors.red,
                        fontFamily: Fonts.mainFontReg
                    }}>block user</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}

export default HeaderInfoComp;