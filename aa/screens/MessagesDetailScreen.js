import React, { useState, useEffect} from 'react';

import { View, 
    Platform,
    KeyboardAvoidingView } from 'react-native';

import { Colors } from '../colors/Colors';

import axios from 'axios';
import { API_URL_IOS, API_URL_ANDROID } from "@env";

import HeaderInfoComp from '../components/MessagesDetailScreen/HeaderInfoComp';
import MessageChatBoxComp from '../components/MessagesDetailScreen/MessageChatBoxComp';
import MessageInputComp from '../components/MessagesDetailScreen/MessageInputComp';

import BlockUserModal from '../modals/MessagesDetailScreen/BlockUserModal';

const MessagesDetailScreen = (props) => {


    const [ blockUserModalState, setBlockUserModalState ] = useState(false);
    const [ messageList, setMessageList ] = useState([]);

    useEffect(() => {

        axios.get(`${Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS }api/messages/62518ae0e68aae737affa9ee`)
        .then((res) => {

            setMessageList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    const handleBlockButtonPress = () => {
        setBlockUserModalState((state) => !state);
    };

    let sourceUserIdParam = "62518ae0e68aae737affa9e8";

    return (
        <KeyboardAvoidingView 
        style={{
            flex: 1
        }}
        behavior={Platform.OS === 'android' ? '' : 'position'}
        >
        <View style={{
        backgroundColor: Colors.black,
        flex: 1
    }}>
        <BlockUserModal
          onHandleModalClose={handleBlockButtonPress}
          visible={blockUserModalState}></BlockUserModal>
        <HeaderInfoComp 
            onBlockButtonPress={handleBlockButtonPress}
            name={"Jack Tanner"}></HeaderInfoComp>
        <MessageChatBoxComp
            sourceUserId={sourceUserIdParam}
            messages={messageList}></MessageChatBoxComp>
        <MessageInputComp></MessageInputComp>
    </View>
    </KeyboardAvoidingView>)
};

export default MessagesDetailScreen;