import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import { Text, StyleSheet, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Buttons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
//THEME
import { colors, typography } from '../../theme';
//COMPONENTS
import { HeaderWithLeftIcon } from '../../components/Header';
import { TableConfigurationsCard } from '../../features/tableConfig/TableConfig';
import TableConfigTableComp from '../../features/tableConfig/TableConfigTableComp';

//DIMENSIONS
const { width, height } = Dimensions.get('screen');

//MAIN FUNCTION
const TableConfigurations = ({ route, navigation }) => {
  //dispatch

  const dispatch = useDispatch();
  //Store
  const clubStore = useSelector((state) => state.club);

  //table configs
  const [tableConfigs, setTableConfigs] = useState(clubStore?.individualClubTableConfig || []);

  const renderTableConfigs = () => {
    return tableConfigs.map((config, index) => {
      console.log(config);
      return config ? (
        <TableConfigTableComp
          key={index}
          tableMapId={config.tableMapId}
          tableType={config.type}
          tableMinimum={config.minPrice}
        />
      ) : null;
    });
  };

  useEffect(() => {
    console.log('state tc', tableConfigs);
    console.log('store', clubStore?.individualClubTableConfig);
  }, []);

  //individualClubTableConfig
  // console.log("");
  // console.log("TableConfigurations :: screen ====>", clubStore?.individualClubTableConfig);
  // console.log("");
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ width: '100%' }}>
        <HeaderWithLeftIcon
          title={'Table Prices'}
          icon={'arrowleft'}
          iconDirectory={'AntDesign'}
          onSubmit={() => {
            navigation.navigate('UpcomingEvents', {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData
            });
          }}
        />
      </Box>
      <Box
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          marginTop: 14,
          /*height: "20%"*/
          flex: 1
          //borderWidth: 2,
          //borderColor: 'red'
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
      </Box>
      <Box style={{ flex: 1 /*borderWidth: 2, borderColor: 'green'*/ }}>
        {/* This Box contains your headers "Table Map ID", "Table Type", "Table Minimum" */}
        <Box style={{ flex: 1 /*borderWidth: 2, borderColor: 'green'*/ }}>
          <Box
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly' /*borderWidth: 2, borderColor: 'blue', marginBottom: 50*/
            }}>
            <Box style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Map ID</Text>
            </Box>
            <Box style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Type</Text>
            </Box>
            <Box style={styles.splitBox}>
              <Text style={[typography.bold.bold16, { color: colors.gold.gold200 }]}>Table Minimum</Text>
            </Box>
          </Box>
          <ScrollView
            style={{ borderWidth: 2, borderColor: colors.gold.gold200, borderRadius: 15, flex: 1 /*marginTop: -10*/ }}
            showsVerticalScrollIndicator={true}>
            {renderTableConfigs()}
          </ScrollView>
        </Box>
      </Box>

      <Box style={{ height: '20%', flex: 1, padding: 20 /*borderWidth: 2, borderColor: 'red'*/ }}>
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
      </Box>
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
    //justifyContent: "center",
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: 'green',
    marginBottom: '2%'
  }
});
export default TableConfigurations;
/*

      <Box style={{ flex: 1 }}>
        <TableConfigurationsCard
          data={clubStore?.individualClubTableConfig}
          onpress_return_selectedTableConfigs={(item) => {
          console.log('item====>',item)
          }}
          showTables={true}
        />
      </Box>

*/
