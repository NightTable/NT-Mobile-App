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
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';




import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { render } from 'react-dom';

const TableConfigurationBidsComponent = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);
    const [bids, setBids] = useState([]);

    return (
            <View 
                style={[{
                    marginVertical: 5 * heightRatioProMax,
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
                            style={styles.profilePhoto}
                            source={props.pic}
                        />             
                    </TouchableOpacity>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 16 * heightRatioProMax}}>{props.organizer}</Text>
                </View>

                <View>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3 * heightRatioProMax}}>{props.groupSpend}</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity>
                        <View style={{backgroundColor: Colors.green, borderRadius: 5 * widthRatioProMax}}>
                            <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.white, textAlign: 'center', margin: 5 * widthRatioProMax}}>Preview Group</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontFamily: Fonts.mainFontReg, color: Colors.black, textAlign: 'center', marginVertical: 3 * heightRatioProMax}}>{props.joiningFee}</Text>
                </View>
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
    profilePhoto: {
        width: 40 * widthRatioProMax,
        height: 40 * heightRatioProMax,
        marginRight: 5 * widthRatioProMax,
        marginVertical: 3 * heightRatioProMax,
        borderRadius: 50 * widthRatioProMax
    },
});

export default TableConfigurationBidsComponent;