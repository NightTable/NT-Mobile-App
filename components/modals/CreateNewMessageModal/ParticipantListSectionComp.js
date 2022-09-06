// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, ScrollView } from 'react-native';
import { heightRatioProMax } from '../../../dimensions/Dimensions';

import sampleGirl from '../../../assets/person.jpeg';
import johnPic from '../../../assets/johnpic.jpeg';

import PartHorizComp from './ParticipantListSectionComp/PartHorizComp';

const ParticipantListSectionComp = (props) => {

    let dummySearchResults = [{
        name: "Janelle May",
        image: sampleGirl
    },
    {
        name: "John Nydam",
        image: johnPic
    }]

    return (<View style={{
        marginTop: 20 * heightRatioProMax,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 300 * heightRatioProMax
    }}>
        <ScrollView contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column'
        }} style={{
            width: '100%',
            minHeight: '100%',
        }}>
            {dummySearchResults.map((person, index) => (
                <PartHorizComp
                key={index}
                name={person.name}
                image={person.image}
                >
                </PartHorizComp>
            ))}
        </ScrollView>
    </View>)
}

export default ParticipantListSectionComp;

