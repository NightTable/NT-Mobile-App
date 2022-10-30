import React from 'react';

import { View } from 'react-native';

import { Colors } from '../colors/Colors';

import SearchHeaderComp from '../components/FriendsOverviewScreen/SearchHeaderComp';
import FriendListContainerComp from '../components/FriendsOverviewScreen/FriendListContainerComp';

import johnPic from '../assets/johnpic.jpeg';
import sampleGirl from '../assets/younggirl1.jpeg';
import sampleGuy from '../assets/younguy2.jpeg';

const FriendsOverviewScreen = (props) => {

    const friendList = [
        {
            name: "amanda ruber",
            image: sampleGirl
        },
        {
            name: "john nydam",
            image: johnPic
        },
        {
            name: "jake grandy",
            image: sampleGuy
        }
    ]


    return (<View style={{
        backgroundColor: Colors.greyLight,
        flex: 1
    }}>
        <SearchHeaderComp></SearchHeaderComp>
        <FriendListContainerComp
            friends={friendList}></FriendListContainerComp>
    </View>)
}

export default FriendsOverviewScreen;