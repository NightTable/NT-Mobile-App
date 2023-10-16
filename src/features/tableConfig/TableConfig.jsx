import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
//THEME
import { colors, typography } from "../../theme";
import ClosedDropDown from "../../../assets/chevron-back-outline.png"
import OpenDropDown from "../../../assets/chevron-back-outline-collapsed.png"

//DIMENSIONS

export const TableConfigurationsCard = ({
  data,
  onpress_return_selectedTableConfigs,
  selectedTableConfigsData,
  selectedTableConfigsIds,
  showTables,
}) => {
  const [selectedTableData, setselectedTableData] = useState(
    selectedTableConfigsData
  );
  const [selectedTable_ids, setselectedTable_ids] = useState(
    selectedTableConfigsIds
  );

  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropDown = () => {
    setOpenDropdown((openDropdown) => !openDropdown);
    console.log(openDropdown);
  }

  const onTableConfigPressed = (item) => {
    if (showTables === false) {
      //LOGIC FOR SELECTING MULTIPLE TABLE CONFIG'S
      let tempArrIds = [];
      let tempArrDatas = [];

      //if one item is selected and present in array
      if (selectedTable_ids?.length > 0) {
        let checkItemIndex = selectedTable_ids?.indexOf(item?._id);
        if (checkItemIndex === -1) {
          //if item is not present
          tempArrIds = [...selectedTable_ids, item?._id];
          tempArrDatas = [...selectedTableData, item];
          setselectedTableData(tempArrDatas);
          setselectedTable_ids(tempArrIds);
          onpress_return_selectedTableConfigs(tempArrDatas);
        } else {
          //if item is present pop-out that data
          tempArrIds = selectedTable_ids?.filter((data) => {
            return data != item?._id;
          });

          tempArrDatas = selectedTableData?.filter((data) => {
            return data?._id != item?._id;
          });

          setselectedTableData(tempArrDatas);
          setselectedTable_ids(tempArrIds);
          onpress_return_selectedTableConfigs(tempArrDatas);
        }
      } else {
        // if there is not item selected
        setselectedTableData([item]);
        setselectedTable_ids([item?._id]);
        onpress_return_selectedTableConfigs([item]);
      }
    } else {
      //IF SHOW TABE IS TRUE
      return onpress_return_selectedTableConfigs(item);
    }
  };

  const getSelectedColor = (item) => {
    if (showTables === true) {
      return colors.gold.gold200;
    } else if (showTables === false) {
      console.log("====================================");
      console.log("selectedTable_ids", selectedTable_ids);
      console.log("====================================");
      return selectedTable_ids?.includes(item._id)
        ? colors.gold.gold200
        : "silver";
    }
  };

  return (
    <>
      <Box>
        <Box style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Box style={styles.splitBox}>
            <Text
              style={[typography.bold.bold16, { color: colors.gold.gold200 }]}
            >
              Table Map ID
            </Text>
          </Box>
          <Box style={styles.splitBox}>
            <Text
              style={[typography.bold.bold16, { color: colors.gold.gold200 }]}
            >
              Table Type
            </Text>
          </Box>
          <Box style={styles.splitBox}>
            <Text
              style={[typography.bold.bold16, { color: colors.gold.gold200 }]}
            >
              Table Minimum
            </Text>
          </Box>
        </Box>

        {data && (
          <>
            {data?.map((item) => {
              return (
                <>

                    <TouchableOpacity
                      key={() => {
                        return String(item?.tableMapId);
                      }}
                      onPress={() => {
                        onTableConfigPressed(item);
                        toggleDropDown();
                      }}
                      style={[
                        styles.mainBox,
                        {
                          backgroundColor: getSelectedColor(item),
                        },
                      ]}
                    > 
                      <Box style={styles.splitBox}>
                        <Image
                          source={openDropdown ? OpenDropDown : Close}
                          style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                      </Box>
                      <Box style={styles.splitBox}>
                        <Text
                        // style={[
                        //   typography.regular.regular14,
                        //   { color: colors.gold.gold200 },
                        // ]}
                        >
                          {item?.tableMapId}
                        </Text>
                      </Box>
                      <Box style={styles.splitBox}>
                        <Text>{item?.type}</Text>
                      </Box>
                      <Box style={styles.splitBox}>
                        <Text>$ {item?.minPrice}</Text>
                      </Box>
                    </TouchableOpacity>
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
