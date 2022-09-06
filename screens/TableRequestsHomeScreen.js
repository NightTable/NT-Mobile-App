// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import TableReqBubbleComp from '../components/TableRequestsHomeScreen/TableReqBubbleComp';
import { View, Text, StyleSheet, Platform } from 'react-native';

import youngGirlPic from '../assets/younggirl1.jpeg';
import youngGuyPic from '../assets/younguy2.jpeg';
import johnPic from '../assets/johnpic.jpeg';

import { heightRatioProMax, widthRatioProMax, windowHeight } from '../dimensions/Dimensions';

const TableRequestsHomeScreen = (props) => {

    const handleBubblePress = (tableType) => {
        if (tableType==='live-table-requests'){
            props.navigation.navigate('trNav-PollingRoomScreen');
        }
        if (tableType==='live-table-groupings'){
            props.navigation.navigate('trNav-ActiveTableGroupScreen2');
        }
        if (tableType==='closed-table-requests'){
            props.navigation.navigate('trNav-ClosedRequestDetailScreen');
        }
    }
    console.log(props.route, "this is route")


    return (
    <View style={styles.container}>
        <Text style={{
            marginTop: (Platform.OS==='ios'&&windowHeight<700?30 * heightRatioProMax:70*heightRatioProMax),
            marginLeft: 30 * widthRatioProMax,
            color: Colors.purple,
            fontFamily: Fonts.mainFontBold,
            alignSelf: 'flex-start',
            marginBottom: 10 * heightRatioProMax
        }}>live table requests</Text>

        <TableReqBubbleComp
        array={[]}
        tableName="ballers"
        organizerPic={youngGirlPic}
        organizerName="janelle may"
        backgroundColor={Colors.faintOrange}
        type='live-table-requests'
        onBubblePress={handleBubblePress}
        tableInfo="12 people, snpl, 4 friends"
        clubName="the grand"
        selfOrganized={false}
        datePlacement="placed on 1-19-22 3:08 PM"
        ></TableReqBubbleComp>

        <Text style={{
            marginTop: 20 * heightRatioProMax,
            marginLeft: 30 * widthRatioProMax,
            color: Colors.purple,
            fontFamily: Fonts.mainFontBold,
            alignSelf: 'flex-start',
            marginBottom: 10 * heightRatioProMax
        }}>live table groupings</Text>

        <TableReqBubbleComp
        tableName="woahza"
        selfOrganized={true}
        organizerPic={johnPic}
        organizerName="you"
        backgroundColor={Colors.faintGreen}
        type='live-table-groupings'
        onBubblePress={handleBubblePress}
        tableInfo="12 people, snpl, 4 friends"
        clubName="bijou"
        datePlacement="placed on 1-19-22 3:08 PM"
        ></TableReqBubbleComp>

        <TableReqBubbleComp
        tableName="whatspop"
        selfOrganized={false}
        organizerPic={youngGuyPic}
        organizerName="organizer"
        backgroundColor={Colors.faintGreen}
        type='live-table-groupings'
        onBubblePress={handleBubblePress}
        tableInfo="8 people, pnsl, 2 friends"
        clubName="venue"
        datePlacement="placed on 12-19-21 1:08 PM"
        ></TableReqBubbleComp>

        <TableReqBubbleComp
        tableName="eyyy!!"
        selfOrganized={false}
        organizerPic={youngGuyPic}
        organizerName="organizer"
        backgroundColor={Colors.faintGreen}
        type='live-table-groupings'
        onBubblePress={handleBubblePress}
        tableInfo="12 people, snpl, 4 friends"
        clubName="liv"
        datePlacement="placed on 1-19-22 3:08 PM"
        ></TableReqBubbleComp>

        <Text style={{
            marginTop: 20 * heightRatioProMax,
            marginLeft: 30 * widthRatioProMax,
            color: Colors.purple,
            fontFamily: Fonts.mainFontBold,
            alignSelf: 'flex-start',
            marginBottom: 10 * heightRatioProMax
        }}>closed table requests</Text>

        <TableReqBubbleComp
        tableName="heybooze!"
        selfOrganized={true}
        organizerPic={johnPic}
        organizerName="organizer"
        backgroundColor={Colors.white}
        type='closed-table-requests'
        onBubblePress={handleBubblePress}
        tableInfo="12 people, snpl, 4 friends"
        clubName="liv"
        datePlacement="placed on 1-19-22 3:08 PM"
        ></TableReqBubbleComp>

    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyLight,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    subHeaderTextStyle: {
        color: Colors.purple
    }
});

export default TableRequestsHomeScreen;