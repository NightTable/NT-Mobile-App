import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet,TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { Colors } from '../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import MemoireFloorplan from '../assets/Memoire.png';
import GrandFloorplan from '../assets/Shrine.png';

// we got to fix the floorplans


const Floorplan = (props) => {

    const [openModal, setOpenModal] = useState(false)

    const [floorplans, setFloorplans] = useState([{id: "63aacc91067da026d4bf7138", floorMap: GrandFloorplan}, {id: "63aacca4d71fb9accdffa5be", floorMap: MemoireFloorplan}]);

    const [initialLayoutsLength, setInitialLayoutLength] = useState(0)

    useEffect(() => {
        setInitialLayoutLength(floorplans.length)
      }, []); 

    const initialLength = floorplans.length

    let list = [1, 2, 3, 4, 5, 6]

    const handleOnReachEnd = () => {
        const plans = floorplans.floorMap
        let layouts = plans
        for (let i = 0; i < initialLayoutsLength; i++){
            layouts.push(plans[i]);
        }
        plans = [...layouts]

        setFloorplans(plans);
    }


    return (
        
        <SwipeUpDownModal
            modalVisible={props.openModal}
            ContentModal={
                <View style={styles.containerContent}>
                    <ScrollView style={{ width: '100%', margin: 150 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                        {
                            floorplans.map((floorplan, index) => {
                                return (
                                    <View style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: '10%'}}
                                        key={floorplan.id}>
                                        <Image
                                            style={{width: '100%'}}

                                            source={floorplan.floorMap}
                                            resizeMode='contain'
                                        />
                                    </View> 
                                    );
                                })
                        }
                    </ScrollView>

                </View>
            }
            HeaderStyle={styles.headerContent}
            ContentModalStyle={styles.Modal}
            HeaderContent={
                <View style={styles.containerHeader}>
                    <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 60 * heightRatioProMax, color: Colors.gold}}>Club Map</Text>
                </View>
                }
                onClose={() => {
                    props.toggleModal(false)
                }}
        />)

};

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40 * heightRatioProMax,
        width: '85%',
        marginBottom: 30 * heightRatioProMax,
    },
    containerContent: {
        flex: 1, 
        marginTop: 10 * heightRatioProMax,
        alignContent: 'center',
        alignItems: 'center',     
        justifyContent: 'center',
    },
    containerHeader: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200 * heightRatioProMax,
        padding: 10 * widthRatioProMax
        //backgroundColor: Colors.red,

        
    },
    headerContent:{
        marginTop: 0,
        backgroundColor: 'transparent',
    },
    Modal: {
        borderRadius: 75 * heightRatioProMax,
        backgroundColor: Colors.black,
        marginTop: 200 * heightRatioProMax,
        height: 80 * heightRatioProMax,
        borderWidth: 5 * widthRatioProMax,
        borderColor: Colors.gold,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 0
    },
})

export default Floorplan;