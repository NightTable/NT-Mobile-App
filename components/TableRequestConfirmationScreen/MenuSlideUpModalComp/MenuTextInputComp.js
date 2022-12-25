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

const MenuTextInputComp = (props) => {

    const [openDescription, setOpenDescription] = useState(false);
    const [descs, setDescs] = useState([]);
    let [qtyVal, setQtyVal] = useState(0)
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

    const addToCart = (item, quantity) => {
        props.addToCart(item, quantity);
    }




    return (

               

        <View style={{alignContent: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
            <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>Qty</Text>
            <TextInput
                style={{color: Colors.gold, textAlign: 'center', marginVertical: 10 * heightRatioProMax, borderWidth: 1 * widthRatioProMax, borderBottomColor: Colors.gold, width: 50 * widthRatioProMax, justifyContent: 'center', fontSize: 20 * heightRatioProMax}}
                onChangeText={setQtyVal}
            />
            <Text style={{color: Colors.gold, textAlign: 'center', marginTop: 20 * heightRatioProMax, marginLeft: 15 * widthRatioProMax, fontFamily: Fonts.mainFontReg}}>${qtyVal * props.menuItem.itemPrice}</Text>
            <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row', backgroundColor: Colors.green, alignItems: 'center', borderWidth: 1, borderRadius: 5}}
                onPress={() => addToCart(props.menuItem, qtyVal)}>
                <View style={{justifyContent: 'center', flexDirection: 'row', backgroundColor: Colors.green, alignItems: 'center'}}>
                    <Text style={{color: Colors.white, textAlign: 'center',fontFamily: Fonts.mainFontReg, textAlign: 'center'}}> Add to Cart </Text>
                </View>
            </TouchableOpacity>
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

export default MenuTextInputComp;