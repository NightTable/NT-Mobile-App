import React, { useEffect, useState } from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    TextInput
 } from 'react-native';

 import { getDistanceFromLatLonInMi } from './algo';

import DashboardBubbleComp from '../components/EntryDashboardScreen/DashboardBubbleComp';
import axios from 'axios';

import curvedWhiteLinePic from '../assets/whitecurvesmall.png';
import reignPic from '../assets/reignpic.png';


import { API_URL_IOS, API_URL_ANDROID } from "@env";

import {
    widthRatioProMax,
    heightRatioProMax
} from '../dimensions/Dimensions';


const EntryDashboardScreen = (props) => {
    const [text, onChangeText] = useState("Enter City");
    const [ clubList, setClubList ] = useState([]);
    useEffect(() => {

        axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/clubs/coordinates/42.35313/-71.047218`)
        .then((res) => {

            let firstResponse = res.data;

            firstResponse = firstResponse.map((result) => {
                return {
                    ...result,
                    picture: reignPic
                }
            });
            
            setClubList(firstResponse);

        })
        .catch((err) => {

            console.log(err);
        })

    }, []);

    const handleBubblePress = () => {

        props.navigation.navigate('edNav-ClubMiniDetailScreen');
    }

    return (<View style={styles.container}>
        <Text style={{
            fontFamily: Fonts.mainFontReg,
            color: Colors.gold,
            marginTop: 110 * heightRatioProMax,
            marginBottom: Platform.OS === 'android' ? 100 * heightRatioProMax : 120 * heightRatioProMax,
            marginLeft: 10 * widthRatioProMax

        }}>Welcome back, John!</Text>
        <TextInput
            style={styles.input}
            fontFamily={Fonts.mainFontReg}
            onChangeText={onChangeText}
            placeholder={text}
            placeholderTextColor={Colors.gold}
            selectionColor={Colors.gold}

        />

        <Image 
        source={curvedWhiteLinePic}
        style={{
            position: 'absolute',
            height: 200 * heightRatioProMax,
            width: '110%',
            top: 80 * heightRatioProMax,
        }}></Image>
        <Text
        style={{
            fontFamily: Fonts.mainFontReg,
            color: Colors.gold,
            marginLeft: 10 * widthRatioProMax,
            marginBottom: 10 * heightRatioProMax,
            fontSize: 14 * heightRatioProMax
        }}
        >Searching for clubs near Boston...</Text>
        <View style={styles.clubListContainer}>
            <ScrollView
            contentContainerStyle={{
                minHeight: 400 * heightRatioProMax,
                width: '100%'
            }}>
            {clubList.map((club, index) => (
                <DashboardBubbleComp
                    onBubblePress={handleBubblePress}
                    key={index}
                    image={club.picture}
                    clubName={club.name}
                    miles={getDistanceFromLatLonInMi(42.293063, -71.304429, club.latitude, club.longitude)}
                ></DashboardBubbleComp>
            ))}
            </ScrollView>
        </View>
        <Image 
        source={curvedWhiteLinePic}
        style={{
            position: 'absolute',
            height: 200 * heightRatioProMax,
            bottom: Platform.OS === 'android' ? -30 * heightRatioProMax : 40 * heightRatioProMax,
            width: '110%'
        }}></Image>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        position: 'relative'
    },
    clubListContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 400 * heightRatioProMax
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBottomColor: Colors.gold,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        placeholderTextColor: Colors.gold,
        selectionColor: Colors.gold,
        color: Colors.gold,
      },
})

export default EntryDashboardScreen;