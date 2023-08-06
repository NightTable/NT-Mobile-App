// PaymentScreen.ts
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { Button } from "native-base";
import { StyleSheet } from "react-native";

export default function PaymentScreen() {
  const { confirmPayment } = useStripe();

  return (
    <>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      />
      <Button
        style={styles.button}
        //  disabled={!loading}
        title="Checkout"
        color="#841584"
        //  onPress={openPaymentSheet}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#00aeef",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 15,
  },
});
