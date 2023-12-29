import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import { colors, typography } from '../../theme';
import ChevronArrowNormal from '../../../assets/chevron-back-outline.png';
import ChevronCollapsed from '../../../assets/chevron-back-outline-collapsed.png';

const TableConfigTableComp = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [chevronImageSrc, setChevronImageSrc] = useState(ChevronArrowNormal);

  const handleChevronClick = () => {
    if (chevronImageSrc === ChevronArrowNormal) {
      setChevronImageSrc(ChevronCollapsed);
      setCollapsed(true);
    } else if (chevronImageSrc === ChevronCollapsed) {
      setChevronImageSrc(ChevronArrowNormal);
      setCollapsed(false);
    }
  };

  useEffect(() => {
    console.log('Checking props:', props);
    console.log('Checking typography:', typography);
    console.log('Checking colors:', colors);
  }, []);

  return (
    <View>
        <View
          style={[
            {
              marginVertical: 15,
              padding: 10,
              backgroundColor: colors.gold.gold100,
              width: 400,
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10
            },
            {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 6,
              shadowOpacity: 0.5,
              elevation: 10
            }
          ]}>
          <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleChevronClick}>
              <Image style={collapsed ? styles.tinyLogoCollapsed : styles.tinyLogoNormal} source={chevronImageSrc} />
            </TouchableOpacity>
            <Text
              style={{
                ...typography.regular.regular16,
                color: colors.black.black800,
                textAlign: 'center',
                marginVertical: 3
              }}>
              {props.tableMapId}
            </Text>
          </View>

          <View style={{ marginVertical: 3, alignItems: 'center', flexDirection: 'row' }}>
            <Text
              style={{
                ...typography.regular.regular16,
                color: colors.black.black800,
                textAlign: 'center',
                marginVertical: 3
              }}>
              {props.tableType}
            </Text>
          </View>

          <View style={{ alignSelf: 'flex-end', marginVertical: 3, alignItems: 'center', flexDirection: 'row' }}>
            <Text
              style={{
                ...typography.regular.regular16,
                color: colors.black.black800,
                textAlign: 'center',
                marginVertical: 3
              }}>
              {props.tableMinimum}
            </Text>
          </View>
        </View>

        {collapsed ? (
          <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Text
                style={{
                  ...typography.regular.regular16,
                  color: colors.gold.gold100,
                  textAlign: 'center',
                  marginTop: 15
                }}>
                Organizer
              </Text>
              <Text
                style={{
                  ...typography.regular.regular16,
                  color: colors.gold.gold100,
                  textAlign: 'center',
                  marginTop: 15
                }}>
                Group Spend
              </Text>
              <Text
                style={{
                  ...typography.regular.regular16,
                  color: colors.gold.gold100,
                  textAlign: 'center',
                  marginTop: 15
                }}>
                Joining Fee
              </Text>
            </View>
            <TouchableOpacity
              disabled
              style={{
                padding: 15,
                alignItems: 'center',
                backgroundColor: colors.gold.gold100,
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 30
              }}>
              <Text style={{ ...typography.regular.regular16, color: colors.black.black800, textAlign: 'center' }}>
                Feature coming soon!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        ) : null}
      </View>
  );
};

const styles = StyleSheet.create({
  tinyLogoNormal: {
    width: 10,
    height: 20,
    marginRight: 5
  },
  tinyLogoCollapsed: {
    width: 20,
    height: 12,
    marginRight: 5,
    marginVertical: 3
  }
});

export default TableConfigTableComp;
