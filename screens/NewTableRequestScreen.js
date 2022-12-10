import React, { useEffect, useState} from 'react';

import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Platform,
    Modal,
    Pressable,
    TouchableOpacity,
    StyleSheet,
    TextInput} from 'react-native';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';
import Slider from '@react-native-community/slider';
import axios from 'axios';

import { API_URL_IOS, API_URL_ANDROID, ABSTRACTAPI_PARTIAL_URL } from "@env";

import sampleNightClubPic from '../assets/samplenightclub.jpeg';

import { heightRatioProMax, widthRatioProMax } from '../dimensions/Dimensions';

import TableOptionSectionComp from '../components/NewTableRequestScreen/TableOptionSectionComp';
import RequestTypeSectionComp from '../components/NewTableRequestScreen/RequestTypeSectionComp';
import InviteFriendSectionComp from '../components/NewTableRequestScreen/InviteFriendSectionComp';
import ParticipantListSectionComp from '../components/NewTableRequestScreen/ParticipantListSectionComp';
import AdditionalCostSectionComp from '../components/NewTableRequestScreen/AdditionalCostSectionComp';
import CostSplittingSectionComp from '../components/NewTableRequestScreen/CostSplittingSectionComp';


const NewTableRequestScreen = (props) => {


    const dummyParticipants = [
        {
            id: null,
            externalUser: true,
            email: "jnydam@me.com",
            imageObj: null,
            name: null,
            joiningFee: 0
        },
        {
            id: null,
            externalUser: true,
            imageObj: null,
            email: "gblade@gmail.com",
            name: null,
            joiningFee: 0
        }
    ];
    const [ tableConfigList, setTableConfigList ] = useState([]);
    const [ selectedTableConfigId, setSelectedTableConfigId ] = useState("");
    //////
    const [paymentType, setPaymentType] = useState("");
    //////
    const [ selectedTableType, setSelectedTableType ] = useState('pnsl'); //type of the table, either snpl or pnsl
    const [ questionMarkButtonSelected, setQuestionMarkButtonSelected ] = useState(false);

    const [ searchFriendInputState, setSearchFriendInputState ] = useState("");
    const [ enterEmailInputState, setEnterEmailInputState ] = useState("");
    const [ newParticipantAddErrorShown, setNewParticipantAddErrorShown ] = useState(false);
    const [ enterPhoneNumberInputState, setEnterPhoneNumberInputState ] = useState("");
    const [ newPhoneNumberAddErrorShown, setNewPhoneNumberAddErrorShown] = useState(false);
    const [ newEmailAddErrorShown, setNewEmailAddErrorShown ] = useState(false);

    const [ currentParticipants, setCurrentParticipants ] = useState(dummyParticipants);

    const [ selectedAdditionalCostSelection, setSelectedAdditionalCostSelection ] = useState(false); //true if you''ve selected to have additional cost
    const [ additionalAmountValue, setAdditionalAmountValue ] = useState("$");
    const [ additionalAmountSaved, setAdditionalAmountSaved ] = useState(false);

    const [ termsCheckboxEnabled, setTermsCheckboxEnabled ] = useState(false);

    const [tableMinimum, setTableMinimum] = useState(0);
    const [hourValue, setHourValue] = useState("hours");
    const [minuteValue, setMinuteValue] = useState("mins");
    const [amBGColor, setAMBGColor] = useState(Colors.black);
    const [amTextColor, setAMTextColor] = useState(Colors.gold);
    const [pmBGColor, setPMBGColor] = useState(Colors.black);
    const [pmTextColor, setPMTextColor] = useState(Colors.gold);

    const [hourModalVisible, setHourModalVisible] = useState(false);

    const [hours, setHours] = useState([]);
    const [minutes, setMinutes] = useState([]);
    const [screenOpacity, setScreenOpacity] = useState(1);

    let h = [];
    let m = [];


    const handleModifyTableMin = (min) => {
        setTableMinimum(tableMinimum + min);
    }
    const handleAMPress = () => {
        if (amTextColor ===  Colors.gold && amBGColor === Colors.black){
            setAMTextColor(Colors.black);
            setAMBGColor(Colors.gold);
            setPMBGColor(Colors.black);
            setPMTextColor(Colors.gold);
        }

    }

    const handlePMPress = () => {
        if (pmTextColor === Colors.gold && pmBGColor === Colors.black){
            setPMTextColor(Colors.black);
            setPMBGColor(Colors.gold);
            setAMTextColor(Colors.gold);
            setAMBGColor(Colors.black);
        }
    }




    let tc1 = {id: "S1", type: "Stage", minimum: "$4000", fits: 5}; 
    let tc2 = {id: "S2", type: "Stage", minimum: "$8000", fits: 15}; 
    let tc3 = {id: "D1", type: "floor", minimum: "$3000", fits: 10}; 

    let tcs = [tc1, tc2, tc3];



    useEffect(() => {
        setTableConfigList(tcs);
        if (h !== [] && m !== []){
            for (let i = 1; i < 13; i++){
                h.push(i);
            }
            for (let i = 1; i < 60; i++){
                m.push(i);
            }
            setHours(h);
            setMinutes(m);
        }
        console.log(tableMinimum, "table min")
        updateJoiningFee();
        


    
    }, []);

    const validatePhoneNumber = async (num) => {
        try {
            console.log(ABSTRACTAPI_PARTIAL_URL + `&phone_number=` + num);
            const response = await fetch.get(ABSTRACTAPI_PARTIAL_URL + `&phone_number=` + num);
            console.log(response.json())
            return response.valid
        } catch (error) {
            return false;
        }
    }

    const validateEmail = (email) => {

        return (String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null);

      };

    const handleEnterPhoneInputState = (inputText) => {

        setEnterPhoneNumberInputState(inputText);
    }

    const handleEmailInputTrigger = (inputText) => {

        setEnterEmailInputState(inputText);
    }

    const handleSearchFriendInputTrigger = (inputText) => {

        setSearchFriendInputState(inputText);
    }

    const updateJoiningFee = () => {
        for (let i = 0; i < currentParticipants.length; i++){
            currentParticipants[i].joiningFee = (tableMinimum) / (currentParticipants.length + 1);
            console.log(currentParticipants[i].joiningFee , "currentParticipants[i].joiningFee ")
        }

    }

    const handleSearchFriendSubmit = () => {

        axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/users/name/${searchFriendInputState}`)
        .then((res) => {


            if (res.data.length > 1) {
                throw new Error("More than one user");
            }

            let newParticipantList = currentParticipants;


            const newParticipant = {
                    id: res.data[0]._id,
                    externalUser: false,
                    email: null,
                    imageObj: res.data[0].profilePhoto,
                    name: `${res.data[0].firstName} ${res.data[0].lastName}`,
                    joiningFee: 0
            };

            newParticipantList.push(newParticipant);

            setCurrentParticipants([...newParticipantList])
            setNewParticipantAddErrorShown(false);
        })
        .catch((err) => {

            console.log(err);

            setNewParticipantAddErrorShown(true);
        })
    };

    const handleAdditionalAmountChange = (newAdditionalAmount) => {

        if (!newAdditionalAmount.includes("$")) {
            return;
        }

        setAdditionalAmountValue(newAdditionalAmount);

    }

    const handleEnterPhoneSubmit = () => {

        
        const currentPhoneNumberInputSnapshot = enterPhoneNumberInputState;
        console.log(validatePhoneNumber(currentPhoneNumberInputSnapshot));
        if (validatePhoneNumber(currentPhoneNumberInputSnapshot)) {

            let newParticipantList = currentParticipants;

            const newExternalParticipant = {
                externalUser: true,
                phone: currentPhoneNumberInputSnapshot,
                imageObj: null,
                name: null,
                joiningFee: 0
            };

            newParticipantList.push(newExternalParticipant);
            setNewPhoneNumberAddErrorShown(false);
            setCurrentParticipants([...newParticipantList]);

        } else {

            setNewPhoneNumberAddErrorShown(validatePhoneNumber(currentPhoneNumberInputSnapshot));
        }
        console.log(newPhoneNumberAddErrorShown, ": phone number error")

    };


    const handleEnterEmailSubmit = () => {

        const currentEmailInputSnapshot = enterEmailInputState;

        if (validateEmail(currentEmailInputSnapshot)) {

            let newParticipantList = currentParticipants;

            const newExternalParticipant = {
                externalUser: true,
                email: currentEmailInputSnapshot,
                imageObj: null,
                name: null,
                joiningFee: 0
            };

            newParticipantList.push(newExternalParticipant);
            setNewEmailAddErrorShown(false);
            setCurrentParticipants([...newParticipantList]);

        } else {

            setNewEmailAddErrorShown(true);
        }


    };

    const handleDeleteParticipantPress = (keyId) => {

        let newParticipantList = currentParticipants;

        newParticipantList.splice(keyId, 1);

        setCurrentParticipants([...newParticipantList]);
    }

    const handleQuestionMarkButtonToggle = () => {

        setQuestionMarkButtonSelected((state) => !state);
    }

    const handleTableConfigPress = (idParam) => {

        setSelectedTableConfigId(idParam);
    }

    const handleRequestTypeChange = () => {
        console.log("handleRequestTypeChange being called");
        setSelectedTableType((state) => {
            if (state === 'pnsl') {
                return 'snpl';
            } else {
                return 'pnsl';
            }
        });
    
    };

    const handleYesButtonPress = () => {

        setSelectedAdditionalCostSelection(true);
        setAdditionalAmountSaved(true)
        
    };

    const handleNoButtonPress = () => {

        setSelectedAdditionalCostSelection(false);
        setAdditionalAmountSaved(false);

    }

    const handleSaveAdditionalAmountPress = () => {

        setAdditionalAmountSaved((state) => !state);
    }

    const handleOnTermsAgreementPress = () => {

        setTermsCheckboxEnabled((state) => !state);
    }

    const handleContinueButtonPress = () => {
        

        // const currentParticipantsSnapshot = currentParticipants;
        
        // const selectedTableConfigIdSnapshot = selectedTableConfigId;
        // const costSplitTypeSnapshot = selectedTableType;
        // const clubIdSnapshot = '626b1a7062ce23d9fd404379';
        // const additionalAmountValueSnapshot = additionalAmountValue;
        // const additionalAmountSavedSnapshot = additionalAmountSaved;

        // const internalParticipants = currentParticipantsSnapshot.filter((participant) => !participant.externalUser);
        // const externalParticipants = currentParticipantsSnapshot.filter((participant) => participant.externalUser);


        // const internalParticipantIds = internalParticipants.map((participant) => {
        //     return participant.id;
        // });
        
        // const externalParticipantEmails = externalParticipants.map((participant) => {
        //     return participant.email;
        // });

        // let dynamicAdditionalAmountVal = null;

        // if (additionalAmountSavedSnapshot && additionalAmountValueSnapshot !== '$') {

        //     dynamicAdditionalAmountVal = parseFloat(additionalAmountValueSnapshot.substring(1, additionalAmountSavedSnapshot.length));

        // }

        // const newTableReqSubmitObj = {
        //     name: 'dummyname',
        //     tableConfigId: selectedTableConfigIdSnapshot,
        //     costSplitType: costSplitTypeSnapshot,
        //     clubId: clubIdSnapshot,
        //     participantIds: internalParticipantIds,
        //     externalEmails: externalParticipantEmails,
        //     additionalAmount: dynamicAdditionalAmountVal
        // }

        // axios.post(
        //     `${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/tablerequests/participant/627470412e40475711401aed`,
        //     newTableReqSubmitObj)
        // .then(() => {

        //     props.navigation.navigate('edNav-TableRequestConfirmationScreen');
        // })
        // .catch((err) => {

        //     console.log(err);
        // });

        props.navigation.navigate('edNav-TableRequestConfirmationScreen');
    };


    return (
    <View style={{
        backgroundColor: Colors.black,
        flex: 1,
        flexDirection: 'column',
        opacity: screenOpacity
        }}>
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={hourModalVisible}
            onRequestClose={() => [setHourModalVisible(!setHourModalVisible), setScreenOpacity(1)]}>
                <View style={styles.centeredView}>
                    <View 
                        style={{
                            backgroundColor: Colors.black,
                            width: 400 * widthRatioProMax,
                            height: 150 * heightRatioProMax,
                            borderRadius: 5 * widthRatioProMax,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            borderWidth: 10 * widthRatioProMax,
                            flexWrap: 'wrap',
                            borderColor: Colors.gold}}>
                            <View style={{alignContent: 'center', justifyContent: 'center', marginLeft: 10 * widthRatioProMax}}>
                                <Slider
                                    style={{width: 250 * widthRatioProMax}}
                                    minimumTrackTintColor={Colors.gold}
                                    maximumTrackTintColor={Colors.white}
                                    thumbTintColor={Colors.gold}
                                    minimumValue={1}
                                    maximumValue={12}
                                    onValueChange={value => setHourValue(Math.floor(value))}
                                />
                            </View>
                            <View style={{justifyContent: 'center', marginVertical: 10 * heightRatioProMax}}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => [setHourModalVisible(!hourModalVisible), setScreenOpacity(1)]}
                                    >
                                    <Text style={{color: Colors.black, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax}}>Set Hour</Text>
                                </Pressable>
                                <Text style={{color: Colors.gold, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax}}>{hourValue}</Text>

                            </View>

                            <View style={{alignContent: 'center', justifyContent: 'center', marginLeft: 10 * widthRatioProMax}}>
                                <Slider
                                    style={{width: 250 * widthRatioProMax}}
                                    minimumTrackTintColor={Colors.gold}
                                    maximumTrackTintColor={Colors.white}
                                    thumbTintColor={Colors.gold}
                                    minimumValue={0}
                                    maximumValue={59}
                                    onValueChange={value => (value < 10 ? setMinuteValue('0' + `${Math.floor(value)}`) : setMinuteValue(Math.floor(value)))}
                                />
                            </View>
                            <View style={{justifyContent: 'center', marginVertical: 10 * heightRatioProMax}}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => [setHourModalVisible(!hourModalVisible), setScreenOpacity(1)]}
                                    >
                                    <Text style={{color: Colors.black, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax}}>Set Mins</Text>
                                </Pressable>
                                <Text style={{color: Colors.gold, textAlign: 'center', fontFamily: Fonts.mainFontReg, margin: 5 * heightRatioProMax}}>{minuteValue}</Text>

                            </View>
                    </View>
                </View>
        </Modal>

        <ScrollView>
            <View style={{
                flexDirection: 'column',
                marginTop: 50 * heightRatioProMax,
                marginBottom: 30 * heightRatioProMax

            }}>
                <View style={{
                    marginLeft: 15 * widthRatioProMax,
                    width: '100%',
                    marginBottom: 15 * heightRatioProMax,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.textColorGold,
                        fontSize: 20 * heightRatioProMax,
                    }}>Organizing a Table Request at: </Text>
                </View>
                <View style={{
                    marginLeft: 15 * widthRatioProMax,
                    width: '100%',
                    flexDirection: 'row',
                    marginBottom: 15 * heightRatioProMax,
                }}>
                    <View style={{
                        padding: 5 * heightRatioProMax,
                        backgroundColor: Colors.textColorGold,
                        borderRadius: 5 * heightRatioProMax,
                    }}>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: Fonts.mainFontBold
                        }}>The Grand</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft: 15 * widthRatioProMax,
                    width: '100%',
                    flexDirection: 'row'
                }}>
                    <View>
                        <Image
                            style={{
                                borderColor: Colors.textColorGold,
                                borderWidth: 3,
                                borderRadius: 10 * heightRatioProMax,
                                width: 250 * widthRatioProMax,
                                height: 175 * heightRatioProMax
                            }}
                            source={sampleNightClubPic}></Image>
                    </View>
                </View>
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: 75 * heightRatioProMax,
                marginBottom: 50 * heightRatioProMax,
                backgroundColor: Colors.black,
                borderRadius: 70 * heightRatioProMax,
                borderColor: Colors.textColorGold,
                borderWidth: 2
            }}>
                <View style={{
                        marginTop: 20 * heightRatioProMax,
                        flexDirection: 'row',
                        width: '85%'
                    }}>
                    <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax,
                    }}>Event: <Text style={{
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.textColorGold,
                        fontSize: 20 * heightRatioProMax,
                    }}>Steve Aoki's Playhouse</Text></Text>
                </View>
                <View style={{
                        marginTop: 20 * heightRatioProMax,
                        flexDirection: 'row',
                        width: '85%'
                    }}>
                    <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax,
                    }}>Day: <Text style={{
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.textColorGold,
                        fontSize: 20 * heightRatioProMax,
                    }}>Friday, Nov 27, 2022</Text></Text>
                </View>
                <View style={{
                        marginTop: 20 * heightRatioProMax,
                        flexDirection: 'row',
                        width: '85%'
                    }}>
                    <Text style={{
                            fontFamily: Fonts.mainFontReg,
                            color: Colors.textColorGold,
                            fontSize: 20 * heightRatioProMax,

                    }}>Organizer: <Text style={{
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.gold
                    }}>Amiya Sekhar</Text></Text>
                </View>
                {<TableOptionSectionComp
                    onOuterTableConfigPress={handleTableConfigPress}
                    selectedTableConfigurationId={selectedTableConfigId}
                    tableConfigData={tableConfigList}
                    handleTableMinimum={handleModifyTableMin}
                ></TableOptionSectionComp>}            
                <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold,
                        fontSize: 20 * heightRatioProMax,
                        marginBottom: 15 * heightRatioProMax
                    }}>
                    Set a Custom Minimum
                </Text>
                <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold,
                        fontSize: 15 * heightRatioProMax,
                        marginBottom: 15 * heightRatioProMax,
                        textAlign: 'center'
                    }}>
                    Note that only employees, promoters, and VIP hosts, and club staff can modify table minimums 
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTableMinimum}
                        placeholder={`$${tableMinimum}`}
                        placeholderTextColor={Colors.gold}
                        selectionColor={Colors.gold}
                        keyboardType={"numeric"}
                    />
                    <View style={{backgroundColor: Colors.gold, borderRadius: 5 * widthRatioProMax}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: Colors.black, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {<RequestTypeSectionComp
                    onQuestionMarkButtonToggle={handleQuestionMarkButtonToggle}
                    onRequestTypeChange={handleRequestTypeChange}
                    isQuestionButtonSelected={questionMarkButtonSelected}
                    selectedRequestType={selectedTableType}>
                </RequestTypeSectionComp>}

                <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold,
                        fontSize: 20 * heightRatioProMax,
                        marginBottom: 15 * heightRatioProMax
                    }}>
                    Estimated Time of Arrival
                </Text>
                <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.gold,
                        fontSize: 15 * heightRatioProMax,
                        marginBottom: 15 * heightRatioProMax,
                        textAlign: 'center'
                    }}>
                    Click on the hour, minute, AM and PM boxes to set a time
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{backgroundColor: Colors.black, borderRadius: 5 * widthRatioProMax, justifyContent: 'space-evenly', marginHorizontal: 5 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                        <TouchableOpacity
                            onPress={() => [setHourModalVisible(true), setScreenOpacity(0.5)]}>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: Colors.gold, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>{hourValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: Colors.gold, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>:</Text>
                    <View style={{backgroundColor: Colors.black, borderRadius: 5 * widthRatioProMax, justifyContent: 'space-evenly', marginHorizontal: 5 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                        <TouchableOpacity
                            onPress={() => [setHourModalVisible(true), setScreenOpacity(0.5)]}>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: Colors.gold, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>{minuteValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: amBGColor, borderRadius: 5 * widthRatioProMax, justifyContent: 'space-evenly', marginHorizontal: 5 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                        <TouchableOpacity
                            onPress={() => handleAMPress()}>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: amTextColor, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>AM</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: pmBGColor, borderRadius: 5 * widthRatioProMax, justifyContent: 'space-evenly', marginHorizontal: 5 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                    <TouchableOpacity
                            onPress={() => handlePMPress()}>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: pmTextColor, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
                {<InviteFriendSectionComp
                    isNewPhoneNumberAddErrorShown={newPhoneNumberAddErrorShown}
                    isNewEmailAddErrorShown={newEmailAddErrorShown}
                    isNewParticipantAddErrorShown={newParticipantAddErrorShown}
                    onEnterSearchFriendSubmit={handleSearchFriendSubmit}
                    onEnterEmailSubmit={handleEnterEmailSubmit}
                    onEnterPhoneSubmit={handleEnterPhoneSubmit}
                    onEmailInputTrigger={handleEmailInputTrigger}
                    onPhoneNumberInputTrigger={handleEnterPhoneInputState}
                    onSearchFriendInputTrigger={handleSearchFriendInputTrigger}></InviteFriendSectionComp>}
                {/*participant list section has bugs*/}
                {<ParticipantListSectionComp
                    onDeleteParticipantPress={handleDeleteParticipantPress}
                    participants={currentParticipants}></ParticipantListSectionComp>}
                {<CostSplittingSectionComp
                    isCheckboxSelected={termsCheckboxEnabled}
                    onTermsAgreementPress={handleOnTermsAgreementPress}
                    tableTypeSelection={selectedTableType}>
                </CostSplittingSectionComp>}
            </View>
            <View style={{
                marginTop: 20 * heightRatioProMax,
                marginBottom: 60 * heightRatioProMax,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                disabled={!termsCheckboxEnabled}
                onPress={handleContinueButtonPress}
                style={{
                    width: '40%',
                    height: 50 * heightRatioProMax,
                    backgroundColor: Colors.textColorGold,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10 * heightRatioProMax,
                    borderWidth: 1,
                    opacity: termsCheckboxEnabled ? 1 : 0.5
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1,
        flexDirection: 'column',
    },
    input: {
        height: 20,
        borderWidth: 1,
        marginTop: 10 * heightRatioProMax,
        marginHorizontal: 20 * widthRatioProMax,
        borderColor: Colors.gold,
        borderBottomColor: Colors.gold,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        placeholderTextColor: Colors.gold,
        selectionColor: Colors.gold,
        color: Colors.gold,
        fontSize: 20 * heightRatioProMax
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexDirection: 'column',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
    },
    buttonClose: {
        backgroundColor: Colors.gold,
        borderRadius: 5 * widthRatioProMax,
    },

});

export default NewTableRequestScreen;