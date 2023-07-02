import React, {useState} from 'react';

import { View, 
    Text, 
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import FilterOpenTableRequestsModal from '../modals/SearchTableRequestsScreen/FilterOpenTableRequestsModal';
import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import sampleNightClubPic from '../assets/samplenightclub.jpeg';
import whitePencilIcon from '../assets/icons/whitepencil.png';
import sampleGirl from '../assets/person.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import TableReqBubbleComp from '../components/SearchTableRequestsScreen/TableReqBubbleComp';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';

const SearchTableRequestsScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [girls, setGirls] = useState(0);
    const [guys, setGuys] = useState(0);

    const handleReqBubblePress = () => {

        props.navigation.navigate('edNav-TableRequestDetailScreen');
    }

    return (
    <View style={{ 
        backgroundColor: Colors.black, 
        flex: 1}}>
            <FilterOpenTableRequestsModal
                modalVisible={modalVisible}
                setSize={setSize}
                setGirls={setGirls}
                setGuys={setGuys}
                setPrice={setPrice}
                setModalVisible={setModalVisible}
            >
            </FilterOpenTableRequestsModal>
        <ImageBackground
         style={{
             width: '100%',
             height: 300 * heightRatioProMax
         }}
         source={sampleNightClubPic}>
             <View style={{
                 marginTop: 50 * heightRatioProMax,
                 flexDirection: 'column',
                 justifyContent: 'space-between',
                 flex: 1,
                 width: '100%'
                }}>
                 <View style={{
                     width: '100%',
                     flexDirection: 'row'
                 }}>
                     <View style={{
                         padding: 10 * heightRatioProMax,
                         backgroundColor: Colors.black,
                         borderRadius: 10 * heightRatioProMax,
                     }}>
                         <Text style={{
                             color: Colors.white,
                             fontSize: 20 * heightRatioProMax,
                             fontFamily: Fonts.mainFontBold,
                             color: Colors.gold
                         }}>open table requests for:</Text>
                     </View>
                 </View>
                 <View style={{
                     width: '100%',
                     flexDirection: 'column',
                     marginBottom: 10 * heightRatioProMax
                 }}>
                     <View style={{
                         padding: 10 * heightRatioProMax,
                         backgroundColor: Colors.black,
                         borderRadius: 10 * heightRatioProMax,
                         alignSelf: 'flex-end'
                     }}>
                         <Text style={{
                             color: Colors.white,
                             fontSize: 20 * heightRatioProMax, 
                             fontFamily: Fonts.mainFontBold,
                             color: Colors.gold
                         }}>the grand</Text>
                     </View>
                 </View>
             </View>
        </ImageBackground>
            <View>
                <View style={{
                    marginTop: 10 * heightRatioProMax,
                    backgroundColor: Colors.black,
                    borderRadius: 20 * heightRatioProMax,
                    backgroundColor: Colors.black,
                    paddingBottom: 30 * heightRatioProMax,
                    width: '100%',
                    borderWidth: 1,
                    borderColor: Colors.gold
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 10 * heightRatioProMax,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                marginLeft: 20 * widthRatioProMax,
                                fontSize: 20 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            }}>selected filters</Text>


                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}>
                                    <Image
                                    source={whitePencilIcon}
                                    style={{
                                        marginLeft: 15 * widthRatioProMax,
                                        width: 37 * heightRatioProMax,
                                        height: 37 * heightRatioProMax
                                    }} >
                                        
                                    </Image>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            marginRight: 20 * widthRatioProMax
                        }}>
                            <Text style={{
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            }}>+/-</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10 * heightRatioProMax,
                        justifyContent: 'space-around'
                    }}>
                        <View>
                            <Text style={styles.infoText}>table size</Text>
                            <Text style={{...styles.infoText, 
                            fontFamily: Fonts.mainFontBold,
                            marginTop: 30 * heightRatioProMax}}>{Math.floor(size)}</Text>
                        </View>
                        <View>
                            <Text style={styles.infoText}>price</Text>
                            <Text style={{...styles.infoText,
                            fontFamily: Fonts.mainFontBold,
                            marginTop: 30 * heightRatioProMax}}>${Math.floor(price)}</Text>
                        </View>
                        <View>
                            <Text style={styles.infoText}>m/f ratio</Text>
                            <Text style={{...styles.infoText, 
                            fontFamily: Fonts.mainFontBold,
                            marginTop: 30 * heightRatioProMax}}>{Math.floor(guys)}:{Math.floor(girls)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginTop: 15 * heightRatioProMax
                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10 * heightRatioProMax,
                    }}>
                        <View style={{
                            flex: 5,
                        }}>
                            <Text style={styles.requestLabelText}>organizer</Text>
                        </View>
                        <View style={{
                            flex: 3
                        }}>
                            <Text style={styles.requestLabelText}>name</Text>
                        </View>
                        <View style={{
                            flex: 3
                        }}>
                            <Text style={styles.requestLabelText}>size</Text>
                        </View>
                        <View style={{
                            flex: 3
                        }}>
                            <Text style={styles.requestLabelText}>available</Text>
                        </View>
                        <View style={{
                            flex: 3
                        }}>
                            <Text style={styles.requestLabelText}>taken</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{
                        minHeight: 400 * heightRatioProMax,
                    }}>
                        <TableReqBubbleComp
                            onReqBubblePress={handleReqBubblePress}
                            imageObj={sampleGirl}
                            organizer="Janelle May"
                            name="ziprave"
                            size={8}
                            available={5}
                            taken={3}
                        ></TableReqBubbleComp>
                        <TableReqBubbleComp
                            onReqBubblePress={handleReqBubblePress}
                            imageObj={johnPic}
                            organizer="John Nydam"
                            name="coolguys"
                            size={12}
                            available={2}
                            taken={10}
                        ></TableReqBubbleComp>
                    </ScrollView>
                </View>
            </View>
    </View>)

};

const styles = StyleSheet.create({

    infoText: {
        color: Colors.gold,
        fontSize: 15 * heightRatioProMax,
        fontFamily: Fonts.mainFontReg,
        textAlign: 'center'
    },
    requestLabelText: {
        textAlign: 'center',
        fontFamily: Fonts.mainFontReg,
        fontSize: 11 * widthRatioProMax,
        color: Colors.gold
    },
})

export default SearchTableRequestsScreen;

