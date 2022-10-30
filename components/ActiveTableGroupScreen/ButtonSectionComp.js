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
    TouchableOpacity} from 'react-native';

import { Colors } from '../../colors/Colors';

import blackPencilImage from '../../assets/pencilpick.png';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const ButtonSectionComp = (props) => {

    return (<View style={{
        marginTop: 60 * heightRatioProMax,
        flexDirection: 'column'
    }}>
        <View>
            <View style={{
                borderRadius: 10 * heightRatioProMax,
                backgroundColor: Colors.black,
                height: 100 * heightRatioProMax,
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 10*heightRatioProMax,
                borderColor: Colors.gold,
                justifyContent: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flex: 6
                    }}>
                        <Text style={{
                            marginLeft: 20 * widthRatioProMax,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold,
                            fontSize: 25 * heightRatioProMax
                        }}> your share: ${props.share}</Text>
                    </View>
                    <View style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={props.onPencilClick}>
                            <Image 
                                style={{
                                    width: 50 * heightRatioProMax,
                                    height: 50 * heightRatioProMax
                                }}
                                source={blackPencilImage}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 10 * heightRatioProMax,
        }}>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    height: 50 * heightRatioProMax,
                    backgroundColor: Colors.orange,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10*heightRatioProMax
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white
                    }}>remove participants</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={props.onAddParticipantPress} style={{
                    backgroundColor: Colors.green,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    borderRadius: 10*heightRatioProMax
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white
                    }}>add participants</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            marginTop: 10 * heightRatioProMax,
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={props.onLeaveGroupPress} style={{
                    backgroundColor: Colors.red,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    borderRadius: 10*heightRatioProMax
                }}>
                    <Text style={{
                        color: Colors.red,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white
                    }}>leave group</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity 
                onPress={props.onEndOutingButtonPress}
                style={{
                    backgroundColor: Colors.gold,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    height: 50 * heightRatioProMax,
                    borderRadius: 10*heightRatioProMax
                }}>
                    <Text style={{
                        color: Colors.orange,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>end outing</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}

export default ButtonSectionComp;