// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import greenPerson from '../../assets/greenpersonpng.png';
import redPerson from '../../assets/redpersonpng.png';

import { 
    View, 
    Image,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

const PersonBarComp = (props) => {

    let availableSlotArray = Array.from({length: 4}, (_, index) => index + 1);
    let takenSlotArray = Array.from({length: 3}, (_, index) => index + 1);

    return (<View style={styles.container}>
        {availableSlotArray.map((slotIndex) => (
            <Image 
                source={greenPerson} 
                style={styles.imageStyle}
                key={slotIndex}>
            </Image>
        ))}
        {takenSlotArray.map((slotIndex) => (
            <Image 
                key={slotIndex}
                source={redPerson} 
                style={styles.imageStyle}></Image>
        ))}
    </View>)

};

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.textColorGold,
        borderWidth: 1,
        borderRadius: 10 * heightRatioProMax,
        backgroundColor: Colors.black,
        height: 85 * heightRatioProMax,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%'
    },
    imageStyle: {
        width: 50 * heightRatioProMax,
        height: 50 * heightRatioProMax
    }
});

export default PersonBarComp;