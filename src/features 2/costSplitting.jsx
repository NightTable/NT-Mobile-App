import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { heightRatioProMax } from "../utils/Dimensions";
import { colors, typography } from "../theme";

const CostSplittingSectionComp = (props) => {
  const isSplitNow = props.selectedPaymentType === 1;

  return (
    <View style={styles.costSplittingContainer}>
      <Text
        style={[
          typography.bold.bold16,
          {
            color: colors.gold.gold100,
            marginBottom: 20 * heightRatioProMax, // Adding gap
          },
        ]}
      >
        Cost-Splitting Information:
      </Text>

      <Text
        style={[
          typography.bold.bold16,
          {
            color: colors.gold.gold100,
            textAlign: 'center', // Center-aligning the text
          },
        ]}
      >
        {isSplitNow ? "SPLIT NOW PAY LATER" : "PAY NOW SPLIT LATER"}
      </Text>

      <View
        style={{
          width: "100%",
          marginTop: 20 * heightRatioProMax,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={styles.agreementTextContainer}>
          <View>
            {isSplitNow ? (
              <Text
                style={[
                  typography.regular.regular18,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                By choosing the "split-now-pay-later" method, you can invite others and discuss individual joining fees while we temporarily hold your card.
                Payments will be finalized once everyone agrees on their respective shares.
                However, please note that the table is not reserved until the total payment is made.
                This means there's a risk of losing the table to a group that pays in full upfront or settles faster than your group.
              </Text>
            ) : (
              <Text
                style={[
                  typography.regular.regular18,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                By choosing the "pay-now-split-later" method, you commit to paying full table minimum, plus additional fees, upon creating the table request, then split the cost amongst others later.
              </Text>
            )}
          </View>

          {/* You can continue with similar conditional logic for other parts of your component as needed. */}

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  costSplittingContainer: {
    width: Dimensions.get("screen").width,
    backgroundColor: "black",
    padding: 20 * heightRatioProMax,  // Added padding for better styling
  },
  agreementTextContainer: {
    width: "80%",
    flexDirection: "column",
    color: colors.black.black900,
  },
});

export default CostSplittingSectionComp;
