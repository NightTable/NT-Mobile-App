import React, {useEffect, useState} from 'react';

import { 
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
    Pressable,
    Dimensions, 
    Modal} from 'react-native';
import { Colors } from '../colors/Colors';

import { useRoute } from '@react-navigation/native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import HeaderComp from '../components/TableRequestConfirmationScreen/HeaderComp';
import InvitiedParticipantsSectionComp from '../components/TableRequestConfirmationScreen/InvitedParticipantsSectionComp/InvitedParticipantsSectionComp';
import TableInformationSectionComp from '../components/TableRequestConfirmationScreen/TableInformationSectionComp';
import WhiteBubbleLayoutComp from '../components/TableRequestConfirmationScreen/WhiteBubbleLayoutComp';
import CategoryComponentComp from '../components/TableRequestConfirmationScreen/MenuSlideUpModalComp/CategoryComponentComp';

import ChevronArrowNormal from '../assets/chevron-back-outline.png'
import ChevronCollapsed from '../assets/chevron-back-outline-collapsed.png'
import sampleGirlImage from '../assets/younggirl1.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import { heightRatioProMax, widthRatioProMax, windowHeight } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts';
import MenuCart from '../components/TableRequestConfirmationScreen/MenuCart';

const TableRequestConfirmationScreen = (props) => {


    const route = useRoute();

    const [continueError, setContinueError] = useState(false);

    const [subtotal, setSubtotal] = useState(0);

    const [appBookingFee, setAppBookingFee] = useState(0.18);

    const [clubFees, setClubFees] = useState(0.3312);

    let [showCart, setShowCart] = useState(false)

    let [animateModal, setanimateModal] = useState(false);

    const [collapsed, setCollapsed] = useState(false);

    const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);

    let [itemCart, setItemCart] = useState([]);

    const [screenOpacity, setScreenOpacity] = useState(1);

    let menuCategories = [
        {
            id: "63a306169abc002f9c255cac",
            categoryName: "Champagne",
        },
        {
            id: "63a307da0ba71d3d49cb8561",
            categoryName: "Large Format Champagne",
        },
        {
            id: "63a307e1b331293e41c68dd8",
            categoryName: "Vodka"
        },
        {
            id: "63a307e9d891510046c50c4e",
            categoryName: "Tequila"
        },
        {
            id: "63a307efccbf8388495ef6e5",
            categoryName: "Specials"
        }
    ]
    let fugazziCart = [];

    useEffect(() => {
        calculateSubtotal()
      }, [itemCart]);

    let menuItems = [
        {
            id: "63a30878218a36ab6fc0bf5b",
            itemCategoryId: "63a306169abc002f9c255cac",
            itemName: "Ace of Spades Magnum",
            itemQuantity: 500,
            itemPrice: 1000,
        },
        {
            id: "63a30878218a36ab6fc0bf5b",
            itemCategoryId: "63a306169abc002f9c255cac",
            itemName: "Dom Perignon Rosé",
            itemQuantity: 900,
            itemPrice: 500,
        },
        {
            id: "63a30878218a36ab6fc0bf5b",
            itemCategoryId: "63a306169abc002f9c255cac",
            itemName: "Cristal",
            itemQuantity: 500,
            itemPrice: 900,
        },


        {
            id: "63a307da0ba71d3d49cb8561",
            itemCategoryId: "63a307da0ba71d3d49cb8561",
            itemName: "Drapier Melchizedek 30L",
            itemQuantity: 500,
            itemPrice: 180000,
        },
        {
            id: "63a30af64c8b35d38eac035d",
            itemCategoryId: "63a307da0ba71d3d49cb8561",
            itemName: "Ace of Spades Nebuchadnezzar 15L",
            itemQuantity: 500,
            itemPrice: 20000,
        },
        {
            id: "63a30ba7899025ae50948a6c",
            itemCategoryId: "63a307da0ba71d3d49cb8561",
            itemName: "Bollinger Sovereign 25L",
            itemQuantity: 500,
            itemPrice: 50000,
        },


        {
            id: "63a30c97518a29c3f5bc9c93",
            itemCategoryId: "63a307e1b331293e41c68dd8",
            itemName: "Absolut Strawberry Magnum",
            itemQuantity: 500,
            itemPrice: 2000,
        },
        {
            id: "63a30c9e10ed57b1d8f58a48",
            itemCategoryId: "63a307e1b331293e41c68dd8",
            itemName: "Grey Goose Limited Edt",
            itemQuantity: 500,
            itemPrice: 1500,
        },
        {
            id: "63a30ca7487c5d9f193153c7",
            itemCategoryId: "63a307e1b331293e41c68dd8",
            itemName: "Absolut Magnum",
            itemQuantity: 500,
            itemPrice: 1000,
        },


        {
            id: "63a30cbe7f53f0a2c62c991f",
            itemCategoryId: "63a307e9d891510046c50c4e",
            itemName: "Clasé Azul",
            itemQuantity: 500,
            itemPrice: 2500,
        },
        {
            id: "63a30cc5229d4aa82c2ec094",
            itemCategoryId: "63a307e9d891510046c50c4e",
            itemName: "Casamigos Blanco",
            itemQuantity: 500,
            itemPrice: 3000,
        },
        {
            id: "63a30cca24623af58a9bfd5b",
            itemCategoryId: "63a307e9d891510046c50c4e",
            itemName: "Barrique de Ponciano Porfidio",
            itemQuantity: 500,
            itemPrice: 5000,
        },


        {
            id: "63a30db3e6032d26d02ca262",
            itemCategoryId: "63a307efccbf8388495ef6e5",
            itemName: "King's Case",
            itemDescription: "2 Drapier Melchizedek and 5 Ace of Spades",
            itemQuantity: 500,
            itemPrice: 250000,
        },
        {
            id: "63a30dbb39d896bec5082f36",
            itemCategoryId: "63a307efccbf8388495ef6e5",
            itemName: "Caesar's Loot",
            itemDescription: "3 Draper Melchizedek, 1 Bolinger Sovereign",
            itemQuantity: 500,
            itemPrice: 400000,
        },
        {
            id: "63a30dc0d5e2c2161ba72e0f",
            itemCategoryId: "63a307efccbf8388495ef6e5",
            itemName: "Genghis's Treasures",
            itemDescription: "20 Bollinger Sovereign, 10 Draper Melchizedek",
            itemQuantity: 500,
            itemPrice: 700000,
        },

    ]

    let [menuVisible, setMenuVisible] = useState(false);

    let tableRequestObj = route.params.tables;

    let invitedParticipantsList = route.params.participants;

    let paymentType = route.params.paymentType === "pnsl" ? "pay-now-split-later" : "split-now-pay-later";

    let joiningFee = route.params.thisUser[0].joiningFee;

    let endingMessage = route.params.paymentType === "pnsl" ? (
        `This means that you will be charged a minimum of $${joiningFee} after you approve the request.`
    ) : 
    (
        `This means that upon all participants' confirmation, will be charged a minimum of $${joiningFee}.`
    )

    const handleMenuPress = () => {
        setMenuVisible(!menuVisible);
        //setanimateModal(!animateModal);
    }

    const addToGeneralTab = () => {
        if (joiningFee === 0){
            props.navigation.navigate('edNav-PollingRoomScreen');
        }
        else{
            props.navigation.navigate('edNav-InitialPaymentScreen', {
                joiningFee: joiningFee,
                requestType: route.params.paymentType
            });
        }
    }

    const addToCart = (item, qty) => {
        let tempCart = itemCart;
        for (let i = 0; i < tempCart.length; i++){
            if (tempCart[i].itemObj.itemName === item.itemName){

                let orderItem = {
                    quantity: parseInt(tempCart[i].quantity) + parseInt(qty),
                    itemObj: item,
                    totalPrice: (parseInt(tempCart[i].quantity) + parseInt(qty)) * parseInt(item.itemPrice)
                }
                tempCart.splice(i)
                tempCart.push(orderItem)
                setItemCart(tempCart);
                fugazziCart=tempCart;
                calculateSubtotal();
                return;
            }
        }

        let orderItem = {
            quantity: parseInt(qty),
            itemObj: item,
            totalPrice: parseInt(qty) * parseInt(item.itemPrice)
        }

        tempCart.push(orderItem)
        setItemCart(tempCart);
        calculateSubtotal();
        fugazziCart=tempCart;
    }

    const removeItem = (index) => {
        let itemCartCopy = itemCart.filter((item, i) => i !== index); // create a new array with the element at the given index removed
        setItemCart(itemCartCopy); // set the itemCart to the modified copy
        fugazziCart = itemCartCopy; // update the fugazziCart variable with the modified array
    }

    const goToNextScreen = () => {
        console.log(route.thisUser)
        if (joiningFee === 0){
            props.navigation.navigate('edNav-PollingRoomScreen');
        }
        else{
            if (joiningFee <= subtotal){
                let billTotal = subtotal * (1 + (appBookingFee + clubFees));
                props.navigation.navigate('edNav-InitialPaymentScreen', {
                    cardCharge: billTotal,
                    requestType: route.params.paymentType
                });
            }
            else{
                setContinueError(true);
                setScreenOpacity(0.5);
            }
        }
    }

    /*const removeItem = (index) => {
        let tempCart = itemCart;
        console.log(itemCart)
        tempCart.splice(index);
        setItemCart(tempCart);
        fugazziCart=tempCart;
        console.log(itemCart)
    }/*


    /*let tableRequestObj = 
        [
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            },
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            },
            {
                id: "S4",
                type: 'floor',
                price: 800,
                size: 8
            }
        ];*/

    /*let invitedParticipantsList = [

        {
            image: null,
            name: null,
            email: 'jnydam@nighttable.co',
            externalUser: true
        },
        {
            image: sampleGirlImage,
            name: "janelle may",
            email: null,
            externalUser: false
        },
        {
            image: johnPic,
            name: "john nydam",
            email: null,
            externalUser: false
        },
        {
            image: null,
            name: null,
            email: 'gblade@gmail.com',
            externalUser: true
        }
    ]*/

    const calculateSubtotal = () => {
        let sum = 0;
        console.log(itemCart, "itemCart")
        for (let i = 0; i < itemCart.length; i++){
            console.log(itemCart[i], "item cart[i]");
            sum = sum + parseInt(itemCart[i].totalPrice);
            console.log(sum, "this is supposed to be subtotal")
        }
        setSubtotal(sum)
    }

    const handleChevronClick = () => {
        if (chevronImageSrc === ChevronArrowNormal){
            setChevronImageSrc(ChevronCollapsed);
            setCollapsed(true);
            setShowCart(true)
        }
        if (chevronImageSrc === ChevronCollapsed){
            setChevronImageSrc(ChevronArrowNormal);
            setCollapsed(false);
            setShowCart(false);
        }
    }


    return (<View style={{flex: 1, flexDirection: 'column', backgroundColor: Colors.black, opacity: screenOpacity}}>
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={continueError}
            onRequestClose={() => [setContinueError(false), setScreenOpacity(0.5)]}>
                <View style={styles.centeredView}>
                    <View 
                        style={{
                            backgroundColor: Colors.black,
                            width: 400 * widthRatioProMax,
                            height: 300 * heightRatioProMax,
                            borderRadius: 5 * widthRatioProMax,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            borderWidth: 5 * widthRatioProMax,
                            flexWrap: 'wrap',
                            borderColor: Colors.gold}}>

                            <View style={{alignContent: 'center', justifyContent: 'center', marginLeft: 10 * widthRatioProMax}}>
                                <Text style={{color: Colors.gold, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax, fontSize: 20 * heightRatioProMax}}>Please place an order that is more than or equal to in value to your joining fee</Text>
                            </View> 


                            <View style={{justifyContent: 'center'}}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => [setContinueError(false), setScreenOpacity(1)]}
                                    >
                                    <Text style={{color: Colors.black, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax, fontSize: 20 * heightRatioProMax}}>Close</Text>
                                </Pressable>
                            </View>
                    </View>
                </View>
        </Modal>
        <SwipeUpDownModal
            modalVisible={menuVisible}
            ContentModal={
                <View style={styles.containerContent}>
                    <ScrollView style={{marginTop: 10 * heightRatioProMax}}>
                        {
                            menuCategories.map((category, index) => {
                                return (
                                    <CategoryComponentComp
                                        key={index}
                                        category={category.categoryName}
                                        id={category.id}
                                        fullMenu={menuItems}
                                        addToCart={addToCart}>
                                    </CategoryComponentComp>

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
                    <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 60 * heightRatioProMax, color: Colors.gold}}>Menu</Text>
                </View>
                }
                onClose={() => {
                    setMenuVisible(false);
                    setanimateModal(false);
                }}
        />
        <ScrollView>
            <HeaderComp
                paymentType={route.params.paymentType}>
            </HeaderComp>
                <WhiteBubbleLayoutComp>
                    <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            fontSize: 20 * heightRatioProMax,
                            color: Colors.textColorGold,
                            marginTop: 10 * heightRatioProMax
                        }}>Table Information</Text>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 10 * heightRatioProMax, justifyContent: 'center'}}>
                            <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Table ID</Text>
                            <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Type</Text>
                            <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Minimum</Text>
                            <Text style={{color: Colors.gold, marginHorizontal: 20 * widthRatioProMax, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>Table Size</Text>
                        </View>
                        <TableInformationSectionComp
                            table={tableRequestObj}
                        ></TableInformationSectionComp>
                        <InvitiedParticipantsSectionComp
                            participants={invitedParticipantsList}>
                        </InvitiedParticipantsSectionComp>
                        <View style={{
                            marginTop: 30 * heightRatioProMax,
                            width: '60%',
                            marginBottom: 60 * heightRatioProMax,
                        }}>
                            <Text style={{
                                fontSize: Platform.OS === 'ios' ? (windowHeight < 700 ? 20 * heightRatioProMax : 20 * heightRatioProMax) : 20 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.textColorGold
                            }}>You have chosen the {"\n"}<Text style={{
                                color: Colors.purple,
                                fontFamily: Fonts.mainFontReg
                            }}>{paymentType}</Text>
                            {"\n"}method to split costs.{"\n\n"}
                            {"\n"}{endingMessage}{"\n\n"}
                            You may go ahead and choose your alcohol of choice, or add to the general tab
                            </Text>
                        </View>
                        <View style={{
                                marginBottom: 10 * heightRatioProMax,
                                width: '40%',
                                marginTop: 10 * heightRatioProMax,
                            }}> 
                                <TouchableOpacity 
                                onPress={handleMenuPress}
                                style={[{
                                    borderRadius: 10 * heightRatioProMax,

                                    backgroundColor: Colors.textColorGold,
                                    padding: 15 * heightRatioProMax,
                                    width: '100%'
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
                                        color: Colors.black
                                    }}>View Menu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                marginBottom: 10 * heightRatioProMax,
                                width: '40%',
                                marginTop: 10 * heightRatioProMax,
                            }}> 
                                <View 
                                    style={[{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10 * heightRatioProMax,
                                        flexDirection: 'row',
                                        backgroundColor: Colors.textColorGold,
                                        padding: 15 * heightRatioProMax,
                                        width: '100%'
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
                                        <TouchableOpacity
                                            onPress={handleChevronClick}>
                                            <Image
                                                style={collapsed ? styles.tinyLogoCollapsed : styles.tinyLogoNormal}
                                                source={chevronImageSrc}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{
                                                textAlign: 'center',
                                                fontFamily: Fonts.mainFontReg,
                                                color: Colors.black
                                            }}>View Cart</Text>
                                </View>
                            </View>
                            {showCart ? <View style={{
                                borderWidth: 1 * widthRatioProMax,
                                borderColor: Colors.gold,
                                width: '95%',
                            }}>
                                {itemCart.length === 0 ? 
                                    <Text style={{
                                        textAlign: 'center',
                                        fontFamily: Fonts.mainFontReg,
                                        color: Colors.gold,
                                        fontSize: 20 * heightRatioProMax
                                    }}>Your cart is empty. Take a look at the menu and add some items.
                                    </Text> :
                                    <View style={{flex: 1, flexDirection: 'row', marginVertical: 10 * heightRatioProMax, justifyContent: 'center'}}>
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
                                                                onPress={() => removeItem(index)}>
                                                                <Text style={{color: Colors.white, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, padding: 5 * heightRatioProMax}}>Remove</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    );
                                                })
                                            }
                                        </View>
                                    </View>                  
                                }
                                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 30 * heightRatioProMax}}>
                                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax}}>
                                        Total Cost of Items: ${parseInt(subtotal)}
                                    </Text>
                                    <Text style={{color: Colors.gold, fontFamily: Fonts.mainFontReg, fontSize: 15 * heightRatioProMax, textAlign: 'center', marginVertical: 10 * heightRatioProMax}}>
                                        Upon placing your order, you will be also be levied a {(appBookingFee + clubFees) * 100}% fee that covers gratuity, tax, and other costs of service. Feel free to tip the cocktail server more at the venue.
                                    </Text>
                                    <TouchableOpacity 
                                        onPress={goToNextScreen}
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
                                </View>

                            </View> : null}


                            <View style={{
                                marginBottom: 10 * heightRatioProMax,
                                marginTop: 10 * heightRatioProMax,
                                width: '40%',
                            }}> 
                                <TouchableOpacity 
                                onPress={addToGeneralTab}
                                style={[{
                                    borderRadius: 10 * heightRatioProMax,

                                    backgroundColor: Colors.textColorGold,
                                    padding: 15 * heightRatioProMax,
                                    width: '100%'
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
                                        color: Colors.black
                                    }}>Add to General Tab</Text>
                                </TouchableOpacity>
                            </View>
                        <View style={{
                            marginBottom: 50 * heightRatioProMax,
                            width: '40%'
                        }}>
                            <TouchableOpacity 
                            onPress={goToNextScreen}
                            style={[{
                                borderRadius: 10 * heightRatioProMax,

                                backgroundColor: Colors.textColorGold,
                                padding: 15 * heightRatioProMax,
                                width: '100%'
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
                                    color: Colors.black
                                }}>create request!</Text>
                            </TouchableOpacity>
                        </View>
                </WhiteBubbleLayoutComp>
        </ScrollView>
    </View>)

}
/*
                                <TouchableOpacity 
                                onPress={() => props.navigation.navigate('edNav-PollingRoomScreen')}
                                style={[{
                                    borderRadius: 10 * heightRatioProMax,

                                    backgroundColor: Colors.textColorGold,
                                    padding: 15 * heightRatioProMax,
                                    width: '100%'
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
                                        color: Colors.black
                                    }}>Add to General Tab</Text>
                                </TouchableOpacity>
*/

const styles = StyleSheet.create({
    confirmationScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.black,
    },
    tinyLogoNormal: {
        width: 10 * widthRatioProMax,
        height: 20 * heightRatioProMax,
        marginRight: 5 * widthRatioProMax
    },
    tinyLogoCollapsed: {
        width: 20 * widthRatioProMax,
        height: 12 * heightRatioProMax,
        marginRight: 5 * widthRatioProMax,
        marginVertical: 3 * heightRatioProMax
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexDirection: 'column',
    },
    buttonClose: {
        backgroundColor: Colors.gold,
        borderRadius: 5 * widthRatioProMax,
    },

})

export default TableRequestConfirmationScreen;

