// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Modal, ScrollView, Platform } from 'react-native';

import { windowHeight, heightRatioProMax } from '../../dimensions/Dimensions';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

import sampleGirl from '../../assets/person.jpeg';
import johnPic from '../../assets/johnpic.jpeg';
import sampleGuy from '../../assets/younguy2.jpeg';

import PartHorizComp from '../../components/modals/PollingConfirmationToActiveTableGroupModal/PartHorizComp';
import ButtonContainerComp from '../../components/modals/PollingConfirmationToActiveTableGroupModal/ButtonContainerComp';

const PollingConfirmationToActiveTableGroupModal = (props) => {


    let dummyParticipants = [ 
        {
            name: "janelle may",
            image: sampleGirl

        },
        {
            name: "jake baynard",
            image: sampleGuy
        },
        {
            name: "holly morsel",
            image: johnPic
        }
    ];


    return (<Modal 
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onPollingConfModalClose}>
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
                        <View style={{
                            marginTop: 10 * heightRatioProMax,
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: '70%'
                            }}>
                                <Text style={{
                                    fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                    fontFamily: Fonts.mainFontBold
                                }}>You are about to confirm a table group with the following people
                                    {"\n\n"}

                                    Please make sure that all parties are present before confirming
                                </Text>
                            </View>
                            <ScrollView contentContainerStyle={{
                                alignItems: 'center'
                            }} style={{
                                width: '100%',
                                minHeight: 250 * heightRatioProMax,
                                marginTop: 40 * heightRatioProMax
                            }}>
                                {dummyParticipants.map((participant, index) => (
                                    <PartHorizComp
                                        key={index}
                                        image={participant.image}
                                        name={participant.name}></PartHorizComp>
                                ))}
                            </ScrollView>
                            <ButtonContainerComp
                                onLocalConfirmButtonPress={props.onConfirmButtonPress}
                                onCancelPress={props.onPollingConfModalClose}></ButtonContainerComp>
                    </View>
                </View>
                </View>
                </View>
    </Modal>)
}

export default PollingConfirmationToActiveTableGroupModal;