// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    TextInput,
    Image, 
    TouchableOpacity} from 'react-native';

import { Colors } from '../../colors/Colors';

import purpleCheckMark from '../../assets/purplecheckmark.png';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';


const MessageInputComp = (props) => {


    return (<View style={{
        flexDirection: 'row',
        justifyContent: 'center'
    }}>
        <View style={{
            flex: 7,
            marginTop: 25 * heightRatioProMax,
        }}>
            <TextInput style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.black,
                marginLeft: 30 * widthRatioProMax,
                borderTopWidth: 0,
                height: 30 * heightRatioProMax,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.greyDark
            }}></TextInput>
        </View>
        <View style={{
            flex: 2,
            alignItems: 'center',
            marginTop: 15 * heightRatioProMax,
        }}>
            <TouchableOpacity>
                <Image 
                    style={{
                        width: 50 * heightRatioProMax,
                        height: 50 * heightRatioProMax,
                    }}
                    source={purpleCheckMark}></Image>
            </TouchableOpacity>
        </View>
    </View>)
}

export default MessageInputComp;
