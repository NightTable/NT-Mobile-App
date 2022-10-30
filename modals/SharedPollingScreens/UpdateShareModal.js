// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';

import { View, Text, Modal, TextInput, Platform, TouchableOpacity } from 'react-native';

import { windowHeight, heightRatioProMax } from '../../dimensions/Dimensions';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

const UpdateShareModal = (props) => {

    return (<Modal 
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={props.onRequestClose}>
                   <View style={{
                opacity: 1,
                height: (windowHeight < 700 || Platform.OS === 'android') ? '110%' : '100%',
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <View style={{
                    height: windowHeight < 700 || Platform.OS === 'android' ? '80%' : '70%',
                    backgroundColor: Colors.black,
                    borderRadius: 50 * heightRatioProMax,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        marginTop: 50 * heightRatioProMax,
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            marginTop: 10 * heightRatioProMax,
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: '70%'
                            }}>
                                <View>
                                    <Text style={{
                                        fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                        fontFamily: Fonts.mainFontBold,
                                        color: Colors.gold
                                    }}>How much would you like to chip in?
                                    </Text>
                                </View>
                                <View style={{marginTop: 40*heightRatioProMax, flexDirection: 'row', justifyContent: 'center'}}>
                                    <Text style={{
                                        fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                        fontFamily: Fonts.mainFontBold, color: Colors.purple, textAlign: 'center',
                                        color: Colors.gold
                                    }}>$
                                    </Text>
                                    <TextInput style={{borderWidth: 2, borderColor: 'transparent',
                                        fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                        fontFamily: Fonts.mainFontBold, textAlign: 'center', borderBottomColor: Colors.gold, borderBottomWidth: 1, textAlign: 'center', color: Colors.gold
                                    }}
                                    placeholder='0'
                                    keyboardType="numeric"
                                    returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                                    autoFocus={true}
                                    onChangeText={props.changeShare}
                                    />
                                </View>
                                <View style={{marginTop: 420*heightRatioProMax, flexDirection: 'row', justifyContent: 'center'}}>
                                    <TouchableOpacity
                                        onPress={props.onRequestClose}>
                                        <View style={{width: '300%', justifyContent: 'center', alignSelf: 'center', borderRadius: 10 * heightRatioProMax, backgroundColor: Colors.gold,
                                            shadowColor: Colors.black,
                                            shadowOffset: {width: 0, height: 0},
                                            shadowOpacity: 0.5 * heightRatioProMax,
                                            shadowRadius: 10 * heightRatioProMax,
                                            elevation: 10 * heightRatioProMax}}>
                                            <Text style={{
                                                fontSize: 20 * heightRatioProMax,
                                                fontFamily: Fonts.mainFontBold, color: Colors.purple, textAlign: 'center', padding: 10*heightRatioProMax,
                                                color: Colors.black
                                            }}>save
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                </View>
            </View>
        </View>
    </Modal>)
}

export default UpdateShareModal;