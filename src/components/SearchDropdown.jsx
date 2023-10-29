import React, { useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'native-base';
import { TextInput, Text, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';

// components
import { AntDesignIcon, EntypoIcon, FeatherIcon, IoniconsIcon, MaterialCommunityIcon } from './Icons';

import { colors, typography } from '../theme';
// Main function

const SearchDropdown = (props) => {
  const [searchText, setSearchText] = useState('');

  // PlaceHolder Text
  const [placeHolder, setPlaceHolder] = useState(props?.placeholder);
  // action sheet
  const [openActionSheet, setopenActionSheet] = useState(false);

  const filteredItems = props?.data?.filter((item) => item?.label?.toLowerCase()?.includes(searchText?.toLowerCase()));

  // console.log("filteredItems===>",props?.data)

  const LeftIcon = (leftIconDirectoryName) => {
    if (leftIconDirectoryName === 'Entypo') {
      return <EntypoIcon name={props?.leftIconName} color={colors?.grey?.grey200} size={22} />;
    }
    if (leftIconDirectoryName === 'Ionicons') {
      return <IoniconsIcon name={props?.leftIconName} color={colors?.grey.grey200} size={22} />;
    }
    if (leftIconDirectoryName === 'AntDesign') {
      return <AntDesignIcon name={props?.iconLeft} color={colors.grey.grey200} size={22} />;
    }
    if (leftIconDirectoryName == 'Feather') {
      return <FeatherIcon name={props?.leftIconName} color={colors?.grey?.grey200} size={22} />;
    }
    return null;
  };

  return (
    <>
      <TouchableOpacity
        key={() => String(props?.value)}
        style={[
          styles.container,
          {
            width: props?.width,
            height: props?.height,
            backgroundColor: props.bgColor
          }
        ]}
        onPress={() => {
          setopenActionSheet(true);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Text
            style={[
              typography.regular.regular16,
              {
                color: props.textColor,
                paddingHorizontal: 12,
                width: '76%'
              }
            ]}>
            {props?.value?.length > 11 ? props?.value?.substring(0, 16)?.concat('...') : props?.value}
          </Text>
          <View
            style={[
              {
                width: '24%',
                flexDirection: 'row-reverse',
                marginLeft: 12
              }
            ]}>
            <EntypoIcon name='chevron-small-down' color={props.iconColor} size={30} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent
        visible={openActionSheet}
        onRequestClose={() => {
          setopenActionSheet(!openActionSheet);
        }}>
        <KeyboardAvoidingView
          style={{
            height: '100%',
            justifyContent: 'flex-end',
            backgroundColor: colors.red.red800
          }}>
          <Pressable
            onPress={() => {
              setopenActionSheet(!openActionSheet);
            }}
            style={{
              height: props?.search === true ? '20%' : '60%',
              backgroundColor: '#000000BA'
            }}
          />

          <View
            style={{
              height: props?.search === true ? '90%' : '40%',
              backgroundColor: colors.red.red800,
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12
              }}>
              <Text
                style={[
                  typography.bold.bold16,
                  {
                    color: colors.white.white1,
                    width: '80%',
                    paddingVertical: 14
                  }
                ]}>
                {props?.searchPopupHeading}
              </Text>
              <TouchableOpacity
                style={{
                  width: '20%',
                  alignItems: 'flex-end',
                  paddingVertical: 14
                }}
                onPress={() => {
                  setopenActionSheet(false);
                }}>
                <MaterialCommunityIcon name='close' color={colors.white.white0} size={24} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 0.5,
                backgroundColor: colors.grey.grey100,
                opacity: 0.4
              }}
            />
            {props?.search === true ? (
              <View style={{ padding: 12 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 40,
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: colors.gold.gold100,
                    backgroundColor: colors.grey.grey650,
                    justifyItems: 'center',
                    alignItems: 'center'
                  }}>
                  <View
                    style={{
                      width: '10%',
                      alignItems: 'center',
                      justifyItems: 'center'
                    }}>
                    {LeftIcon(props?.leftIconDirectoryName)}
                  </View>
                  <View
                    style={{
                      width: '90%'
                    }}>
                    <TextInput
                      selectionColor={colors.white.white0}
                      cursorColor={colors.white.white0}
                      placeholder={props?.searchBarText}
                      removeClippedSubviews={false}
                      keyboardShouldPersistTaps='always'
                      style={[typography.regular.regular16, styles.input]}
                      placeholderTextColor={colors.grey.grey200}
                      onChangeText={(text) => {
                        setSearchText(text);
                      }}
                      value={searchText}
                    />
                  </View>
                </View>
              </View>
            ) : null}

            <ScrollView style={{ paddingVertical: 10 }}>
              {filteredItems?.map((item, index) => (
                <Pressable
                  key={() => String(index)}
                  style={{
                    padding: 12,
                    paddingBottom: filteredItems.length - 1 === index ? 100 : 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                  onPress={() => {
                    // setplaceHolder(item.label);
                    setopenActionSheet(!openActionSheet);
                    props.onValueChange(item);
                  }}>
                  <Text
                    style={[
                      placeHolder === item.label ? typography.bold.bold16 : typography.regular.regular16,
                      {
                        color: colors.white.white1,
                        paddingHorizontal: 12
                      }
                    ]}>
                    {item.label}
                  </Text>

                  {props?.value === item.label ? (
                    <View>
                      <FeatherIcon name='check' color={colors.green.green550} size={22} />
                    </View>
                  ) : (
                    <></>
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 94,
    minheight: 16,

    justifyContent: 'center',
    borderColor: colors.gold.gold100,
    borderWidth: 1,
    borderRadius: 6
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white.white0
  },
  searchIcon: {
    padding: 10
  },
  input: {
    height: 40,

    backgroundColor: 'transparent',
    color: colors.white.white0,
    borderRadius: 6
  }
});

export default SearchDropdown;
