// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text } from 'react-native';
import { heightRatioNorm, heightRatioProMax } from '../../../dimensions/Dimensions';

import PartHorizComp from './ParticipantSectionComp/PartHorizComp';


const ParticipantSectionComp = (props) => {


    return (<View style={{
        marginTop: 30 * heightRatioProMax,
        flexDirection: 'column',
        width: '80%'
    }}>

        {props.participants.map((participant, index) => (
            <PartHorizComp
                key={index}
                name={participant.name}
                image={participant.image}
                isExternalUser={participant.isExternalUser}
                email={participant.email}>
            </PartHorizComp>
        ))}
    </View>)
}

export default ParticipantSectionComp;

