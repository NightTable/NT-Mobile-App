// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';

import { 
    View,
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import blackPencilPic from '../../assets/pencilpick.png';
import UpdateShareModal from '../../modals/SharedPollingScreens/UpdateShareModal'

const OrganizerInfoComp = (props) => {
    const [updateShareModalVisible, setUpdateShareModalVisible] = useState(false);
    const [share, setShare] = useState(370)

    const handleShare = (number) => {
        setShare(number)
    }


    return (

    <View style={[styles.container, styles.containerShadow]}>
        <UpdateShareModal
            changeShare={handleShare}
            show={updateShareModalVisible}
            onRequestClose={() => {
            setUpdateShareModalVisible((state) => !state);
            }}>
        </UpdateShareModal>
        <View>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                fontSize: 18 * heightRatioProMax,
                marginLeft: 15 * widthRatioProMax,
                color: Colors.gold
            }}>your share: <Text style={{
                color: Colors.purple,
                fontFamily: Fonts.mainFontBold,
                color: Colors.gold
            }}> ${share}</Text></Text>
        </View>
        <View>
            <TouchableOpacity
            onPress={() => (setUpdateShareModalVisible(!updateShareModalVisible))}>
                <Image 
                    style={{
                        marginRight: 10 * widthRatioProMax,
                        width: 35 * heightRatioProMax,
                        height: 35 * heightRatioProMax
                    }}
                    source={blackPencilPic}></Image>
            </TouchableOpacity>
        </View>
    </View>)

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40 * heightRatioProMax,
        backgroundColor: Colors.black,
        borderColor: Colors.gold,
        borderWidth: 1,
        height: 50 * heightRatioProMax,
        width: '96%',
        marginBottom: 10 * heightRatioProMax,
        borderRadius: 10 * heightRatioProMax
    },
    containerShadow: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 6
    }

});



export default OrganizerInfoComp;

