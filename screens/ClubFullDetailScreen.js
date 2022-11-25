import React, { useState, useEffect } from 'react';

import { 
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Platform} from 'react-native';

import { API_URL_IOS, API_URL_ANDROID } from "@env";
import axios from 'axios';


import standardClubPic from '../assets/samplenightclub.jpeg';

import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

import EventBubbleComp from '../components/ClubFullDetailScreen/EventBubbleComp';

import PurpleLayoutBubbleComp from '../components/ClubFullDetailScreen/PurpleLayoutBubbleComp';
import TableConfigBubbleComp from '../components/ClubFullDetailScreen/TableConfigBubbleComp';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';

const ClubFullDetailScreen = (props) => {
    const [eventList, setEventList] = useState([]);
    const [tableConfigList, setTableConfigsList] = useState([]);

    const getEvents = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/events/club/627edbba0734f863222db602`);
        return response.data;
    }

    const getTableConfigs = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/tableconfigurations/club/627edbba0734f863222db602`)
        return response.data;

    }

    const retrieveEventsAndConfigs = async () => {
        let responses = await Promise.all([getEvents(), getTableConfigs()]);
        setEventList(responses[0]);
        setTableConfigsList(responses[1]);
    }

    useEffect(() => {
        retrieveEventsAndConfigs();
        
    }, []);


    return (<View style={{flex: 1, position: 'relative', backgroundColor: Colors.black}}>
        <ImageBackground
        source={standardClubPic}
        style={{
           width: '100%',
           height: 300 * heightRatioProMax,
           flexDirection: 'column-reverse'
        }}
        >
        <View style={{ marginBottom: 5 * heightRatioProMax, 
            flexDirection: 'row-reverse'}}>
            <View style={{
                backgroundColor: Colors.black,
                padding: 10 * heightRatioProMax,
                borderRadius: 5 * heightRatioProMax,
                marginRight: 5 * widthRatioProMax,
                alignSelf: 'flex-end'
                
            }}>
                <Text style={{
                    color: Colors.textColorGold,
                    marginTop: Platform.OS === 'android' ? -2 * heightRatioProMax : 0,
                    fontSize: 20 * heightRatioProMax,
                    fontFamily: Fonts.mainFontBold
                }}>The Grand</Text>
            </View>
        </View>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.lowerContainer}>
                <PurpleLayoutBubbleComp label="Upcoming Events">
                    
                    {eventList.slice(0,5).map((list, index) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('edNav-EventTableConfigurationScreen')}
                        >
                            <EventBubbleComp
                                key={index}
                                title={list.name}
                                date={list.eventDate}
                                timeRange={list.eventTime}
                                imageObj={list.picture}
                            ></EventBubbleComp>
                        </TouchableOpacity>

                    ))}
                </PurpleLayoutBubbleComp>
            </View>
        </ScrollView>
    </View>)

};



const styles = StyleSheet.create({
    lowerContainer: {
        backgroundColor: Colors.black,
        paddingBottom: 35 * heightRatioProMax,
        flex: 7,
        alignItems: 'center'
    }
});
export default ClubFullDetailScreen;

