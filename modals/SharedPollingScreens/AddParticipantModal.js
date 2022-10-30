// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View,
    KeyboardAvoidingView,
    Platform,
    Text } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import sampleGirl from '../../assets/younggirl1.jpeg';

import ParticipantSectionComp from '../../components/modals/AddParticipantModal/ParticipantSectionComp';
import SearchInputSectionComp from '../../components/modals/AddParticipantModal/SearchInputCompSection';
import ButtonContainerSectionComp from '../../components/modals/AddParticipantModal/ButtonContainerSectionComp';


const AddParticipantModal = (props) => {

    let dummyAddedParticipants = [
        {
            isExternalUser: false,
            name: "Janelle May",
            image: sampleGirl
        },
        {
            isExternalUser: true,
            email: "jnydam@me.com"
        }
    ];

    return (
        <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? -160 : -160}
        enabled={true}
        behavior={Platform.OS === 'android' ? 'position' : 'position'}
        >
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
                    borderWidth: 1,
                    borderColor: Colors.gold,
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
                            width: '70%'
                        }}>
                            <Text style={{
                                fontFamily: Fonts.mainFontBold,
                                fontSize: windowHeight < 700 ? 20 * heightRatioProMax :  15 * heightRatioProMax,
                                color: Colors.gold
                            }}>Please type in name or emails of people
                                you would like to add to your group: </Text>
                        </View>
                        <SearchInputSectionComp></SearchInputSectionComp>
                        <ParticipantSectionComp
                            participants={dummyAddedParticipants}></ParticipantSectionComp>
                        <ButtonContainerSectionComp
                            onAddPartButtonHandler={props.onAddParticipantRequestClose}></ButtonContainerSectionComp>
                    </View>
                </View>
                </View>
            </KeyboardAvoidingView>)
};

export default AddParticipantModal;