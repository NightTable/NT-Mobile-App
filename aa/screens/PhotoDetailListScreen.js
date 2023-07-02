import React from 'react';

import { 
    View, 
    Text, 
    Image,
    ScrollView,
    ImageBackground, 
    StyleSheet,} from 'react-native';

import exampleGuy from '../assets/younguy2.jpeg';
import exampleGirl from '../assets/younggirl1.jpeg';
import examplePerson from '../assets/person.jpeg';
import sampleNightClubPic from '../assets/samplenightclub.jpeg';


import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

const PhotoDetailListScreen = (props) => {
    console.log(props.route, "this is route")
    let dummyArray = [{pic: exampleGuy}, {pic: exampleGirl}, {pic: examplePerson},{pic: exampleGuy}, {pic: exampleGirl}, {pic: examplePerson},{pic: exampleGuy}, {pic: exampleGirl}, {pic: examplePerson}];

    return (
    <View style={styles.container}>
        <ImageBackground 
            style={{
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            }}
            source={sampleNightClubPic}>
                <View style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: Colors.black,
                    height: 30 * heightRatioProMax
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        
                        color: Colors.gold,
                    }}>Jake Tanner</Text>

                </View>
                <View>
                    <ScrollView>
                    {dummyArray.map((element, index) => {
                        return (
                            <Image
                                key={index}
                                style={{width: '100%', height: 300*heightRatioProMax}}
                                source={element.pic}>
                            </Image>
                        )
                    })}
                    </ScrollView>
                </View>



            </ImageBackground>

    </View>)

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1,
        flexDirection: 'column',
    }
});

export default PhotoDetailListScreen;