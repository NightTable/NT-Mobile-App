// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, ScrollView } from 'react-native';

import WhiteBubbleLayoutComp from './WhiteBubbleLayoutComp';

import { Fonts } from '../../fonts/Fonts';

import PendingPartHorizComp from '../PollingRoomScreen/PendingPartHorizComp';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';


const ParticipantInfoSectionComp = (props) => {

    const range = (start, stop, step) => {
        
        return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    
    };

    return (<View>
        <Text style={{
        marginTop: 20 * heightRatioProMax,
        marginBottom: 20 * heightRatioProMax,
        marginLeft: 20 * widthRatioProMax,
        fontFamily: Fonts.mainFontReg,
        fontSize: 15 * heightRatioProMax,
    }}>Participants (3)</Text>
        <WhiteBubbleLayoutComp>
            <ScrollView 
                style={{
                    marginTop: 20 * heightRatioProMax,
                }}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {range(0, props.pendingParticipants.length - 2, 2).map((index) => (
                    <PendingPartHorizComp 
                        imageObjOne={props.pendingParticipants[index].imageObj}
                        imageObjTwo={props.pendingParticipants[index + 1].imageObj}
                        nameLabelOne={props.pendingParticipants[index].name}
                        nameLabelTwo={props.pendingParticipants[index + 1].name}
                        key={index}>
                    </PendingPartHorizComp>
                ))}
            </ScrollView>
        </WhiteBubbleLayoutComp>
    </View>)


};

export default ParticipantInfoSectionComp;

