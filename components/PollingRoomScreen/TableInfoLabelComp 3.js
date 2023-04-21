// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React, {useEffect} from 'react';

import { 
    View, 
    Text,
    StyleSheet } from 'react-native';

import { Colors } from '../../colors/Colors';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const TableInfoLabelComp = (props) => {

    useEffect(() => {
        if (!props.tables){
            console.log(props.tables, "error");
        }
      }, []);

    return (<View style={styles.container}>
        <Text style={{
            color: Colors.white,
            fontFamily: Fonts.mainFontReg,
            color: Colors.textColorGold
        }}>Tables: {" "} 
        {/*props.tables.map((table, index) => (
            <Text style={{
                color: Colors.orange
            }}
            key={index}>
            
                {table.id + " "}
            </Text>
        ))*/}  
        </Text>
    </View>)

};

const styles = StyleSheet.create({
    containerTableInfo: {
        backgroundColor: Colors.black,
        height: 50 * heightRatioProMax,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default TableInfoLabelComp;