import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { colors } from "../theme";

//Splash main function
const LogoSplash = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.black.black900,
        }}
        safeArea
      >
        <Image
          style={{ height: 200, width: 220 }}
          source={require("../../assets/logo/logo.png")}
        />
      </View>
    </>
  );
};

export default LogoSplash;
