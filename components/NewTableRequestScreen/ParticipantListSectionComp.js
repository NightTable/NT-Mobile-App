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
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

import ParticipantBubbleComp from './ParticipantListSectionComp/ParticipantBubbleComp';

const ParticipantListSectionComp = (props) => {


    return (<View style={styles.participantSectionContainer}>
        <View style={{
            width: '100%',
            marginBottom: 20 * heightRatioProMax
        }}>
            <Text style={{
                fontSize: 18 * heightRatioProMax,
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold
            }}>Participants:</Text>
            <Text style={{
                        fontSize: 15 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold,
                textAlign: 'center',
                marginVertical: 15 * heightRatioProMax
            }}>Note that only organizers or club representatives that are part of the 
            table can change their minmum joining fee to 0</Text>
        </View>
        <View style={{
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            {props.participants.map((participant, index) => (
                <ParticipantBubbleComp
                    localDeleteParticipantPress={props.onDeleteParticipantPress}
                    key={index}
                    id={index}
                    externalUser={participant.externalUser}
                    name={participant.name}
                    imageObj={participant.imageObj}
                    email={participant.email}
                >
                </ParticipantBubbleComp>
            ))}
        </View>
    </View>)

};

const styles = StyleSheet.create({
    participantSectionContainer: {
        width: '85%',
        marginTop: 50 * heightRatioProMax,
    }
})

export default ParticipantListSectionComp;