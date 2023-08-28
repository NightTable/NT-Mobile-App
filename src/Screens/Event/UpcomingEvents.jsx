import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Box } from "native-base";
import { Image } from "expo-image";
import dayjs from "dayjs";

//Components
import { HeaderWithLeftIcon } from "../../Components/Header";
//THEME
import { colors } from "../../Theme";
//Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getEventTableConfigOfClub,
  updateClubReletatedLoaderData,
} from "../../store/action/clubs";
import {
  disableLoader,
  enableLoader,
} from "../../Components/popUp/loader/trigger";

//MAIN FUNCTION
const UpcomingEvents = ({ navigation, route }) => {
  //dispatch
  const dispatch = useDispatch();
  //Store
  const clubStore = useSelector((state) => state.club);
  const [selectedEvent, setselectedEvent] = useState([]);
  // console.log("====================================");
  // console.log("clubStore.isLoading", clubStore.isLoading);
  // console.log("====================================");
  useEffect(() => {
    if (clubStore.isLoading === false) {
      disableLoader();
      navigation.navigate("TableConfigurations", {
        clubData: route?.params?.clubData,
        selectedEventData: selectedEvent,
      });
      dispatch(updateClubReletatedLoaderData(true));
    }

    return () => {};
  }, [clubStore]);

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
              if (item?.isTableConfigAdded != false) {
                return (
                  <>
                    <Box
                      style={{
                        backgroundColor: colors.gold.gold200,
                        borderRadius: 6,
                      }}
                    >
                      <Pressable
                        style={{
                          flexDirection: "row",
                          marginTop: 4,
                        }}
                        key={item._id}
                        onPress={() => {
                          //  alert(`${JSON.stringify(item)}`);
                          setselectedEvent(item);
                          enableLoader();
                          dispatch(
                            getEventTableConfigOfClub(
                              route?.params?.clubData?._id,
                              item?._id
                            )
                          );
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
                          <Text>{item.name}</Text>
                          <Text>
                            {dayjs(item?.eventDate).format("DD-MM-YYYY HH:MM")}
                          </Text>
                        </Box>
                      </Pressable>
                      {/* <Pressable onPress={()=>{
                      }}>
                        <Text
                          style={{
                            textAlign: "right",
                            fontWeight: "bold",
                            padding: 2,
                          }}
                        >
                          show more
                        </Text>
                      </Pressable> */}
                    </Box>
                  </>
                );
              }
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({});
