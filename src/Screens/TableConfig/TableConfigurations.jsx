import React, { useEffect, useState } from "react";

import { colors } from "../../theme";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TextInput,
  Dimensions,
  SafeAreaView,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { DataTable } from "react-native-paper";

// import axios from "axios";

// import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";

const { width, height } = Dimensions.get("screen");
// import { HeaderWithLeftIcon } from "../../components/Header";
const TableConfigurations = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [items, setItems] = useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 5,
      name: "bread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 6,
      name: "ngerbre",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 7,
      name: "ad",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 8,
      name: "Gin",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 9,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
        key: 10,
        name: "Gingerbread",
        calories: 305,
        fat: 3.7,
      },
      {
        key: 11,
        name: "Gingerbread",
        calories: 305,
        fat: 3.7,
      },
      {
        key: 12,
        name: "Gingerbread",
        calories: 305,
        fat: 3.7,
      },
      {
        key: 13,
        name: "Gingerbread",
        calories: 305,
        fat: 3.7,
      },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        {/* <HeaderWithLeftIcon
          title={"Table Prices"}
          icon={"arrowleft"}
          iconDirectory={"AntDesign"}
          onSubmit={() => {
            navigation.navigate("", {});
          }}
        /> */}
      </View>
      <View style={{  paddingHorizontal: 20, marginBottom:20, marginTop: 14 }}>
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
      </View>
      <View>
        {/* <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={{ color: colors.gold.gold200 }}>
              Table Map Id
            </DataTable.Title>
            <DataTable.Title textStyle={{ color: colors.gold.gold200 }}>
              Table Type
            </DataTable.Title>
            <DataTable.Title textStyle={{ color: colors.gold.gold200 }}>
              Table Minimum
            </DataTable.Title>
          </DataTable.Header>
        </DataTable> */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Map ID
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Type
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
                Table Minimum
              </Text>
            </View>
          </View>
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
                  <View
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
                    <View
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.key}</Text>
                    </View>
                    <View
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.name}</Text>
                    </View>
                    <View
                      style={{
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{ele.calories}</Text>
                    </View>
                  </View>
                  </ScrollView>

                );
              })}
            
          )
          :(
            <ScrollView>
              <Text>No Table Configuration Found</Text>
            </ScrollView>
          )} */}
        </View>
      </View>
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