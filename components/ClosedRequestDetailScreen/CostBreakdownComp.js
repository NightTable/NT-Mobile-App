// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import PartHorizComp from './CostBreakdownComp/PartHorizComp';

const CostBreakdownComp = (props) => {


    return (<View style={{
        alignItems: 'center'
    }}>
        <View style={{
            marginTop: 70 * heightRatioProMax,
            width: '80%'
        }}>
            <Text style={{
                marginBottom: 10 * heightRatioProMax,
                fontFamily: Fonts.mainFontBold,
                color: Colors.purple,
                fontSize: 18 * heightRatioProMax
            }}>cost breakdown</Text>
            <View style={{
                height: 250 * heightRatioProMax
            }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    minHåheight: 250 * heightRatioProMax
                }}>
                    {props.participants.map((participant, index) => (
                        <PartHorizComp
                            key={index}
                            name={participant.name}
                            image={participant.image}
                            price={participant.price}>
                        </PartHorizComp>
                    ))}
                </ScrollView>
            </View>
        </View>
    </View>)
}

export default CostBreakdownComp;