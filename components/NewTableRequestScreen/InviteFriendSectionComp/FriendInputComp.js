// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    TouchableOpacity,
    Text, 
    Image,
    TextInput,
    StyleSheet } from 'react-native';

import { Colors } from '../../../colors/Colors';

import purpleCheckImage from '../../../assets/purplecheckmark.png';
import { heightRatioProMax} from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const FriendInputComp = (props) => {


    return (<View style={styles.enterEmailCompContainer}>
        <View>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold
            }}>{props.inputText}</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            {props.inputText === "Enter Phone Number" ? 
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, marginTop: 10 * heightRatioProMax, fontSize: 20 * heightRatioProMax}}> + </Text> : null
            }
            <View style={{
                flex: 10
            }}>
                <TextInput 
                onChangeText={(text) => props.onFriendInputChange(text)}
                autoCapitalize="none"
                style={{
                    marginTop: 10 * heightRatioProMax,
                    color: Colors.purple,
                    borderWidth: 1,
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 18 * heightRatioProMax,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 30 * heightRatioProMax,
                    borderBottomColor: Colors.textColorGold,
                }}></TextInput>
            </View>
            <TouchableOpacity style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5
            }} onPress={props.onCheckmarkSubmit}>
                <Image
                    style={{
                        width: 40 * heightRatioProMax,
                        height: 40 * heightRatioProMax,
                    }}
                    source={purpleCheckImage}></Image>
            </TouchableOpacity>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    enterEmailCompContainer: {
        marginTop: 30 * heightRatioProMax,
        width: '93%',
        alignSelf: 'flex-end'
    }
})

export default FriendInputComp;