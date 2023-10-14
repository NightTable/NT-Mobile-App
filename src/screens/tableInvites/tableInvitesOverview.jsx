import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { colors, typography } from '../../theme';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import { Box } from 'native-base';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HeaderWithLeftIcon } from '../../components/Header';
import { Button } from '../../components/Buttons';
const { width, height } = Dimensions.get('screen');

//MAIN FUNCTION
const TableInvitesOverView = ({ route, navigation }) => {
  const photos = [
    'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2UlMjBjbHVifGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  ];
  const ClubDetails = () => {
    return (
      <>
        <FlatList
          data={photos}
          horizontal={true}
          renderItem={(image) => {
            console.log('image===>', image);
            return (
              <>
                <View
                  style={{
                    backgroundColor: 'red',
                  }}>
                  <Image
                    style={{ width: width - 10, height: 120 }}
                    source={{
                      uri: image?.item,
                    }}
                  />
                </View>
              </>
            );
          }}
        />

        <Box
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            ILUZION : {'     '}
          </Text>
          <Text style={[typography.regular.regular14, styles.goldColor]}>
            iluzion_publicStars_club
          </Text>
        </Box>
        <Box
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>
            B-12321, Church Street, Banglore , Karnataka
          </Text>
        </Box>
      </>
    );
  };

  const InviteDetailCard = ({ headingName, value }) => {
    return (
      <>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={[
              typography.bold.bold14,
              {
                color: colors.gold.gold200,
              },
            ]}>
            {headingName} :
          </Text>
          <Text
            style={[
              typography.bold.bold14,
              {
                color: colors.gold.gold100,
                paddingLeft: 6,
              },
            ]}>
            {value}
          </Text>
        </View>
      </>
    );
  };
  return (
    <Box
      safeArea
      style={[
        styles.container,
        {
          height: '100%',
        },
      ]}>
      <HeaderWithLeftIcon
        title={'Table Overview'}
        icon={'arrowleft'}
        iconDirectory={'AntDesign'}
        onSubmit={() => {
          navigation.navigate('TableInvites');
        }}
      />
      <View
        style={{
          height: '24%',
        }}>
        <ClubDetails />
      </View>

      <View>
        <InviteDetailCard headingName={'Organizer'} value={'Amanda May'} />
        <InviteDetailCard headingName={'Name'} value={'Night VIP Table'} />
        <InviteDetailCard headingName={'Participant'} value={'12'} />
        <InviteDetailCard headingName={'Request Type'} value={'SNPL'} />
        <InviteDetailCard headingName={'Table Miniumum'} value={'$2000'} />
        <InviteDetailCard headingName={'Joining Fees'} value={'$600'} />
        <InviteDetailCard headingName={'Tables'} value={'S1, S2'} />
        <View style={{ paddingTop: 16 }}>
          <Button
            text={'Accept'}
            onSubmit={() => {
              console.log('BUtton clicked....!');
            }}
            backgroundColor={'#516D65'}
            textColor={'white'}
            variant={''}
            borderColor={'green.900'}
            fontweight={'bold'}
            iconName={'eye'}
          />
        </View>

        <View style={{ paddingTop: 16 }}>
          <Button
            text={'Decline'}
            onSubmit={() => {
              console.log('BUtton clicked....!');
            }}
            backgroundColor={'#8C0322'}
            textColor={'white'}
            variant={''}
            borderColor={'green.900'}
            fontweight={'bold'}
            iconName={'eye'}
          />
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
  },
  mainBox: {
    paddingHorizontal: 18,
  },

  goldColor: {
    color: colors.gold.gold200,
  },
});

export default TableInvitesOverView;
