import React, { useEffect, useState } from "react";

import { colors } from "../../theme";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  Dimensions,
  SafeAreaView,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");
import { HeaderWithLeftIcon } from "../../components/Header";
const TableConfigurations = ({ route, navigation }) => {
  //dispatch
  const dispatch = useDispatch();
  //Store
  const clubStore = useSelector((state) => state.club);

  //individualClubTableConfig
console.log('====================================');
console.log('clubStore====>',clubStore?.individualClubTableConfig);
console.log('====================================');
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
      <Box style={{ paddingHorizontal: 20, marginBottom: 20, marginTop: 14 }}>
        <Text
          style={{
            color: colors.gold.gold200,
            fontSize: 12,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Click on the dropdown arrows next to the Table Map ID to see who all
          are currently bidding to meet or exceed the Table Minimum.{"\n"}
          {"\n"}Tables are sold to and reserved for those who meet or exceed the
          Table Minimum on a first-come-first-serve basis.{"\n"} {"\n"}While
          some table groups may require a joining fee, ladies, close friends, or
          persons of interest should not let it stop them from joining, as they
          may request for a lower fee or a free spot on the table.
        </Text>
      </Box>
      <Box>
        <Box
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Box style={{ flexDirection: "row" }}>
            <Box
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Map ID
              </Text>
            </Box>
            <Box
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Type
              </Text>
            </Box>
            <Box
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Minimum
              </Text>
            </Box>
          </Box>
          {/* {items.length?
          (
       
            {
              items?.map((ele) => {
                return (
                    <ScrollView
            alwaysBounceVertical
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
                  <Box
                    style={{
                      flexDirection: "row",
                      backgroundColor: colors.gold.gold200,
                      marginVertical: 6,
                      width: "96%",
                      borderRadius: 6,
                      justifyContent: "space-between",
                      padding: 2,
                    }}
                  >
                    <Box
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.key}</Text>
                    </Box>
                    <Box
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.name}</Text>
                    </Box>
                    <Box
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.calories}</Text>
                    </Box>
                  </Box>
                  </ScrollView>

                );
              })}
            
          )
          :(
            <ScrollView>
              <Text>No Table Configuration Found</Text>
            </ScrollView>
          )} */}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
    // position: "relative",
  },
});
export default TableConfigurations;
