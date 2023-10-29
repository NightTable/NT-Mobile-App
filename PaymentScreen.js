import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CardField, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import { ObjectId } from 'bson';

const API_URL = 'http://localhost:3000/api/payments'; // Replace with your API URL

function PaymentScreen() {
  const { createPaymentMethod, handleNextAction } = useStripe();

  const { confirmPayment, loading } = useConfirmPayment();
  const [paymentIntentId, setPaymentId] = useState('');
  const [stripeCustomerId, setStripeCustomerId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentIds, setPaymentIntentIds] = useState([]);
  const [savedPaymentMethod, setSavedPaymentMethod] = useState('');

  // useEffect(() => {
  //     if (paymentIntentId) {
  //         console.log("paymentIntentId has been updated:", paymentIntentId, '\n\n');
  //         console.log('\n');
  //     }
  // }, [paymentIntentId]);

  // useEffect(() => {
  //     if (stripeCustomerId) {
  //         console.log("stripeCustomerId has been updated:", stripeCustomerId,'\n\n');
  //         console.log('\n');
  //     }
  // }, [stripeCustomerId]);

  // useEffect(() => {
  //     if (clientSecret) {
  //         console.log("clientSecret has been updated:", clientSecret, '\n');
  //         console.log('\n');
  //     }
  // }, [clientSecret]);

  // useEffect(() => {
  //     console.log('Updated paymentIntentIds:', paymentIntentIds);
  // }, [paymentIntentIds]);

  // Init Stripe

  const handleConfirmCard = async () => {
    try {
      console.log('button pressed::>>');
      /*
                creating customer and storing the card info
                on the mobile app, the only billing details we should input are 
                first name, last name, and phone number
            */
      const billingDetails = {
        email: 'email@stripe.com',
        phone: '+48888000888',
        addressCity: 'Houston',
        addressCountry: 'US',
        addressLine1: '1459  Circle Drive',
        addressLine2: 'Texas',
        addressPostalCode: '77063'
      };

      /*
                Create payment method essentially creates
                a payment once and only if the customer enters their card information
            */

      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails
        }
      });

      console.log('paymentMethod', paymentMethod, error);
      /*
                we create our own internal customer to keep of track of 
                customer trasactions
            */

      const responseInternalCustomer = await axios.post(`${API_URL}/create-customer`, {
        userId: new ObjectId(),
        paymentMethodId: paymentMethod.id
      });
      setStripeCustomerId(responseInternalCustomer.data.stripeCustomerId);

      console.log(responseInternalCustomer.data, 'internal customer after initial creation\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      if (error) {
        console.log(error, 'payment method error\n');
        console.log('\n');
      } else {
        console.log(paymentMethod, 'payment method after initial creation\n');
        console.log('\n');
        console.log('\n');
        console.log('\n');
      }

      /*
                creating a payment intent with snpl
                recall line items from the webadmin where a 
                club has tax, tip, and other percentages
            */

      const responseStripeCustomer = await axios.get(
        `${API_URL}/get-stripe-customer/${responseInternalCustomer.data.stripeCustomerId}`
      );
      console.log(responseStripeCustomer.data, 'stripe customer after initial creation\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      /*
                retrieving the stripe customer using the id we have 
                stored in our internal customer
            */

      const responsePaymentIntentSNPL = await axios.post(`${API_URL}/create-payment-intent`, {
        amount: 1,
        lineItems: [20, 9],
        paymentType: 'snpl',
        paymentMethodId: paymentMethod.id,
        customerId: responseStripeCustomer.data.id
      });

      console.log(responsePaymentIntentSNPL.data, 'payment intent snpl\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      /*
                creating a payment intent with pnsl
                recall line items from the webadmin where a 
                club has tax, tip, and other percentages
            */

      const responsePaymentIntentPNSL = await axios.post(`${API_URL}/create-payment-intent`, {
        amount: 1,
        lineItems: [20, 9],
        paymentType: 'pnsl',
        paymentMethodId: paymentMethod.id,
        customerId: responseInternalCustomer.data.stripeCustomerId
      });

      setPaymentId(responsePaymentIntentSNPL.data.paymentIntent.id);
      setPaymentIntentIds((prevIds) => [...prevIds, responsePaymentIntentSNPL.data.paymentIntent.id]);

      console.log(responsePaymentIntentPNSL.data, 'payment intent pnsl\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      /*
                updating our internal customer after creating a payment intent
                we use the snpl payment intent here in this example
            */

      const updatedCustomerPaymentIntent = await axios.patch(
        `${API_URL}/update-internalCustomer/${responseInternalCustomer.data._id}`,
        {
          paymentIntentIds: [...paymentIntentIds, responsePaymentIntentSNPL.data.paymentIntent.id]
        }
      );

      console.log(updatedCustomerPaymentIntent.data, 'updated custoner snpl\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      /*
                confirming the payment of the snpl payment intent
                we do this because payment for snpl happens after 
                the organizer of the table is happy with how his 
                table has been organised
            */
      const { paymentIntent, err } = await confirmPayment(responsePaymentIntentSNPL.data.clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails
        }
      });

      if (err) {
        console.log(err, 'payment intent error\n');
        console.log('\n');
      } else {
        console.log(paymentIntent, 'payment intent of snpl after confirmation\n');
        console.log('\n');
        console.log('\n');
        console.log('\n');
      }

      /*
                we capture all paymentsIntents that are set to be captured manually,
                aka pnsl requests, with this method
            */
      const responsePaymentIntentCapture = await axios.post(`${API_URL}/capture-payment-intent`, {
        paymentIntentId: paymentIntent.id
      });

      console.log(responsePaymentIntentCapture.data, 'payment intent of snpl after confirmation\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      console.log(paymentIntent, 'payment intent after capture');
      console.log('\n');
      console.log('\n');
      console.log('\n');
      console.log(updatedCustomerPaymentIntent.data, 'updated customer\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      // now we have to try creating a second paymentIntent with the same payment method
      // after creating a second, third ,fourth payment intent, each has to be captured immediately

      const secondPaymentIntent = await axios.post(`${API_URL}/create-payment-intent`, {
        amount: 1,
        lineItems: [20, 9],
        paymentType: 'add-on', // NEW CODE HERE: Indicating that it's an "add-on"
        paymentMethodId: paymentMethod.id,
        customerId: stripeCustomerId
      });

      console.log(secondPaymentIntent.data.paymentIntent, 'second payment intent\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');

      setPaymentId(secondPaymentIntent.data.paymentIntent.id);
      setPaymentIntentIds((prevIds) => [...prevIds, secondPaymentIntent.data.paymentIntent.id]);

      const updatedCustomerSecondPaymentIntent = await axios.patch(
        `${API_URL}/update-internalCustomer/${responseInternalCustomer.data._id}`,
        {
          paymentIntentIds: [...paymentIntentIds, responsePaymentIntentSNPL.data.paymentIntent.id]
        }
      );

      console.log(updatedCustomerSecondPaymentIntent.data, 'updated custoner snpl round 2\n');
      console.log('\n');
      console.log('\n');
      console.log('\n');
    } catch (error) {
      console.log(error, 'confirm card error\n');
      console.log('\n');
    }

    /*
  Please check whether a payment method can be used more than once
  to create more payment intents. Write / modify code accordingly
  To run this app, run npx expo start, then run on ios
*/
  };

  return (
    <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: '4242 4242 4242 4242' }}
        cardStyle={{
          placeholderColor: '#e4d0b5',
          textColor: '#e4d0b5',
          backgroundColor: 'black',
          fontSize: 15,
          borderColor: '#e4d0b5',
          borderWidth: 2,
          borderRadius: 10
        }}
        style={{ width: '100%', height: 50, marginVertical: 100 }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <TouchableOpacity
        onPress={handleConfirmCard}
        disabled={loading}
        style={{
          backgroundColor: loading ? 'gray' : '#e4d0b5',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
          marginVertical: 10
        }}>
        <Text style={{ color: 'black', textAlign: 'center' }}>Confirm Card</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PaymentScreen;
