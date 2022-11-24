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

const TableConfigurationComponent = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);
    const [bids, setBids] = useState([]);

    const handleBids = (props.bids) = () => {
        setBids(bids);
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

    return (
        <View>
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
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.tableMapID}</Text>
                </View>

                <View style={{marginVertical: 3, alignItems: 'center', marginRight: 5, flexDirection: 'row'}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.tableType}</Text>
                </View>

                <View style={{marginVertical: 3, alignItems: 'center', marginRight: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.tableMinimum}</Text>
                </View>

                {(collapsed && bids !== []) && 
                    <ScrollView>
                    </ScrollView>
                }
            </View>
        </View>

    )

    
}