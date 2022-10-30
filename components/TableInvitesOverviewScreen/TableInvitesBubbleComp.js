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
    TouchableOpacity,
    Image} from 'react-native';

import { heightRatioNorm, widthRatioNorm } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';


const TableInvitesBubbleComp = (props) => {


    return (   
        <TouchableOpacity style={[{
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: 10 * heightRatioNorm,
            backgroundColor: Colors.gold,
            marginLeft: 15*widthRatioNorm,
            marginRight: 15*widthRatioNorm,
            height: 90 * heightRatioNorm,
            marginBottom: 5 * heightRatioNorm,
            marginTop: 5 * heightRatioNorm,
        }, {
            shadowColor: Colors.black,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 2,
                shadowOpacity: 0.5,
                elevation: 5
        }]}
        onPress={props.handlePress}>
            <View style={{
                flexDirection: 'column',
                marginLeft: 5*widthRatioNorm,
                flex: 2
            }}>
                <View style={{marginTop: 10*heightRatioNorm, marginBottom: 10*heightRatioNorm, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{
                        fontSize: 20 * heightRatioNorm,
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.black
                    }}>{props.tableName}
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <Image style={{

                        
                        width: 40 * heightRatioNorm,
                        height: 40 * heightRatioNorm,
                        borderRadius: 80 * heightRatioNorm,
                    }} source={props.image}>
                    </Image>
                    <View style={{justifyContent: 'center', marginLeft: 5*widthRatioNorm}}>
                        <Text style={{
                            fontSize: 12 * heightRatioNorm,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.black,
                            
                        }}>{props.name}
                        </Text>
                    </View>

                </View>

            </View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flex: 2
            }}>
                <View style={{justifyContent: 'flex-end', marginTop: 10*heightRatioNorm, marginBottom: 20*heightRatioNorm, width: '100%' }}>
                    <Text style={{
                        fontSize: 12 * heightRatioNorm,
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.black,
                        textAlign: 'right',
                        marginRight: 10*widthRatioNorm
                    }}>{props.time}, {props.payType}, {props.friends}
                    </Text>
                </View>
                <View style={{justifyContent: 'flex-end', marginTop: 10*heightRatioNorm, width: '100%'}}>
                    <Text style={{
                        fontSize: 12 * heightRatioNorm,
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.black,

                        textAlign: 'right',
                        marginRight: 10*widthRatioNorm,
                        marginBottom: 20*heightRatioNorm

                        
                    }}>placed on {props.date} {props.time}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: Colors.black,
       flex: 1
    },
})

export default TableInvitesBubbleComp;
