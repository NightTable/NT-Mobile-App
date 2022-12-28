import React from 'react';

import { View, 
    Text, 
    Platform,
    TouchableOpacity} from 'react-native';
import { Colors } from '../colors/Colors';

import { useRoute } from '@react-navigation/native';
import { CardField, StripeContainer } from '@stripe/stripe-react-native';
import { heightRatioProMax } from '../dimensions/Dimensions';

import { windowHeight } from '../dimensions/Dimensions';

import WhitePurpleBubbleLayoutComp from '../components/InitialPaymentScreen/WhitePurpleLayoutComp';
import { Fonts } from '../fonts/Fonts';

const InitialPaymentScreen = (props) => {

    const route = useRoute()

    const navToPollingRoom = () => {
        console.log(route.params.tables);
        props.navigation.navigate('edNav-PollingRoomScreen', {
            cardCharge: route.params.cardCharge,
            requestType: route.params.requestType,
            tableMinimum: route.params.tableMinimum,
            tables: route.params.tables,
            hour: route.params.hour,
            minute: route.params.minute,
            timeOfDay: route.params.timeOfDay,
            menu: route.params.menu,
            orders: route.params.orders,
            subtotal: route.params.subtotal,
            thisUser: route.params.thisUser
        })
        console.log("Params from initial payment screen");
        console.log(route.params.cardCharge, "route.params.cardCharge");
        console.log(route.params.requestType, "route.params.requestType");
        console.log(route.params.tableMinimum, "route.params.tableMinimum");
        console.log(route.params.tables, "route.params.tables");
        console.log(route.params.hour, "route.params.hour");
        console.log(route.params.minute, "route.params.minute");
        console.log(route.params.timeOfDay, "route.params.timeOfDay");
        console.log(route.params.menu, "route.params.menu");
        console.log(route.params.thisUser, "route.params.thisUser")
        console.log("\n");
    }

    return (
    <StripeContainer
    keyboardShouldPersistTaps={Platform.OS === 'android' ? false : "never"}
    >
    <View style={{
        backgroundColor: Colors.black,
        //marginTop: 50 * heightRatioProMax,
        height: '100%'
    }}>
        <WhitePurpleBubbleLayoutComp>
            <View style={{
                marginTop: 40 * heightRatioProMax,
                width: '80%'
            }}>
                <Text style={{
                    fontSize: windowHeight < 700 ? 20 * heightRatioProMax : 20 * heightRatioProMax ,
                    fontFamily: Fonts.mainFontReg,
                    color: Colors.gold
                }}>
                    If you have made a pay-now-split later request, you will be charged
                    the required full amount to create your table request. You will not be entitled to a refund 
                    unless a club employee cancels your table request.  
                    {"\n\n"}
                    If you have made a split-now-pay-later request, a pre-authorization charge will be made,
                    and the amount charged will be placed on hold. This amount may be refunded in the event that the 
                    organizer, VIP host, promoter, or any club employee cancels your table request.
                    {"\n\n"}
                    Please enter in the required card information below:
                </Text>
            </View>
            <View style={{
                width: '90%',
                marginTop: 20 * heightRatioProMax,
                borderWidth: 1,
                borderRadius: 10 * heightRatioProMax,
                borderColor: Colors.gold
            }}>
                <CardField 
                cardStyle={{
                    placeholderColor: Colors.gold,
                    textColor: Colors.gold,
                    fontSize: 15 * heightRatioProMax
                }}
                style={{
                height: 50 * heightRatioProMax,
            }}></CardField>
            </View>

        </WhitePurpleBubbleLayoutComp>
        <View style={{
            marginTop: 100 * heightRatioProMax,
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
            onPress={navToPollingRoom}
            style={[{
                padding: 20 * heightRatioProMax,
                width: '60%',
                backgroundColor: Colors.gold,
                borderRadius: 10 * heightRatioProMax
            }, {
                shadowColor: Colors.black,
                shadowRadius: 5,
                shadowOpacity: 0.7,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                elevation: 3
            }]}>
                <Text style={{
                    fontSize: 17 * heightRatioProMax,
                    color: Colors.black,
                    fontFamily: Fonts.mainFontReg,
                    textAlign: 'center'
                }}>enter payment info!</Text>
            </TouchableOpacity>
        </View>
    </View>
    </StripeContainer>)
}

export default InitialPaymentScreen;