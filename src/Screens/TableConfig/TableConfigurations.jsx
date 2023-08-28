import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Button } from "../../Components/Buttons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//THEME
import { colors } from "../../Theme";
//COMPONENTS
import { HeaderWithLeftIcon } from "../../Components/Header";
import { TableConfigurationsCard } from "../../Features/tableConfig/TableConfig";

//DIMENSIONS
const { width, height } = Dimensions.get("screen");
//MAIN FUNCTION
const TableConfigurations = ({ route, navigation }) => {
  //dispatch
  const dispatch = useDispatch();
  //Store
  const clubStore = useSelector((state) => state.club);

  //individualClubTableConfig
  // console.log("====================================");
  // console.log("TableConfigurations :: screen ====>", clubStore?.individualClubTableConfig);
  // console.log("====================================");
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ width: "100%" }}>
        <HeaderWithLeftIcon
          title={"Table Prices"}
          icon={"arrowleft"}
          iconDirectory={"AntDesign"}
          onSubmit={() => {
            navigation.navigate("UpcomingEvents", {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
            });
          }}
        />
      </Box>
      <Box
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          marginTop: 14,
          height: "20%",
        }}
      >
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 12,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Click on the arrows next to the Table Map ID to see who all are
          currently bidding to meet or exceed the Table Minimum.{"\n"}
          {"\n"}Tables are sold to and reserved for those who meet or exceed the
          Table Minimum on a first-come-first-serve basis.{"\n"} {"\n"}While
          some table groups may require a joining fee, ladies, close friends, or
          persons of interest should not let it stop them from joining, as they
          may request for a lower fee or a free spot on the table.
        </Text>
      </Box>
      <Box style={{ height: "60%" }}>
        <TableConfigurationsCard
          data={clubStore?.individualClubTableConfig}
          onpress_return_selectedTableConfigs={(item) => {
          console.log('item====>',item)
          }}
          showTables={true}
        />
      </Box>
      <Box style={{ height: "20%", padding: 20 }}>
        <Button
          disabled={false}
          onSubmit={() => {
            navigation.navigate("Hostsandpromoters", {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
            });
          }}
          backgroundColor={colors.gold.gold200}
          text={"Organize a table"}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
  },
});
export default TableConfigurations;
