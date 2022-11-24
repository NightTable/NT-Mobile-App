import React, { useState, useEffect } from 'react';

import { 
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform} from 'react-native';

import { API_URL_IOS, API_URL_ANDROID } from "@env";
import axios from 'axios';


import standardClubPic from '../assets/samplenightclub.jpeg';
import ChevronArrowNormal from '../assets/chevron-back-outline.png'
import ChevronCollapsed from '../assets/chevron-back-outline-collapsed.png'
import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

import EventBubbleComp from '../components/ClubFullDetailScreen/EventBubbleComp';
import TableConfigBubbleComp from '../components/ClubFullDetailScreen/TableConfigBubbleComp';
import PurpleLayoutBubbleComp from '../components/ClubFullDetailScreen/PurpleLayoutBubbleComp';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { render } from 'react-dom';

const ClubFullDetailScreen = (props) => {
    const [eventList, setEventList] = useState([]);
    const [tableConfigList, setTableConfigsList] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);


    const getEvents = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/events/club/627edbba0734f863222db602`);
        return response.data;
    }

    let tc1 = {id: "S1", type: "stage", minimum: "$4000"};
    let tc2 = {id: "S2", type: "stage", minimum: "$5000"};

    let tc1Bid1 = {organizer: "Amiya Sekhar", groupSpend: "$2000", joiningFee: "$1000"}
    let tc1Bid2 = {organizer: "Dave Grutman", groupSpend: "$8000", joiningFee: "$1000"}

    let tcs = {firstTC: [tc1, tc1Bid1, tc1Bid2], secondTC: [tc2]}

    const getTableConfigs = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/tableconfigurations/club/627edbba0734f863222db602`)
        return response.data;

    }

    const retrieveEventsAndConfigs = async () => {
        let responses = await Promise.all([getEvents(), getTableConfigs()]);
        setEventList(responses[0]);
        setTableConfigsList(responses[1]);
    }

    const handleChevronClick = () => {
        if (chevronImageSrc === ChevronArrowNormal){
            setChevronImageSrc(ChevronCollapsed);
            setCollapsed(true);
        }
        if (chevronImageSrc === ChevronCollapsed){
            setChevronImageSrc(ChevronArrowNormal);
            setCollapsed(false);
        }
 
    }

    useEffect(() => {
        retrieveEventsAndConfigs();
        
    }, []);


    return (
        <View style={{flex: 1, backgroundColor: Colors.black, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{flex: 1, marginTop: 50}}>
                <Text style={{fontFamily: Fonts.mainFontReg, textAlign: 'center', color: Colors.gold}}>
                    Click on the gold boxes to see who all are
                    currently  bidding to meet or exceed the Table Minimum.{"\n"}
                    {"\n"}
                    Tables are sold to and reserved for those who meet or exceed the Table Minimum
                    on a first-come-first-serve basis.{"\n"}
                    {"\n"}
                    While some table groups may require a joining fee, ladies, close friends, or persons
                    of interest should not let it stop them from joining, as they may request for a lower
                    fee or a free spot on the table.
                </Text>
            </View>
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold}}>Table Map ID</Text>
                </View>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <Text style={{fontFamily: Fonts.mainFontReg,color: Colors.gold}}>Table Type</Text>
                </View>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold}}>Table Minimum</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                    onPress={handleChevronClick}>
                <View 
                    style={[{
                        padding: 10 * heightRatioProMax,
                        backgroundColor: Colors.buttonColorGold,
                        width: 400 * widthRatioProMax,
                        justifyContent: 'space-evenly',
                        alignSelf: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderRadius: 10 * heightRatioProMax,

                    }, {
                            shadowColor: 'black',
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 6,
                            shadowOpacity: 0.5,
                            elevation: 10
                     }]}>

                    <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={handleChevronClick}>
                                <Image
                                    style={collapsed ? styles.tinyLogoCollapsed : styles.tinyLogoNormal}
                                    source={chevronImageSrc}
                                />
                        </TouchableOpacity>
                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>S1</Text>
                    </View>
                    <View style={{marginVertical: 3, alignItems: 'center', marginRight: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>Stage</Text>
                    </View>
                    <View style={{marginVertical: 3, alignItems: 'center', marginRight: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>$40000</Text>
                    </View>
                </View>
                {collapsed && 
                    <ScrollView>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30}}>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Organizer</Text>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Group Spend</Text>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Joining Fee</Text>
                        </View>
                        <View 
                            style={[{
                                padding: 10 * heightRatioProMax,
                                backgroundColor: Colors.buttonColorGold,
                                width: 400 * widthRatioProMax,
                                justifyContent: 'space-evenly',
                                alignSelf: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderRadius: 10 * heightRatioProMax,

                            }, {
                                shadowColor: 'black',
                                shadowOffset: {width: 0, height: 0},
                                shadowRadius: 6,
                                shadowOpacity: 0.5,
                                elevation: 10
                            }]}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.tinyLogoCollapsed}
                                        source={chevronImageSrc}
                                    />             
                                </TouchableOpacity>

                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>Amiya Sekhar</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>$4000</Text>
                            </View>

                            <View style={{flexDirection: 'column'}}>
                                <TouchableOpacity>
                                    <View style={{backgroundColor: Colors.green, borderRadius: 5 * heightRatioProMax}}>
                                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.white, textAlign: 'center', margin: 5}}>Preview Group</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>$800</Text>
                            </View>
                        </View>
                    </ScrollView>}
                </TouchableOpacity>


            </ScrollView>


        </View>
        <View style={{ borderWidth: 1, borderColor: Colors.gold, flex: 1}}>
        </View>

    </View>)

};

<ScrollView showsVerticalScrollIndicator={true}>
</ScrollView>

const styles = StyleSheet.create({
    lowerContainer: {
        backgroundColor: Colors.gold,
        paddingBottom: 35 * heightRatioProMax,
        flex: 7,
        alignItems: 'center'
    },
    tinyLogoNormal: {
        width: 10,
        height: 20,
        marginRight: 5
      },
      tinyLogoCollapsed: {
        width: 20,
        height: 12,
        marginRight: 5,
        marginVertical: 3
      },
});
export default ClubFullDetailScreen;

