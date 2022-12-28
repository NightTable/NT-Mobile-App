import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet,TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import MemoireFloorplan from '../../assets/MemoireFloorplan.png';
import GrandFloorplan from '../../assets/TheGrandFloorplan.png';


import TableConfigComp from './TableOptionSectionComp/TableConfigComp';

const TableOptionSectionComp = (props) => {

    const [openModal, setOpenModal] = useState(false)

    const tableConfigListData = props.tableConfigData; 

    const handleTableOptionSectionConfigPress = (idParam) => {
        props.onOuterTableConfigPress(idParam);

    }

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

    const renderImages = ({item}) => {

    }

    let marginFactor = 18;

    return (<View style={styles.componentContainer}>
        <SwipeUpDownModal
            modalVisible={openModal}
            ContentModal={
                <View style={styles.containerContent}>
                    <ScrollView style={{marginTop: 10 * heightRatioProMax}}>
                        <FlatList
                            style={{width: '50%'}}
                            data={floorplans}
                            resizeMode="contain"
                            keyExtractor={item => item.id}
                            horizontal
                            renderItem={({item}) => 
                                <Image
                                    source={item.floorMap}
                                />
                            }
                            onEndReachedThreshold={0.5}
                        />
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
                    setOpenModal(false)
                }}
        />
        <View style={{
            marginTop: 10 * heightRatioProMax,
            alignSelf: 'flex-start',
            marginBottom: 15 * heightRatioProMax,
            
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold,
                fontSize: 20 * heightRatioProMax,

            }}>
                Select Your Table Options:</Text>
        </View>
        <View style={{width: '50%', marginBottom: 15 * heightRatioProMax, marginTop: 10 * heightRatioProMax,}}>
            <TouchableOpacity
                    style={{
                        
                        height: 50 * heightRatioProMax,
                        backgroundColor: Colors.textColorGold,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10 * heightRatioProMax,
                        borderWidth: 1,
                    }}
                    onPress={() => setOpenModal(true)}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.black
                        }}>Club Map</Text>
                </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Table Map ID
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold,
                        marginRight: 45 * widthRatioProMax
                    }}>
                    Type
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Minimum
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Table Size
            </Text>
        </View>

        {
            tableConfigListData.map((tableConfig, index) => {

                let dynamicBorderShown = false;

                if (index === 0) {
                    dynamicBorderShown = true;
                }

                return (<TableConfigComp
                    onTableConfigPress={handleTableOptionSectionConfigPress}
                    key={index}
                    selectedId={props.selectedTableConfigurationId}
                    type={tableConfig.type}
                    id={tableConfig.id}
                    price={tableConfig.minimum}
                    size={tableConfig.fits}
                    handletableMin={props.handleTableMinimum}
                ></TableConfigComp>);
            })
        }
    </View>)

};

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10 * heightRatioProMax,
        width: '85%',
        marginBottom: 30 * heightRatioProMax,
    },
    containerContent: {
        flex: 1, 
        marginTop: 40 * heightRatioProMax,
        alignContent: 'center',
        alignItems: 'center',     
        

        //justifyContent: 'center',
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

export default TableOptionSectionComp;