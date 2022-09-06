// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, { useState } from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { View, 
    Text, 
    StyleSheet,
    TouchableOpacity,} from 'react-native';
import girlOnePic from '../assets/younggirl1.jpeg';
import youngguy2 from '../assets/younguy2.jpeg';
import johnPic from '../assets/johnpic.jpeg';
import MessageBubbleComp from '../components/MessagesOverviewScreen/MessageBubbleComp';
import {
    heightRatioNorm, heightRatioProMax
} from '../dimensions/Dimensions';
import { ScrollView } from 'react-native-gesture-handler';

import CreateNewMessageModal from '../modals/MessagesOverviewScreen/CreateNewMessageModal';


const MessagesOverviewScreen = () => {

    const [ messageModalVisible, setMessageModalVisible ] = useState(false);


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
                marginTop: 20 * heightRatioProMax}}>
                <ScrollView>
                    <MessageBubbleComp
                        image={johnPic}
                        name={'Jake Tanner'}
                        messagePrev={"Let's get a table at the grand tonight"}
                        sentMessage={false}
                        isRecieved={true}
                        isNew={true}>
                    </MessageBubbleComp>
                    <MessageBubbleComp
                        image={girlOnePic}
                        name={'Janelle May'}
                        messagePrev={"did you recieve this, Amiya?"}
                        sentMessage={false}
                        isRecieved={true}
                        isNew={false}>
                    </MessageBubbleComp>
                    <MessageBubbleComp
                        image={youngguy2}
                        name={'George Clooney'}
                        messagePrev={"I think I left my ID at LIV, or at the girl's..."}
                        sentMessage={true}
                        isRecieved={true}
                        isNew={false}>
                    </MessageBubbleComp>
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
