/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, Dimensions, SafeAreaView, TouchableOpacity ,View} from 'react-native';
import {  useDispatch, useSelector } from 'react-redux';
// THEME
import { colors, typography } from '../../theme';
// COMPONENTS
import { HeaderWithLeftIcon } from '../../components/Header';
import TableConfigTableComp from '../../features/tableConfig/TableConfigTableComp';

// DIMENSIONS
const { width, height } = Dimensions.get('screen');

// MAIN FUNCTION
const TableConfigurations = ({ route, navigation }) => {
  // dispatch

  const dispatch = useDispatch();
  // Store
  const clubStore = useSelector((state) => state.club);

  // table configs
  const [tableConfigs, setTableConfigs] = useState(clubStore?.individualClubTableConfig || []);

  const renderTableConfigs = () => tableConfigs.map((config, index) => {
      console.log(config);
      return config ? (
        <TableConfigTableComp
          key={config}
          tableMapId={config.tableMapId}
          tableType={config.type}
          tableMinimum={config.minPrice}
        />
      ) : null;
    });

  // useEffect(() => {
  //   console.log('state tc', tableConfigs);
  //   console.log('store', clubStore?.individualClubTableConfig);
  // }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}>
        <HeaderWithLeftIcon
          title='Table Prices'
          icon='arrowleft'
          iconDirectory='AntDesign'
          onSubmit={() => {
            navigation.navigate('UpcomingEvents', {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData
            });
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          marginTop: 14,
          /* height: "20%" */
          flex: 1
          // borderWidth: 2,
          // borderColor: 'red'
        }}>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 12,
            fontWeight: '400',
            textAlign: 'center',
            ...typography.regular.regular16
          }}>
          Click on the arrows next to the Table Map ID to see who all are currently bidding to meet or exceed the Table
          Minimum.{'\n'}
          {'\n'}Tables are sold to and reserved for those who meet or exceed the Table Minimum on a
          first-come-first-serve basis.{'\n'} {'\n'}While some table groups may require a joining fee, ladies, close
          friends, or persons of interest should not let it stop them from joining, as they may request for a low fee or
          no-fee to join a table.
        </Text>
      </View>
      <View style={{ flex: 1 /* borderWidth: 2, borderColor: 'green' */ }}>
        {/* This View contains your headers "Table Map ID", "Table Type", "Table Minimum" */}
        <View style={{ flex: 1 /* borderWidth: 2, borderColor: 'green' */ }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly' /* borderWidth: 2, borderColor: 'blue', marginBottom: 50 */
            }}>
            <View style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Map ID</Text>
            </View>
            <View style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Type</Text>
            </View>
            <View style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Minimum</Text>
            </View>
          </View>
          <ScrollView
            style={{ borderWidth: 2, borderColor: colors.gold.gold200, borderRadius: 15, flex: 1 /* marginTop: -10 */ }}
            showsVerticalScrollIndicator>
            {renderTableConfigs()}
          </ScrollView>
        </View>
      </View>

      <View style={{ height: '20%', flex: 1, padding: 20 /* borderWidth: 2, borderColor: 'red' */ }}>
        <TouchableOpacity
          disabled={false}
          onPress={() => {
            navigation.navigate('Hostsandpromoters', {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData
            });
          }}
          style={{
            marginTop: '30%',
            backgroundColor: colors.gold.gold200,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: colors.gold.gold100
          }}>
          <Text style={[colors.black.black800, typography.bold.bold16]}>Organize a Table</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  splitBox: {
    width: '33%',
    // justifyContent: "center",
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'green',
    marginBottom: '2%'
  }
});
export default TableConfigurations;
/*

      <View style={{ flex: 1 }}>
        <TableConfigurationsCard
          data={clubStore?.individualClubTableConfig}
          onpress_return_selectedTableConfigs={(item) => {
          console.log('item====>',item)
          }}
          showTables={true}
        />
      </View>

*/
