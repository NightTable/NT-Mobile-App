// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const DetailSectionComp = (props) => {

    return (<View style={{
        alignItems: 'center'
    }}>
        <View style={{
            marginTop: 20 * heightRatioProMax,
            width: '80%',
            marginBottom: 10 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontBold,
                fontSize: 18 * heightRatioProMax
            }}>details</Text>
        </View>
        <View style={{
            marginTop: 20 * heightRatioProMax,
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>organizer:  <Text style={{
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.organizer}</Text> </Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>name:  <Text style={{
                fontFamily: Fonts.mainFontBold,
                color: Colors.purple
            }}>{props.tableReqObj.name}</Text> </Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
            }}>requested:  <Text style={{
                color: Colors.purple,
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.requested}</Text> </Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>approved:  <Text style={{
                color: Colors.purple,
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.approved}</Text> </Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>table size:  <Text style={{
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.tableSize}</Text> </Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>request type:  <Text style={{
                color: Colors.orange,
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.requestType}</Text></Text>
        </View>
        <View style={{
            width: '70%',
            marginBottom: 15 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>table price:  <Text style={{
                fontFamily: Fonts.mainFontBold
            }}>${props.tableReqObj.tablePrice}</Text></Text>
        </View>
        <View style={{
            width: '70%'
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>you paid:  <Text style={{
                color: Colors.red,
                fontFamily: Fonts.mainFontBold
            }}>{props.tableReqObj.organizerShare}</Text> </Text>
        </View>
    </View>)
}

export default DetailSectionComp;