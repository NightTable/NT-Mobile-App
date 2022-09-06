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
    StyleSheet
} from 'react-native';

import { Colors } from '../../colors/Colors';
import blackPencilImg from '../../assets/pencilpick.png';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const ParticipantInfoComp = (props) => {


    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image 
                    style={{
                        marginRight: 10 * widthRatioProMax,
                        width: 50 * heightRatioProMax,
                        height: 50 * heightRatioProMax,
                        borderRadius: 25 * heightRatioProMax
                    }}
                    source={props.imageObj}></Image>
                <Text style={{
                    fontFamily: Fonts.mainFontReg
                }}>{props.name}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: Colors.purple,
                    marginRight: 10 * widthRatioProMax,
                    fontFamily: Fonts.mainFontReg
                }}>$100</Text>
                <TouchableOpacity>
                    <Image 
                        source={blackPencilImg}
                        style={{
                            width: 30 * heightRatioProMax,
                            height: 30 * heightRatioProMax
                        }}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10 * heightRatioProMax,
        marginTop: 10 * heightRatioProMax,
        paddingVertical: 10 * heightRatioProMax,
        paddingHorizontal: 10 * widthRatioProMax,
        width: '90%',
        backgroundColor: Colors.greyLight,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ParticipantInfoComp;

