import React from 'react';
import { Image } from 'expo-image';
import { Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { colors, typography } from '../../theme';
import { HeaderWithLeftIcon } from '../../components/Header';

const ClubDetails = ({ data }) => {
  console.log('====================================');
  console.log('data', data);
  console.log('====================================');
  return (
    <>
      <>
        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row'
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>Address : {'     '}</Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>{data?.Address?.Address}</Text>
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row'
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>Website : {'     '}</Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>{data?.website}</Text>
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row'
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>Instagram : {'     '}</Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>{data?.instaHandle}</Text>
        </View>

        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row'
          }}>
          <Text style={[typography.bold.bold16, styles.goldColor]}>Phone Number : {'     '}</Text>
          <Text style={[typography.regular.regular16, styles.goldColor]}>{data?.phoneNumber}</Text>
        </View>
      </>
    </>
  );
};

// MAIN FUNCTION
const Club = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const clubStore = useSelector((state) => state.club);

  const checkClubEvent = () => {
    if (clubStore?.individualClubEvents?.length !== undefined) {
      if (clubStore?.individualClubEvents?.length > 0) {
        const filteredData = clubStore?.individualClubEvents?.filter(
          (item) => item?.isTableConfigAdded !== false && item
        );
        if (filteredData?.length > 0) {
          return 'Check for Upcoming Events';
        }
        return 'No Upcoming Events found';
      }
      return 'No Upcoming Events found';
    }
    return 'No Upcoming Events found';
  };

  return (
    <SafeAreaView key={() => String('Club_screen')} safeArea style={styles.container}>
      <HeaderWithLeftIcon
        title={route?.params?.clubData?.name}
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{
          borderWidth: 1, // Set the border width
          borderColor: colors.gold.gold100, // Set the border color
          borderRadius: 5 // Optional, set the border radius if you want rounded corners
        }}>
        {route?.params?.clubData?.photos.map((image, index) => (
          <View
            style={{
              width: Dimensions.get('window').width, // Set width to screen width
              justifyContent: 'center', // Center vertically
              alignItems: 'center' // Center horizontally
            }}>
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width
              }}
              source={{
                uri: image
              }}
            />
          </View>
        ))}
      </ScrollView>
      <View style={[styles.mainBox]}>
        <ClubDetails data={route?.params?.clubData} />
        <View style={{ width: '100%', alignSelf: 'center', margin: 20 }}>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              {
                backgroundColor:
                  checkClubEvent() === 'Check for Upcoming Events' ? colors.gold.gold200 : colors.grey.grey300,
                borderColor:
                  checkClubEvent() === 'Check for Upcoming Events' ? colors.gold.gold100 : colors.grey.grey400,
                borderWidth: 2
              }
            ]}
            onPress={() => {
              // validation();
              if (clubStore?.individualClubEvents?.length > 0) {
                navigation.navigate('UpcomingEvents', {
                  clubData: route?.params?.clubData
                });
              }
            }}>
            <Text style={[typography.bold.bold16]}>{checkClubEvent()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    color: colors.gold.gold100
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  }
});

export default Club;
