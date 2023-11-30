import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';
import { SensitiveKey } from '../../utils/SensitiveData';


const TableInviteCard = ({tableName, paymentType, participants, organizerName, placementTime, joiningFee, style}) => (

  <View style={style}>
    <View style={styles.cardBox}>
      <View>
        <Text style={[typography.bold.bold16, {color: colors.gold.gold200}]}>Table: {tableName}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[typography.regular.regular14, {color: colors.gold.gold200}]}>{paymentType}, </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>{participants}, </Text>
        { // <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>5 guys, </Text>
        }
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>${joiningFee}</Text>
      </View>
    </View>
    <View style={styles.cardBox}>
      <View>
        <Text style={[typography.regular.regular16, {color: colors.gold.gold200}]}>Organizer: {organizerName}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[typography.regular.regular14, {color: colors.gold.gold200}]}>placed on </Text>
        <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>{placementTime}</Text>
        { // <Text style={[typography.bold.bold14, {color: colors.gold.gold200}]}>18:00</Text>
        }
      </View>
    </View>
  </View>
);

const TableInvites = ({ navigation }) => {
  const [orgTables, setOrgTables] = useState([]);
  const [invites, setInvites] = useState([]);

  const getAllOrganizedTables = async () => {
    let response;
    let organizedTables;
    const user = await AsyncStorage.getItem(SensitiveKey.USER.DATA);
    try {
      // eslint-disable-next-line no-underscore-dangle
      response = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tablerequests/organizerUserId/${JSON.parse(user)._id}`);
      organizedTables = response.data.data;
    } catch (error) {
      console.error('Error fetching organized tables:', error);
      throw error;
    }
  
    try {
      for (const table of organizedTables) {
        try {
          // eslint-disable-next-line no-await-in-loop, no-underscore-dangle
          const partMappingsResponse = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tableRequestParticipantMapping/tableRequest/${table._id}`);
          // Add partMappings directly to the table object
          table.partMappings = partMappingsResponse.data.data;
        }
        catch (error) {
          console.error('Error fetching part mappings:', error);
          // Optionally, you can set partMappings to null or an empty array in case of an error
        }
      }
      for (const table of organizedTables) {
        let guys = 0;
        let girls = 0;
        
        const pms = table.partMappings;
        for (const pm of pms) {
          if (pm.participantId?.userId?.gender === 'male') {
            // eslint-disable-next-line no-plusplus
            guys++;
          }
          if (pm.participantId?.userId?.gender === 'female') {
            // eslint-disable-next-line no-plusplus
            girls++;
          }
        }
      
        table.guys = guys;
        table.girls = girls;
      }
      console.log(JSON.stringify(organizedTables, null, 4), 'the organizedTables');
      
    }

    catch (error) {
      console.error('Error in the outer loop:', error);
    }
  
    // You can return organizedTables here if needed
    return organizedTables;
  };
  
  
  const getAllInvitedTables = async () => {
    const user = await AsyncStorage.getItem(SensitiveKey.USER.DATA);
    console.log(JSON.parse(user).phoneNumber, 'JSON.parse(user).phoneNumber}');
    let invsResponse;
    let invs;
    try {
      invsResponse = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}invites/getListOfInvites/+${JSON.parse(user).phoneNumber}`);
      
      invs = invsResponse.data.data;
      // console.log(JSON.stringify(invsResponse.data.data, null, 4), 'invsResponse.data.data;');

    } 
    
    catch (error) {
      console.error('Error fetching invited tables:', error);
      // Handle or throw the error as needed
      throw error;  // Re-throw the error if you want to handle it outside this function
    }

    try {
      for (const table of invs) {
        try {
          // eslint-disable-next-line no-await-in-loop, no-underscore-dangle
          const partMappingsResponse = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tableRequestParticipantMapping/tableRequest/${table.tableRequestId._id}`);
          // console.log(JSON.stringify(partMappingsResponse, null, 4), 'partMappingsResponse');
          // Add partMappings directly to the table object
          table.partMappings = partMappingsResponse.data.data;
        }
        catch (error) {
          console.error('Error fetching part mappings:', error);
          throw error;
          // Optionally, you can set partMappings to null or an empty array in case of an error
        }
      }
      for (const table of invs) {
        let guys = 0;
        let girls = 0;
        
        const pms = table.partMappings;
        for (const pm of pms) {
          if (pm.participantId?.userId?.gender === 'male') {
            // eslint-disable-next-line no-plusplus
            guys++;
          }
          if (pm.participantId?.userId?.gender === 'female') {
            // eslint-disable-next-line no-plusplus
            girls++;
          }
        }
        if (typeof guys !== 'number') {
          guys = 0;
        }
        if (typeof girls !== 'number'){
          girls = 0;
        }
        table.guys = guys;
        table.girls = girls;
      }
      console.log(JSON.stringify(invs, null, 4), 'the invs');

    }

    catch (error) {
      console.error('Error fetching part mappings:', error);
      throw error;
    }
    return invs;
  };

  useEffect(() => {
    const fetchData = async () => {
      const trs = await getAllOrganizedTables();
      const invs = await getAllInvitedTables();
      console.log(trs, 'this is trs')
      setOrgTables(trs);
      setInvites(invs);
      // get invited joining fee function
    };
    
    fetchData();
    console.log(orgTables, 'org tables');

  }, []);

  console.log(orgTables, 'orgtables');
  console.log(invites, 'invites');

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
                participants={`${item.girls} girls, ${item.guys} guys`}
                organizerName={`${item.organizerUserId.firstName} ${item.organizerUserId.lastName}`}
                placementTime={item.eta.replace('T', ' ').slice(0, item.eta.indexOf(':')+3)}
                joiningFee={item.joiningFee}
                style={styles.cardBoxOuterLayerOrganized}
              />
            )}
            keyExtractor={(item, index) => item._id || String(index)}
            nestedScrollEnabled
          />

        </Pressable>

        <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Tables You've Been Invited to:</Text>
          <Pressable onPress={() => navigation.navigate('TableInvitesOverView', { data: {} })} style={styles.mainBox}>
            <FlatList
              data={invites} // assuming orgTables is an array of table objects
              renderItem={({ item }) => (
                
                <TableInviteCard
                  tableName={item.tableRequestId?.name}
                  paymentType={item.tableRequestId.costSplitType}
                  participants={`${item.girls} girls, ${item.guys} guys`}
                  organizerName={`${item.organizerId.firstName} ${item.organizerId.lastName}`}
                  placementTime={item.tableRequestId.eta.replace('T', ' ').slice(0, item.tableRequestId.eta.indexOf(':')+3)}
                  joiningFee={item.joiningFee}
                  style={styles.cardBoxOuterLayerInvited}

                />
              )}
              keyExtractor={(item, index) => item._id || String(index)}
              nestedScrollEnabled
            />

          </Pressable>

          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Active Table Requests:</Text>
            { /* <Pressable onPress={() => navigation.navigate('TableInvitesOverView', { data: {} })} style={styles.mainBox}>
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
                keyExtractor={(item, index) => item._id || String(index)}
                nestedScrollEnabled={true}
              />

                </Pressable> */ }
          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Polling Table Requests:</Text>
            { /* <Pressable onPress={() => navigation.navigate('TableInvitesOverView', { data: {} })} style={styles.mainBox}>
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
                keyExtractor={(item, index) => item._id || String(index)}
                nestedScrollEnabled={true}
              /> 

            </Pressable> */
            }
          <Text style={[typography.bold.bold24, { color: colors.gold.gold200 }, {marginVertical: '5%'}, {marginLeft: '2%'}]}>Past Table Requests:</Text>
            { /* <Pressable onPress={() => navigation.navigate('TableInvitesOverView', { data: {} })} style={styles.mainBox}>
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
                nestedScrollEnabled={true}
              />
            </Pressable> */
            }
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
    backgroundColor: colors.brown.brown200,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    marginVertical: '2%'
  },
  cardBoxOuterLayerActive: {
    backgroundColor: colors.green.green650,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    marginVertical: '2%'
  },
  cardBoxOuterLayerPolling: {
    backgroundColor: colors.purple.purple0,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    marginVertical: '2%'
  },
  cardBoxOuterLayerPast: {
    backgroundColor: colors.red.red950,
    borderColor: colors.gold.gold200,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    marginVertical: '2%'
  }
});

export default TableInvites;
