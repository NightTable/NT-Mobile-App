// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';

import { StyleSheet, 
    Modal,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    Dimensions} from 'react-native';
import XPic from '../../assets/xpic.png';
import {Colors} from '../../colors/Colors';
import { Fonts } from '../../fonts/Fonts';
import { heightRatioNorm, heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import Slider from '@react-native-community/slider';



const FilterOpenTableRequestsModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPrice, setModalPrice] = useState(0)
    const [modalSize, setModalSize] = useState(0)
    const [modalGirls, setModalGirls] = useState(0)
    const [modalGuys, setModalGuys] = useState(0)
    const h = Dimensions.get('window').height;
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
            props.setModalVisible(false)

          }}
    >
        <View style={styles.centeredView}>
            <View style={{justifyContent: 'space-evenly', width: '100%', backgroundColor: Colors.black, height: '85%', borderRadius: 50*heightRatioNorm, marginTop: 10*heightRatioNorm, borderWidth: 1, borderColor: Colors.gold}}>
                <View style={{alignItems: 'center',}}>
                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 25*heightRatioNorm, textAlign: 'center', margin: 15*heightRatioNorm}}>Filters</Text>
                </View>

                <View style={{flexDirection: 'row', margin: 20*heightRatioNorm}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'left'}}>preferred table size: </Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row',  flex: 1}}>
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 20*heightRatioNorm, textAlign: 'center', marginTop: (Platform.OS == 'android'?-30*heightRatioNorm:0), marginBottom: (Platform.OS=='android'?0:-27*heightRatioNorm)}}>{Math.floor(modalSize)}</Text>
                        </View>
                        <View style={{flexDirection: 'row',  flex: 1,marginTop: (Platform.OS=='android'?0*heightRatioNorm:15*heightRatioNorm)}}>
                            <Slider
                                style={{width: '80%'}}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={Colors.gold}
                                maximumTrackTintColor={Colors.gold}
                                thumbTintColor={Colors.gold}
                                value={modalSize}
                                onValueChange={value => setModalSize(value)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', margin: 20*heightRatioNorm}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'left'}}>price:</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row',  flex: 1}}>
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 20*heightRatioNorm, textAlign: 'center', marginTop: (Platform.OS == 'android'?-30*heightRatioNorm:0), marginBottom: (Platform.OS=='android'?0:-27*heightRatioNorm)}}>${Math.floor(modalPrice)}</Text>
                        </View>
                        <View style={{flexDirection: 'row',  flex: 1, marginTop: (Platform.OS=='android'?0*heightRatioNorm:15*heightRatioNorm)}}>
                            <Slider
                                style={{width: '80%'}}
                                minimumValue={0}
                                maximumValue={5000}
                                minimumTrackTintColor={Colors.gold}
                                maximumTrackTintColor={Colors.gold}
                                thumbTintColor={Colors.gold}
                                value={modalPrice}
                                onValueChange={value => setModalPrice(value)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', margin: 20*heightRatioNorm,}}>
                    <View style={{flexDirection: 'column', flex: 1,}}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'left'}}>male-to-female ratio:</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row',  flex: 1}}>
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 20*heightRatioNorm, textAlign: 'center', marginTop: (Platform.OS == 'android'?-30*heightRatioNorm:(h<700?-10*heightRatioNorm:0))}}>{Math.floor(modalGuys)}:{Math.floor(modalGirls)}</Text>
                        </View>
                        <View style={{flexDirection: 'row',  flex: 1,}}>
                            <Slider
                                style={{width: '80%'}}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={Colors.gold}
                                maximumTrackTintColor={Colors.gold}
                                thumbTintColor={Colors.gold}
                                value={modalGuys}
                                onValueChange={value => setModalGuys(value)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', margin: 20*heightRatioNorm}}>
                    <View style={{flexDirection: 'column', flex: 1, }}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'left'}}>male-to-female ratio:</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center',}}>
                        <View style={{flexDirection: 'row',  flex: 1, }}>
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 20*heightRatioNorm, textAlign: 'center', marginBottom: -5*heightRatioNorm}}>more guys</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', margin: 20*heightRatioNorm}}>
                    <View style={{flexDirection: 'column', flex: 1, }}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'center'}}>preferred table size: </Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', }}>
                    <View style={{flexDirection: 'row',  flex: 1, marginTop: (Platform.OS=='android'?0*heightRatioNorm:15*heightRatioNorm)}}>
                            <Slider
                                style={{width: '80%'}}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={Colors.gold}
                                maximumTrackTintColor={Colors.gold}
                                thumbTintColor={Colors.gold}
                                value={modalGirls}
                                onValueChange={value => setModalGirls(value)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row',  margin: 20*heightRatioNorm}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, textAlign: 'left'}}>male-to-female ratio:</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', }}>
                        <View style={{flexDirection: 'row',  flex: 1, }}>
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontBold, fontSize: 20*heightRatioNorm, textAlign: 'center', marginBottom: -5*heightRatioNorm}}>more girls</Text>
                        </View>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: Colors.gold, width: '60%', borderWidth: 2*heightRatioNorm, borderRadius: 10 * heightRatioProMax,
                        shadowColor: Colors.black,
                        shadowRadius: 5,
                        shadowOpacity: 1,
                        margin: 20*heightRatioNorm,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                            elevation: 3
                        }}
                        onPress={() => {
                            props.setSize(modalSize);
                            props.setGirls(modalGirls);
                            props.setGuys(modalGuys);
                            props.setPrice(modalPrice);
                            props.setModalVisible(false);
                          }}>
                            <Text style={{margin: 5*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.black, textAlign: 'center'}}>save filters</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{
                        shadowColor: Colors.black,
                        shadowRadius: 5,
                        shadowOpacity: 1,
                        margin: 20*heightRatioNorm,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                            elevation: 3
                        }}
                        onPress={() => {
                            props.setModalVisible(false);
                          }}>
                        <Image
                        source={XPic}
                        style={{
                            marginLeft: 15 * widthRatioProMax,
                            width: 50 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }} >
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 22*heightRatioNorm
    },

})

export default FilterOpenTableRequestsModal;