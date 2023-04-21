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
    TextInput } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import MenuComponentComp from './MenuComponentComp';

import { Fonts } from '../../../fonts/Fonts';

const CategoryComponentComp = (props) => {

    const [menuItems, setMenuItems] = useState([]);''
    let relevantMenuItems = [];

    useEffect(() => {
        for (let i = 0; i < props.fullMenu.length; i++){
            if (props.fullMenu[i].itemCategoryId === props.id){
                relevantMenuItems.push(props.fullMenu[i]);
            } 
        }
        setMenuItems(relevantMenuItems);

      }, []);

      const atc = (item, quantity) => {
        props.addToCart(item, quantity);
      }


    return (
        <View style={{marginVertical: 50 * heightRatioProMax}}>
            <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 30 * heightRatioProMax, color: Colors.gold, textAlign: 'center', }}>
                {props.category}
            </Text>
            <MenuComponentComp
                fullMenu={menuItems}
                addToCart={atc}>  
            </MenuComponentComp>



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
    }
})

export default CategoryComponentComp;