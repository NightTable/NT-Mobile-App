import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { Box } from "native-base";
//Component
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
//Theme
import { typography, colors } from "../theme";

export const HeaderWithLeftIcon = (props) => {
  const headerIcon = (iconDirectory) => {
    if (iconDirectory === "Entypo") {
      return <Entypo name={props.icon} color={colors.gold.gold200} size={30} />;
    } else if (iconDirectory === "AntDesign") {
      return (
        <AntDesign name={props.icon} color={colors.gold.gold200} size={30} />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Box style={[styles.justification, styles.container]}>
        <Box
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              props.onSubmit();
            }}
          >
            {headerIcon(props.iconDirectory)}
          </Pressable>
        </Box>
        <Box
          style={{
            marginLeft: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[typography.bold.bold24, styles.color]}>
            {props.title}
          </Text>
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: colors.black.black800,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingHorizontal: 20,
  },

  color: {
    color: colors.gold.gold200,
  },
});
