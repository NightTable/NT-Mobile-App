// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text} from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const MenuCart = (props) => {

    let paymentType = props.paymentType === "pnsl" ? "pay-now-split-later" : "split-now-pay-later";

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
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Qty</Text>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 10 * heightRatioProMax}}>1</Text>

            </View>
            <View style={{flex: 1}}>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Item</Text>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 10 * heightRatioProMax}}>Ace of Spades Magnum</Text>

            </View>
            <View style={{flex: 1}}>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Cost</Text>
                <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 10 * heightRatioProMax}}>$1000</Text>
            </View>

        </View>

        }

    </View>)
}

export default MenuCart;