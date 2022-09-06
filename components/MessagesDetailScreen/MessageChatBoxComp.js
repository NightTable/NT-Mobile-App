// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { 
    View, 
    ScrollView,
    Platform,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';

import MessageHorizComp from './MessageChatBoxComp/MessageHorizComp';

const MessageChatBoxComp = (props) => {


    return (<View style={styles.messageChatBoxContainer}>
            <View style={styles.textListContainer}>
            <ScrollView style={{
                minHeight: '100%'
            }}>
                {props.messages.map((message, index) => (
                    <MessageHorizComp
                        key={index}
                        isSourceUser={message.userId === props.sourceUserId}
                        content={message.content}
                        ></MessageHorizComp>
                ))}
                </ScrollView>
            </View>
    </View>)
}

const styles = StyleSheet.create({
    messageChatBoxContainer: {
        borderRadius: 60 * heightRatioProMax,
        backgroundColor: Colors.white,
        borderColor: Colors.purple,
        borderWidth: 1,
        height: Platform.OS === 'android' ? 520 * heightRatioProMax : 500 * heightRatioProMax,
    },
    textListContainer: {
        marginTop: 70 * heightRatioProMax,
    }
});

export default MessageChatBoxComp;