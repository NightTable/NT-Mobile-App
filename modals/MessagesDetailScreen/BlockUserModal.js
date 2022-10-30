// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Platform, Text, Modal, TouchableOpacity } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const BlockUserModal = (props) => {

    return (<Modal 
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
            props.onHandleModalClose();
        }}>
        <View style={{
            height: windowHeight < 700 || Platform.OS === 'android' ? '120%' : '100%',
            width: '100%',
            backgroundColor: 'transparent',
            transform: [{
                translateY: windowHeight < 700 || Platform.OS === 'android' ? -70 * heightRatioProMax : 0,
            }],
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <View style={{
                height: '70%',
                borderColor: Colors.gold,
                borderRadius: 50 * heightRatioProMax,
                borderWidth: 1,
                backgroundColor: Colors.black,
                alignItems: 'center'
            }}>
                <View style={{
                    marginTop: 30 * heightRatioProMax,
                    width: '75%'
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold
                    }}>Are you sure you want to <Text style={{
                        color: Colors.red,
                        fontFamily: Fonts.mainFontBold
                    }}>jake tanner</Text>? This action will remove him from your friends list,
                    and you will not be able to receive invitations from him anymore</Text>
                </View>
                <View style={{
                    width: '100%',
                    marginTop: 30 * heightRatioProMax,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: '55%',
                        backgroundColor: Colors.orange,
                        height: 50 * heightRatioProMax,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10 * heightRatioProMax,
                    }} onPress={() => props.onHandleModalClose()}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg
                        }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 25 * heightRatioProMax,
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: '55%',
                        backgroundColor: Colors.red,
                        height: 50 * heightRatioProMax,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10 * heightRatioProMax,
                    }}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg
                        }}>Block Jake Tanner</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>)
}

export default BlockUserModal;