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

  const headerRightIcon = (iconRightDirectory) => {
    if (iconRightDirectory === "Entypo") {
      return (
        <Entypo name={props.iconRight} color={colors.gold.gold200} size={24} />
      );
    } else if (iconRightDirectory === "MaterialIcons") {
      return (
        <MaterialIcons
          name={props.iconRight}
          color={colors.gold.gold200}
          size={30}
        />
      );
    } else if (iconRightDirectory === "Foundation") {
      return (
        <Ionicons
          name={props.iconRight}
          color={colors.gold.gold200}
          size={30}
        />
      );
    } else if (iconRightDirectory === "MaterialCommunityIcons") {
      return (
        <MaterialCommunityIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={30}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Box style={[styles.justification, styles.container, {}]}>
        <Box>
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[typography.bold.bold24, styles.color,]}>
            {props.title}
          </Text>
        </Box>
        <Box >
          <Pressable
            onPress={() => {
              props.onPressRight();
            }}
          >
            {headerRightIcon(props.iconRightDirectory)}
          </Pressable>
        </Box>
      </Box>
    </>
  );
};

export const HeaderWithIcons = (props) => {
  const headerRightIcon = (iconRightDirectory) => {
    if (iconRightDirectory === "Entypo") {
      return (
        <Entypo name={props.iconRight} color={colors.white.white0} size={26} />
      );
    } else if (iconRightDirectory === "MaterialIcons") {
      return (
        <MaterialIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } else if (iconRightDirectory === "Foundation") {
      return (
        <Ionicons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } else if (iconRightDirectory === "MaterialCommunityIcons") {
      return (
        <MaterialCommunityIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } else {
      return null;
    }
  };

  const headerLeftIcon = (iconLeftDirectory) => {
    if (iconLeftDirectory === "Entypo") {
      return (
        <Entypo name={props.iconLeft} color={colors.white.white0} size={22} />
      );
    } else if (iconLeftDirectory === "Ionicons") {
      return (
        <Ionicons name={props.iconLeft} color={colors.white.white0} size={22} />
      );
    } else if (iconLeftDirectory === "AntDesign") {
      return (
        <AntDesign
          name={props.iconLeft}
          color={colors.white.white0}
          size={22}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Box
        style={[
          props.headerStyles,
          styles.justification,
          {
            width: "100%",
            height: 50,
            alignItems: "center",
            shadowColor: colors.black.black800,
          },
        ]}
      >
        <Box
          style={[
            styles.row,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Pressable
            onPress={() => {
              props.onPressLeft();
            }}
          >
            {headerLeftIcon(props.iconLeftDirectory)}
          </Pressable>
          <Box
            flexDir={"row"}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={[typography.regular.regular16, styles.color]}>
              {props.welcome === true ? "Welcome" : ""}
            </Text>
            <Text style={[typography.bold.bold16, styles.color]}>
              {props.titleLeft}
            </Text>
          </Box>
        </Box>
        <Box style={[styles.row, { alignItems: "center" }]}>
          <Text style={[typography.bold.bold16, styles.color]}>
            {props.titleRight}
          </Text>
          <Pressable
            onPress={() => {
              props.onPressRight();
            }}
          >
            {headerRightIcon(props.iconRightDirectory)}
          </Pressable>
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
    alignContent: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  color: {
    color: colors.gold.gold200,
  },
});
