// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Image} from 'react-native';
import { Colors } from '../../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../../dimensions/Dimensions';
import { Fonts } from '../../../../fonts/Fonts';

const PartHorizComp = (props) => {


    let dynamicRender;


    if (props.isExternalUser) {

        dynamicRender = (<View>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.white
            }}>{props.email}</Text>
        </View>)

    } else {

        dynamicRender = (
            <React.Fragment>
                <View>
                    <Image
                        style={{
                            borderRadius: 25 * heightRatioProMax,
                            width: 50 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }} 
                        source={props.image}>
                    </Image>
                </View>
                <View style={{
                    marginLeft: 10 * widthRatioProMax
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white
                    }}>{props.name}</Text>
                </View>
            </React.Fragment>
        )

    }


    return (<View style={{
        backgroundColor: Colors.purple,
        flexDirection: 'row',
        height: props.isExternalUser ? 40 * heightRatioProMax : 60 * heightRatioProMax,
        paddingHorizontal: 10 * widthRatioProMax,
        borderRadius: 10 * heightRatioProMax,
        alignItems: 'center',
        marginBottom: 3 * heightRatioProMax
        
    }}>
        {dynamicRender}
    </View>)
}

export default PartHorizComp;