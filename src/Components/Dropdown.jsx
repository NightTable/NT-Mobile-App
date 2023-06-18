import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//Libraries
import { Select, Box } from "native-base";
import { paddingValue } from "../Theme/spacing";

//Theme
import { colors } from "../Theme/colors";
import { EntypoIcon } from "./Icons";
import { Dropdown as ElDropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const minWidth = 94;
const minheight = 16;

export const Dropdown = (props) => {
  return (
    <Box
    //maxW="250"
    >
      <Select
        //face
        //border color
        borderColor={colors.gold.gold100}
        //select face

        minWidth={minWidth}
        minheight={minheight}
        height={"100%"}
        width={props.width}
        //face text color
        color={colors.gold.gold100}
        //bg color

        dropdownIcon={
          <EntypoIcon name={"chevron-small-down"} color={"#000000"} size={30} />
        }
        bgColor={props.bgColor}
        placeholderTextColor={"#000000"}
        selectedValue={props.value}
        //values
        placeholder={props.placeholder}
        accessibilityLabel={props.defaultValue}
        onValueChange={(itemValue) => props.onValueChange(itemValue)}
        variant="filled"
        _actionSheetContent={{
          bgColor: colors.grey.grey500,
        }}
        _selectedItem={{
          bg: colors.gold.gold100,
        }}
      >
        {props.data.map((item) => {
          return (
            <Select.Item
              key={item.id}
              _light={{
                bgColor: colors.grey.grey500,
              }}
              _text={{ color: colors.white.white0 }}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Select>
    </Box>
  );
};

export const ElementDropdown = (props) => {
  return (
    <>
      <View style={styles.container}>
        <ElDropdown
          style={[styles.dropdown]}
          itemTextStyle={{
            color: colors.gold.gold100,
          }}
          containerStyle={{ backgroundColor: "black", color: "red" }}
          activeColor={"red"}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.data}
          search
          maxHeight={600}
          labelField="label"
          valueField="value"
          placeholder={"Code"}
          searchPlaceholder="Search."
          value={props.value}
          onChange={(item) => {
            props.onValueChange(item.value);
            // setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={"red"}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    color: colors.gold.gold100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: paddingValue.value1,
    width: "100%",
  },
  paddingT: { paddingTop: paddingValue.value2 },
  paddingH: { paddingHorizontal: paddingValue.value1 },
  paddingL: { paddingLeft: paddingValue.value2 },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.8,
    backgroundColor: colors.black.black800,
  },

  container: {
    backgroundColor: "black",
    // padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: colors.gold.gold100,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.black.black800,
    alignItems: "center",
  },
  icon: {
    // marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.gold.gold100,
    textAlign: "center",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.gold.gold100,
    textAlign: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    fontSize: 16,
    color: colors.gold.gold100,
    backgroundColor: colors.black.black800,
  },
});
