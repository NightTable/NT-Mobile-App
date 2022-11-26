// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, {useState} from 'react';

import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet } from 'react-native';

import { Colors } from '../../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';
import { Fonts } from '../../../fonts/Fonts';

const TableConfigComp = (props) => {

    const [boxColor, setBoxColor] = useState(Colors.black);
    const [textColor, setTextColor] = useState(Colors.gold);

    const handleOnPress = () => {
        if (boxColor === Colors.black && textColor === Colors.gold){
            setBoxColor(Colors.gold);
            setTextColor(Colors.black);
        }

        if (boxColor === Colors.gold && textColor === Colors.black){
            setBoxColor(Colors.black);
            setTextColor(Colors.gold);
        }

    }

    return (
    <View>
        <TouchableOpacity style={[
            {...styles.configCompContainer,
            borderColor: Colors.gold,
            backgroundColor: boxColor,
            borderWidth: 1,},
            styles.configCompContainerShadow]} onPress={() => {props.onTableConfigPress(props.id); handleOnPress()}}>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    flexDirection: 'column',
                    fontFamily: Fonts.mainFontReg,
                    width: '80%',
                    color: textColor
                }}>{props.id}</Text>
            </View>        
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    flexDirection: 'column',
                    fontFamily: Fonts.mainFontReg,
                    width: '80%',
                    color: textColor
                }}>{props.type}</Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: Fonts.mainFontReg,
                    color: textColor
                }}>{props.price}</Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: Fonts.mainFontReg,
                    color: textColor
                }}>{props.size}</Text>
            </View>
        </TouchableOpacity>
    </View>)

}

const styles = StyleSheet.create({

    configCompContainer: {
        marginTop: 1 * heightRatioProMax,
        marginBottom: 1 * heightRatioProMax,
        width: '100%',
        borderRadius: 8 * heightRatioProMax,
        flexDirection: 'row',
        height: 50 * heightRatioProMax,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    configCompContainerShadow: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 6
    }
});

export default TableConfigComp; 

