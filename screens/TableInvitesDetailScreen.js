import React from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform
 } from 'react-native';
import johnpic from '../assets/johnpic.jpeg'

import {
    widthRatioNorm,
    heightRatioNorm,
    heightRatioProMax
} from '../dimensions/Dimensions';


const TableInvitesDetailScreen = (props) => {


    const handleBubblePress = () => {
        if (props.route.name.includes("invNav")){
            props.navigation.push('invNav-UserProfileScreen', {
                prevScreen: 'invTableInviteDetail'
            })
        }
    }

    const handleAcceptPress = () => {
        if (props.route.name.includes("invNav")){
            props.navigation.push('invNav-PollingRoomScreen')
        }
    }

    const handleDeclinePress = () => {
        if (props.route.name.includes("invNav")){
            props.navigation.navigate('invNav-TableInvitesOverviewScreen')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 3, backgroundColor: Colors.black, borderRadius: 80, justifyContent: 'flex-start', borderWidth: 1, borderColor: Colors.gold}}> 
                <View style={{flexDirection: 'column', flex: 5}}>
                    <Text style={{marginLeft: 50*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 30*heightRatioNorm, color: Colors.gold}}>details</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 40*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold}}>organizer: John Nydam</Text>
                        <TouchableOpacity
                            onPress={handleBubblePress}>
                            <Image
                                style={{width: 70*widthRatioNorm, height: 70*widthRatioNorm, borderRadius: 40, marginLeft: 10*widthRatioNorm, }}
                                source={johnpic}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontReg, fontSize: 18*heightRatioNorm, color: Colors.gold}}>name: </Text>
                        <Text style={{marginLeft: 10*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold}}>woohza!</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontReg, fontSize: 18*heightRatioNorm, color: Colors.gold}}>table size: </Text>
                        <Text style={{marginLeft: 10*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold}}>12</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontReg, fontSize: 18*heightRatioNorm, color: Colors.gold}}>request type: </Text>
                        <Text style={{marginLeft: 10*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold}}>snpl</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontReg, fontSize: 18*heightRatioNorm, color: Colors.gold}}>table price: </Text>
                        <Text style={{marginLeft: 10*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold}}>$800</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 60*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontReg, fontSize: 18*heightRatioNorm, color: Colors.gold}}>you paid: </Text>
                        <Text style={{marginLeft: 10*widthRatioNorm, marginTop: 20*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.red}}>$33.7</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: Colors.green, marginTop: 10*heightRatioNorm, width: '60%', borderWidth: 1*widthRatioNorm, borderColor: Colors.green,
                        shadowColor: Colors.black,
                        borderRadius: 10 * heightRatioProMax,
                        shadowRadius: 5,
                        shadowOpacity: 1,
                        shadowOffset: {
                            width: 0,
                            height: 0
                            },
                            elevation: 3         
                        }}
                        onPress={handleAcceptPress}>
                        <Text style={{margin: 10*(heightRatioNorm/widthRatioNorm), fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.white, textAlign: 'center'}}>accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: Colors.red, marginTop: 10*heightRatioNorm, width: '60%', borderWidth: 1*widthRatioNorm, borderColor: Colors.red,
                            borderRadius: 10 * heightRatioProMax,
                            shadowColor: Colors.black,
                            shadowRadius: 5,
                            shadowOpacity: 1,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            elevation: 3
                        }}
                        onPress={handleDeclinePress}>
                        <Text style={{margin: 10, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.white, textAlign: 'center'}}>decline</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      marginBottom: Platform.OS=='android'?40*heightRatioNorm:0,
      backgroundColor: Colors.black
    },
  });

export default TableInvitesDetailScreen;