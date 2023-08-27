import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Button } from "../../components/Buttons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//THEME
import { colors } from "../../theme";

//DIMENSIONS
const { width, height } = Dimensions.get("screen");

export const TableConfigurationsCard = ({ data, onClickPressedConfig }) => {
  const [selectedTableData, setselectedTableData] = useState([]);
  return (
    <>
      <Box>
        <Box style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Box
            style={{
              width: "33%",
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
              width: "33%",
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
              width: "33%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
              Table Minimum
            </Text>
          </Box>
        </Box>

        {data && (
          <>
            {data?.map((item) => {
              return (
                <>
                  <ScrollView
                    alwaysBounceVertical
                    contentContainerStyle={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 10,
                    }}
                  >
                    <Pressable
                      onClick={() => {
                        onClickPressedConfig();
                      }}
                      style={{
                        flexDirection: "row",
                        backgroundColor: colors.gold.gold200,
                        marginVertical: 6,
                        width: "100%",
                        borderRadius: 6,
                        justifyContent: "space-evenly",
                        padding: 10,
                      }}
                    >
                      <Box
                        style={{
                          width: "33%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>{item?.tableMapId}</Text>
                      </Box>
                      <Box
                        style={{
                          width: "33%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>{item?.type}</Text>
                      </Box>
                      <Box
                        style={{
                          width: "33%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>$ {item?.minPrice}</Text>
                      </Box>
                    </Pressable>
                  </ScrollView>
                </>
              );
            })}
          </>
        )}
      </Box>
    </>
  );
};
