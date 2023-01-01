/*

Date of the event will be convenient to have, as well as name of event

In a PNSL request, you should not be able to modify your share, as you've already paid

PNSL tables should be moved into active table room screen and not polling room screen

All current participants are users who have signed up to be on the platform, 
meaning they have a profile picture, and an overall properly set up profile

When modifying share contributions, a new invite is sent to them with a new joining fee. 
Cuurent participants are made into pending participants. 

*/

import React, {useState, useEffect,} from 'react';
import { useRoute } from '@react-navigation/native';

import { 
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    Image,
    ImageBackground,
    TextInput} from 'react-native';

import sampleNightClubImage from '../assets/samplenightclub.jpeg';

import HeaderLabelComp from '../components/PollingRoomScreen/HeaderLabelComp';
import ParticipantInfoComp from '../components/PollingRoomScreen/ParticipantInfoComp';
import WaitingInfoLabelComp from '../components/PollingRoomScreen/WaitingInfoLabelComp';
import WhiteBubbleLayoutComp from '../components/PollingRoomScreen/WhiteBubbleLayoutComp';
import OrganizerInfoComp from '../components/PollingRoomScreen/OrganizerInfoComp';
import CategoryComponentComp from '../components/TableRequestConfirmationScreen/MenuSlideUpModalComp/CategoryComponentComp';

import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import youngGirl from '../assets/younggirl1.jpeg';

import { windowHeight, heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';
import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

import LeaveGroupModal2 from '../modals/SharedPollingScreens/LeaveGroupModal2';
import AddParticipantModal from '../modals/SharedPollingScreens/AddParticipantModal';
import LeaveGroupModal from '../modals/SharedPollingScreens/LeaveGroupModal';
import RemoveParticipantsModal from '../modals/SharedPollingScreens/RemoveParticipantsModal';
import girlOnePic from '../assets/younggirl1.jpeg';
import girlTwoPic from '../assets/younguy2.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import PollingConfirmationToActiveTableGroupModal from '../modals/PollingRoomScreen/PollingConfirmationToActiveTableGroupModal';
import MemoireFloorplan from '../assets/Memoire.png';
import GrandFloorplan from '../assets/Shrine.png';


const PollingRoomScreen = (props) => {
    const route = useRoute();


    let [animateModal, setanimateModal] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [ addParticipantModalVisible, setAddParticipantModalVisible ] = useState(false);
    const [ leaveGroupModalVisible, setLeaveGroupModalVisible ] = useState(false);
    const [ removeParticipantsModalVisible, setRemoveParticipantsModalVisible ] = useState(false);
    const [ pollingConfToActiveModalVisible, setPollingConfToActiveModalVisible ] = useState(false);
    const [openFloorplanModal, setOpenFloorplanModal] = useState(false)
    const [floorplans, setFloorplans] = useState([{id: "63aacc91067da026d4bf7138", floorMap: GrandFloorplan}, {id: "63aacca4d71fb9accdffa5be", floorMap: MemoireFloorplan}]);
    let [menuVisible, setMenuVisible] = useState(false);

    const [partModifModalVisible, setPartModifModalVisible] = useState(false);
    const [fee, setFee] = useState(0);
    const [index, setIndex] = useState(0);
    const [groupSpend, setGroupSpend] = useState(0);
    
    let [itemCart, setItemCart] = useState(route.params.orders);
    let [tableMinimum, setTableMinimum] = useState(route.params.tableMinimum);
    let [organizerJoiningFee, setOrganizerJoiningFee] = useState(route.params.thisUser[0].joiningFee);
    let [participants, setParticipants] = useState(route.params.participants);
    const [cartVisible, setCartVisible] = useState(false);
    const [tables, setTables] = useState(route.params.tables);

    let requestType = route.params.requestType;
    let organizer = route.params.thisUser[0].name
    let menuCategories = route.params.menu[0];
    let menuItems = route.params.menu[1];
    let timeHour = route.params.hour;
    let minute = route.params.minute;
    let amOrpm = route.params.timeOfDay

    let [dummyParticipants, setDummyParticipants] = useState([
        {
            name: "Janelle May",
            imageObj: girlOnePic,
            joiningFee: 200,
            phone: 0,
            email: null,
            externalUser: false,
            id: "63b107027b3feb4bd74d340b"
        },
        {
            name: "Jack Smith",
            imageObj: girlTwoPic,
            joiningFee: 300,
            phone: 0,
            email: null,
            externalUser: false,
            id: "63b10712f56eb2e193c698b0"
        },
        {
            name: "John Nydam",
            imageObj: johnPic,
            joiningFee: 400,
            phone: 0,
            email: null,
            externalUser: false,
            id: "63b10724b81e1ac467f5a6bd"
        },
        {
            name: "John Nydam",
            imageObj: johnPic,
            joiningFee: 400,
            phone: 0,
            email: null,
            externalUser: false,
            id: "63b107331377c88a961fb37c"
        },
        {
            name: "John Nydam",
            imageObj: johnPic,
            joiningFee: 400,
            phone: 0,
            email: null,
            externalUser: false,
            id: "63b1073ce1bb37135b5db43c"
        },
    ]);

    let sumFees = dummyParticipants.reduce((total, parts) => total + parts.joiningFee, 0);

    const modifyOrganizerFee = (number) => {
        setOrganizerJoiningFee(number);
    }

    useEffect(() => {
        setGroupSpend(parseInt(sumFees) + parseInt(organizerJoiningFee));
        console.log(groupSpend, "group spend")
    }, [dummyParticipants]);

    useEffect(() => {
        console.log(participants, "participants polling room")
    }, []);

    useEffect(() => {
        calculateSubtotal()
    }, [itemCart]);

    useEffect(() => {
        console.log(fee, index);
    }, [fee]);

    const initialisePendingNonPending = () => {
        console.log(participants, "participants");        
    }




    const removeItem = (index) => {
        let itemCartCopy = itemCart.filter((item, i) => i !== index); // create a new array with the element at the given index removed
        setItemCart(itemCartCopy); // set the itemCart to the modified copy
    }

    const showPartModifyModal = (number) => {
        setPartModifModalVisible(true)
        setIndex(number)
    }

    const modifyCurrentParticipantJoiningFee = () => {
        console.log(index, fee)
        if (index >= 0 && index < participants.length){
            let modifiedParts = [...participants];
            modifiedParts[index].joiningFee = fee;
            console.log(modifiedParts, "MODIFIED PARTS")
            setParticipants(modifiedParts);
        }
        setPartModifModalVisible(false)

    }   

    const range = (start, stop, step) => {
        
        return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    
    };

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


    const addParticipantModalHandler = () => {

        setAddParticipantModalVisible((state) => !state);

    };

    const leaveGroupModalHandler = () => {

        setLeaveGroupModalVisible((state) => !state);
    }

    const toggleViewCart = () => {

        setCartVisible((state) => !state);
    }
    
    const removeParticipantsModalHandler = () => {

        setRemoveParticipantsModalVisible((state) => !state);

    }
    
    const pollingConfToActiveGroupModalHandler = () => {

        setPollingConfToActiveModalVisible((state) => !state);
    };

    const handleConfimButtonPollingPress = () => {

        setPollingConfToActiveModalVisible((state) => !state);
        if (props.route.name.includes('edNav')){
            props.navigation.push('edNav-ActiveTableGroupScreen');

        }
        else if (props.route.name.includes('trNav')){
            props.navigation.push('trNav-ActiveTableGroupScreen');
        }
        else if (props.route.name.includes('invNav')){
            props.navigation.push('invNav-ActiveTableGroupScreen');
        }
        //props.route.name == ed nav then carry on ed nav
    }

    const handleNavToUserProfile = () => {
        if (props.route.name.includes('trNav')){
            props.navigation.navigate('trNav-UserProfileScreen');

        }
        if (props.route.name.includes('edNav')){
            props.navigation.navigate('edNav-UserProfileScreen');

        }
        if (props.route.name.includes('invNav')){
            props.navigation.navigate('invNav-UserProfileScreen');

        }
    }


    return (
        <View style={styles.screenContainer}>

            <Modal 
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
                animationType="slide"
                transparent={true}
                visible={partModifModalVisible}>
                    
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
                    }}>
                        <View style={{
                            marginTop: 50 * heightRatioProMax,
                            height: '100%',
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                marginTop: 10 * heightRatioProMax,
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '70%'
                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                            fontFamily: Fonts.mainFontBold,
                                            color: Colors.gold
                                        }}>How much would you like to chip in?
                                        </Text>
                                    </View>
                                    <View style={{marginTop: 40*heightRatioProMax, flexDirection: 'row', justifyContent: 'center'}}>
                                        <Text style={{
                                            fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                            fontFamily: Fonts.mainFontBold, color: Colors.purple, textAlign: 'center',
                                            color: Colors.gold
                                        }}>$
                                        </Text>
                                        <TextInput style={{borderWidth: 2, borderColor: 'transparent',
                                            fontSize: Platform.OS === 'ios' && windowHeight < 700 ? 20 * heightRatioProMax : 17 * heightRatioProMax,
                                            fontFamily: Fonts.mainFontBold, textAlign: 'center', borderBottomColor: Colors.gold, borderBottomWidth: 1, textAlign: 'center', color: Colors.gold
                                        }}
                                        value={fee}
                                        placeholder='0'
                                        keyboardType="numeric"
                                        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                                        autoFocus={true}
                                        onChangeText={(text) => setFee(text)}
                                        />
                                    </View>
                                    <View style={{marginTop: 420*heightRatioProMax, flexDirection: 'row', justifyContent: 'center'}}>
                                        <TouchableOpacity
                                            onPress={modifyCurrentParticipantJoiningFee}>
                                            <View style={{width: '300%', justifyContent: 'center', alignSelf: 'center', borderRadius: 10 * heightRatioProMax, backgroundColor: Colors.gold,
                                                shadowColor: Colors.black,
                                                shadowOffset: {width: 0, height: 0},
                                                shadowOpacity: 0.5 * heightRatioProMax,
                                                shadowRadius: 10 * heightRatioProMax,
                                                elevation: 10 * heightRatioProMax}}>
                                                <Text style={{
                                                    fontSize: 20 * heightRatioProMax,
                                                    fontFamily: Fonts.mainFontBold, color: Colors.purple, textAlign: 'center', padding: 10*heightRatioProMax,
                                                    color: Colors.black
                                                }}>save
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            
            </Modal>            
            <SwipeUpDownModal
                modalVisible={openFloorplanModal}
                ContentModal={
                    <View style={styles.containerContent}>
                        <ScrollView style={{ width: '100%', margin: 150 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                            {
                                floorplans.map((floorplan, index) => {
                                    return (
                                        <View style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: '10%'}}
                                            key={index}>
                                            <Image
                                                style={{width: '100%'}}

                                                source={floorplan.floorMap}
                                                resizeMode='contain'
                                            />
                                        </View> 
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
                        <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 60 * heightRatioProMax, color: Colors.gold}}>Club Map</Text>
                    </View>
                    }
                    onClose={() => {
                        setOpenFloorplanModal(false)
                    }}
            />
            

            <SwipeUpDownModal
                modalVisible={menuVisible}
                ContentModal={
                    <View style={{
                        flex: 1, 
                        marginTop: 40 * heightRatioProMax,
                        alignContent: 'center',
                        alignItems: 'center',     
                    }}>
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
                HeaderStyle={{
                    marginTop: 0,
                    backgroundColor: 'transparent',
                }}
                ContentModalStyle={{
                    borderRadius: 75 * heightRatioProMax,
                    backgroundColor: Colors.black,
                    marginTop: 200 * heightRatioProMax,
                    height: 80 * heightRatioProMax,
                    borderWidth: 5 * widthRatioProMax,
                    borderColor: Colors.gold,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomWidth: 0
                }}
                HeaderContent={
                    <View style={{
                        flex: 1,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 200 * heightRatioProMax,
                        padding: 10 * widthRatioProMax
                        //backgroundColor: Colors.red,
                    }}>
                        <Text style={{fontFamily: Fonts.mainFontReg, fontSize: 60 * heightRatioProMax, color: Colors.gold}}>Menu</Text>
                    </View>
                    }
                    onClose={() => {
                        setMenuVisible(false);
                        setanimateModal(false);
                    }}
            />

            <ImageBackground style={{
                width: '100%',
                height: 320 * heightRatioProMax
            }} source={sampleNightClubImage}>
                <Modal
                    onRequestClose={() => {
                        setAddParticipantModalVisible((state) => !state);
                    }}
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                    animationType="slide"
                    transparent={true}
                    visible={addParticipantModalVisible}>
                    <AddParticipantModal
                        onAddParticipantRequestClose={() => {
                            setAddParticipantModalVisible((state) => !state);
                        }}></AddParticipantModal>
                </Modal>
                <LeaveGroupModal
                    visible={leaveGroupModalVisible}
                    onRequestClose={() => {
                        setLeaveGroupModalVisible((state) => !state);
                    }}
                ></LeaveGroupModal>
                <LeaveGroupModal2
                    visible={cartVisible}
                    itemCart={itemCart}
                    removeItem={removeItem}
                    onRequestClose={() => {
                        setCartVisible((state) => !state);
                    }}
                ></LeaveGroupModal2>  
                <RemoveParticipantsModal
                    visible={removeParticipantsModalVisible}
                    onRequestClose={() => {
                        setRemoveParticipantsModalVisible((state) => !state);
                    }}>
                </RemoveParticipantsModal>
                <PollingConfirmationToActiveTableGroupModal
                    onConfirmButtonPress={handleConfimButtonPollingPress}
                    visible={pollingConfToActiveModalVisible}
                    onPollingConfModalClose={pollingConfToActiveGroupModalHandler}></PollingConfirmationToActiveTableGroupModal> 
                <View style={{
                    marginTop: 10 * heightRatioProMax,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '100%'
                }}>
                    <HeaderLabelComp 
                        name={route.params.thisUser[0].name} 
                        orgImageObj={youngGirl}></HeaderLabelComp>
                </View>
                <View style={{
                    marginBottom: 30 * heightRatioProMax
                }}>
                    <WaitingInfoLabelComp></WaitingInfoLabelComp>
                    <View style={styles.containerTableInfo}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold
                        }}>Tables: {" "} 
                        {tables.map((table, index) => (
                            <Text style={{
                                color: Colors.orange
                            }}
                            key={index}>
                            
                                {table.id + " "}
                            </Text>
                        ))}  
                        </Text>
                    </View>

                    <View style={styles.containerTableInfo}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.gold
                        }}>Time: <Text style={{color: Colors.orange}}>
                                {route.params.hour}:{route.params.minute + " "}{route.params.timeOfDay}    
                            </Text>  
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.lowerContainer}>
                    <View style={{
                        marginTop: 15 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontBold,
                            color: Colors.textColorGold,
                            fontSize: 25 * heightRatioProMax
                        }}>Current cost breakdown</Text>
                    </View>
                    <View style={{
                        marginTop: 20 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax
                        }}>Invited Current Participants</Text>
                    </View>
                    <WhiteBubbleLayoutComp>
                        <OrganizerInfoComp
                            joiningFee={organizerJoiningFee}
                            modifyJoiningFee={modifyOrganizerFee}>
                        </OrganizerInfoComp>
                            <ScrollView
                                nestedScrollEnabled={true}
                                style={{width: '100%', alignContent: 'center'}}>
                                {dummyParticipants.map((participant, index) => (
                                        <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                            <ParticipantInfoComp
                                                key={index}
                                                name={participant.name}
                                                imageObj={participant.imageObj}
                                                contribution={participant.joiningFee}
                                                seeProfile={handleNavToUserProfile}
                                                modifyFee={showPartModifyModal}
                                                participantType={"current"}
                                                requestType={requestType}
                                            >
                                            </ParticipantInfoComp>
                                        </View>

                                ))}
                            </ScrollView>
                        <View style={styles.tablePriceContainer}>
                            <Text style={{
                                color: Colors.purple,
                                fontSize: 18 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            }}>Table Minimum: <Text style={{
                                fontFamily: Fonts.mainFontBold,
                                color: Colors.gold
                            }}>${route.params.tableMinimum}</Text></Text>
                            <Text style={{
                                color: Colors.purple,
                                fontSize: 18 * heightRatioProMax,
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.gold
                            }}>Group Spend: <Text style={{
                                fontFamily: Fonts.mainFontBold,
                                color: Colors.gold
                            }}>${groupSpend}</Text></Text>
                        </View>
                    </WhiteBubbleLayoutComp>
                    <TouchableOpacity>
                        <View style={{
                            marginTop: 20 * heightRatioProMax,
                            width: '80%',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1 * widthRatioProMax,
                            borderColor: Colors.gold,
                            borderRadius: 10 * widthRatioProMax,
                            padding: 10 * widthRatioProMax,
                        }}>
                            <Text style={{
                                fontFamily: Fonts.mainFontReg,
                                color: Colors.textColorGold,
                                fontSize: 20 * heightRatioProMax
                            }}>5 Custom Share Request(s)</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        marginTop: 20 * heightRatioProMax,
                        width: '80%'
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax
                        }}>Invited Pending Participants</Text>
                    </View>

                    <WhiteBubbleLayoutComp>
                            <ScrollView
                                nestedScrollEnabled={true}
                                style={{width: '100%', alignContent: 'center', height: '10%', margin: 10 * widthRatioProMax}}>
                                {participants.map((participant, index) => (
                                        <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                            <ParticipantInfoComp
                                                key={index}
                                                index={index}
                                                name={participant.name}
                                                imageObj={participant.imageObj}
                                                isExternalUser={participant.externalUser}
                                                email={participant.email}
                                                phone={participant.phone}
                                                contribution={participant.joiningFee}
                                                seeProfile={handleNavToUserProfile}
                                                modifyFee={showPartModifyModal}

                                            >
                                            </ParticipantInfoComp>
                                        </View>

                                ))}
                            </ScrollView>
                    </WhiteBubbleLayoutComp>

                    <View style={{
                        marginTop: 20 * heightRatioProMax,
                        width: '80%',
                    }}>
                        <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax,
                            textAlign: 'center'
                        }}>Click on the photos of each participant to view their profiles</Text>
                    </View>


                    <View style={{
                        marginTop: 30 * heightRatioProMax,
                        alignSelf: 'flex-start',
                        marginBottom: 30 * heightRatioProMax
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                style={
                                    {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginLeft: 30 * widthRatioProMax,
                                        width: 180 * widthRatioProMax,
                                        borderColor: Colors.gold,
                                        borderWidth: 1,
                                        backgroundColor: Colors.black,
                                        borderRadius: 10 * heightRatioProMax,
                                        shadowColor: Colors.black,
                                        shadowRadius: 5,
                                        shadowOpacity: 0.4,
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        elevation: 3
                                    }   

                                }
                                onPress={() => setMenuVisible(true)}
                            >
                                <Text style={{
                                    color: Colors.green,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.gold
                                }}>Menu</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setOpenFloorplanModal(true)}
                                style={
                                    {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginRight: 30 * widthRatioProMax,
                                        width: 180 * widthRatioProMax,
                                        borderColor: Colors.gold,
                                        borderWidth: 1,
                                        backgroundColor: Colors.black,
                                        borderRadius: 10 * heightRatioProMax,
                                        shadowColor: Colors.black,
                                        shadowRadius: 5,
                                        shadowOpacity: 0.4,
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        elevation: 3
                                
                                    }
                                }
                            >
                                <Text style={{
                                    color: Colors.orange,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.gold
                                }}>Floor Plan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                style={[styles.addParticipantsButtonStyle, styles.lowerButtonShadowStyle]}
                                onPress={addParticipantModalHandler}
                            >
                                <Text style={{
                                    color: Colors.green,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>add participants</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={removeParticipantsModalHandler}
                                style={[styles.removeParticipantsButtonStyle, styles.lowerButtonShadowStyle]}
                            >
                                <Text style={{
                                    color: Colors.orange,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>remove participants</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                onPress={leaveGroupModalHandler}
                                style={[styles.leaveGroupButtonStyle, styles.lowerButtonShadowStyle]}>
                                <Text style={{
                                    color: Colors.red,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.white
                                }}>leave group</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={pollingConfToActiveGroupModalHandler}
                                style={[styles.approveRequestButtonStyle, styles.lowerButtonShadowStyle]}>
                                <Text style={{
                                    color: Colors.black,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                }}>Approve Request</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: 10 * heightRatioProMax,
                            height: 50 * heightRatioProMax
                        }}>
                            <TouchableOpacity
                                onPress={toggleViewCart}
                                style={
                                    {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginLeft: 30 * widthRatioProMax,
                                        width: 180 * widthRatioProMax,
                                        borderWidth: 1 * widthRatioProMax,
                                        borderColor: Colors.gold,
                                        backgroundColor: Colors.goldDark,
                                        borderRadius: 10 * heightRatioProMax,
                                        shadowColor: Colors.black,
                                        shadowRadius: 5,
                                        shadowOpacity: 0.4,
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        elevation: 3
                                
                                    }
                                }>
                                <Text style={{
                                    color: Colors.red,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                    color: Colors.black
                                }}>View Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={pollingConfToActiveGroupModalHandler}
                                style={
                                    {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginRight: 30 * widthRatioProMax,
                                        width: 180 * widthRatioProMax,
                                        backgroundColor: Colors.goldDark,
                                        borderColor: Colors.gold,
                                        borderWidth: 1 * widthRatioProMax,
                                        borderRadius: 10 * heightRatioProMax,
                                        shadowColor: Colors.black,
                                        shadowRadius: 5,
                                        shadowOpacity: 0.4,
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        elevation: 3
                                    }
                                }>
                                <Text style={{
                                    color: Colors.black,
                                    fontFamily: Fonts.mainFontReg,
                                    textAlign: 'center',
                                    fontSize: 15 * heightRatioProMax,
                                }}>Add to General Tab</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: Colors.black,
       flex: 1
    },
    lowerContainer: {
        backgroundColor: Colors.black,
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100%'
    },
    tablePriceContainer: {
        marginTop: 20 * heightRatioProMax,
        marginRight: 50 * widthRatioProMax,
        alignSelf: 'flex-end'
    },
    lowerButtonShadowStyle: {
        shadowColor: Colors.black,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 3
    },
    addParticipantsButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.green,
        borderWidth: 1,
        backgroundColor: Colors.green,
        borderRadius: 10 * heightRatioProMax,
    },
    removeParticipantsButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.orange,
        borderWidth: 1,
        backgroundColor: Colors.orange,
        borderRadius: 10 * heightRatioProMax,
    },
    leaveGroupButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        borderColor: Colors.red,
        borderWidth: 1,
        backgroundColor: Colors.red,
        borderRadius: 10 * heightRatioProMax,

    },
    approveRequestButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 30 * widthRatioProMax,
        width: 180 * widthRatioProMax,
        backgroundColor: Colors.gold,
        borderRadius: 10 * heightRatioProMax,

    },
    containerTableInfo: {
        backgroundColor: Colors.black,
        height: 50 * heightRatioProMax,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center'
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
    containerHeader: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200 * heightRatioProMax,
        padding: 10 * widthRatioProMax
    },
    headerContent:{
        marginTop: 0,
        backgroundColor: 'transparent',
    },
    containerContent: {
        //flex: 1, 
        //marginTop: 40 * heightRatioProMax,
        alignContent: 'center',
        alignItems: 'center',     
        

        //justifyContent: 'center',
    },

})

export default PollingRoomScreen;