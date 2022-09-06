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
                backgroundColor: Colors.white,
                height: 100 * heightRatioProMax,
                alignItems: 'center',
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
                            color: Colors.purple,
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
                    backgroundColor: Colors.white,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: Colors.red,
                    borderWidth: 1
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.red
                    }}>remove participants</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={props.onAddParticipantPress} style={{
                    backgroundColor: Colors.white,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    borderColor: Colors.green,
                    borderWidth: 1
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.green
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
                    backgroundColor: Colors.white,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    borderColor: Colors.red,
                    borderWidth: 1
                }}>
                    <Text style={{
                        color: Colors.red,
                        fontFamily: Fonts.mainFontReg
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
                    backgroundColor: Colors.white,
                    width: '93%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50 * heightRatioProMax,
                    borderColor: Colors.orange,
                    borderWidth: 1
                }}>
                    <Text style={{
                        color: Colors.orange,
                        fontFamily: Fonts.mainFontReg
                    }}>end outing</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}

export default ButtonSectionComp;