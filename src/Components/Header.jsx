import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";
//NAVIGATION
import { useNavigation } from "@react-navigation/native";

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
      <View
        style={[
          styles.justification,
          styles.container,
          //   styles.leftPadding,
          //   styles.alignCenter,
        ]}
      >
        <View
          style={{
            marginTop: 20,
            marginRight: 20,
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
        </View>
        <View
          style={{
            marginLeft: 30,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              // typography.semBold.semBold18,
              // styles.marginLeft,
              styles.color,
              { fontSize: 22, fontWeight: "400" },
            ]}
          >
            {props.title}
          </Text>
        </View>
        {/* <Divider color={colors.grey.grey300} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    // height: "30%",
    backgroundColor: colors.black.black800,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  color: {
    color: colors.gold.gold200,
  },
});
