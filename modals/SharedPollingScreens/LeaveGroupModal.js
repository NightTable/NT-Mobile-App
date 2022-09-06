// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Modal, Platform } from 'react-native'; 

import { Colors } from '../../colors/Colors';

import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';

import HeaderInquiryComp from '../../components/modals/LeaveGroupModal/HeaderInquiryComp';
import ButtonContainerComp from '../../components/modals/LeaveGroupModal/ButtonContainerComp';
import { Fonts } from '../../fonts/Fonts';

const LeaveGroupModal = (props) => {


    return (
    <Modal
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}
        animationType="slide"
        transparent={true}
        visible={props.visible}
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
                backgroundColor: Colors.greyLight,
                borderRadius: 50 * heightRatioProMax,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: Colors.black,
            }}>
                <View style={{
                    marginTop: 50 * heightRatioProMax,
                    height: '100%',
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <HeaderInquiryComp></HeaderInquiryComp>
                    <View style={{
                        marginTop: Platform.OS === 'ios' && windowHeight < 700 ? 35 * heightRatioProMax : 25 * heightRatioProMax,
                        width: '70%'
                    }}>
                        <Text style={{
                            fontSize: 18 * heightRatioProMax,
                            fontFamily: Fonts.mainFontBold
                        }}>Another member of this group will be
                            assigned organizer {"\n\n"}

                            You will forfeit your spot, and you will be
                            charged a fee of <Text style={{
                                color: Colors.red,
                                fontFamily: Fonts.mainFontBold
                            }}>$370</Text>
                        </Text>
                    </View>
                    <ButtonContainerComp
                        onCancelPress={props.onRequestClose}></ButtonContainerComp>
                </View>
            </View>
        </View>
    </Modal>)
}

export default LeaveGroupModal;