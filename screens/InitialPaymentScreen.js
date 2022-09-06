// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

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
        backgroundColor: Colors.lightGrey,
        marginTop: 50 * heightRatioProMax
    }}>
        <WhitePurpleBubbleLayoutComp>
            <View style={{
                marginTop: 40 * heightRatioProMax,
                width: '80%'
            }}>
                <Text style={{
                    fontSize: windowHeight < 700 ? 20 * heightRatioProMax : 15 * heightRatioProMax ,
                    fontFamily: Fonts.mainFontReg
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
                borderColor: Colors.greyDark
            }}>
                <CardField 
                cardStyle={{
                    placeholderColor: Colors.purple,
                    textColor: Colors.purple,
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
                    backgroundColor: Colors.purple,
                    padding: 10 * heightRatioProMax,
                    borderRadius: 10 * heightRatioProMax,
                }}>
                    <Text style={{
                        fontFamily: Fonts.mainFontReg,
                        color: Colors.white
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
                backgroundColor: Colors.white,
                borderColor: Colors.green,
                borderWidth: 1
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
                    color: Colors.green,
                    fontFamily: Fonts.mainFontReg,
                    textAlign: 'center'
                }}>enter payment info!</Text>
            </TouchableOpacity>
        </View>
    </View>
    </StripeContainer>)
}

export default InitialPaymentScreen;