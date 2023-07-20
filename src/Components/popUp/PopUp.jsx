import React, { useEffect, useState } from "react";
//Components

//libraries
import { Box, Text } from "native-base";
import {
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
//Utils
const { height, width } = Dimensions.get("screen");
import { value } from "../../theme/spacing";
import { colors, typography } from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//HOW TO USE
// STEP 1:  import {EventRegister} from 'react-native-event-listeners';
// STEP 2:

// useEffect(() => {
//     const globalSucessPopUp = EventRegister.addEventListener(
//       'popupTriggerd',
//       data => {
//           console.log('data.message', data);
//         }
//       },
//     );

//     return () => {
//       EventRegister.removeEventListener(globalSucessPopUp);
//     };
//   }, []);

// STEP 3: IMPORT UI OF YOUR COMPONENT
//  <PopUpAlertUi
// onPopUpClose={() => {
//   onPopUpClose();
// }}
// message={message}
// popUpTheme={popUpTheme}
// />

//STEP 4 :
//IF THE POP-UP IS SUCESS SEND sucess as true or false
// send msg
//if you want to send other msg apart from this add in object
// let obj = {
//     sucess: true,
//     msg: 'ESL Mapping Updated',
//   };
//   EventRegister.emit('popupTriggerd', obj);

// GLOBAL POP-UP ALERT
export const PopUpAlertUi = (props) => {
  return (
    <>
      <SafeAreaView>
        <Box
          style={{
            height: height,
            width: width,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "colors.shadowColor",
          }}
        >
          <Box
            style={{
              width: width - 60,
              backgroundColor: colors.red.red800,
              borderRadius: 12,
            }}
          >
            {props?.closeBtnEnable === true ? (
              <>
                <Box
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <TouchableOpacity
                    style={{
                      paddingTop: value.micro,
                      paddingHorizontal: value.micro,
                    }}
                    onPress={() => {
                      props.onPopUpClose();
                    }}
                  >
                    <MaterialIcons
                      name={"close"}
                      color={colors.black.black800}
                      size={26}
                    />
                  </TouchableOpacity>
                </Box>
              </>
            ) : null}

            <Text
              style={[
                typography.bold.bold16,
                {
                  color: props.headingColor,

                  textAlign: "center",
                  paddingVertical:
                    props?.message?.length > 0 ? value.regular : 0,
                  width: "96%",
                  lineHeight: 30,
                },
              ]}
            >
              {props?.message}
            </Text>

            {!props?.img ? null : (
              <Box
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  paddingBottom: 16,
                }}
              >
                <Image source={props?.img} style={{ height: 60, width: 60 }} />
              </Box>
            )}

            <Box style={{ justifyContent: "flex-end" }}>{props?.renderfn}</Box>
          </Box>
        </Box>
      </SafeAreaView>
    </>
  );
};
