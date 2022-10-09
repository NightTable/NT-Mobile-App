import React from 'react';

import { 
    View, 
    Text, 
    Modal,
    TouchableOpacity } from 'react-native';

import { windowHeight, heightRatioProMax } from '../../dimensions/Dimensions';
import { Colors } from '../../colors/Colors';

import SearchInputHeaderComp from '../../components/modals/CreateNewMessageModal/SearchInputHeaderComp';
import ParticipantListSectionComp from '../../components/modals/CreateNewMessageModal/ParticipantListSectionComp';
import { Fonts } from '../../fonts/Fonts';

const CreateNewMessageModal = (props) => {

    return (
        <Modal
        onRequestClose={() => {
            props.onOuterRequestClose();
           }}
        animationType="slide"
        transparent={true}
        visible={props.visible}>
            <View style={{
                opacity: 1,
                height: (windowHeight < 700 || Platform.OS === 'android') ? '110%' : '100%',
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <View style={{
                    height: '70%',
                    backgroundColor: Colors.greyLight,
                    borderRadius: 50 * heightRatioProMax,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: Colors.black,
                }}>
                    <SearchInputHeaderComp></SearchInputHeaderComp>
                    <ParticipantListSectionComp></ParticipantListSectionComp>
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity 
                        onPress={() => {
                            props.onOuterRequestClose();
                        }}
                        style={[{
                            backgroundColor: Colors.white,
                            borderColor: Colors.red,
                            width: '50%',
                            height: 40 * heightRatioProMax,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            borderWidth: 1
                        }, {
                            shadowColor: Colors.black,
                            shadowRadius: 2,
                            shadowOpacity: 0.4,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            elevation: 3
                        }]}>
                            <Text style={{
                                color: Colors.red,
                                fontFamily: Fonts.mainFontReg
                            }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CreateNewMessageModal;