import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";

import filledInPurpleBoxImg from "../../assets/filledinpurplebox.png";
import unfilledInPurpleBoxImg from "../../assets/unfilledinbiggerborder.png";
import { heightRatioProMax, widthRatioProMax } from "../Utils/Dimensions";
import { colors, typography } from "../Theme";
const { height, width } = Dimensions.get("screen");

const CostSplittingSectionComp = (props) => {
  return (
    <View style={styles.costSplittingContainer}>
      <Text
        style={[
          typography.bold.bold16,
          {
            color: colors.gold.gold100,
          },
        ]}
      >
        Cost-Splitting:
      </Text>

      <Text
        style={[
          typography.bold.bold16,
          {
            color: colors.gold.gold100,
          },
        ]}
      >
        SPLIT NOW PAY LATER INFORMATION
      </Text>
      <Text
        style={[
          typography.bold.bold16,
          {
            color: colors.gold.gold100,
          },
        ]}
      >
        PAY NOW SPLIT LATER INFORMATION
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
            {props.tableTypeSelection === "pnsl" ? (
              <Text
                style={[
                  typography.regular.regular16,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                By choosing the{" "}
                <Text
                  style={[
                    typography.regular.regular16,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  "pay-now-split-later"{" "}
                </Text>
                method, you commit to paying full table minimum, plus additional fees, upon creating the table request, then split the cost amongst others later.
              </Text>
            ) : (
              <Text
                style={[
                  typography.regular.regular16,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                By choosing the{" "}
                <Text
                  style={[
                    typography.regular.regular16,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  "split-now-pay-later"{" "}
                </Text>
                method, you can invite others and discuss individual joining fees while we temporarily hold your card.
                Payments will be finalized once everyone agrees on their respective shares.
                However, please note that the table is not reserved until the total payment is made.
                This means there's a risk of losing the table to a group that pays in full upfront or settles faster than your group.
              </Text>
            )}
          </View>
          <View
            style={{
              marginTop: 20 * heightRatioProMax,
            }}
          >
            {
              props.tableTypeSelection === "pnsl" ? (
                <Text
                  style={[
                    typography.regular.regular16,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  By selecting the create request button you are finalizing a
                  reservation, and are agreeing to pay the full non-refundable
                  amount of{" "}
                  <Text
                    style={{
                      fontSize: 15 * heightRatioProMax,
                    }}
                  >
                    ${props.nonRefundableAmount}
                  </Text>
                  .
                </Text>
              ) : (
                <Text
                  style={[
                    typography.regular.regular16,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                </Text>
              )
              //                        Once everyone's joining fees have been finalised, you will be able to finalize your reservation.
            }
          </View>
          <View
            style={{
              marginTop: 20 * heightRatioProMax,
            }}
          >
            {props.tableTypeSelection === "pnsl" ? (
              <Text
                style={[
                  typography.regular.regular16,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                You will be refunded small amounts incrementally as more people
                join your table, such as invited participants or new people
                joining in the polling or active table group room.
              </Text>
            ) : (
              <Text
                style={[
                  typography.regular.regular16,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  costSplittingContainer: {
    // marginTop: 40 * heightRatioProMax,
    width: width,
    // height:height,
    backgroundColor: "black",
  },
  agreementTextContainer: {
    width: "80%",
    flexDirection: "column",
    color: colors.black.black900,
  },
});

export default CostSplittingSectionComp;
