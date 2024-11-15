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
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import FriendInputComp from './InviteFriendSectionComp/FriendInputComp';

import { ABSTRACTAPI_API_KEY, ABSTRACTAPI_PARTIAL_URL } from "@env";



const InviteFriendSectionComp = (props) => {


    const API_URL_ABSTRACT = ABSTRACTAPI_PARTIAL_URL + ABSTRACTAPI_API_KEY;

    return (<View style={styles.inviteFriendSectionContainer}>
        <View style={styles.inviteFriendsTextContainer}>
            <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold,
                        fontSize: 20 * heightRatioProMax,
                        marginVertical: 25 * heightRatioProMax
            }}>Invite Friends:</Text>
        </View>
        <FriendInputComp
            onCheckmarkSubmit={props.onEnterEmailSubmit}
            onFriendInputChange={props.onEmailInputTrigger}
            inputText="Enter Email"></FriendInputComp>
        <FriendInputComp
            onCheckmarkSubmit={props.onEnterPhoneSubmit}
            onFriendInputChange={props.onPhoneNumberInputTrigger}
            inputText="Enter Phone Number"></FriendInputComp>
        { props.isNewEmailAddErrorShown ? <View style={{
            width: '93%',
            alignSelf: 'flex-end',
            marginTop: 10 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.purple, 
                opacity: 1,
                fontSize: 20 * heightRatioProMax
            }}>We could not add the selected participant with the entered email</Text>
        </View> : null }
        { props.isNewPhoneNumberAddErrorShown ? <View style={{
            width: '93%',
            alignSelf: 'flex-end',
            marginTop: 10 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.purple, 
                opacity: 1,
                fontSize: 20 * heightRatioProMax
            }}>We could not add the selected participant with the entered phone number</Text>
        </View> : null }
        <View style={{
            marginTop: 30 * heightRatioProMax,
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold
            }}>or</Text>
        </View>
        <FriendInputComp
            onCheckmarkSubmit={props.onEnterSearchFriendSubmit}
            onFriendInputChange={props.onSearchFriendInputTrigger}
            inputText="Search Friends"></FriendInputComp>
        { props.isNewParticipantAddErrorShown ? <View style={{
            width: '93%',
            alignSelf: 'flex-end',
            marginTop: 10 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.purple,
                fontSize: 20 * heightRatioProMax
            }}>We could not add the selected friend</Text>
        </View> : null }
    </View>)
};

const styles = StyleSheet.create({
    inviteFriendSectionContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%'
    },
    inviteFriendsTextContainer: {
        alignSelf: 'flex-start',
        width: '40%',
    }
})

export default InviteFriendSectionComp;