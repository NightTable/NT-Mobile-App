/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
// Component
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
// theme
import { typography, colors } from '../theme';

export const HeaderWithLeftIcon = (props) => {
  const headerIcon = (iconDirectory) => {
    if (iconDirectory === 'Entypo') {
      return <Entypo name={props.icon} color={colors.gold.gold200} size={30} />;
    } if (iconDirectory === 'AntDesign') {
      return (
        <AntDesign name={props.icon} color={colors.gold.gold200} size={30} />
      );
    } 
      return null;
    
  };

  const headerRightIcon = (iconRightDirectory) => {
    if (iconRightDirectory === 'Entypo') {
      return (
        <Entypo name={props.iconRight} color={colors.gold.gold200} size={24} />
      );
    } if (iconRightDirectory === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={props.iconRight}
          color={colors.gold.gold200}
          size={30}
        />
      );
    } if (iconRightDirectory === 'Foundation') {
      return (
        <Ionicons
          name={props.iconRight}
          color={colors.gold.gold200}
          size={30}
        />
      );
    } if (iconRightDirectory === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={30}
        />
      );
    } 
      return null;
    
  };

  return (
    <View style={[styles.justification, styles.container, {}]}>
        <View>
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
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={[typography.bold.bold24, styles.color]}>
            {props.title}
          </Text>
        </View>
        <View >
          <Pressable
            onPress={() => {
              props.onPressRight();
            }}
          >
            {headerRightIcon(props.iconRightDirectory)}
          </Pressable>
        </View>
      </View>
  );
};

export const HeaderWithIcons = (props) => {
  const headerRightIcon = (iconRightDirectory) => {
    if (iconRightDirectory === 'Entypo') {
      return (
        <Entypo name={props.iconRight} color={colors.white.white0} size={26} />
      );
    } if (iconRightDirectory === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } if (iconRightDirectory === 'Foundation') {
      return (
        <Ionicons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } if (iconRightDirectory === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={props.iconRight}
          color={colors.white.white0}
          size={26}
        />
      );
    } 
      return null;
    
  };

  const headerLeftIcon = (iconLeftDirectory) => {
    if (iconLeftDirectory === 'Entypo') {
      return (
        <Entypo name={props.iconLeft} color={colors.white.white0} size={22} />
      );
    } if (iconLeftDirectory === 'Ionicons') {
      return (
        <Ionicons name={props.iconLeft} color={colors.white.white0} size={22} />
      );
    } if (iconLeftDirectory === 'AntDesign') {
      return (
        <AntDesign
          name={props.iconLeft}
          color={colors.white.white0}
          size={22}
        />
      );
    } 
      return null;
    
  };

  return (
    <View
        style={[
          props.headerStyles,
          styles.justification,
          {
            width: '100%',
            height: 50,
            alignItems: 'center',
            shadowColor: colors.black.black800
          }
        ]}
      >
        <View
          style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'center' }
          ]}
        >
          <Pressable
            onPress={() => {
              props.onPressLeft();
            }}
          >
            {headerLeftIcon(props.iconLeftDirectory)}
          </Pressable>
          <View
            flexDir='row'
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={[typography.regular.regular16, styles.color]}>
              {props.welcome === true ? 'Welcome' : ''}
            </Text>
            <Text style={[typography.bold.bold16, styles.color]}>
              {props.titleLeft}
            </Text>
          </View>
        </View>
        <View style={[styles.row, { alignItems: 'center' }]}>
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
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.black.black800,
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },

  color: {
    color: colors.gold.gold200
  }
});
