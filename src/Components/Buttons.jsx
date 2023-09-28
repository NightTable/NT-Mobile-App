import React, { useState } from "react";
import { Button as NBButton } from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { ActivityLoader } from "./Loaders";
import { Box } from "native-base";
import { typography } from "../theme";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import { colors } from "../theme";

const { screenWidth, screenHeight } = Dimensions.get("screen");
//USEAGE
// Step 1:::> import {Button} from "_component_Directory_"
// Step 2:::> Use below code to render component and pass props according to requirement
{
  /* <Button
            text={'CLICdK ME'}
            onSubmit={() => {
              console.log('BUtton clicked....!');
            }}
            bgColor={'red.900'}
            textColor={'white'}
            variant={''}
            borderColor={'green.900'}
            fontweight={'bold'}
            iconName={'eye'}
          /> */
}

export const Button = (props) => {
  const [loader, setloader] = useState(props.loader);
  return (
    <>
      <Pressable
        onPress={() => {
          props.onSubmit();
        }}
        style={{ width: "100%", height: 40 }}
      >
        <Box
          justifyContent={"center"}
          alignItem={"center"}
          // leftIcon={
          //   props.iconName == undefined || props.iconName.length < 0 ? null : (
          //     <Feather name={props.iconName} size={22} />
          //   )
          // }
          // fontSize="sm"
          // colorScheme={props.textColor}
          // variant={props?.variant}
          // bgColor={props.bgColor}
          // onPress={() => {
          //   props.onSubmit();
          // }}
          // _icon={{
          //   color: props.textColor,
          // }}
          // _text={{
          //   color: props.textColor,
          //   fontWeight: props.fontweight,
          // }}
          // borderColor={props.borderColor}
        >
          {loader === false ? (
            <Box style={{ alignItem: "center", justifyContent: "center" }}>
              <ActivityLoader />
            </Box>
          ) : (
            <>
              <Box
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  backgroundColor:
                    props?.disabled === true
                      ? colors.grey.grey400
                      : props.backgroundColor,
                  borderRadius: 4,
                }}
                // onPress={() => {
                //   props.OnClick();
                // }}
              >
                <Text
                  style={[{
                    color: props.textColor,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                    typography.bold.bold16,
                  ]}
                >
                  {props.text}
                </Text>
              </Box>
            </>
          )}
        </Box>
      </Pressable>
    </>
  );
};
