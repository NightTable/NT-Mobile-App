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
    TouchableOpacity} from 'react-native';
import { Colors } from '../../../colors/Colors';

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
                    color: Colors.white,
                    fontFamily: Fonts.mainFontReg
                }}>{props.email}</Text>
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
                    color: Colors.white,
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

    return (<View style={{
        borderRadius: 5 * heightRatioProMax,
        marginTop: 5 * heightRatioProMax,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.purple,
        height: isExternalUser ? 60 * heightRatioProMax : 75 * heightRatioProMax
    }}>
        {dynamicRowRender}
    </View>)

};

export default ParticipantBubbleComp;