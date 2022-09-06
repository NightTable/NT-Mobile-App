// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, ScrollView} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import PartHorizComp from './TableConfigSectionComp/PartHorizComp';

const TableConfigSectionComp = (props) => {



    return (<View style={{
        marginTop: 25 * heightRatioProMax,
    }}>
        <Text style={{
            marginLeft: 10 * widthRatioProMax,
            marginBottom: 10 * heightRatioProMax,
            color: Colors.white,
            fontSize: 16 * heightRatioProMax,
            fontFamily: Fonts.mainFontBold
        }}>table configuration</Text>
        <View style={{
            height: 300 * heightRatioProMax
        }}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                {props.currentParticipants.map((participant, index) => (
                    <PartHorizComp
                        key={index}
                        image={participant.image}
                        name={participant.name}
                        share={participant.share}
                    >
                    </PartHorizComp>
                ))}
            </ScrollView>
        </View>
    </View>)
}

export default TableConfigSectionComp;