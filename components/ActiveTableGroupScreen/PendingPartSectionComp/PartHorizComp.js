// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import  { View, 
    Text,
    Image } from 'react-native';

import { Colors } from '../../../colors/Colors';

import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';


const PartHorizComp = (props) => {

    let dynamicRowRender;

    if (!props.isExternalUser) {

        dynamicRowRender = (
            <React.Fragment>
                <View style={{
                    marginLeft: 10 * widthRatioProMax,
                    marginRight: 10 * widthRatioProMax
                }}>
                    <Image style={{
                        width: 50 * heightRatioProMax,
                        height: 50 * heightRatioProMax,
                        borderRadius: 25 * heightRatioProMax
                    }}
                    source={props.image}></Image>
                </View>
                <View>
                    <Text style={{
                        color: Colors.black
                    }}>{props.name}</Text>
                </View>
            </React.Fragment>
        )

    } else {

        dynamicRowRender = (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    marginLeft: 15 * widthRatioProMax,
                    color: Colors.black,
                    fontFamily: Fonts.mainFontReg
                }}>{props.email}</Text>
            </View>
        )

    }

    return (<View style={{
        width: '100%',
        backgroundColor: Colors.gold,
        height: 70 * heightRatioProMax,
        borderRadius: 10 * heightRatioProMax,
        flexDirection: 'row',
        marginBottom: 10 * heightRatioProMax,
        alignItems: 'center'
    }}>
        {dynamicRowRender}
    </View>)
}

export default PartHorizComp;