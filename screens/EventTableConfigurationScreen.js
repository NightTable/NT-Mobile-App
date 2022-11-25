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
import ChevronCollapsed from '../assets/chevron-back-outline-collapsed.png';
import Person from '../assets/person.jpeg';
import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

import TableConfigurationComponent from '../components/EventTableConfigurationScreen/TableConfigurationComponent'
import EventBubbleComp from '../components/ClubFullDetailScreen/EventBubbleComp';
import TableConfigBubbleComp from '../components/ClubFullDetailScreen/TableConfigBubbleComp';
import PurpleLayoutBubbleComp from '../components/ClubFullDetailScreen/PurpleLayoutBubbleComp';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { render } from 'react-dom';

const EventTableConfigurationScreen = (props) => {
    const [eventList, setEventList] = useState([]);
    const [tableConfigList, setTableConfigsList] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);


    const getEvents = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/events/club/627edbba0734f863222db602`);
        return response.data;
    }

    let tc1 = {id: "S1", type: "stage", minimum: "$4000", bids: [{pic: Person, organizer: "Amiya Sekhar", groupSpend: "$2000", joiningFee: "$1000"}, {pic: Person, organizer: "Dave Grutman", groupSpend: "$8000", joiningFee: "$1000"}]};
    let tc2 = {id: "S2", type: "stage", minimum: "$5000", bids: []};
    let tc3 = {id: "S1", type: "stage", minimum: "$4000", bids: [{pic: Person, organizer: "Amiya Sekhar", groupSpend: "$2000", joiningFee: "$1000"}, {pic: Person, organizer: "Dave Grutman", groupSpend: "$8000", joiningFee: "$1000"}]};

    let tcs = [tc1, tc2, tc3];

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
            <View style={{flex: 1, marginTop: 80 * heightRatioProMax}}>
                <Text style={{fontFamily: Fonts.mainFontReg, textAlign: 'center', color: Colors.gold, fontSize: 15 * heightRatioProMax}}>
                    Click on pointers next to the Table Map IDs who all are
                    currently bidding to meet or exceed the Table Minimum.{"\n"}
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
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 * heightRatioProMax}}>
                <View style={{marginLeft: 5 * widthRatioProMax, marginRight: 5 * widthRatioProMax}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold}}>Table Map ID</Text>
                </View>
                <View style={{marginLeft: 5 * widthRatioProMax, marginRight: 5 * widthRatioProMax}}>
                    <Text style={{fontFamily: Fonts.mainFontReg,color: Colors.gold}}>Table Type</Text>
                </View>
                <View style={{marginLeft: 5 * widthRatioProMax, marginRight: 5 * widthRatioProMax}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold}}>Table Minimum</Text>
                </View>
            </View>
            <ScrollView 
                style={{borderWidth: 2 * widthRatioProMax, borderColor: Colors.gold, borderRadius: 15 * widthRatioProMax}}
                showsVerticalScrollIndicator={true}>
                {tcs.map((tc, index) => (
                        <TableConfigurationComponent
                            key={index}
                            tableMapId={tc.id}
                            tableType={tc.type}
                            tableMinimum={tc.minimum}
                            bids={tc.bids}
                        >
                        </TableConfigurationComponent>
                    ))}
            </ScrollView>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
                style={{backgroundColor: Colors.gold, height: 50 * heightRatioProMax, width: 200 * widthRatioProMax, borderRadius: 10 * widthRatioProMax}}
                onPress={() => props.navigation.navigate('edNav-NewTableRequestScreen')}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, fontSize: 20 * heightRatioProMax, textAlign: 'center', textAlignVertical: 'center'}}>Organize a Table</Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>)

};




export default EventTableConfigurationScreen;

