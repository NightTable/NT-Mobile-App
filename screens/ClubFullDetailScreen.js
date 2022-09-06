// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

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
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/events/club/627470322e404757114019e5`);
        return response.data;
    }

    const getTableConfigs = async () => {
        let response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/tableconfigurations/club/627470322e404757114019e5`)
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


    return (<View style={{flex: 1, position: 'relative', backgroundColor: Colors.greyLight}}>
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
                backgroundColor: Colors.purple,
                padding: 10 * heightRatioProMax,
                borderRadius: 5 * heightRatioProMax,
                marginRight: 5 * widthRatioProMax,
                alignSelf: 'flex-end'
                
            }}>
                <Text style={{
                    color: Colors.white,
                    marginTop: Platform.OS === 'android' ? -2 * heightRatioProMax : 0,
                    fontSize: 20 * heightRatioProMax,
                    fontFamily: Fonts.mainFontBold
                }}>the grand</Text>
            </View>
        </View>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.lowerContainer}>
                <PurpleLayoutBubbleComp label="upcoming events">
                    {eventList.slice(0,5).map((list, index) => (
                        <EventBubbleComp
                            key={index}
                            title={list.name}
                            date={list.eventDate}
                            timeRange={list.eventTime}
                            imageObj={list.picture}
                        ></EventBubbleComp>
                    ))}
                </PurpleLayoutBubbleComp>
                <PurpleLayoutBubbleComp label="table configurations">
                    {tableConfigList.map((tableConfig, index) => (
                        <TableConfigBubbleComp
                        key={index}
                        floorType={tableConfig.type}
                        price={tableConfig.price}
                        size={tableConfig.size}
                        >
                        </TableConfigBubbleComp>
                    ))}
                </PurpleLayoutBubbleComp>
                <View style={{
                    marginTop: 15 * heightRatioProMax,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('edNav-SearchTableRequestsScreen')}
                    style={[{
                        padding: 10 * heightRatioProMax,
                        backgroundColor: Colors.lightPurple,
                        width: 150 * widthRatioProMax,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12 * heightRatioProMax,
                        marginRight: 15 * widthRatioProMax
                    }, {
                            shadowColor: 'black',
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 6,
                            shadowOpacity: 0.5,
                            elevation: 6
                    }]}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg
                        }}>search table requests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('edNav-NewTableRequestScreen')}
                    style={[{
                        padding: 10 * heightRatioProMax,
                        backgroundColor: Colors.greyLight,
                        width: 150 * widthRatioProMax,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12 * heightRatioProMax,
                        backgroundColor: Colors.greyDark
                    }, {
                            shadowColor: 'black',
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 6,
                            shadowOpacity: 0.5,
                            elevation: 10
                    }]}>
                        <Text style={{
                            color: Colors.purple,
                            fontFamily: Fonts.mainFontReg
                        }}
                        >organize a table!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>)

};



const styles = StyleSheet.create({
    lowerContainer: {
        backgroundColor: Colors.greyLight,
        paddingBottom: 35 * heightRatioProMax,
        flex: 7,
        alignItems: 'center'
    }
});
export default ClubFullDetailScreen;

