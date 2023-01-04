// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState, useEffect} from 'react';

import { View,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import sampleGirl from '../../assets/younggirl1.jpeg';

import ParticipantSectionComp from '../../components/modals/AddParticipantModal/ParticipantSectionComp';
import SearchInputSectionComp from '../../components/modals/AddParticipantModal/SearchInputCompSection';
import ButtonContainerSectionComp from '../../components/modals/AddParticipantModal/ButtonContainerSectionComp';
import { ScrollView } from 'react-native-gesture-handler';


const AddParticipantModal = (props) => {


    let [dummyAddedParticipants, setDummyAddedParticipants] = useState([]);

    /*useEffect(() => {
        console.log(dummyAddedParticipants, "dummy participants");
    }, [dummyAddedParticipants]);
    */

    const addInvitedParticipant = (participant) => {
        if (!dummyAddedParticipants.some(p => p.email === participant.email)){
            setDummyAddedParticipants(prevState => [...prevState, participant]);
        }
        else if (!dummyAddedParticipants.some(p => p.phone === participant.phone)){
            setDummyAddedParticipants(prevState => [...prevState, participant]);
        }

    }

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
                            }}>In the first input line, please type in name, number (including the country code without "+") or emails of people,
                                that you would like to add to your group. In the second input line, type in how much you'd like them to contribute </Text>
                        </View>
                        <SearchInputSectionComp
                            addParticipant={addInvitedParticipant}>

                        </SearchInputSectionComp>
                        <ScrollView style={{width: '100%'}}>
                            <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 2 * heightRatioProMax}}>
                                <ParticipantSectionComp
                                    participants={dummyAddedParticipants}></ParticipantSectionComp>
                            </View>

                        </ScrollView>

                        <ButtonContainerSectionComp
                            onAddPartButtonHandler={props.onAddParticipantRequestClose}
                            addParticipant={props.addParticipant}
                            length={dummyAddedParticipants.length}
                            participantsToAdd={dummyAddedParticipants}>
                        </ButtonContainerSectionComp>

                    </View>
                </View>
                </View>
            </KeyboardAvoidingView>)
};

export default AddParticipantModal;