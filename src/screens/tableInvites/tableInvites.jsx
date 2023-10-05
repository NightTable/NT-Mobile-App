import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { colors, typography } from '../../theme';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import { Box } from 'native-base';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HeaderWithLeftIcon } from '../../components/Header';
import { Button } from '../../components/Buttons';
const { width, height } = Dimensions.get('screen');

//MAIN FUNCTION
const TableInvites = ({ route, navigation }) => {
  const TableInviteCard = () => {
    return (
      <>
        <Pressable
          style={styles.cardBoxOuterLayer}
          onPress={() => {
            navigation.navigate('TableInvitesOverView', {
              data: {},
            });
          }}>
          <View style={styles.cardBox}>
            <View>
              <Text style={[typography.bold.bold16]}>Table Name</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[typography.regular.regular14]}>12 people, </Text>
              <Text style={[typography.regular.regular14]}>snpl, </Text>
              <Text style={[typography.regular.regular14]}>4 friends</Text>
            </View>
          </View>
          <View style={styles.cardBox}>
            <View>
              <Text style={[typography.regular.regular16]}>User Name</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[typography.regular.regular14]}>placed on </Text>
              <Text style={[typography.bold.bold14]}>1-12-22 </Text>
              <Text style={[typography.bold.bold14]}>18:00</Text>
            </View>
          </View>
        </Pressable>
      </>
    );
  };
  return (
    <Box safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title={'Table Invites'}
        icon={'arrowleft'}
        iconDirectory={'AntDesign'}
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <Box style={[styles.mainBox]}>
        <TableInviteCard />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
  },
  mainBox: {
    paddingHorizontal: 18,
  },

  goldColor: {
    color: colors.gold.gold200,
  },
  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  cardBoxOuterLayer: {
    backgroundColor: colors.gold.gold100,
    padding: 12,
    borderRadius: 12,
  },
});

export default TableInvites;
