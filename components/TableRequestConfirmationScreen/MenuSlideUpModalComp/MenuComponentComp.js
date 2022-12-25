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
import MenuTextInputComp from './MenuTextInputComp';

const MenuComponentComp = (props) => {

    const [openDescription, setOpenDescription] = useState(false);
    const [descs, setDescs] = useState([]);
    let [qtyVal, setQtyVal] = useState(0);
    const [messageObject, setMessageObject] = useState(
        {
            "id": "63a30dc0d5e2c2161ba72e0f",
            "itemCategoryId": "63a307efccbf8388495ef6e5",
            "itemDescription": "20 Bollinger Sovereign, 10 Draper Melchizedek",
            "itemName": "Genghis's Treasures",
            "itemPrice": 700000,
            "itemQuantity": 500,
          }
    );


    const handleOpenDescription = () => {
        setOpenDescription(!openDescription);
    }

    const setObject = (object) => {
        setMessageObject(object);
    }

    const atc = (item, qty) => {
        props.addToCart(item, qty)
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

                                 {(menuItem.itemDescription /*!== undefined || menuItem.itemDescription !== null*/) ?
                                    <TouchableOpacity
                                        onPress={() => [handleOpenDescription(), setObject(menuItem)]}>
                                        <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, color: Colors.black, textAlign: 'center', marginVertical: 2 * heightRatioProMax}}>
                                            Press for Description
                                        </Text>
                                        <MenuComponentModalComp
                                            ind={index}
                                            item={messageObject}
                                            fullMenu={props.fullMenu}
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
                            <MenuTextInputComp
                                menuItem={menuItem}
                                addToCart={atc}>

                            </MenuTextInputComp>

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