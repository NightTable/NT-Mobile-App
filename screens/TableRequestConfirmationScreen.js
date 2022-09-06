// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet} from 'react-native';
import { Colors } from '../colors/Colors';

import ConfirmationSectionComp from '../components/TableRequestConfirmationScreen/ConfirmationSectionComp';
import HeaderComp from '../components/TableRequestConfirmationScreen/HeaderComp';
import InvitiedParticipantsSectionComp from '../components/TableRequestConfirmationScreen/InvitedParticipantsSectionComp/InvitedParticipantsSectionComp';
import TableInformationSectionComp from '../components/TableRequestConfirmationScreen/TableInformationSectionComp';
import WhiteBubbleLayoutComp from '../components/TableRequestConfirmationScreen/WhiteBubbleLayoutComp';

import sampleGirlImage from '../assets/younggirl1.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import { heightRatioProMax, windowHeight } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts';

const TableRequestConfirmationScreen = (props) => {

    let tableRequestObj = {
        type: 'floor',
        price: 800,
        size: 8
    }

    let invitedParticipantsList = [

        {
            image: null,
            name: null,
            email: 'jnydam@nighttable.co',
            externalUser: true
        },
        {
            image: sampleGirlImage,
            name: "janelle may",
            email: null,
            externalUser: false
        },
        {
            image: johnPic,
            name: "john nydam",
            email: null,
            externalUser: false
        },
        {
            image: null,
            name: null,
            email: 'gblade@gmail.com',
            externalUser: true
        }
    ]


    return (<View style={styles.confirmationScreenContainer}>
        <ScrollView>
        <HeaderComp></HeaderComp>
        <WhiteBubbleLayoutComp>
            <TableInformationSectionComp
                type={tableRequestObj.type}
                price={tableRequestObj.price}
                size={tableRequestObj.size}
            ></TableInformationSectionComp>
            <InvitiedParticipantsSectionComp
                participants={invitedParticipantsList}></InvitiedParticipantsSectionComp>
            <View style={{
                marginTop: 30 * heightRatioProMax,
                width: '60%',
                marginBottom: 120 * heightRatioProMax,
            }}>
                <Text style={{
                    fontSize: Platform.OS === 'ios' ? (windowHeight < 700 ? 20 * heightRatioProMax : 15 * heightRatioProMax) : 20 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg
                }}>You have chosen the {"\n"}<Text style={{
                    color: Colors.orange,
                    fontFamily: Fonts.mainFontReg
                }}>split-now-pay-later</Text>
                {"\n"}method to split costs.{"\n\n"}
                This means that you will be charged a minimum of $160 after you approve
                the request.
                </Text>
            </View>
            <View style={{
                marginBottom: 50 * heightRatioProMax,
                width: '40%'
            }}>
                <TouchableOpacity 
                onPress={() => props.navigation.navigate('edNav-PollingRoomScreen')}
                style={[{
                    backgroundColor: Colors.purple,
                    padding: 15 * heightRatioProMax,
                    width: '100%'
                }, {
                    shadowColor: Colors.black,
                    shadowRadius: 2,
                    shadowOpacity: 0.7,
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    elevation: 3
                }]}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.orange
                    }}>create request!</Text>
                </TouchableOpacity>
            </View>
        </WhiteBubbleLayoutComp>
        </ScrollView>
    </View>)

}

const styles = StyleSheet.create({
    confirmationScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.greyLight
    }
})

export default TableRequestConfirmationScreen;

