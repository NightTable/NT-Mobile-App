// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Image, 
    TextInput} from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';

import goldenCheckImage from '../../assets/goldentickbox.png'

import ParticipantBubbleComp from './ParticipantListSectionComp/ParticipantBubbleComp';

const ParticipantListSectionComp = (props) => {

    let defaultfee = props.defaultJoiningFee


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
            <View style={{
                borderRadius: 5 * heightRatioProMax,
                marginTop: 5 * heightRatioProMax,
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.red,
                borderWidth: 1 * widthRatioProMax,
                borderColor: Colors.gold,
                justifyContent: 'center',
                height: 60 * heightRatioProMax
            }}>
                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, fontSize: 25 * heightRatioProMax}}>You</Text>
            </View>
            <View style={{alignContent: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, marginLeft: 15 * widthRatioProMax, fontFamily: Fonts.mainFontReg}}> Set Joining Fee </Text>
                <TextInput
                    style={{color: Colors.gold, textAlign: 'center', marginVertical: 10 * heightRatioProMax, borderWidth: 1 * widthRatioProMax, borderBottomColor: Colors.gold, width: 50 * widthRatioProMax, justifyContent: 'center', fontSize: 20 * heightRatioProMax}}
                    placeholder={`$`}/>
                <TouchableOpacity>
                    <Image
                        style={{
                            width: 40 * heightRatioProMax,
                            height: 40 * heightRatioProMax,
                        }}
                        source={goldenCheckImage}>
                    </Image>
                </TouchableOpacity>

            </View>
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