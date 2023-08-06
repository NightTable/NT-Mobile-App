import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { Box } from "native-base";
import { Image } from "expo-image";
import dayjs from "dayjs";

//Components
import { HeaderWithLeftIcon } from "../../components/Header";
//THEME
import { colors } from "../../theme";
//Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";

//MAIN FUNCTION
const ClubEvents = ({ navigation, route }) => {
  const clubStore = useSelector((state) => state.club);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black.black800,
        flex: 1,
      }}
    >
      <HeaderWithLeftIcon
        title={route?.params?.clubData?.name}
        icon={"arrowleft"}
        iconDirectory={"AntDesign"}
        onSubmit={() => {
          navigation.navigate("Club", {
            clubData: route?.params?.clubData,
          });
        }}
      />
      <Box style={{ width: "100%", height: "40%", alignItems: "center" }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{
            uri: route?.params?.clubData?.photos[0],
          }}
        />
      </Box>
      <ScrollView
        style={{
          borderWidth: 2,
          borderColor: colors.gold.gold200,
          marginHorizontal: 4,
          borderRadius: 10,
          padding: 8,
          marginVertical: 10,
        }}
      >
        <Box style={{ marginVertical: 6 }}>
          <Text style={{ color: colors.gold.gold200 }}>Upcoming Events</Text>
        </Box>
        {clubStore?.individualClubEvents?.length
          ? clubStore?.individualClubEvents?.map((item) => {
              console.log("====================================");
              console.log("item===>", item);
              console.log("====================================");
              return (
                <Pressable
                  style={{
                    flexDirection: "row",
                    backgroundColor: colors.gold.gold200,
                    marginVertical: 4,
                    opacity: 0.9,
                  }}
                  key={item._id}
                  onPress={() => {
                    alert(`${JSON.stringify(item)}`);
                  }}
                >
                  <Box
                    style={{
                      justifyContent: "center",
                      marginRight: 10,
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={{
                        uri: item?.picture,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        resizeMode: "contain",
                        borderRadius: 30,
                        margin: 6,
                        borderWidth: 1,
                        borderColor: "black",
                      }}
                    />
                  </Box>
                  <Box style={{ justifyContent: "center" }}>
                    <Box style={{ marginBottom: 4 }}>
                      <Text>{item.name}</Text>
                    </Box>

                    <Box>
                      <Text>
                        {dayjs(item?.eventDate).format("DD-MM-YYYY HH:MM")}
                      </Text>
                    </Box>
                  </Box>
                </Pressable>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubEvents;

const styles = StyleSheet.create({});
