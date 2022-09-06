// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { heightRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import TableConfigComp from './TableOptionSectionComp/TableConfigComp';

const TableOptionSectionComp = (props) => {

    const tableConfigListData = props.tableConfigData; 

    const handleTableOptionSectionConfigPress = (idParam) => {

        console.log("This is the middle chain");

        props.onOuterTableConfigPress(idParam);

    }

    return (<View style={styles.componentContainer}>

        <View style={{
            marginTop: 10 * heightRatioProMax,
            alignSelf: 'flex-start',
            marginBottom: 15 * heightRatioProMax,
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg
            }}>select a table option:</Text>
        </View>
        {
            tableConfigListData.map((tableConfig, index) => {

                let dynamicBorderShown = false;

                if (index === 0) {
                    dynamicBorderShown = true;
                }

                return (<TableConfigComp
                    onTableConfigPress={handleTableOptionSectionConfigPress}
                    key={index}
                    selectedId={props.selectedTableConfigurationId}
                    type={tableConfig.type}
                    id={tableConfig._id}
                    price={tableConfig.price}
                    size={tableConfig.size}
                ></TableConfigComp>);
            })
        }
    </View>)

};

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10 * heightRatioProMax,
        width: '85%',
        marginBottom: 30 * heightRatioProMax,
    }
})

export default TableOptionSectionComp;