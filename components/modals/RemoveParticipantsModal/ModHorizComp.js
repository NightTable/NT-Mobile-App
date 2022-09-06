// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const ModHorizComp = (props) => {

    const [ buttonSelected, setButtonSelected ] = useState(false);

    let dynamicRowContent;

    if (!props.isExternalUser) {

        dynamicRowContent = (
            <React.Fragment>
                <View style={{
                    flex: 2
                }}>
                    <Image 
                        style={{
                            marginLeft: 5 * widthRatioProMax,
                            borderRadius: 25 * heightRatioProMax,
                            width: 50 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}
                        source={props.image}>
                    </Image>
                </View>
                <View style={{
                    flex: 8
                }}>
                    <Text style={{
                        marginLeft: 6 * widthRatioProMax,
                        color: Colors.white,
                        fontFamily: Fonts.mainFontReg
                    }}>{props.name}</Text>
                </View>
            </React.Fragment>
        )
    } else {
        dynamicRowContent = (
            <Text style={{
                paddingLeft: 7 * widthRatioProMax,
                fontFamily: Fonts.mainFontReg,
                color: Colors.white,
                width: '100%'
            }}>{props.email}</Text>
        )
    }

    return (<TouchableOpacity activeOpacity={1} onPress={() => setButtonSelected((state) => !state)} style={{
        borderRadius: 5 * heightRatioProMax,
        backgroundColor: Colors.purple,
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.orange,
        borderWidth: buttonSelected ? 5 : 0,
        marginBottom: 5 * heightRatioProMax,
        height: props.isExternalUser ? 50 * heightRatioProMax : 90 * heightRatioProMax
    }}>
        {dynamicRowContent}
    </TouchableOpacity>)
}

export default ModHorizComp;