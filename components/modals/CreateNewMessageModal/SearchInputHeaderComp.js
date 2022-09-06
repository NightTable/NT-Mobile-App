// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet} from 'react-native';

import {Fonts} from '../../../fonts/Fonts';

import purpleSearchIcon from '../../../assets/purplesearchicon.png';
import { heightRatioProMax } from '../../../dimensions/Dimensions';
import { Colors } from '../../../colors/Colors';

const SearchInputHeaderComp = (props) => {

    return (<View style={styles.container}>
        <View style={{
            marginTop: 20 * heightRatioProMax
        }}>
            <Text style={{
                fontSize: 15 * heightRatioProMax,
                fontFamily: Fonts.mainFontReg
            }}>Who do you want to chat with?</Text>
        </View>
        <View style={{
            marginTop: 15 * heightRatioProMax,
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%'
        }}>
            <View style={{
                flex: 9,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TextInput style={{
                    width: '90%',
                    textAlign: 'center',
                    paddingBottom: 5 * heightRatioProMax,
                    color: Colors.purple,
                    fontFamily: Fonts.mainFontReg,
                    fontSize: 20 * heightRatioProMax,
                    borderColor: Colors.black,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0
                }}></TextInput>
            </View>
            <TouchableOpacity style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    style={{
                        width: 50 * heightRatioProMax,
                        height: 50 * heightRatioProMax
                    }} 
                    source={purpleSearchIcon}></Image>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default SearchInputHeaderComp;