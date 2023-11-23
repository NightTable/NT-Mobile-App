import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';
import { SensitiveKey } from '../../utils/SensitiveData';


const TableInviteCard = (/* isSelfOrganized, isInvited, showActOrPoll, showPast, tableName, paymentType, participants, organizerName, placementTime, joiningFee */) => (

  /*const getOuterLayerStyle = () => {
    if (selfOrganized === true){
      return cardBoxOuterLayerOrganized;
    }
    if (isInvited === true){
      return cardBoxOuterLayerInvited;
    }
    if (showActOrPoll === 'active'){
      return cardBoxOuterLayerActive
    }
    if (showActOrPoll === 'active'){
      return cardBoxOuterLayerPolling
    }
    if (showPast === true){
      return cardBoxOuterLayerPast
    }
  }*/
  // const outerLayerStyle = getOuterLayerStyle();

  <View style={styles.cardBoxOuterLayerOrganized}>
    <View style={styles.cardBox}>
      <View>
        <Text style={[typography.bold.bold16, {color: colors.gold.gold200}]}>Table: Table Name</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[typography.regular.regular14, {color: colors.gold.gold200}]}>snpl, </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>20 girls, </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>5 guys, </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>$500</Text>
      </View>
    </View>
    <View style={styles.cardBox}>
      <View>
        <Text style={[typography.regular.regular16, {color: colors.gold.gold200}]}>Organizer: User Name</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[typography.regular.regular14, {color: colors.gold.gold200}]}>placed on </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>1-12-22 </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>18:00</Text>
      </View>
    </View>
  </View>
);

const TableInvites = ({ navigation }) => {
  const [orgTables, setOrgTables] = useState([]);
  const [invites, setInvites] = useState([]);

  const getTableReqParticipants = async (tableReqId) => {
    /*
      get all trpms assosciated with a table req id
      out of all those that you get, only consider those whose participants payment info you have registered and have accepted the table req
      if no one has their payment info registered, return the count of all participants
      else, of all that have payment info registered and have accepted table req, count how many are girls and guys, and return as [#girls, #guys]
      if their genders are not retrievable, just return count of those hat have payment info registered and have accepted table req
    */
    return;
  };

  const getTR = async (tableReqId) => {
    /*
      get joining fee for me as organizer, get joining fee for me as invitee 
    */
    return;
  };

  const getAllOrganizedTables = async () => {
    let array;
    try {
      const user = await AsyncStorage.getItem(SensitiveKey.USER.DATA);
      const tableRequests = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tablerequests/organizerUserId/${JSON.parse(user)._id}`);
      array = tableRequests.data.data;
      console.log(array, "tableRequests.data\n");
      return array;
    } catch (error) {
      console.error('Error fetching organized tables:', error);
      // Handle or throw the error as needed
      throw error;  // Re-throw the error if you want to handle it outside this function
    }
  };
  
  const getAllInvitedTables = async () => {
    let array;
    try {
      const user = await AsyncStorage.getItem(SensitiveKey.USER.DATA);
      console.log(JSON.parse(user).phoneNumber, "JSON.parse(user).phoneNumber}")
      const invs = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}invites/getListOfInvites/+${JSON.parse(user).phoneNumber}`);
      array = invs.data.data;
      console.log(array, "invs.data\n");
      return array;
    } catch (error) {
      console.error('Error fetching invited tables:', error);
      // Handle or throw the error as needed
      throw error;  // Re-throw the error if you want to handle it outside this function
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const trs = await getAllOrganizedTables();
      const invs = await getAllInvitedTables();
      setOrgTables(trs);
      setInvites(invs);
    };
    
    fetchData();
    console.log(orgTables, "org tables");

  }, []);

  console.log(orgTables, "orgtables");
  console.log(invites, "invites");

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='Table Invites'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />
      <ScrollView style={{ borderWidth: 2, borderColor: colors.gold.gold200, borderRadius: 15, flex: 1 /* marginTop: -10 */ }}>

      <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Tables You've Organized:</Text>
        <Pressable onPress={() => navigation.navigate('TableInvitesOverView', { data: {} })} style={styles.mainBox}>
        <FlatList
          data={orgTables} // assuming orgTables is an array of table objects
          renderItem={({ item }) => (
            <TableInviteCard
              tableName={item.name}
              paymentType={item.costSplitType}
              participants={`${item.girlsCount} girls, ${item.guysCount} guys`}
              organizerName={item.organizerUserId.firstName + item.organizerUserId.lastName}
              placementTime={item.eta.replace('T', ' ').slice(0, item.eta.indexOf(':')+3)}
              joiningFee={item.joiningFee}
            />
          )}
          keyExtractor={item => item.id} // replace 'id' with the key used in your data
        />
          
        </Pressable>

        <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Tables You've Been Invited to:</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('TableInvitesOverView', {
                data: {}
              });
            }}
            style={[styles.mainBox]}>
            <TableInviteCard />
          </Pressable>
          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Active Table Requests:</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('TableInvitesOverView', {
                data: {}
              });
            }}
            style={[styles.mainBox]}>
            <TableInviteCard />
          </Pressable>
          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Polling Table Requests:</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('TableInvitesOverView', {
                data: {}
              });
            }}
            style={[styles.mainBox]}>
            <TableInviteCard />
          </Pressable>
          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Past Table Requests:</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('TableInvitesOverView', {
                data: {}
              });
            }}
            style={[styles.mainBox]}>
            <TableInviteCard />
          </Pressable>


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

  goldColor: {
    color: colors.gold.gold200
  },
  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  cardBoxOuterLayerOrganized: {
    backgroundColor: colors.blue.blue400,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    marginVertical: '2%'
    
  },
  cardBoxOuterLayerInvited: {
    backgroundColor: colors.blue.blue400,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12
  },
  cardBoxOuterLayerActive: {
    backgroundColor: colors.blue.blue400,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12
  },
  cardBoxOuterLayerPolling: {
    backgroundColor: colors.blue.blue400,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12
  },
  cardBoxOuterLayerPast: {
    backgroundColor: colors.blue.blue400,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12
  }
});

export default TableInvites;
