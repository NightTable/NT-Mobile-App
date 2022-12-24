// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState, useEffect} from 'react';

import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Pressable,
    TextInput } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

import { Fonts } from '../../../fonts/Fonts';

const MenuComponentModalComp = (props) => {

    const [openDescription, setOpenDescription] = useState(false);

    useEffect(() => {
        console.log(props.item, "props.item");
      }, []);

    return (
        <Modal
        animationType={'fade'}
        transparent={true}
        visible={props.isOpen}
        onRequestClose={props.handleOpenModal}>
            <View style={styles.centeredView}>
                <View 
                    style={{
                        backgroundColor: Colors.black,
                        width: 400 * widthRatioProMax,
                        height: 300 * heightRatioProMax,
                        borderRadius: 5 * widthRatioProMax,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderWidth: 5 * widthRatioProMax,
                        
                        borderColor: Colors.gold}}>
                         {props.item.itemDescription ? 
                            <View style={{alignContent: 'center', justifyContent: 'center', marginTop: 70 * heightRatioProMax, flexDirection: 'column'}}>
                                <Text style={{color: Colors.gold, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax, fontSize: 20 * heightRatioProMax}}>{props.item.itemDescription}</Text>
                                <Pressable
                                style={[styles.button, styles.buttonClose, {alignSelf: 'center', width: '30%', marginTop: 90 * heightRatioProMax}]}
                                onPress={props.handleOpenModal}
                                >
                                <Text style={{color: Colors.black, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax, fontSize: 20 * heightRatioProMax}}>Close</Text>
                            </Pressable>
                            </View> : 
                            null
                         }
                          <View style={{justifyContent: 'center', marginVertical: 80 * heightRatioProMax, flexWrap: 'wrap', alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>

                        </View>
                </View>
            </View>
    </Modal>

    )
}

//props.fullMenu[props.ind].itemDescription

const styles = StyleSheet.create({

    participantBubbleContainer: {
        alignItems: 'center',
        borderRadius: 5 * heightRatioProMax,
        paddingVertical: 10 * heightRatioProMax,
        marginVertical: 4 * heightRatioProMax,
        width: '100%',
        //alignContent: 'center',
        //flexDirection: 'row',
        backgroundColor: Colors.textColorGold,
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: Colors.gold,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default MenuComponentModalComp;