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


import ChevronArrowNormal from '../../assets/chevron-back-outline.png'
import ChevronCollapsed from '../../assets/chevron-back-outline-collapsed.png'
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';

import TableConfigurationBidsComponent from './TableConfigurationBidsComponent'


import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { render } from 'react-dom';

const TableConfigurationComponent = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);
    const [bids, setBids] = useState([]);

    const handleBids = () => {
        setBids(props.bids);
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
        handleBids();
        
    }, []);

    return (
        <View>
            <View 
                style={[{
                    marginVertical: 15 * heightRatioProMax,
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
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.tableMapId}</Text>
                </View>

                <View style={{marginVertical: 3 * heightRatioProMax, alignItems: 'center', marginRight: 5 * widthRatioProMax, flexDirection: 'row'}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3 * heightRatioProMax}}>{props.tableType}</Text>
                </View>

                <View style={{marginVertical: 3 * heightRatioProMax, alignItems: 'center', marginRight: 5 * widthRatioProMax, flexDirection: 'row'}}>
                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3 * heightRatioProMax}}>{props.tableMinimum}</Text>
                </View>
            </View>
            {(collapsed && bids.length !== 0) ? 
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginTop: 15 * heightRatioProMax}}>Organizer</Text>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginTop: 15 * heightRatioProMax}}>Group Spend</Text>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginTop: 15 * heightRatioProMax}}>Joining Fee</Text>
                         </View>
                        {bids.map((bid, index) => (
                            <TableConfigurationBidsComponent
                                key={index}
                                organizer={bid.organizer}
                                groupSpend={bid.groupSpend}
                                joiningFee={bid.joiningFee}
                                pic={bid.pic}
                                >
                            </TableConfigurationBidsComponent>
                        ))}
                    </ScrollView> : null
            }
        </View>

    )

    
};

const styles = StyleSheet.create({
    lowerContainer: {
        backgroundColor: Colors.gold,
        paddingBottom: 35 * heightRatioProMax,
        flex: 7,
        alignItems: 'center'
    },
    tinyLogoNormal: {
        width: 10 * widthRatioProMax,
        height: 20 * heightRatioProMax,
        marginRight: 5 * widthRatioProMax
    },
    tinyLogoCollapsed: {
        width: 20 * widthRatioProMax,
        height: 12 * heightRatioProMax,
        marginRight: 5 * widthRatioProMax,
        marginVertical: 3 * heightRatioProMax
    },
});

export default TableConfigurationComponent;