/*

If participant type is current, and if request type is pnsl, don't display pencil
If participant type is current, and reqquest type is snpl, display pencil

If participant is pending, display pencil

*/

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

    const isExternalUser = props.isExternalUser
    console.log(props.contribution, props.email || props.phone, "external user or not")

    return (
        <View style={styles.container}>
            {props.isExternalUser ?
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>{props.email || "+"+props.phone}
                    </Text>
                </View> : 
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    
                    <TouchableOpacity
                        onPress={props.seeProfile}>
                        <Image 
                            style={{
                                marginRight: 10 * widthRatioProMax,
                                width: 50 * heightRatioProMax,
                                height: 50 * heightRatioProMax,
                                borderRadius: 25 * heightRatioProMax
                            }}
                            source={props.imageObj}></Image>
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>{props.name}
                    </Text>
                </View>
            }
            
                
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        marginRight: 10 * widthRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>${props.contribution}</Text>
                    <TouchableOpacity
                        onPress={() => props.modifyFee(props.index)}>
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
        backgroundColor: Colors.gold,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ParticipantInfoComp;
