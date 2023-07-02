import React from 'react';

import {
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet} from 'react-native';

import { Colors } from '../colors/Colors';

import { Fonts } from '../fonts/Fonts';

import { heightRatioProMax, widthRatioNorm, widthRatioProMax } from '../dimensions/Dimensions';

import BasicInfoSectionComp from '../components/TableRequestDetailScreen/BasicInfoSectionComp';
import HeaderInfoSectionComp from '../components/TableRequestDetailScreen/HeaderInfoSectionComp';
import ParticipantInfoSection from '../components/TableRequestDetailScreen/ParticipantInfoSectionComp';

import girlOnePic from '../assets/younggirl1.jpeg';
import girlTwoPic from '../assets/younguy2.jpeg';
import johnPic from '../assets/johnpic.jpeg';

const TableRequestDetailScreen = (props) => {

    let tableRequestObject = {
        tableSize: 12,
        tableType: 'floor',
        requestType: 'snpl',
        tablePrice: 800,
        minimumCost: 66.7,
        availableSeats: 8,
        costContribution: 66.7
    };

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

    const handlePhotoAvatarImagePress = () => {

        props.navigation.navigate('edNav-UserProfileScreen');
    }


    return (<View style={styles.tableRequestDetailContainer}>
        <HeaderInfoSectionComp
            onImagePress={handlePhotoAvatarImagePress}
        ></HeaderInfoSectionComp>
        <View style={{
            flex: 1,
            backgroundColor: Colors.black
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.lowerContainer}>
                    <Text style={{
                    marginLeft: 10 * widthRatioProMax,
                    marginTop: 15 * heightRatioProMax,
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 18 * heightRatioProMax,
                    color: Colors.gold
                }}>Request Details</Text>
                    <BasicInfoSectionComp
                        tableObj={tableRequestObject}></BasicInfoSectionComp>
                    <ParticipantInfoSection 
                        pendingParticipants={dummyPendingParticipantsData}></ParticipantInfoSection>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity 
                        onPress={() => props.navigation.navigate('edNav-InitialPaymentScreen')}
                        style={[{
                            backgroundColor: Colors.gold,
                            paddingVertical: 15 * heightRatioProMax,
                            paddingHorizontal: 40 * widthRatioProMax,
                            marginTop: 60 * heightRatioProMax,
                            marginBottom: 60 * heightRatioProMax,
                            borderRadius: 10 * heightRatioProMax
                        }, {
                            shadowColor: Colors.black,
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 8,
                            shadowOpacity: 0.5,
                            elevation: 5
                        }]}>
                            <Text style={{
                                color: Colors.black,
                                fontFamily: Fonts.mainFontReg
                            }}>Join Table!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    tableRequestDetailContainer: {
        flex: 1,
    },
    lowerContainer: {
        minHeight: '100%',
        backgroundColor: Colors.black
    }
})

export default TableRequestDetailScreen;