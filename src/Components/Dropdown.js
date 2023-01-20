import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//Libraries
import { Select, Box } from "native-base";
import { paddingValue } from "../Theme/spacing";

//Theme
import { colors } from "../Theme/colors";
import { EntypoIcon } from "../Components/Icons";
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
        borderColor={colors.grey.grey500}
        //select face

        minWidth={minWidth}
        minheight={minheight}
        height={"100%"}
        width={props.width}
        //face text color
        color={colors.white.white0}
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
          bg: colors.grey.grey600,
        }}
      >
        {props.data.map((item) => {
          console.log("item===>", item);
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
  const renderLabel = () => {
    if (props.value) {
      return <Text style={[styles.label, { color: "blue" }]}>Country </Text>;
    }
    return null;
  };

  return (
    <>
      <View style={styles.container}>
        <ElDropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.data}
          search
          maxHeight={600}
          labelField="label"
          valueField="value"
          placeholder={"+91"}
          searchPlaceholder="Search..."
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
    color: colors.white.white0,
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
    // borderColor: "gray",
    // borderWidth: 0.5,
    borderRadius: 8,
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  icon: {
    // marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    // borderRadius: 8,
    //  left: 22,
    top: 8,
    zIndex: 999,
    // paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
