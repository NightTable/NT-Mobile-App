// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { getLocaleDirection } from 'react-native-web/dist/cjs/modules/useLocale';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, widthRatioProMax } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

import TableConfigComp from './TableOptionSectionComp/TableConfigComp';

const TableOptionSectionComp = (props) => {

    const tableConfigListData = props.tableConfigData; 

    const handleTableOptionSectionConfigPress = (idParam) => {

        console.log("This is the middle chain");

        props.onOuterTableConfigPress(idParam);

    }

    let marginFactor = 18;

    return (<View style={styles.componentContainer}>

        <View style={{
            marginTop: 10 * heightRatioProMax,
            alignSelf: 'flex-start',
            marginBottom: 15 * heightRatioProMax,
        }}>
            <Text style={{
                fontFamily: Fonts.mainFontReg,
                color: Colors.textColorGold
            }}>
                Select your table option(s):</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Table Map ID
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold,
                        marginRight: 45 * widthRatioProMax
                    }}>
                    Type
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Minimum
            </Text>
            <Text style={{
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontFamily: Fonts.mainFontReg,
                        marginHorizontal: marginFactor * widthRatioProMax,
                        color: Colors.gold
                    }}>
                    Table Size
            </Text>
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
                    id={tableConfig.id}
                    price={tableConfig.minimum}
                    size={tableConfig.fits}
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