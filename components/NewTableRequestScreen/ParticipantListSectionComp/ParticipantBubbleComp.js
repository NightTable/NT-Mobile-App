// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { 
    View, 
    Text, 
    Image,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
import { Colors } from '../../../colors/Colors';

import goldenCheckImage from '../../../assets/goldentickbox.png'
import whiteXCircleImage from '../../../assets/whitexcircle.png';
import { Fonts } from '../../../fonts/Fonts';
const ParticipantBubbleComp = (props) => {

    const isExternalUser = props.externalUser;

    let dynamicRowRender;

    if (isExternalUser) {
        dynamicRowRender = 
        (<React.Fragment>
            <View style={{
                flex: 8
            }}>
                <Text style={{
                    fontSize: 15 * heightRatioProMax,
                    marginLeft: 10 * widthRatioProMax,
                    fontFamily: Fonts.mainFontReg,
                    color: Colors.black
                }}>{(props.email === null && props.phone !== 0)? "+" + props.phone : props.email}</Text>
            </View>
            <TouchableOpacity onPress={() => props.localDeleteParticipantPress(props.id)} style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10 * widthRatioProMax,
                flex: 2
            }}>
                <Image 
                    style={{
                        width: 50 * widthRatioProMax,
                        height: 50 * heightRatioProMax
                    }}
                    source={whiteXCircleImage}></Image>
            </TouchableOpacity>
            </React.Fragment>
        )
    } else {
        dynamicRowRender = (<React.Fragment>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 2
            }}>
                <Image 
                style={{
                    width: 55 * heightRatioProMax,
                    borderRadius: (55 / 2) * heightRatioProMax, 
                    height: 55 * heightRatioProMax}}
                source={{uri: props.imageObj}}>
                </Image>
            </View>
            <View style={{
                flex: 5
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: Fonts.mainFontReg
                }}>{props.name}</Text>
            </View>
            <TouchableOpacity onPress={() => props.localDeleteParticipantPress(props.id)}  style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10 * widthRatioProMax,
                flex: 2
            }}>
                <Image 
                    style={{
                        width: 50 * widthRatioProMax,
                        height: 50 * heightRatioProMax
                    }}
                    source={whiteXCircleImage}></Image>
            </TouchableOpacity>
            </React.Fragment>
        )
    }

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={{
                borderRadius: 5 * heightRatioProMax,
                marginTop: 5 * heightRatioProMax,
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.gold,
                height: isExternalUser ? 60 * heightRatioProMax : 75 * heightRatioProMax
            }}>

                {dynamicRowRender}

            </View>
            <View style={{alignContent: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, marginLeft: 15 * widthRatioProMax, fontFamily: Fonts.mainFontReg}}> Set Joining Fee </Text>
                <TextInput
                    style={{color: Colors.gold, textAlign: 'center', marginVertical: 10 * heightRatioProMax, borderWidth: 1 * widthRatioProMax, borderBottomColor: Colors.gold, width: 200 * widthRatioProMax, justifyContent: 'center', fontSize: 20 * heightRatioProMax}}
                    placeholder={'$'}
                    onChangeText={(val) => props.changePartJoiningfee(props.key, val)}
                    value={`${props.joiningFee}`}/>
                <TouchableOpacity>
                    <Image
                        style={{
                            width: 40 * heightRatioProMax,
                            height: 40 * heightRatioProMax,
                        }}
                        source={goldenCheckImage}>
                    </Image>
                </TouchableOpacity>

            </View>

        </View>

        )

};

export default ParticipantBubbleComp;