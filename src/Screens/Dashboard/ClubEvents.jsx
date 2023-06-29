import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { API_URL_IOS, API_URL_ANDROID, LOCAL_URL } from "@env";

import { HeaderWithLeftIcon } from "../../Components/Header";
import { colors } from "../../Theme/colors";
import { ScrollView } from "native-base";

const ClubEvents = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [eventsData, setEventsData] = useState([]);
  console.log("route", route);

  useEffect(() => {
    let getEventsForClub = async () => {
      console.log(`${LOCAL_URL}api/events/club/${route?.params?.clubId}`);
      let events = await axios.get(
        `${LOCAL_URL}api/events/club/${route?.params?.clubId}`
      );
      console.log("events===>>>", events.data.data);
      setEventsData(events.data.data);
    };
    getEventsForClub();
  }, [route]);

  //   console.log("props on events", props.route.params);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black.black800,
        width: "100%",
        height: "100%",
      }}
    >
      <HeaderWithLeftIcon
        title={route?.params?.clubName}
        icon={"arrowleft"}
        iconDirectory={"AntDesign"}
        onSubmit={() => {
          navigation.navigate("Club");
        }}
      />
      <View style={{ width: "100%", height: "40%", alignItems: "center" }}>
        <Image
          style={{ width: "70%", height: "60%" }}
          // source={{ uri: encodeURIComponent(route?.params?.clubData?.photos[0]) }}
          source={{
            uri: route?.params?.clubPhotos,
          }}
        />
      </View>
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
        <View style={{ marginVertical: 6 }}>
          <Text style={{ color: colors.gold.gold200 }}>Upcoming Events</Text>
        </View>
        {eventsData?.length
          ? eventsData.map((ele) => {
              console.log("ele", ele);
              return (
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: colors.gold.gold200,
                    marginVertical: 4,
                    opacity: 0.9,
                  }}
                  key={ele._id}
                >
                  <View
                    style={{
                      //   backgroundColor: "green",
                      //   height: "100%",
                      //   width: "20%",
                      justifyContent: "center",
                      // alignItems: "center",
                      marginRight: 10,
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
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
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <View style={{ marginBottom: 4 }}>
                      <Text>{ele.name}</Text>
                    </View>
                    <View>
                      <Text>{ele.eventDate.split("T")[0]}</Text>
                    </View>
                    <View>
                      <Text>
                        {new Date(ele.eventTime * 1000).toLocaleTimeString(
                          "en-US"
                        )}
                      </Text>
                    </View>
                  </View>

                  {/* <Text style={{color:'white'}}>{ele.name}</Text> */}
                </View>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubEvents;

const styles = StyleSheet.create({});
