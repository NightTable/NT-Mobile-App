// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { View, 
    Text, 
    StyleSheet,
    TouchableOpacity,} from 'react-native';
import {
    heightRatioNorm
} from '../dimensions/Dimensions';


const EndOutingScreen = (props) => {

    const handleBackToHome = () => {
        if (props.route.name.includes("edNav")){
            props.navigation.push('edNav-EntryDashboardScreen')
        }
        if (props.route.name.includes("trNav")){
            props.navigation.push('trNav-TableRequestsHomeScreen')
        }
        if (props.route.name.includes("invNav")){
            props.navigation.push('invNav-TableInvitesOverviewScreen')
        }
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.black, textAlign: 'center', direction: 'rtl'}}>Looks like your night has ended. Thanks again for using </Text>
                <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.purple, textAlign: 'center', direction: 'rtl'}}>NightTable!</Text>

                <TouchableOpacity 
                    onPress={handleBackToHome}
                    style={{backgroundColor: Colors.white, marginTop: 10*heightRatioNorm, width: '60%',
                            borderWidth: 2,
                            borderColor: Colors.purple,
                            shadowColor: Colors.black,
                            shadowRadius: 5,
                            shadowOpacity: 1,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            elevation: 3
                        }}>
                        <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.purple, textAlign: 'center'}}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 40*heightRatioNorm,
        backgroundColor: Colors.greyLight,
    },
});

export default EndOutingScreen;
