import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, Pressable, View } from 'react-native';
import { Image } from 'expo-image';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';
import { getRepresentativebyClub } from '../../services/representative';
import { disableLoader, enableLoader } from '../../components/popUp/loader/trigger';

const Hostsandpromoters = ({ navigation, route }) => {
  const [hostsData, sethostsData] = useState([]);

  useEffect(() => {
    async function loadData() {
      enableLoader();
      const apiCall = await getRepresentativebyClub(route.params.clubData._id);

      if (apiCall.message === 'representatives found') {
        const tempArr = apiCall.data?.map((item) => ({
          name: `${item.firstName} ${item.lastName}`,
          image: 'https://images.unsplash.com/photo-1595260145722-543729edd3d3',
          _id: item?._id
        }));

        sethostsData(tempArr);
        disableLoader();
      }
    }

    loadData();
  }, []);

  const Card = ({ data }) => (
    <Pressable
      key={data?.name}
      style={styles.cardStyle}
      onPress={() => {
        navigation.navigate('NewTableReq', {
          clubData: route?.params?.clubData,
          selectedEventData: route?.params?.selectedEventData,
          promoterData: data
        });
      }}>
      <View style={{ width: '20%' }}>
        <Image style={styles.imageStyle} source={{ uri: data?.image }} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textStyle}>{data?.name}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='Hosts and Promoters'
        icon='back'
        iconDirectory='Entypo'
        iconRightDirectory='Entypo'
        iconRight=''
        onSubmit={() => {
          navigation.navigate('TableConfigurations', {
            clubData: route?.params?.clubData,
            selectedEventData: route?.params?.selectedEventData
          });
        }}
        onPressRight={() => {}}
      />
      <View style={styles.mainBox}>
        {/* Adding description above the list */}
        <Text style={[styles.descriptionText, typography.regular.regular18]}>
          Choose a VIP host who will help you facilitate your night
        </Text>

        {/* Centering the cards */}
        <View style={styles.cardsContainer}>
          {hostsData?.map((item) => (
            <Card key={item.name} data={item} />
          ))}
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
    paddingHorizontal: 18,
    flex: 1
  },
  cardStyle: {
    backgroundColor: colors.gold.gold100,
    flexDirection: 'row',
    margin: 6,
    borderRadius: 10,
    padding: 6,
    width: '100%',
    paddingHorizontal: 10
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  textBox: {
    width: '80%',
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: 18,
    color: colors.gold.gold100,
    textAlign: 'center',
    marginBottom: 20
  },

  cardsContainer: {
    flex: 1,
    justifyContent: 'center' // To center cards vertically
  },
  textStyle: [typography.bold.bold16, { color: colors.black.black900 }]
});

export default Hostsandpromoters;
