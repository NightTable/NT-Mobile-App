// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import { 
    View, 
    Text, 
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground, 
    StyleSheet,
    FlatList,
    Platform} from 'react-native';

import exampleGuy from '../assets/younguy2.jpeg';
import exampleGirl from '../assets/younggirl1.jpeg';
import examplePerson from '../assets/person.jpeg';
import instagramLogo from '../assets/instalogo.png';
import sampleNightClubPic from '../assets/samplenightclub.jpeg';
import WhiteBubbleLayoutComp from '../components/UserProfileScreen/WhiteBubbleLayoutComp';
import FriendBubbleComp from '../components/UserProfileScreen/FriendBubbleComp';

import livMiami from '../assets/livmiami.png';
import reignPic from '../assets/reignpic.png';
import margueeNy from '../assets/marqueeny.png';

import { heightRatioProMax, widthProRatioMax, widthRatioNorm, widthRatioProMax } from '../dimensions/Dimensions';
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

const UserProfileScreen = (props) => {

    const handleMessageButton = () => {
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-MessagesDetailScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-MessagesDetailScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-MessagesDetailScreen');
        }
    }

    const handleBrowsePhotoPress = () => {
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-PhotoListScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-PhotoListScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-PhotoListScreen');
        }
    }

    const handleFriendBubblePress = () => {
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-UserProfileScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-UserProfileScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-UserProfileScreen');
        }
    }

    let dummyFriendArray = [
        {
            name: "amanda ruber",
            imageObj: exampleGirl,
            isMutualFriend: true
        },
        {
            name: "jack bailey",
            imageObj: exampleGuy,
            isMutualFriend: true
        },
        {
            name: "tyler soris",
            imageObj: exampleGuy,
            isMutualFriend: true
        },
        {
            name: "matthew greyshark",
            imageObj: exampleGuy,
            isMutualFriend: false
        },
        {
            name: "joshua markish",
            imageObj: exampleGuy,
            isMutualFriend: false
        },
        {
            name: "emily stone",
            imageObj: exampleGirl,
            isMutualFriend: false
        }
    ]

    let imagesArray =[ 
        {
            imageObj: livMiami
        },
        {
            imageObj: reignPic
        },
        {
            imageObj: margueeNy
        },
        {
            imageObj: livMiami
        },
        {
            imageObj: reignPic
        },
        {
            imageObj: margueeNy
        },
        {
            imageObj: livMiami
        },
        {
            imageObj: reignPic
        },
        {
            imageObj: margueeNy
        }
    ];

    let indexArray = Array.from({length: 3}, (_, i) => i + 1);

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
                <TouchableOpacity style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 75 * heightRatioProMax
                    }} source={imagesArray[queryIndex].imageObj}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 75 * heightRatioProMax
                    }} source={imagesArray[queryIndex + 1].imageObj}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: 75 * heightRatioProMax
                    }} source={imagesArray[queryIndex + 2].imageObj}></Image>
                </TouchableOpacity>
        </View>)
    }

    return (<View style={styles.container}>
        <ImageBackground 
            style={{
                flexDirection: 'column',
                width: '100%',
                height: Platform.OS === 'ios' ? 450 * heightRatioProMax : 490 * heightRatioProMax,
            }}
            source={sampleNightClubPic}>
                <View style={{
                    width: '100%',
                    flex: 1,
                    zIndex: 10,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    backgroundColor: Colors.black
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,

                        marginBottom: 10 * heightRatioProMax,
                        color: Colors.white,
                    }}>Jake Tanner</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 12
                }}>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            height: 140 * heightRatioProMax,
                            width: '100%',
                            overflow: 'hidden'
                        }}>
                            <Image 
                                style={{
                                    resizeMode: 'cover',
                                    position: 'absolute',
                                    top: -7,
                                    width: '100%',
                                    height: 300 * heightRatioProMax
                                }}
                                source={exampleGuy}></Image>
                        </View>
                        <View style={{
                            marginTop: 7 * heightRatioProMax,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 10 * heightRatioProMax,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: Colors.white,
                                    width: 47 * heightRatioProMax,
                                    height: 47 * heightRatioProMax,
                                    marginRight: 10 * widthRatioProMax
                                }}>
                                <Image 
                                    style={{
                                        width: 40 * heightRatioProMax,
                                        height: 40 * heightRatioProMax
                                    }}
                                    source={instagramLogo}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={handleBrowsePhotoPress}
                            style={{
                                paddingHorizontal: 8 * widthRatioProMax,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                borderRadius: 5 * heightRatioProMax,
                                backgroundColor: Colors.white,
                                height: 30 * heightRatioProMax,
                            }}>
                                 <Text style={{
                                     color: Colors.orange,
                                     fontFamily: Fonts.mainFontBold
                                 }}>browse photos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            borderRadius: 20 * heightRatioProMax,
                            marginTop: 5 * heightRatioProMax,
                            height: Platform.OS === 'ios' ? 160 * heightRatioProMax : 190 *heightRatioProMax,
                            backgroundColor: Colors.black
                        }}>
                            <View style={{
                                marginTop: 20 * heightRatioProMax,
                                width: '80%'
                            }}>
                                <Text style={{
                                    color: Colors.white,
                                    fontFamily: Fonts.mainFontReg,
                                }}>age: 26</Text>
                            </View>
                            <View style={{
                                marginTop: 15 * heightRatioProMax,
                                width: '80%'
                            }}>
                                <Text style={{
                                    color: Colors.white,
                                    fontFamily: Fonts.mainFontReg
                                }}>gender: male</Text>
                            </View>
                            <View style={{
                                marginTop: 30 * heightRatioProMax,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <TouchableOpacity style={{
                                    borderColor: Colors.green,
                                    borderWidth: 1,
                                    borderRadius: 6 * heightRatioProMax,
                                    padding: 6 * heightRatioProMax,
                                    paddingHorizontal: 8 * heightRatioProMax,
                                    backgroundColor: Colors.white,
                                    marginLeft: 10 * widthRatioProMax,
                                }}>
                                    <Text style={{
                                        color: Colors.green,
                                        fontFamily: Fonts.mainFontReg
                                    }}>add friend</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={handleMessageButton}
                                style={{
                                    borderColor: Colors.orange,
                                    borderWidth: 1,
                                    borderRadius: 6 * heightRatioProMax,
                                    padding: 6 * heightRatioProMax,
                                    paddingHorizontal: 8 * heightRatioProMax,
                                    marginRight: 10 * widthRatioProMax,
                                    backgroundColor: Colors.white
                                }}>
                                    <Text style={{
                                        color: Colors.orange,
                                        fontFamily: Fonts.mainFontReg
                                    }}>message</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <FlatList
                        style={{
                            flex: 1
                        }}
                        renderItem={renderItem}
                        data={indexArrayMapped}
                        >
                        </FlatList>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView>
            <View style={{
                marginTop: Platform.OS === 'android' ? 40 * heightRatioProMax : 0,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: Colors.greyLight,
                zIndex: 12
            }}>
                <View style={{
                    width: '90%',
                    marginTop: Platform.OS === 'ios' ? 20 * heightRatioProMax : -20 * heightRatioProMax,
                }}>
                     <Text style={{
                         fontSize: 20 * heightRatioProMax,
                         fontFamily: Fonts.mainFontReg
                     }}>other information</Text>
                </View>
                <View style={{
                    marginTop: 20 * heightRatioProMax,
                    marginBottom: 10 * heightRatioProMax,
                    width: '90%'
                }}>
                     <Text style={{
                         fontSize: 15 * heightRatioProMax,
                         fontFamily: Fonts.mainFontReg
                     }}>friends (3 mutual friends)</Text>
                </View>
                <WhiteBubbleLayoutComp>
                        {dummyFriendArray.map((friend, index) => (
                            <FriendBubbleComp
                            handlePress={handleFriendBubblePress}
                            key={index}
                            image={friend.imageObj}
                            name={friend.name}
                            isMutualFriend={friend.isMutualFriend}
                            >
                            </FriendBubbleComp>
                        ))}
                </WhiteBubbleLayoutComp>
            </View>
            </ScrollView>
    </View>)

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyLight,
        flex: 1,
        flexDirection: 'column',
    }
});

export default UserProfileScreen;