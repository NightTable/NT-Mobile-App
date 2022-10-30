// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    Image} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const FriendBubbleComp = (props) => {


    return (<TouchableOpacity style={[{
        borderColor: Colors.gold,
        borderWidth: 0.7,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10 * heightRatioProMax,
        backgroundColor: props.isMutualFriend ? Colors.gold : Colors.black,
        width: '100%',
        height: 72 * heightRatioProMax,
        marginBottom: 5 * heightRatioProMax,
    }, {
        shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            shadowOpacity: 0.5,
            elevation: 5
    }]}
    onPress={props.handlePress}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image style={{
                marginLeft: 15 * widthRatioProMax,
                marginRight: 15 * widthRatioProMax,
                width: 60 * heightRatioProMax,
                height: 60 * heightRatioProMax,
                borderRadius: (60 / 2) * heightRatioProMax
            }} source={props.image}></Image>
            <Text style={{
                fontSize: 18 * heightRatioProMax,
                fontFamily: Fonts.mainFontReg,
                color: props.isMutualFriend ? Colors.black : Colors.gold
            }}>{props.name}</Text>
        </View>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {props.isMutualFriend ? <Text style={{
                fontSize: 20 * heightRatioProMax,
                marginRight: 20 * widthRatioProMax,
                fontFamily: Fonts.mainFontReg,
                color: Colors.black
            }}>Mutual Friend</Text> : null}
        </View>
    </TouchableOpacity>)
}

export default FriendBubbleComp;