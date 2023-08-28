// All information, source code contained in this document
// is the property of StrynDev Solutions, LLC. It must not
// be transmitted to others without the written consent of
// StrynDev Solutions. It must be returned to StrynDev Solutions
// when its authorized use is terminated.

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
                  typography.regular.regular14,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                You have chosen the{" "}
                <Text
                  style={[
                    typography.regular.regular14,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  pay-now-split-later{" "}
                </Text>
                method. This means that you are reserving a table and are
                responsible for paying the full cost of the table initially upon
                creation of the request.
              </Text>
            ) : (
              <Text
                style={[
                  typography.regular.regular12,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                You have chosen the{" "}
                <Text
                  style={[
                    typography.regular.regular12,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  split-now-pay-later{" "}
                </Text>
                method. This means that you are choosing to assign each
                participant a joining fee. Note that this method does not create
                an official reservation upon creation of the request; it only
                gives you the option to negotiate fees with participants before
                finalizing anything. You may lose your table selections to
                someone else who either chooses the pay-now-split-later method,
                or finalizes their reservation before yours.
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
                    typography.regular.regular12,
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
                    typography.regular.regular14,
                    {
                      color: colors.gold.gold100,
                    },
                  ]}
                >
                  By selecting the create request button, you are aknowledge
                  that you have not made an official reservation, but are asking
                  people to join a potential table group.
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
                  typography.regular.regular12,
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
                  typography.regular.regular12,
                  {
                    color: colors.gold.gold100,
                  },
                ]}
              >
                Once everyone's joining fees have been finalized, you will be
                able to finalize your reservation. If your table selections are
                reserved by another group, neither you nor the participants in
                this request will be charged, and the pending charges made to
                participants' cards will not appear in their card statements.
                Note that participants, once they join a table, cannot leave
                unless the organizer or promoter cancels the request.
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
