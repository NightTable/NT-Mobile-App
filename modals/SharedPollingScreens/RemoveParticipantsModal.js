// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text, 
    Modal, 
    ScrollView,
    TouchableOpacity, 
    Platform} from 'react-native'; 

import { windowHeight, heightRatioProMax } from '../../dimensions/Dimensions';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

import sampleGirl from '../../assets/person.jpeg';
import johnPic from '../../assets/johnpic.jpeg';
import ModHorizComp from '../../components/modals/RemoveParticipantsModal/ModHorizComp';

const RemoveParticipantsModal = (props) => {

    let dummyParticipants = [
        {
            isExternalUser: true,
            email: "jnydam@nighttable.co",
            image: null,
            name: null
        },
        {
            isExternalUser: false,
            email: null,
            image: sampleGirl,
            name: "janelle may"
        },
        {
            isExternalUser: false,
            email: null,
            image: johnPic,
            name: "John Nydam"
        },
        {
            isExternalUser: true,
            email: "gblade@gmail.com",
            image: null,
            name: null
        }
    ];

    return (<Modal
        onRequestClose={props.onRequestClose}
        visible={props.visible}
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}
        animationType="slide"
        transparent={true}
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
                }}>
                    <View style={{
                        marginTop: 50 * heightRatioProMax,
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: '70%',
                        }}>
                           <Text style={{
                               fontFamily: Fonts.mainFontBold,
                               fontSize: 20 * heightRatioProMax,
                               color: Colors.gold
                           }}>Please select the individuals you would like to remove</Text>  
                        </View>
                        <ScrollView style={{
                            maxHeight: 350,
                        }} contentContainerStyle={{
                            marginTop: 20 * heightRatioProMax,
                            width: '100%',
                        }}>
                            {dummyParticipants.map((participant, index) => (
                                <ModHorizComp
                                    key={index}
                                    name={participant.name}
                                    image={participant.image}
                                    email={participant.email}
                                    isExternalUser={participant.isExternalUser}></ModHorizComp>
                            ))}
                        </ScrollView>
                        <View style={{
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={props.onRequestClose} style={[{
                                width: '60%',
                                height: Platform.OS === 'ios' && windowHeight < 700 ? 60 * heightRatioProMax : 40 * heightRatioProMax,
                                backgroundColor: Colors.red,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10 * heightRatioProMax
                            }, {
                                shadowColor: Colors.black,
                                shadowOffset: {width: 0, height: 0},
                                shadowRadius: 7,
                                shadowOpacity: 0.4,
                                elevation: 5
                            }]}>
                                <Text style={{
                                    color: Colors.purple,
                                    fontFamily: Fonts.mainFontReg,
                                    color: Colors.white
                                }}>remove 2 participants</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
    </Modal>)
}

export default RemoveParticipantsModal;