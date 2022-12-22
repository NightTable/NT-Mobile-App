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
    TextInput} from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import MenuComponentModalComp from './MenuComponentModalComp';
import { Fonts } from '../../../fonts/Fonts';

const MenuComponentComp = (props) => {

    const [openDescription, setOpenDescription] = useState(false);
    const [descs, setDescs] = useState([]);


    const handleOpenDescription = () => {
        setOpenDescription(!openDescription);
    }




    return (

        <View>
            {   

                props.fullMenu.map((menuItem, index) => {
                    return (
                        <View
                            key={index}>
                            <View style={styles.participantBubbleContainer}>
                                <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, color: Colors.black, textAlign: 'center', marginVertical: 2 * heightRatioProMax}}>
                                    {menuItem.itemName}
                                </Text>
                                {menuItem.itemDescription !== undefined ?
                                
                                    <TouchableOpacity
                                        onPress={handleOpenDescription}>
                                        <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, color: Colors.black, textAlign: 'center', marginVertical: 2 * heightRatioProMax}}>
                                            Press for Description
                                        </Text>
                                        <MenuComponentModalComp
                                            desc={menuItem.itemDescription}
                                            isOpen={openDescription}
                                            handleOpenModal={handleOpenDescription}>
                                        </MenuComponentModalComp>
                                    </TouchableOpacity> :
                                    null        
                                }
                                <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, color: Colors.black, textAlign: 'center', marginVertical: 2 * heightRatioProMax}}>
                                    ${menuItem.itemPrice}
                                </Text>
                            </View>
                            <View style={{alignContent: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                                <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>Qty</Text>
                                <TextInput
                                    style={{color: Colors.gold, textAlign: 'center', marginVertical: 10 * heightRatioProMax, borderWidth: 1 * widthRatioProMax, borderBottomColor: Colors.gold, width: 50 * widthRatioProMax, justifyContent: 'center', fontSize: 20 * heightRatioProMax}}
                                />
                                <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, marginLeft: 15 * widthRatioProMax, fontFamily: Fonts.mainFontReg}}>$0</Text>
                                <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row', backgroundColor: Colors.green, alignItems: 'center', borderWidth: 1, borderRadius: 5}}>
                                    <View style={{justifyContent: 'center', flexDirection: 'row', backgroundColor: Colors.green, alignItems: 'center'}}>
                                        <Text style={{color: Colors.white, textAlign: 'center',fontFamily: Fonts.mainFontReg, textAlign: 'center'}}> Add to Cart </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })
            }
        </View>
    )
}

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
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
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

export default MenuComponentComp;