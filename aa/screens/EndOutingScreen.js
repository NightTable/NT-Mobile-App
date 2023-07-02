import React from 'react';

import { Colors } from '../colors/Colors';
import { Fonts } from '../fonts/Fonts';

import { View, 
    Text, 
    StyleSheet,
    TouchableOpacity,} from 'react-native';
import {
    heightRatioNorm, heightRatioProMax
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
                <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold, textAlign: 'center', direction: 'rtl'}}>Looks like your night has ended. Thanks again for using </Text>
                <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.gold, textAlign: 'center', direction: 'rtl'}}>NightTable!</Text>

                <TouchableOpacity 
                    onPress={handleBackToHome}
                    style={{backgroundColor: Colors.gold, marginTop: 10*heightRatioNorm, width: '60%',
                            borderWidth: 2,
                            borderRadius: 10*heightRatioProMax,
                            shadowColor: Colors.black,
                            shadowRadius: 5,
                            shadowOpacity: 1,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            elevation: 3
                        }}>
                        <Text style={{margin: 10*heightRatioNorm, fontFamily: Fonts.mainFontBold, fontSize: 18*heightRatioNorm, color: Colors.black, textAlign: 'center'}}>Back to Home</Text>
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
        backgroundColor: Colors.black,
    },
});

export default EndOutingScreen;
