import React from 'react';

import { View, 
    Text, 
    Platform,
    TouchableOpacity} from 'react-native';
import { Colors } from '../colors/Colors';

import { CardField, StripeContainer } from '@stripe/stripe-react-native';
import { heightRatioProMax } from '../dimensions/Dimensions';

import { windowHeight } from '../dimensions/Dimensions';

import WhitePurpleBubbleLayoutComp from '../components/InitialPaymentScreen/WhitePurpleLayoutComp';
import { Fonts } from '../fonts/Fonts';

const InitialPaymentScreen = (props) => {

    return (
    <StripeContainer
    keyboardShouldPersistTaps={Platform.OS === 'android' ? false : "never"}
    >
    <View style={{
        backgroundColor: Colors.black,
        marginTop: 50 * heightRatioProMax
    }}>
        <WhitePurpleBubbleLayoutComp>
            <View style={{
                marginTop: 40 * heightRatioProMax,
                width: '80%'
            }}>
                <Text style={{
                    fontSize: windowHeight < 700 ? 20 * heightRatioProMax : 15 * heightRatioProMax ,
                    fontFamily: Fonts.mainFontReg,
                    color: Colors.gold
                }}>NightTable requires that all new users
                    give out credit/debit card information, so that they
                    will be able to join tables when one opens up.
                    {"\n\n"}
                    Please enter in the required information below:
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
            <View style={{
                marginTop: 15 * heightRatioProMax,
            }}>
                <Text>Or</Text>
            </View>
            <View style={{
                marginTop: 20 * heightRatioProMax
            }}>
                <TouchableOpacity style={{
                    backgroundColor: Colors.gold,
                    padding: 10 * heightRatioProMax,
                    borderRadius: 10 * heightRatioProMax,
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.black
                    }}>pay with crypto</Text>
                </TouchableOpacity>
            </View>
        </WhitePurpleBubbleLayoutComp>
        <View style={{
            marginTop: 100 * heightRatioProMax,
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('edNav-TableRequestConfirmationScreen')}
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