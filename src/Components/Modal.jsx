import React, { useState, useEffect } from "react";
import { Box, KeyboardAvoidingView, ScrollView, Select } from "native-base";
import {
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const DyModal = ({ children, openActionSheet, bgColor, onClosepress }) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openActionSheet}
        onRequestClose={() => {
          onClosepress();
        }}
      >
        <Box style={{ width: width, height: height, backgroundColor: bgColor }}>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 18,
              paddingTop: 40,
            }}
          >
            <Text style={{ color: "white", paddingVertical: 12 }}> </Text>
            <TouchableOpacity
              onPress={() => {
                onClosepress();
              }}
            >
              <Ionicons name="close" size={32} color={"silver"} />
            </TouchableOpacity>
          </Box>
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default DyModal;
