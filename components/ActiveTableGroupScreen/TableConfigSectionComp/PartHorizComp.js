// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import { 
    View, 
    Text, 
    Image,
    TouchableOpacity } from 'react-native';
import { Colors } from '../../../colors/Colors';
import { heightRatioProMax} from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

import whitePencil from '../../../assets/icons/whitepencil.png';

const PartHorizComp = (props) => {

    return (<View style={{
        backgroundColor: Colors.purple,
        height: 70 * heightRatioProMax,
        borderRadius: 10 * heightRatioProMax,
        flexDirection: 'row',
        marginBottom: 10 * heightRatioProMax,

    }}>
        <View style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image style={{
                width: 60 * heightRatioProMax,
                height: 60 * heightRatioProMax,
                borderRadius: 30 * heightRatioProMax
            }} source={props.image}></Image>
        </View>
        <View style={{
            flex: 5,
            justifyContent: 'center'
        }}>
            <Text style={{
                color: Colors.white,
                fontSize: 15 * heightRatioProMax,
                fontFamily: Fonts.mainFontBold
            }}>{props.name}</Text>
        </View>
        <View style={{
            flex: 2,
            flexDirection: 'row',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontBold,
                fontSize: 15 * heightRatioProMax,
                color: Colors.white
            }}>${props.share}</Text>
            <TouchableOpacity>
                <Image 
                style={{
                    width: 35 * heightRatioProMax,
                    height: 35 * heightRatioProMax
                }}
                source={whitePencil}>

                </Image>
            </TouchableOpacity>
        </View>
    </View>)
}

export default PartHorizComp;