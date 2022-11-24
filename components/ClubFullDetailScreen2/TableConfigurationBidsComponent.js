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



import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { render } from 'react-dom';

const TableConfigurationBidsComponent = (props) => {
    const [eventList, setEventList] = useState([]);
    const [tableConfigList, setTableConfigsList] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);



    const handleChevronClick = () => {
        if (chevronImageSrc === ChevronArrowNormal){
            setChevronImageSrc(ChevronCollapsed);
            setCollapsed(true);
        }
        if (chevronImageSrc === ChevronCollapsed){
            setChevronImageSrc(ChevronArrowNormal);
            setCollapsed(false);
        }
 
    


    return (
        <View>
                    <ScrollView>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30}}>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Organizer</Text>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Group Spend</Text>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.gold, textAlign: 'center', marginVertical: 3}}>Joining Fee</Text>
                        </View>
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
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.tinyLogoCollapsed}
                                        source={chevronImageSrc}
                                    />             
                                </TouchableOpacity>

                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.organizer}</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.groupSpend}</Text>
                            </View>

                            <View style={{flexDirection: 'column'}}>
                                <TouchableOpacity>
                                    <View style={{backgroundColor: Colors.green, borderRadius: 5 * heightRatioProMax}}>
                                        <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.white, textAlign: 'center', margin: 5}}>Preview Group</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3}}>{props.joiningFee}</Text>
                            </View>
                        </View>
                    </ScrollView>
                
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
        width: 10,
        height: 20,
        marginRight: 5
      },
      tinyLogoCollapsed: {
        width: 20,
        height: 12,
        marginRight: 5,
        marginVertical: 3
      },
});
export default TableConfigurationBidsComponent;

