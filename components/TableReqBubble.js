// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, 
    Text, 
    StyleSheet, 
    Image, 
    Platform,
    TouchableOpacity} from 'react-native';

import { Fonts } from '../fonts/Fonts';
import { Colors } from '../colors/Colors';

const TableReqBubble = (props) => {

    return (
        <TouchableOpacity style={[{...styles.bubbleContainer, 
        backgroundColor: props.backgroundColor,
        borderColor: Colors.purple,
        borderWidth: props.selfOrganized ? 1 : 0}, styles.shadowContainer]} >
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    marginBottom: 10,
                    fontSize: 17}}>{props.tableName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                    style={{width: 30, height: 30, borderRadius: 15}} 
                    source={props.organizerPic}>

                    </Image>
                    <Text style={{marginLeft: 10, fontSize: 12, fontFamily: Fonts.mainFontReg}}>
                        {props.organizerName}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    color: Colors.greyDark
                }}>{props.tableInfo}</Text>
                <Text style={{
                    fontFamily: Fonts.mainFontBold,
                    marginVertical: Platform.OS === 'ios' ? 10: 0
                }}>{props.clubName}</Text>
                <Text style={{
                    fontFamily: Fonts.mainFontReg,
                    color: Colors.purple
                }}>{props.datePlacement}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    bubbleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    shadowContainer: {
        shadowColor: Colors.black,
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 3
    }
});

export default TableReqBubble;