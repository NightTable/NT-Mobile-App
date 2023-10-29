import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';

// MAIN FUNCTION
const TableInvites = ({ route, navigation }) => {
  const TableInviteCard = () => (
    <Pressable
      style={styles.cardBoxOuterLayer}
      onPress={() => {
        navigation.navigate('TableInvitesOverView', {
          data: {}
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
  );
  return (
    <View safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title='Table Invites'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <View style={[styles.mainBox]}>
        <TableInviteCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  mainBox: {
    paddingHorizontal: 18
  },

  goldColor: {
    color: colors.gold.gold200
  },
  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  cardBoxOuterLayer: {
    backgroundColor: colors.gold.gold100,
    padding: 12,
    borderRadius: 12
  }
});

export default TableInvites;
