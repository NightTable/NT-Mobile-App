/*

Date of the event will be convenient to have
In a PNSL request, you should not be able to modify your share, as you've already paid

*/

import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';

import { 
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    ImageBackground} from 'react-native';

import sampleNightClubImage from '../assets/samplenightclub.jpeg';

import HeaderLabelComp from '../components/PollingRoomScreen/HeaderLabelComp';
import ParticipantInfoComp from '../components/PollingRoomScreen/ParticipantInfoComp';
import WaitingInfoLabelComp from '../components/PollingRoomScreen/WaitingInfoLabelComp';
import WhiteBubbleLayoutComp from '../components/PollingRoomScreen/WhiteBubbleLayoutComp';
import OrganizerInfoComp from '../components/PollingRoomScreen/OrganizerInfoComp';
import PendingPartHorizComp from '../components/PollingRoomScreen/PendingPartHorizComp';
import TableInfoLabelComp from '../components/PollingRoomScreen/TableInfoLabelComp'
import TimeInfoLabelComp from '../components/PollingRoomScreen/TableInfoLabelComp'

import youngGirl from '../assets/younggirl1.jpeg';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

import AddParticipantModal from '../modals/SharedPollingScreens/AddParticipantModal';
import LeaveGroupModal from '../modals/SharedPollingScreens/LeaveGroupModal';
import RemoveParticipantsModal from '../modals/SharedPollingScreens/RemoveParticipantsModal';
import girlOnePic from '../assets/younggirl1.jpeg';
import girlTwoPic from '../assets/younguy2.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import PollingConfirmationToActiveTableGroupModal from '../modals/PollingRoomScreen/PollingConfirmationToActiveTableGroupModal';

const PollingRoomScreen = (props) => {
    
    const [ addParticipantModalVisible, setAddParticipantModalVisible ] = useState(false);
    const [ leaveGroupModalVisible, setLeaveGroupModalVisible ] = useState(false);
    const [ removeParticipantsModalVisible, setRemoveParticipantsModalVisible ] = useState(false);
    const [ pollingConfToActiveModalVisible, setPollingConfToActiveModalVisible ] = useState(false);

    const route = useRoute();

    const tables = route.params.tables

    useEffect(() => {
        console.log(route.params.tables, "tables in polling room");
        console.log()
      }, []);

    let dummyParticipants = [
        {
            name: "Janelle May",
            imageObj: girlOnePic,
            finalCostContribution: 200
        },
        {
            name: "Jack Smith",
            imageObj: girlTwoPic,
            finalCostContribution: 300
        },
        {
            name: "John Nydam",
            imageObj: johnPic,
            finalCostContribution: 400
        }
    ];


    let dummyPendingParticipantsData = [
        {
            name: "Jack Smith",
            imageObj: girlOnePic

        },
        {
            name: "John Nydam",
            imageObj: johnPic
        },
        {
            name: "Janelle May",
            imageObj: girlTwoPic
        },
        {
            name: "Margaret Hue",
            imageObj: girlOnePic
        },
        {
            name: "Person 5",
            imageObj: girlTwoPic
        },
        {
            name: "Person 6",
            imageObj: girlOnePic
        },
        {
            name: "Person 7",
            imageObj: girlTwoPic
        },
        {
            name: "Person 8",
            imageObj: girlOnePic
        },
    ];


    const range = (start, stop, step) => {
        
        return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    
    };

    let pendingPartHorizNumLength = dummyPendingParticipantsData.length / 2;

    const addParticipantModalHandler = () => {

        setAddParticipantModalVisible((state) => !state);

    };

    const leaveGroupModalHandler = () => {

        setLeaveGroupModalVisible((state) => !state);
    }
    
    const removeParticipantsModalHandler = () => {

        setRemoveParticipantsModalVisible((state) => !state);

    }
    
    const pollingConfToActiveGroupModalHandler = () => {

        setPollingConfToActiveModalVisible((state) => !state);
    };

    const handleConfimButtonPollingPress = () => {

        setPollingConfToActiveModalVisible((state) => !state);
        if (props.route.name.includes('edNav')){
            props.navigation.push('edNav-ActiveTableGroupScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.push('trNav-ActiveTableGroupScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.push('invNav-ActiveTableGroupScreen');
        }
        //props.route.name == ed nav then carry on ed nav
    }

    const handleNavToUserProfile = () => {
        if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-UserProfileScreen');

        }
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-UserProfileScreen');

        }
        if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-UserProfileScreen');

        }
    }


    return (
        <View style={styles.screenContainer}>
            <ImageBackground style={{
                width: '100%',
                height: 320 * heightRatioProMax
            }} source={sampleNightClubImage}>
                <Modal
                    onRequestClose={() => {
                        setAddParticipantModalVisible((state) => !state);
                       }}
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                    animationType="slide"
                    transparent={true}
                    visible={addParticipantModalVisible}>
                    <AddParticipantModal
                        onAddParticipantRequestClose={() => {
                            setAddParticipantModalVisible((state) => !state);
                        }}></AddParticipantModal>
                </Modal>
                <LeaveGroupModal
                    visible={leaveGroupModalVisible}
                    onRequestClose={() => {
                        setLeaveGroupModalVisible((state) => !state);
                    }}
                ></LeaveGroupModal> 
                <RemoveParticipantsModal
                    visible={removeParticipantsModalVisible}
                    onRequestClose={() => {
                        setRemoveParticipantsModalVisible((state) => !state);
                    }}>
                </RemoveParticipantsModal>
                <PollingConfirmationToActiveTableGroupModal
                    onConfirmButtonPress={handleConfimButtonPollingPress}
                    visible={pollingConfToActiveModalVisible}
                    onPollingConfModalClose={pollingConfToActiveGroupModalHandler}></PollingConfirmationToActiveTableGroupModal> 
                <View style={{
                    marginTop: 10 * heightRatioProMax,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '100%'
                }}>
                    <HeaderLabelComp 
                        name={route.params.thisUser[0].name} 
                        orgImageObj={youngGirl}></HeaderLabelComp>
                </View>
                <View style={{
                    marginBottom: 30 * heightRatioProMax
                }}>
                    <WaitingInfoLabelComp></WaitingInfoLabelComp>
                    <View style={styles.containerTableInfo}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold
                        }}>Tables: {" "} 
                        {tables.map((table, index) => (
                            <Text style={{
                                color: Colors.orange
                            }}
                            key={index}>
                            
                                {table.id + " "}
                            </Text>
                        ))}  
                        </Text>
                    </View>

                    <View style={styles.containerTableInfo}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        }}>Time: <Text style={{color: Colors.orange}}>
                                {route.params.hour}:{route.params.minute + " "}{route.params.timeOfDay}    
                            </Text>  
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.lowerContainer}>
                    <View style={{
                        marginTop: 15 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontBold,
                            color: Colors.textColorGold,
                            fontSize: 25 * heightRatioProMax
                        }}>Current cost breakdown</Text>
                    </View>
                    <WhiteBubbleLayoutComp>
                        <OrganizerInfoComp>
                        </OrganizerInfoComp>
                        {dummyParticipants.map((participant, index) => (
                            <ParticipantInfoComp
                                key={index}
                                name={participant.name}
                                imageObj={participant.imageObj}
                                contribution={participant.finalCostContribution}
                            >
                            </ParticipantInfoComp>
                        ))}
                        <View style={styles.tablePriceContainer}>
                            <Text style={{
                                color: Colors.purple,
                                fontSize: 18 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            }}>table price: <Text style={{
                                fontFamily: Fonts.mainFontBold,
                                color: Colors.gold
                            }}>$510</Text></Text>
                        </View>
                    </WhiteBubbleLayoutComp>
                    <View style={{
                        marginTop: 20 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold
                        }}>pending participants</Text>
                    </View>
                    <WhiteBubbleLayoutComp>
                        <ScrollView 
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        {range(0, dummyPendingParticipantsData.length - 2, 2).map((index) => (
                            <PendingPartHorizComp 
                                imageObjOne={dummyPendingParticipantsData[index].imageObj}
                                imageObjTwo={dummyPendingParticipantsData[index + 1].imageObj}
                                nameLabelOne={dummyPendingParticipantsData[index].name}
                                nameLabelTwo={dummyPendingParticipantsData[index + 1].name}
                                handlePress={handleNavToUserProfile}
                                key={index}>
                            </PendingPartHorizComp>
                        ))}
                        </ScrollView>
                    </WhiteBubbleLayoutComp>
                    <View style={{
                        marginTop: 20 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold
                        }}>current participants (3)</Text>
                    </View>
                    <WhiteBubbleLayoutComp>
                        <ScrollView 
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        {range(0, dummyPendingParticipantsData.length - 2, 2).map((index) => (
                            <PendingPartHorizComp 
                                imageObjOne={dummyPendingParticipantsData[index].imageObj}
                                imageObjTwo={dummyPendingParticipantsData[index + 1].imageObj}
                                nameLabelOne={dummyPendingParticipantsData[index].name}
                                nameLabelTwo={dummyPendingParticipantsData[index + 1].name}
                                handlePress={handleNavToUserProfile}
                                key={index}>
                            </PendingPartHorizComp>
                        ))}
                        </ScrollView>
                    </WhiteBubbleLayoutComp>
                    <View style={{
                        marginTop: 30 * heightRatioProMax,
                        alignSelf: 'flex-start',
                        marginBottom: 30 * heightRatioProMax
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                style={[styles.addParticipantsButtonStyle, styles.lowerButtonShadowStyle]}
                                onPress={addParticipantModalHandler}
                            >
                                <Text style={{
                                    color: Colors.green,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>add participants</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={removeParticipantsModalHandler}
                                style={[styles.removeParticipantsButtonStyle, styles.lowerButtonShadowStyle]}
                            >
                                <Text style={{
                                    color: Colors.orange,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>remove participants</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                onPress={leaveGroupModalHandler}
                                style={[styles.leaveGroupButtonStyle, styles.lowerButtonShadowStyle]}>
                                <Text style={{
                                    color: Colors.red,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>leave group</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={pollingConfToActiveGroupModalHandler}
                                style={[styles.approveRequestButtonStyle, styles.lowerButtonShadowStyle]}>
                                <Text style={{
                                    color: Colors.black,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                }}>approve request</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: Colors.black,
       flex: 1
    },
    lowerContainer: {
        backgroundColor: Colors.black,
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100%'
    },
    tablePriceContainer: {
        marginTop: 20 * heightRatioProMax,
        marginRight: 50 * widthRatioProMax,
        alignSelf: 'flex-end'
    },
    lowerButtonShadowStyle: {
        shadowColor: Colors.black,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 3
    },
    addParticipantsButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.green,
        borderWidth: 1,
        backgroundColor: Colors.green,
        borderRadius: 10 * heightRatioProMax,
    },
    removeParticipantsButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.orange,
        borderWidth: 1,
        backgroundColor: Colors.orange,
        borderRadius: 10 * heightRatioProMax,
    },
    leaveGroupButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.red,
        borderWidth: 1,
        backgroundColor: Colors.red,
        borderRadius: 10 * heightRatioProMax,

    },
    approveRequestButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        backgroundColor: Colors.gold,
        borderRadius: 10 * heightRatioProMax,

    },
    containerTableInfo: {
        backgroundColor: Colors.black,
        height: 50 * heightRatioProMax,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default PollingRoomScreen;