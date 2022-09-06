// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import { View } from 'react-native';
import { Colors } from '../colors/Colors';
import TopHeaderComp from '../components/ClosedRequestDetailScreen/TopHeaderComp';
import WhiteBubbleLayoutComp from '../components/ClosedRequestDetailScreen/WhiteBubbleLayoutComp';

import DetailSectionComp from '../components/ClosedRequestDetailScreen/DetailSectionComp';
import CostBreakdownComp from '../components/ClosedRequestDetailScreen/CostBreakdownComp';

import johnPic from '../assets/johnpic.jpeg';
import randomGirl from '../assets/younggirl1.jpeg';
import randomGuy from '../assets/younguy2.jpeg';


const ClosedRequestDetailScreen = (props) => {

    let tableReqObj = {
        organizer: "john nydam",
        name: "woahza!",
        requested: "1-19-22 3:08 PM",
        approved: "1-19-22 3:08 PM",
        tableSize: 12,
        requestType: 'snpl',
        tablePrice: 800,
        organizerShare: 33.7
    }

    let participants = [
        {
            name: "Janelle May",
            price: 600,
            image: randomGirl
        },
        {
            name: "John Nydam",
            price: 200,
            image: johnPic
        },
        {
            name: "James Knight",
            price: 100,
            image: randomGuy
        }
    ];

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.greyLight
        }}>
            <TopHeaderComp></TopHeaderComp>
            <WhiteBubbleLayoutComp>
                <DetailSectionComp
                    tableReqObj={tableReqObj}></DetailSectionComp>
                <CostBreakdownComp
                    participants={participants}></CostBreakdownComp>
            </WhiteBubbleLayoutComp>
        </View>
    )
}

export default ClosedRequestDetailScreen; 

