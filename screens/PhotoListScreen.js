// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import samplePhotoOne from '../assets/person.jpeg';
import samplePhotoTwo from '../assets/younggirl1.jpeg';
import samplePhotoThree from '../assets/younguy2.jpeg';
import samplePhotoFour from '../assets/johnpic.jpeg';

import { heightRatioProMax } from '../dimensions/Dimensions';

import { View, 
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image } from 'react-native'; 
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import sampleNightClub from '../assets/samplenightclub.jpeg';

const PhotoListScreen = (props) => {
    console.log(props.route, "this is route")
    let resultArray = []; 

    const handleNavToPhotoDetailScreen = () => {
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-PhotoDetailListScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-PhotoDetailListScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-PhotoDetailListScreen');
        }
    }

    for (let i = 0; i < 8; i++) {
        resultArray.push(samplePhotoOne);
        resultArray.push(samplePhotoTwo);
        resultArray.push(samplePhotoThree);
        resultArray.push(samplePhotoFour);
    }

    let indexArray = Array.from({length: 4}, (_, i) => i + 1);

    let indexArrayMapped = indexArray.map((entry, index) => {
        return {
            id: index,
            value: entry
        }
    });

    const renderItem = ({ item, index }) => {

        let queryIndex = index * 3;


        return (<View key={index} style={{
            flexDirection: 'row',
            flex: 2
        }}>
                <TouchableOpacity 
                onPress={handleNavToPhotoDetailScreen}
                style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 140 * heightRatioProMax
                    }} source={resultArray[queryIndex]}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={handleNavToPhotoDetailScreen}
                style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 140 * heightRatioProMax
                    }} source={resultArray[queryIndex + 1]}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={handleNavToPhotoDetailScreen}
                style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 140 * heightRatioProMax
                    }} source={resultArray[queryIndex + 2]}></Image>
                </TouchableOpacity>
        </View>)
    }


    return (
    <ImageBackground 
    source={sampleNightClub}
    style={{
        flex: 1
    }}>
        <View style={{
            justifyContent: 'center',
            backgroundColor: Colors.black,
            height: 30 * heightRatioProMax
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.white
            }}>Jake Tanner</Text>
        </View>
        <FlatList
            style={{
                flex: 1
            }}
            renderItem={renderItem}
            data={indexArrayMapped}
        >
        </FlatList>
    </ImageBackground>)
}

export default PhotoListScreen;