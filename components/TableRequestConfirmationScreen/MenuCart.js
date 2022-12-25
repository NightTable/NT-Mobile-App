// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const MenuCart = (props) => {

    let paymentType = props.paymentType === "pnsl" ? "pay-now-split-later" : "split-now-pay-later";
/*
    {props.cart.map(item, index) => (
    ))}
*/
    return (
        

    <View style={{
        borderWidth: 1 * widthRatioProMax,
        borderColor: Colors.gold,
        width: '95%',
    }}>
        {props.cart.length === 0 ? 
        
        <Text style={{
            textAlign: 'center',
            fontFamily: Fonts.mainFontReg,
            color: Colors.gold,
            fontSize: 20 * heightRatioProMax
        }}>Your cart is empty. Take a look at the menu and add some items.</Text>
        :
        <View style={{flex: 1, flexDirection: 'row', marginVertical: 10 * heightRatioProMax, justifyContent: 'center'}}>
            <View style={{flex: 1}}>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginHorizontal: 10 * widthRatioProMax}}>Qty</Text>
                {   

                    props.cart.map((item, index) => {
                        return (
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 25 * heightRatioProMax, marginHorizontal: 10 * widthRatioProMax}}>{item.quantity}</Text>
                        );
                    })
                }

            </View>
            <View style={{flex: 1}}>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Item</Text>
                {   

                    props.cart.map((item, index) => {
                        return (
                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 20 * heightRatioProMax}}>{item.itemObj.itemName}</Text>
                        );
                    })
                }
            </View>
            <View style={{flex: 1}}>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Cost</Text>
                {   

                    props.cart.map((item, index) => {
                        return (
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 25 * heightRatioProMax, marginHorizontal: 5 * widthRatioProMax}}>${item.totalPrice}</Text>
                                <TouchableOpacity
                                    style={{backgroundColor: Colors.red, marginVertical: 25 * heightRatioProMax, borderRadius: 5}}>
                                    <Text style={{color: Colors.white, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, padding: 5 * heightRatioProMax}}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </View>
        </View>

        }

    </View>)
}

export default MenuCart;