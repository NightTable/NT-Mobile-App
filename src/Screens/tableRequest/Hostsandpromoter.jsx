import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import { Image } from "expo-image";
//component
import { HeaderWithLeftIcon } from "../../Components/Header";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//THEME
import { colors, typography } from "../../Theme";
import { getRepresentativebyClub } from "../../Services/representative";
//LOADEAR
import {
  disableLoader,
  enableLoader,
} from "../../Components/popUp/loader/trigger";
//DIMENSIONS
const { width, height } = Dimensions.get("screen");

const Hostsandpromoters = ({ navigation, route }) => {
  const [hostsData, sethostsData] = useState([]);

  useEffect(() => {
    async function loadData() {
      enableLoader();
      const apiCall = await getRepresentativebyClub(route.params.clubData._id);

      if (apiCall.message == "representatives found") {
        let tempArr = [];

        apiCall.data?.map((item) => {
          tempArr.push({
            name: `${item.firstName} ${item.lastName}`,
            image:
              "https://images.unsplash.com/photo-1595260145722-543729edd3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
            _id: item?._id,
          });
        });

        sethostsData(tempArr);
        disableLoader();
      }
    }

    loadData();
    return () => {
      loadData();
    };
  }, []);
  //UI CARD
  const Card = ({ data }) => {
    return (
      <>
        <Pressable
        key={()=>{
          return  data?.name
        }}
          style={{
            backgroundColor: colors.gold.gold200,
            flexDirection: "row",
            margin: 6,
            borderRadius: 4,
            padding: 6,
            width: "100%",
            paddingHorizontal: 10,
          }}
          onPress={() => {
            navigation.navigate("NewTableReq", {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
              promoterData: data,
            });
          }}
        >
          <Box style={{ width: "20%" }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
              source={{ uri: data?.image }}
            />
          </Box>
          <Box style={{ width: "80%", justifyContent: "center" }}>
            <Text
              style={[typography.bold.bold16, { color: colors.black.black900 }]}
            >
              {data?.name}
            </Text>
          </Box>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderWithLeftIcon
          title={"Hosts and Promoters"}
          icon={"back"}
          iconDirectory={"Entypo"}
          iconRightDirectory={"Entypo"}
          iconRight={""}
          onSubmit={() => {
            navigation.navigate("TableConfigurations", {
              clubData: route?.params?.clubData,
              selectedEventData: route?.params?.selectedEventData,
            });
          }}
          onPressRight={() => {}}
        />

        <Box style={[styles.mainBox]}>
          {hostsData &&
            hostsData?.map((item) => {
              console.log("====================================");
              console.log("item", item);
              console.log("====================================");
              return (
                <>
                  <Card data={item} />
                </>
              );
            })}
        </Box>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800,
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1,
  },
  textHeading: {
    color: colors.gold.gold100,
    paddingTop: 20,
  },
});
export default Hostsandpromoters;
