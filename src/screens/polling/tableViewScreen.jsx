import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import axios from 'axios';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';


const TableViewScreen = ({ route, navigation }) => {

  const btnArray = [
    {
      id: 1,
      name: 'Menu',
      backgroundColor: 'transparent',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 2,
      name: 'Floor Plan',
      backgroundColor: 'transparent',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 3,
      name: 'Add Participants',
      backgroundColor: '#516D65',
      borderColor: colors.gold.gold100,
      textColor: 'white'
    },
    {
      id: 4,
      name: 'Remove Participants',
      backgroundColor: '#D08714',
      borderColor: colors.gold.gold100,
      textColor: 'white'
    },
    {
      id: 5,
      name: 'Leave Group',
      backgroundColor: '#8C0322',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 6,
      name: route.params.data.tableType === 'Active Organized' || route.params.data.tableType === 'Active Invited' ? 'End Outing' : 'Approve Request',
      backgroundColor: colors.gold.gold100,
      borderColor: colors.gold.gold100,
      textColor: 'black'
    },
    /* {
      id: 7,
      name: 'View Cart',
      backgroundColor: colors.gold.gold200,
      borderColor: colors.gold.gold200,
      textColor: 'black'
    }, */
    {
      id: 8,
      name: 'Add to General Tab',
      backgroundColor: colors.gold.gold200,
      borderColor: colors.gold.gold200,
      textColor: 'black'
    }
  ];

  const onButtonPress = (id) => {
    if (id === 1) {
      // 'Menu',
    } else if (id === 2) {
      // 'Floor Plan'
    }
  };
  const etaDate = new Date(route.params.data.eta);
  const hours = etaDate.getUTCHours().toString().padStart(2, '0');
  const minutes = etaDate.getUTCMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`; // Time in hh:mm format

  const [partCount, setPartCount] = useState(0);

  const getPendingParticipants = async() => {
    // const tableReqId = route.params.data.tableRequestId;
    // 656086984d7a76927e19bca0
    // const trpms = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tableRequestParticipantMapping/tableRequest/${tableReqId}`);
    const trpms = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tableRequestParticipantMapping/tableRequest/656086984d7a76927e19bca0`);

    const inactiveParticipantIds = trpms.data.data.filter(item => !item.isActiveParticipant)
    .map(item => item.participantId._id);

    return inactiveParticipantIds.length;
  };
  
  console.log(route.params.data, "route params");

  useEffect( async() => {

    const inactiveParticipantIds = await getPendingParticipants();
    setPartCount(inactiveParticipantIds);

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='Polling Room'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <ScrollView>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHx8MHx8fDA%3D'
          }}
          resizeMode='cover'
          style={{ height: 200, width: '100%' }}>
          <View style={{ alignItems: 'flex-end', paddingTop: 20 }}>
            <View style={{ backgroundColor: 'black', height: 60, width: 160, justifyContent: 'center' }}>
              <Text style={{ color: colors.gold.gold100, paddingLeft: 4 }}>
                Table request organized by {route.params.data.name}
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'black', height: 80, width: 140 }}>
            <Text style={{ color: colors.gold.gold100 }}>Waiting for {partCount} more people</Text>
            <Text style={{ color: colors.gold.gold100 }}>Tables : {route.params.data.tables.join(', ')}</Text>
            <Text style={{ color: colors.gold.gold100 }}>Time: {formattedTime}</Text>
          </View>
        </ImageBackground>
      </View>

        <View style={{ padding: 12 }}>
          <Text style={styles.heading}>Current Cost Breakdown:</Text>
          <View style={{ height: 180, borderWidth: 1, borderColor: colors.gold.gold100, borderRadius: 12 }}>
            <Text
              style={[
                styles.heading,
                {
                  padding: 10
                }
              ]}>
              Your Share: $ 200
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.gold.gold100,
                borderRadius: 8,
                padding: 12,
                margin: 6
              }}>
              <Text>Amanda May</Text>
              <Text> $ 100</Text>
            </View>
          </View>
        </View>
        <View>
          <FlatList
            data={btnArray}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View style={index === btnArray.length - 1 ? styles.lastBtnContainer : styles.btnBox}>
                <TouchableOpacity
                  onPress={() => {
                    onButtonPress(item.id);
                  }}
                  style={[styles.btnStyling, { backgroundColor: item.backgroundColor, borderColor: item.borderColor }]}>
                  <Text style={[typography.medium.medium14, { color: item.textColor }]}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
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
  heading: {
    fontSize: 16,
    color: colors.gold.gold100,
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 24,
    paddingTop: 18,
    color: colors.gold.gold100
  },
  btnStyling: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10, // Make sure this matches the padding of the other buttons
    minWidth: '45%'
  },
  lastBtnContainer: {
    width: '100%', // Take the full width
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    paddingVertical: 6,
    paddingHorizontal: 20
  },

  // Update btnBox to handle non-last buttons
  btnBox: {
    width: '50%',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
    paddingHorizontal: 10
  }
});

export default TableViewScreen;
