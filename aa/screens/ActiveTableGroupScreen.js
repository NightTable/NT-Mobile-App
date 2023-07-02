import React, { useState } from 'react';

import { StyleSheet, 
    ImageBackground,
    Modal,
    ScrollView} from 'react-native';

import sampleNightClubImage from '../assets/samplenightclub.jpeg';
import HeaderSectionComp from '../components/ActiveTableGroupScreen/HeaderSectionComp';
import BlackBubbleLayoutComp from '../components/ActiveTableGroupScreen/BlackBubbleLayoutComp';
import TableConfigSectionComp from '../components/ActiveTableGroupScreen/TableConfigSectionComp';
import PendingPartSectionComp from '../components/ActiveTableGroupScreen/PendingPartSectionComp';
import UpdateShareModal from '../modals/SharedPollingScreens/UpdateShareModal';
import ButtonSectionComp from '../components/ActiveTableGroupScreen/ButtonSectionComp';

import LeaveGroupModal from '../modals/SharedPollingScreens/LeaveGroupModal';
import AddParticipantModal from '../modals/SharedPollingScreens/AddParticipantModal';
import EndOutingConfirmationModal from '../modals/ActiveTableGroupScreen/EndOutingConfirmationModal'
import randomGuyOne from '../assets/younguy2.jpeg';
import randomGirlOne from '../assets/younggirl1.jpeg';

const ActiveTableGroupScreen = (props) => {

    const [ leaveGroupModalVisible, setLeaveGroupModalVisible ] = useState(false);
    const [ addParticipantModalVisible, setAddParticipantModalVisible ] = useState(false);
    const [updateShareModalVisible, setUpdateShareModalVisible] = useState(false);
    const [endOutingConfirmationModalVisible, setEndOutingConfirmationModalVisible] = useState(false);

    const handlePencilClick = () => {
        setUpdateShareModalVisible((state) => !state);
    }
    const handleAddParticipantModalPress = () => {

        setAddParticipantModalVisible((state) => !state);
    };

    const handleLeaveGroupModalPress = () => {

        setLeaveGroupModalVisible((state) => !state);
    };

    const handleEndOutingButtonPress = () => {

        setEndOutingConfirmationModalVisible((state) => !state);

    }

    const handleEndOutingModalConfirmationPress = () => {

        setEndOutingConfirmationModalVisible((state) => !state);
 
        if (props.route.name.includes('edNav')){
            props.navigation.push('edNav-EndOutingScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.push('trNav-EndOutingScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.push('invNav-EndOutingScreen');
        }
    }

    let tableRequestObj = {
        size: 12,
        price: 800,
        type: 'floor',
        organizer: 'Janelle May',
        organizerShare: 100
    }

    let dummyCurrentParticipants = [
        {
            name: "Janelle May",
            share: 300,
            image: randomGirlOne
        },
        {
            name: "Jake Smith",
            share: 200,
            image: randomGuyOne
        },
        {
            name: "Test Person",
            share: 100,
            image: randomGuyOne
        }
    ];

    let dummyPendingParticipants = [
        {
            isExternalUser: true,
            email: 'jbryer@gmail.com',
            image: null,
            name: null
        },
        {
            isExternalUser: false,
            email: null,
            image: randomGuyOne,
            name: "Jack Anderson"
        }
    ]

    const changeOrgShare = (num) => {
        tableRequestObj.organizerShare = num;
    }

    return (<ImageBackground
                source={sampleNightClubImage}
                 style={styles.activeTableGroupScreenContainer}>

        <Modal
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}
            animationType="slide"
            transparent={true}
            
            visible={addParticipantModalVisible}
            onRequestClose={() => {
                setAddParticipantModalVisible((state) => !state);
            }}>
            <AddParticipantModal
                onAddParticipantRequestClose={() => {
                    setAddParticipantModalVisible((state) => !state);
                }}
            ></AddParticipantModal>
        </Modal>
        <LeaveGroupModal
            visible={leaveGroupModalVisible}
            onRequestClose={() => {
                setLeaveGroupModalVisible((state) => !state);
            }}
        ></LeaveGroupModal>
        <EndOutingConfirmationModal
            endOutingConfirmationPress={handleEndOutingModalConfirmationPress}
            visible={endOutingConfirmationModalVisible}
            onRequestClose={() => {
                setEndOutingConfirmationModalVisible((state) => !state);
            }}>
        </EndOutingConfirmationModal>
        <UpdateShareModal
            changeShare={props.modifyShare}
            show={updateShareModalVisible}
            onRequestClose={() => {
            setUpdateShareModalVisible((state) => !state);
            }}>
        </UpdateShareModal>
        <ScrollView style={{
            width: '100%',
            minHeight: '100%'
        }}>
            <HeaderSectionComp
                tableReqObj={tableRequestObj}></HeaderSectionComp>
            <BlackBubbleLayoutComp>
                <TableConfigSectionComp
                    currentParticipants={dummyCurrentParticipants}></TableConfigSectionComp>
                <PendingPartSectionComp
                    pendingParticipants={dummyPendingParticipants}
                >
                </PendingPartSectionComp>
                <ButtonSectionComp
                    onAddParticipantPress={handleAddParticipantModalPress}
                    onLeaveGroupPress={handleLeaveGroupModalPress}
                    onEndOutingButtonPress={handleEndOutingButtonPress}
                    onPencilClick={handlePencilClick}
                    share={tableRequestObj.organizerShare}
                    modifyShare={changeOrgShare}></ButtonSectionComp>
                    
            </BlackBubbleLayoutComp>
        </ScrollView>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    activeTableGroupScreenContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default ActiveTableGroupScreen;