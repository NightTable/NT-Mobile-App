import React, { useEffect, useState} from 'react';

import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Platform,
    TouchableOpacity,
    StyleSheet } from 'react-native';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import axios from 'axios';

import { API_URL_IOS, API_URL_ANDROID } from "@env";

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
            name: null
        },
        {
            id: null,
            externalUser: true,
            imageObj: null,
            email: "gblade@gmail.com",
            name: null
        }
    ];
    const [ tableConfigList, setTableConfigList ] = useState([]);
    const [ selectedTableConfigId, setSelectedTableConfigId ] = useState("");
    const [ selectedTableType, setSelectedTableType ] = useState('snpl'); //type of the table, either snpl or pnsl
    const [ questionMarkButtonSelected, setQuestionMarkButtonSelected ] = useState(false);

    const [ searchFriendInputState, setSearchFriendInputState ] = useState("");
    const [ enterEmailInputState, setEnterEmailInputState ] = useState("");
    const [ newParticipantAddErrorShown, setNewParticipantAddErrorShown ] = useState(false);
    const [ newEmailAddErrorShown, setNewEmailAddErrorShown ] = useState(false);

    const [ currentParticipants, setCurrentParticipants ] = useState(dummyParticipants);

    const [ selectedAdditionalCostSelection, setSelectedAdditionalCostSelection ] = useState(false); //true if you''ve selected to have additional cost
    const [ additionalAmountValue, setAdditionalAmountValue ] = useState("$");
    const [ additionalAmountSaved, setAdditionalAmountSaved ] = useState(false);

    const [ termsCheckboxEnabled, setTermsCheckboxEnabled ] = useState(false);


    useEffect(() => {

        axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/tableconfigurations/club/627edbba0734f863222db602`)
        .then((res) => {

            let response = res.data;

            setTableConfigList(response);
            setSelectedTableConfigId(response[0]._id);

        })
        .catch((err) => {

            console.log(err);
        })

    }, []);

    const validateEmail = (email) => {

        return (String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null);

      };

    const handleEmailInputTrigger = (inputText) => {

        setEnterEmailInputState(inputText);
    }

    const handleSearchFriendInputTrigger = (inputText) => {

        setSearchFriendInputState(inputText);
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
                    name: `${res.data[0].firstName} ${res.data[0].lastName}`
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

    const handleEnterEmailSubmit = () => {

        const currentEmailInputSnapshot = enterEmailInputState;

        if (validateEmail(currentEmailInputSnapshot)) {

            let newParticipantList = currentParticipants;

            const newExternalParticipant = {
                externalUser: true,
                email: currentEmailInputSnapshot,
                imageObj: null,
                name: null
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
    <View style={styles.container}>
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
                    color: Colors.textColorGold
                }}>organizing a table request at: </Text>
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
                        color: Colors.textColorGold
                }}>Event: <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    color: Colors.textColorGold
                }}>Steve Aoki's Playhouse</Text></Text>
            </View>
            <View style={{
                    marginTop: 20 * heightRatioProMax,
                    flexDirection: 'row',
                    width: '85%'
                }}>
                <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.textColorGold
                }}>Organizer: <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    color: Colors.textColorGold
                }}>Amiya Sekhar</Text></Text>
            </View>
            <TableOptionSectionComp
                onOuterTableConfigPress={handleTableConfigPress}
                selectedTableConfigurationId={selectedTableConfigId}
                tableConfigData={tableConfigList}
            ></TableOptionSectionComp>            

            <RequestTypeSectionComp
                onQuestionMarkButtonToggle={handleQuestionMarkButtonToggle}
                onRequestTypeChange={handleRequestTypeChange}
                isQuestionButtonSelected={questionMarkButtonSelected}
                selectedRequestType={selectedTableType}></RequestTypeSectionComp>
            <InviteFriendSectionComp
                isNewEmailAddErrorShown={newEmailAddErrorShown}
                isNewParticipantAddErrorShown={newParticipantAddErrorShown}
                onEnterSearchFriendSubmit={handleSearchFriendSubmit}
                onEnterEmailSubmit={handleEnterEmailSubmit}
                onEmailInputTrigger={handleEmailInputTrigger}
                onSearchFriendInputTrigger={handleSearchFriendInputTrigger}></InviteFriendSectionComp>
            <ParticipantListSectionComp
                onDeleteParticipantPress={handleDeleteParticipantPress}
                participants={currentParticipants}></ParticipantListSectionComp>
            <AdditionalCostSectionComp
                onAdditionaAmountInputChange={handleAdditionalAmountChange}
                isDesiredAdditionalCost={selectedAdditionalCostSelection}
                isAdditionalAmountSaved={additionalAmountSaved}
                additionalAmountValue={additionalAmountValue}
                onSaveAdditionalAmount={handleSaveAdditionalAmountPress}
                onYesButtonPress={handleYesButtonPress}
                onNoButtonPress={handleNoButtonPress}></AdditionalCostSectionComp>
            <CostSplittingSectionComp
                isCheckboxSelected={termsCheckboxEnabled}
                onTermsAgreementPress={handleOnTermsAgreementPress}></CostSplittingSectionComp>
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
        flexDirection: 'column'
    }
});

export default NewTableRequestScreen;