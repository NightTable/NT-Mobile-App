// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    ScrollView } from 'react-native';
import { heightRatioProMax } from '../../dimensions/Dimensions';

import FriendBubbleComp from './FriendListContainerComp/FriendBubbleComp';

const FriendListContainerComp = (props) => {


    return (<View style={{
    }}>
        <ScrollView style={{
            minHeight: 400 * heightRatioProMax
        }} contentContainerStyle={{
            alignItems: 'center'
        }}>
            {props.friends.map((friend, index) => (
                <FriendBubbleComp
                    key={index}
                    name={friend.name}
                    image={friend.image}></FriendBubbleComp>
            ))}
        </ScrollView>
    </View>)
}

export default FriendListContainerComp;