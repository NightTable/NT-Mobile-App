// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    StyleSheet } from 'react-native';
import { heightRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';
import { Colors } from '../../../colors/Colors'
import ParticipantBubbleComp from './ParticipantBubbleComp';

const InvitiedParticipantsSectionComp = (props) => {


    return (<View style={styles.mainContainer}>
        <Text style={{
            marginBottom: 10 * heightRatioProMax,
            fontFamily: Fonts.mainFontReg,
            fontSize: 20 * heightRatioProMax,
            color: Colors.textColorGold
        }}>Invited Participants</Text>
        {props.participants.map((participant, index) => (
            <ParticipantBubbleComp
                key={index}
                avatarImage={participant.imageObj}
                name={participant.name}
                externalUser={participant.externalUser}
                email={participant.email}
                phone={participant.phone}>
            </ParticipantBubbleComp>
        ))}
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '85%'
    }

})

export default InvitiedParticipantsSectionComp;