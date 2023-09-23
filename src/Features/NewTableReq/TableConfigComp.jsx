import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet } from 'react-native';

import { colors, typography } from "../../Theme";
import React, { useEffect, useState } from 'react';

const TableConfigComp = (props) => {

    const [boxColor, setBoxColor] = useState(colors.black.black800);
    const [textColor, setTextColor] = useState(colors.gold.gold100);

    const handleOnPress = () => {
        if (boxColor === colors.black.black800 && textColor === colors.gold.gold100){
            setBoxColor(colors.gold.gold100);
            setTextColor(colors.black.black800);
            let parts = props.price;
            props.handleTableMinimum(1*parseInt(parts));


        }

        if (boxColor === colors.gold.gold100 && textColor === colors.black.black800){
            setBoxColor(colors.black.black800);
            setTextColor(colors.gold.gold100);
            let parts = props.price;
            props.handleTableMinimum(-1*parseInt(parts));

        }

    }



    return (
    <View>
        <TouchableOpacity style={[
            {...styles.configCompContainer,
            borderColor: colors.gold.gold100,
            backgroundColor: boxColor,
            borderWidth: 1,},
            styles.configCompContainerShadow]} onPress={() => handleOnPress()}>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={ [typography.regular.regular14,{
                    textAlign: 'center',
                    flexDirection: 'column',
                    width: '80%',
                    color: textColor
                }]}>{props.id}</Text>
            </View>        
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={[typography.regular.regular14,{
                    textAlign: 'center',
                    flexDirection: 'column',

                    width: '80%',
                    color: textColor
                }]}>{props.type}</Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={[typography.regular.regular14,{
                    textAlign: 'center',

                    color: textColor
                }]}>${props.price}</Text>
            </View>
            {/*<View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: Fonts.mainFontReg,
                    color: textColor
                }}>{props.size}</Text>
            </View>*/}
        </TouchableOpacity>
    </View>)

}

const styles = StyleSheet.create({

    configCompContainer: {
        marginTop: 1,
        marginBottom: 1,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        height: 50,
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