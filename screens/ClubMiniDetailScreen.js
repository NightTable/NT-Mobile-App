import React, { useEffect, useState } from 'react';

import { View, 
    Text, 
    StyleSheet, 
    Image,
    ScrollView, 
    Platform, 
    TouchableOpacity} from 'react-native';

import axios from 'axios';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import livMiamiPic from '../assets/livmiami.png';
import sampleNightClubPic from '../assets/samplenightclub.jpeg';
import reignPic from '../assets/reign.png';
import ImageScrollContainerComp from '../components/ImageScrollContainerComp';

import { 
    heightRatioProMax, 
    widthRatioProMax,
    windowHeight,
    windowWidth } from '../dimensions/Dimensions';

import { API_URL_IOS, API_URL_ANDROID } from "@env";
import { color } from 'react-native-reanimated';


const ClubMiniDetailScreen = (props) => {

    const [ selectedClubObject, setSelectedClubObject ] = useState(null);

    useEffect(() => {

        axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/clubs/627edbb90734f863222db5d5`)
        .then((res) => {

            setSelectedClubObject(res.data);
        })
        .catch((err) => {

            console.log(err);
        });

    }, []);

    const dummyPicData = [
        sampleNightClubPic, reignPic, livMiamiPic,
        sampleNightClubPic, reignPic, livMiamiPic,
        sampleNightClubPic, reignPic, livMiamiPic,
        sampleNightClubPic, reignPic, livMiamiPic,
        sampleNightClubPic, reignPic, livMiamiPic,
    ];

    return (<View style={styles.container}>
        <Image
        style={{
            top: 40 * heightRatioProMax,
            height: '30%',
            width: '105%',
            position: 'absolute'
        }}
        source={require('../assets/whitecurvesmall.png')}></Image>
        <View style={styles.whiteRoundDetailContainer}>
            <Text style={{
                marginTop: 30 * heightRatioProMax,
                marginLeft: 30 * widthRatioProMax,
                fontSize: Platform.OS === 'ios' ? 24 * heightRatioProMax : 20 * heightRatioProMax,
                flex: Platform.OS === 'android' ? (windowHeight < 600 ? 2 : 1) : 1,
                fontFamily: Fonts.mainFontBold,
                alignSelf: 'flex-start',
                height: 30 * heightRatioProMax,
                marginBottom: Platform.OS === 'ios' ? 10 * heightRatioProMax : 0
            }}>{selectedClubObject !== null ? selectedClubObject.name : ""}</Text>
            <ScrollView 
            snapToInterval={windowWidth}
            pagingEnabled
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: Platform.OS === 'ios' ? 0 : 15 * heightRatioProMax,
                position: 'relative',
            }}
            horizontal>
                {dummyPicData.map((pic, index) => (
                    <View style={{height: 200 * heightRatioProMax, width: windowWidth}} key={index}>
                        <ImageScrollContainerComp
                        image={pic}
                        ></ImageScrollContainerComp>
                        <View style={{
                            position: 'absolute',
                            backgroundColor: Colors.black,
                            height: 200 * heightRatioProMax,
                            left: Platform.OS === 'android' ? 386 * widthRatioProMax: 386 * widthRatioProMax,
                            width: 40 * widthRatioProMax
                    }}>

                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.outerInfoBox}>
                <View style={styles.innerInfoBox}>
                    <Text style={styles.headerText}>
                        address:
                    </Text>
                    <Text style={styles.innerTextValues}>
                        { selectedClubObject !== null ? selectedClubObject.address : ""}
                    </Text>
                </View>
                <View style={styles.innerInfoBox}>
                    <Text style={styles.headerText}>
                        website:
                    </Text>
                    <Text style={styles.innerTextValues}>
                        { selectedClubObject !== null ? selectedClubObject.website : ""}
                    </Text>
                </View>
                <View style={styles.innerInfoBox}>
                    <Text style={styles.headerText}>
                        instagram:
                    </Text>
                    <Text style={styles.innerTextValues}>
                        { selectedClubObject !== null ? selectedClubObject.instaHandle : ""}
                    </Text>
                </View>
                <View style={styles.innerInfoBox}>
                    <Text style={styles.headerText}>
                        phone number:
                    </Text>
                    <Text style={styles.innerTextValues}>
                        { selectedClubObject !== null ? selectedClubObject.phoneNumber : ""}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('edNav-ClubFullDetailScreen')}>
                    <View style={{
                        padding: 10 * heightRatioProMax,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10 * heightRatioProMax,
                        marginBottom: 20 * heightRatioProMax,
                        backgroundColor: Colors.buttonColorGold}}>
                        <Text style={{color: Colors.textColorBlack,
                        marginTop: Platform.OS === 'android' ? -3 * heightRatioProMax : 0,
                        fontFamily: Fonts.mainFontReg}}>Select Club</Text>
                    </View>
                </TouchableOpacity> 
            </View>
        </View>
    </View>)
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.black,
        flex: 1,
        position: 'relative'
    },
    imageWrapper: {
        height: 200 * heightRatioProMax,
        width: '90%',
        position: 'relative',
        backgroundColor: Colors.black,
        overflow: 'hidden'
    },
    imageWrapperCurve: {
        position: 'absolute',
        zIndex: 0,
        color: Colors.black
    },
    whiteRoundDetailContainer: {
        marginTop: 250 * heightRatioProMax,
        borderTopLeftRadius: 50 * widthRatioProMax,
        borderTopRightRadius: 50 * widthRatioProMax,
        backgroundColor: Colors.black,
        borderColor: Colors.textColorGold,
        borderWidth: 1,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    outerInfoBox: {
        flex: 4,
        marginLeft: 20 * widthRatioProMax,
        marginBottom: Platform.OS === 'ios' ? 10 * heightRatioProMax : 0,
        color: Colors.textColorGold
    },
    headerText: {
        marginRight: 5 * widthRatioProMax,
        fontFamily: Fonts.mainFontBold,
        fontSize: Platform.OS === 'android' ? 15 * heightRatioProMax : 14 * heightRatioProMax,
        color: Colors.textColorGold

    },
    innerInfoBox: {
        flexDirection: 'row',
        marginBottom: Platform.OS === 'android' ? 10 * heightRatioProMax: 17 * heightRatioProMax,
        alignItems: 'center',
        color: Colors.textColorGold


    },
    innerTextValues: {
        fontFamily: Fonts.mainFontReg,
        fontSize: Platform.OS === 'android' ? 15 * heightRatioProMax : 14 * heightRatioProMax,
        color: Colors.textColorGold
    },
    buttonContainer: {
        marginTop: Platform.OS === 'android' ? 60 * heightRatioProMax : 0,
        marginBottom: 20 * heightRatioProMax,
        flex: 2
    }
})

export default ClubMiniDetailScreen;