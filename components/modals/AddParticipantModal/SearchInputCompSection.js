// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';

import { View,
    TouchableOpacity,
    TextInput, Image, Text } from 'react-native';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Colors } from '../../../colors/Colors';

import axios from 'axios';

import { API_URL_IOS, API_URL_ANDROID, ABSTRACTAPI_PARTIAL_URL } from "@env";

import purpleCheckImage from '../../../assets/purplecheckmark.png';
import { Fonts } from '../../../fonts/Fonts';

const SearchInputCompSection = (props) => {

    const [participantDetail, setParticipantDetail] = useState("");
    const [fee, setFee] = useState(0);

    const createParticipantRequest = async () => {

        let isValidPhoneNumber = await axios.get(ABSTRACTAPI_PARTIAL_URL + `&phone=` + participantDetail).then(
            response => {
                if (response.data.valid){
                    return true;
                }
                else{
                    return false;
                }
            }
        )
        .catch(error => {
            return false;
        })

        let isValidEmail = (String(participantDetail)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null);

        if (isValidPhoneNumber){
            const participant = {
                externalUser: true,
                phone: Number(participantDetail),
                joiningFee: parseInt(fee)
            }
            props.addParticipant(participant);

        }
        if (isValidEmail){
            const participant = {
                externalUser: true,
                email: participantDetail,
                joiningFee: parseInt(fee)
            }
            props.addParticipant(participant);  
        }
    }


    return (<View style={{
        flexDirection: 'row',
        marginTop: 50 * heightRatioProMax,
        height: 50 * heightRatioProMax,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <View style={{
            flex: 8,
            flexDirection: 'row'
        }}>
            <TextInput
            style={{
                borderColor: Colors.gold,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                textAlign: 'center',
                color: Colors.gold,
                fontFamily: Fonts.mainFontReg,
                fontSize: 17 * heightRatioProMax,
                height: 20 * heightRatioProMax,
                borderBottomWidth: 1,
                width: 200 * widthRatioProMax,
                color: Colors.gold

            }}
                placeholder={"participant details"}
                value={participantDetail}
                onChangeText={(text) => setParticipantDetail(text)}>
            </TextInput>
            <TextInput
            style={{
                borderColor: Colors.gold,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                textAlign: 'center',
                color: Colors.gold,
                fontFamily: Fonts.mainFontReg,
                fontSize: 17 * heightRatioProMax,
                height: 20 * heightRatioProMax,
                borderBottomWidth: 1 * widthRatioProMax,
                width: 70 * widthRatioProMax,
                marginHorizontal: 40 * widthRatioProMax
            }}
                placeholder={"fee"}
                value={fee}
                onChangeText={(text) => setFee(text)}>

            </TextInput>
        </View>
        <TouchableOpacity style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 300 * widthRatioProMax,
        }}
            onPress={createParticipantRequest}>
            <Image 
            style={{
                width: 50 * heightRatioProMax,
                height: 50 * heightRatioProMax
            }}
            source={purpleCheckImage}></Image>
        </TouchableOpacity>
    </View>)
}

export default SearchInputCompSection;
