import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
//THEME
import { colors } from "../../theme";

//DIMENSIONS
const { width, height } = Dimensions.get("screen");

export const TableConfigurationsCard = ({
  data,
  onClickPressedConfig,
  multiplePressedEnabled,
}) => {
  const [selectedTableData, setselectedTableData] = useState([]);
  const [selectedTable_ids, setselectedTable_ids] = useState([]);

  const onTableConfigPressed = (item) => {
    let tempArrIds = [];
    let tempArrDatas = [];

    //if one item is selected and present in array
    if (selectedTable_ids?.length > 0) {
      let checkItemIndex = selectedTable_ids?.indexOf(item?._id);
      if (checkItemIndex === -1) {
        //if item is not present
        tempArrIds = [...selectedTable_ids, item?._id];
        tempArrDatas = [...selectedTableData, item];
        setselectedTableData(tempArrIds);
        setselectedTable_ids(tempArrIds);
      } else {
        //if item is present pop-out that data
        tempArrIds = selectedTable_ids?.filter((data) => {
          return data != item?._id;
        });

        tempArrDatas = selectedTableData?.filter((data) => {
          return data != item?._id;
        });
        setselectedTableData(tempArrDatas);
        setselectedTable_ids(tempArrIds);
      }
    } else {
      // if there is not item selected
      setselectedTableData([item]);
      setselectedTable_ids([item?._id]);
    }
  };

  return (
    <>
      <Box>
        <Box style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Box style={styles.splitBox}>
            <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
              Table Map ID
            </Text>
          </Box>
          <Box style={styles.splitBox}>
            <Text style={{ color: colors.gold.gold200, fontWeight: "500" }}>
              Table Type
            </Text>
          </Box>
          <Box style={styles.splitBox}>
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
                    contentContainerStyle={styles.ScrollViewBox}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        onTableConfigPressed(item);
                      }}
                      style={[
                        styles.mainBox,
                        {
                          backgroundColor: selectedTable_ids.includes(item._id)
                            ? colors.gold.gold200
                            : "red",
                        },
                      ]}
                    >
                      <Box style={styles.splitBox}>
                        <Text>{item?.tableMapId}</Text>
                      </Box>
                      <Box style={styles.splitBox}>
                        <Text>{item?.type}</Text>
                      </Box>
                      <Box style={styles.splitBox}>
                        <Text>$ {item?.minPrice}</Text>
                      </Box>
                    </TouchableOpacity>
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

const styles = StyleSheet.create({
  ScrollViewBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  mainBox: {
    marginVertical: 6,
    width: "100%",
    borderRadius: 6,
    justifyContent: "space-evenly",
    padding: 10,
    flexDirection: "row",
  },
  splitBox: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
});
