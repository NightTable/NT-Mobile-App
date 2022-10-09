import React, { useEffect, useState } from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { API_URL_IOS, API_URL_ANDROID } from "@env";
import axios from 'axios';

import { View, 
    Text, 
    StyleSheet,
    TouchableOpacity,} from 'react-native';
import MessageBubbleComp from '../components/MessagesOverviewScreen/MessageBubbleComp';
import {
    heightRatioNorm
} from '../dimensions/Dimensions';
import { ScrollView } from 'react-native-gesture-handler';

import CreateNewMessageModal from '../modals/MessagesOverviewScreen/CreateNewMessageModal';


const MessagesOverviewScreen = () => {

    const [ messageModalVisible, setMessageModalVisible ] = useState(false);
    const [messages, setMessages] = useState([]);

    const userId = '627edbbe0734f863222db6e6'

    const getAllMessages = async () => {
        const response = await axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/messagechats/${userId}`);
        const message = response.data;
        let cleanedMessages = [];

        for (let i = 0; i < message.length; i++){
            let messageData = {
                image: null,
                name: null,
                messagePrev: null,
                sentMessage: false,
                isRecieved: null,
                isNew: null
            }
            let source = message[i].sourceUserId;
            let target = message[i].targetUserId;
            let name;
            let image;
            if (typeof source === 'object'){
                image = source.profilePhoto;
                name = source.firstName + " " + source.lastName;
            }
            else if (typeof target === 'object'){
                image = target.profilePhoto;
                name = target.firstName + " " + target.lastName;
            }
            messageData.image = image;
            messageData.name = name;
            messageData.messagePrev = message[i].lastMessage;
            if (messageData.sentMessage){
                messageData.isRecieved = false;

            }
            else{
                messageData.isRecieved = true;
            }
            messageData.isNew = message[i].isUnRead;
            cleanedMessages.push(messageData)
        }
        setMessages(cleanedMessages);

    }

    useEffect(() => {
        getAllMessages();
        
    }, []);

    const handleOpenNewMessageModal = () => {

        setMessageModalVisible(true);

    };

    const handleCloseNewMessageModal = () => {

        setMessageModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <CreateNewMessageModal
                visible={messageModalVisible}
                onOuterRequestClose={handleCloseNewMessageModal}
            ></CreateNewMessageModal>
            <View style={{
                flexDirection: 'column', 
                flex: 9,
                marginTop: 20 * heightRatioNorm}}>
                <ScrollView>
                    {messages.map((list, index) => (
                        <MessageBubbleComp
                            key={index}
                            image={list.image}
                            name={list.name}
                            messagePrev={list.messagePrev}
                            sentMessage={list.sentMessage}
                            isRecieved={list.isRecieved}
                            isNew={list.isNew}>
                        </MessageBubbleComp>
                    ))}
                </ScrollView>

            </View>
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                <TouchableOpacity 
                onPress={handleOpenNewMessageModal}
                style={{backgroundColor: Colors.purple, marginTop: 10*heightRatioNorm, width: '60%',
                        shadowColor: Colors.black,
                        shadowRadius: 5,
                        shadowOpacity: 1,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        elevation: 3
                    }}>
                    <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.white, textAlign: 'center'}}>new message</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 40*heightRatioNorm
    },
});

export default MessagesOverviewScreen;
