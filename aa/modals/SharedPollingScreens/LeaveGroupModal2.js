// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Modal, Platform, TouchableOpacity } from 'react-native'; 

import { Colors } from '../../colors/Colors';

import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';
import HeaderInquiryComp2 from '../../components/modals/LeaveGroupModal/HeaderInquiryComp2';
import { widthRatioProMax } from '../../dimensions/Dimensions';

import ButtonContainerComp2 from '../../components/modals/LeaveGroupModal/ButtonContainerComp2';
import HeaderInquiryComp from '../../components/modals/LeaveGroupModal/HeaderInquiryComp';
import ButtonContainerComp from '../../components/modals/LeaveGroupModal/ButtonContainerComp';
import { Fonts } from '../../fonts/Fonts';

const LeaveGroupModal2 = (props) => {

    const itemCart = props.itemCart

    return (
    <Modal
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}>
        <View style={{
                opacity: 1,
                height: (windowHeight < 700 || Platform.OS === 'android') ? '110%' : '100%',
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <View style={{
                height: windowHeight < 700 || Platform.OS === 'android' ? '80%' : '70%',
                backgroundColor: Colors.black,
                borderRadius: 50 * heightRatioProMax,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: Colors.gold,
            }}>
                <View style={{
                    marginTop: 50 * heightRatioProMax,
                    height: '100%',
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <HeaderInquiryComp2></HeaderInquiryComp2>
                    <View style={{
                        marginTop: Platform.OS === 'ios' && windowHeight < 700 ? 35 * heightRatioProMax : 25 * heightRatioProMax,
                        width: '70%'
                    }}>


                            {itemCart.length === 0 ?
                                <Text style={{
                                    fontSize: 20 * heightRatioProMax,
                                    fontFamily: Fonts.mainFontReg,
                                    color: Colors.gold,
                                    textAlign: 'center'
                                }}>
                                    Your cart is empty. Take a look at the menu and add some items.
                                </Text> 
                                : 
                                <View style={{flexDirection: 'row', marginVertical: 10 * heightRatioProMax, justifyContent: 'center', borderWidth: 1, borderColor: Colors.gold, width: '130%', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginHorizontal: 10 * widthRatioProMax}}>Qty</Text>
                                            {   

                                                itemCart.map((item, index) => {
                                                    return (
                                                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 25 * heightRatioProMax, marginHorizontal: 10 * widthRatioProMax}}
                                                            key={index}>

                                                            {item.quantity}
                                                        </Text>
                                                    );
                                                })
                                            }
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>
                                            Item
                                        </Text>
                                        {   

                                            itemCart.map((item, index) => {
                                                return (
                                                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 25 * heightRatioProMax, marginHorizontal: 10 * widthRatioProMax}}
                                                        key={index}>
                                                        {item.itemObj.itemName}
                                                    </Text>
                                                );
                                            })
                                        }
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Cost</Text>
                                            {   
                                                itemCart.map((item, index) => {
                                                    return (
                                                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}
                                                            key={index}>
                                                            <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, marginVertical: 25 * heightRatioProMax, marginHorizontal: 5 * widthRatioProMax}}>${item.totalPrice}</Text>
                                                            <TouchableOpacity
                                                                style={{backgroundColor: Colors.red, marginVertical: 25 * heightRatioProMax, borderRadius: 5}}
                                                                onPress={() => props.removeItem(index)}>
                                                                <Text style={{color: Colors.white, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, padding: 5 * heightRatioProMax}}>Remove</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    );
                                                })
                                            }
                                    </View>
                                </View>
                            }



                                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 30 * heightRatioProMax}}>
                                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>
                                        Total Cost of Items: $0
                                    </Text>
                                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, textAlign: 'center', marginVertical: 10 * heightRatioProMax}}>
                                        Upon placing your order, you will be also be levied a 51% fee that covers gratuity, tax, and other costs of service. Feel free to tip the cocktail server more at the venue.
                                    </Text>
                                    {itemCart.length === 0 ? null : 
                                        <TouchableOpacity 
                                            style={[{
                                                borderRadius: 10 * heightRatioProMax,

                                                backgroundColor: Colors.green,
                                                padding: 15 * heightRatioProMax,
                                                width: '50%'
                                            }, {
                                            shadowColor: Colors.black,
                                            shadowRadius: 2,
                                            shadowOpacity: 0.7,
                                            shadowOffset: {
                                                width: 0,
                                                height: 0
                                            },
                                            elevation: 3
                                            }]}>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontFamily: Fonts.mainFontReg,
                                                color: Colors.white,
                                                fontSize: 20 * heightRatioProMax
                                            }}>Checkout</Text>
                                        </TouchableOpacity>
                                    }


                                </View>
                    </View>
                    <ButtonContainerComp2
                        onCancelPress={props.onRequestClose}></ButtonContainerComp2>
                </View>
            </View>
        </View>
    </Modal>)
}

export default LeaveGroupModal2;