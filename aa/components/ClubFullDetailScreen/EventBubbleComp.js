// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    Dimensions,
    StyleSheet,
    Image, 
    Platform} from 'react-native';

import { Colors } from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';
 
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

const baseiPhoneWidth = (1/428);
const baseiPhoneHeight = (1/926);

const widthRatio = windowWidth * baseiPhoneWidth;
const heightRatio = windowHeight * baseiPhoneHeight;

const EventBubbleComp = (props) => {


    return (
    <View style={[{
        flexDirection: 'column',
        backgroundColor: Colors.textColorGold,
        borderColor: Colors.textColorGold,
        borderWidth: 2,
        width: '100%',
        borderRadius: 8 * heightRatio,
        padding: 10 * heightRatio,
        marginTop: 10 * heightRatio},  
        {
            borderColor: Colors.textColorGold,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 5,
            shadowOpacity: 0.5,
            elevation: 5
    }]}>
        <View style={{
            backgroundColor: Colors.textColorGold,
            flexDirection: 'row',
        }}>
            <View style={{
                width: (windowHeight < 700 || Platform.OS === 'android') ? '25%' : '30%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image 
                style={{
                    height: 100 * heightRatio,
                    width: 100 * heightRatio,
                    borderRadius: 50 * heightRatio
                }}
                source={{uri: props.imageObj}}>

                </Image>
            </View>
            <View style={{
                flexDirection: 'column',
                marginLeft: 10 * widthRatio,
                width: (windowHeight < 700 || Platform.OS === 'android') ? '75%' : '70%'
            }}>
                <Text style={styles.infoTextHeader}>{props.title}</Text>
                <Text style={styles.infoText}>{props.date}</Text>
                <Text style={styles.infoText}>{props.timeRange}</Text>
            </View>
        </View>
        {props.linkShown ? <View>
            <Text style={{
                marginLeft: 10 * widthRatio,
                marginTop: 13 * heightRatio,
                color: Colors.purple,
                fontFamily: Fonts.mainFontReg
            }}>tickets</Text>
            <Text style={{
                marginLeft: 10 * widthRatio,
                marginTop: 5 * heightRatio,
                fontFamily: Fonts.mainFontReg,
                fontSize: 10 * heightRatio,
            }}>https://www.ticketweb.com/event/marsh-bijou-tickets/11636575</Text>
        </View> : null}
    </View>)
};

const styles = StyleSheet.create({

    infoTextHeader: {
        marginTop: 10 * heightRatio,
        fontFamily: Fonts.mainFontBold,
        fontSize: 20 * heightRatio,
        marginBottom: 20 * heightRatio
    },
    infoText: {
        fontFamily: Fonts.mainFontReg,
        fontSize: 15 * heightRatio,
        marginBottom: 2 * heightRatio
    }
})

export default EventBubbleComp;

