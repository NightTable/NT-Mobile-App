import React from 'react';

import { 
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet} from 'react-native';
import { Colors } from '../colors/Colors';

import { useRoute } from '@react-navigation/native';

import HeaderComp from '../components/TableRequestConfirmationScreen/HeaderComp';
import InvitiedParticipantsSectionComp from '../components/TableRequestConfirmationScreen/InvitedParticipantsSectionComp/InvitedParticipantsSectionComp';
import TableInformationSectionComp from '../components/TableRequestConfirmationScreen/TableInformationSectionComp';
import WhiteBubbleLayoutComp from '../components/TableRequestConfirmationScreen/WhiteBubbleLayoutComp';

import sampleGirlImage from '../assets/younggirl1.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import { heightRatioProMax, widthRatioProMax, windowHeight } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts';

const TableRequestConfirmationScreen = (props) => {


    const route = useRoute();

    let tableRequestObj = route.params.tables;

    let invitedParticipantsList = route.params.participants;

    let paymentType = route.params.paymentType === "pnsl" ? "pay-now-split-later" : "split-now-pay-later";

    let joiningFee = route.params.thisUser[0].joiningFee;

    let endingMessage = route.params.paymentType === "pnsl" ? (
        `This means that you will be charged a minimum of $${joiningFee} after you approve the request.`
    ) : 
    (
        `This means that upon all participants' confirmation, will be charged a minimum of $${joiningFee}.`
    )


    /*let tableRequestObj = 
        [
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            },
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            },
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            }
        ];*/

    /*let invitedParticipantsList = [

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
    ]*/


    return (<View style={styles.confirmationScreenContainer}>
        <ScrollView>
        <HeaderComp
            paymentType={route.params.paymentType}>

        </HeaderComp>
            <WhiteBubbleLayoutComp>
            <Text style={{
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 20 * heightRatioProMax,
                    color: Colors.textColorGold,
                    marginTop: 10 * heightRatioProMax
                }}>Table Information</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10 * heightRatioProMax, justifyContent: 'center'}}>
                    <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Table ID</Text>
                    <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Type</Text>
                    <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Minimum</Text>
                    <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Fits</Text>
                </View>
                <TableInformationSectionComp
                    table={tableRequestObj}
                ></TableInformationSectionComp>
                <InvitiedParticipantsSectionComp
                    participants={invitedParticipantsList}>
                </InvitiedParticipantsSectionComp>
                <View style={{
                    marginTop: 30 * heightRatioProMax,
                    width: '60%',
                    marginBottom: 120 * heightRatioProMax,
                }}>
                    <Text style={{
                        fontSize: Platform.OS === 'ios' ? (windowHeight < 700 ? 20 * heightRatioProMax : 20 * heightRatioProMax) : 20 * heightRatioProMax,
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.textColorGold
                    }}>You have chosen the {"\n"}<Text style={{
                        color: Colors.purple,
                        fontFamily: Fonts.mainFontReg
                    }}>{paymentType}</Text>
                    {"\n"}method to split costs.{"\n\n"}
                    {"\n"}{endingMessage}{"\n\n"}
                    By pressing create request, you will be taken to the screen where you can choose your alcohol of choice or add money to general table tab.
                    </Text>
                </View>
                <View style={{
                    marginBottom: 50 * heightRatioProMax,
                    width: '40%'
                }}>
                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('edNav-PollingRoomScreen')}
                    style={[{
                        borderRadius: 10 * heightRatioProMax,

                        backgroundColor: Colors.textColorGold,
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
                            color: Colors.black
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
        backgroundColor: Colors.black
    }
})

export default TableRequestConfirmationScreen;

