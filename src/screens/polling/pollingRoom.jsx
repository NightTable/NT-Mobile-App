import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';

const btnArray = [
  {
    id: 1,
    name: 'Menu',
    backgroundColor: 'transparent',
    borderColor: colors.gold.gold100,
    textColor: colors.gold.gold100
  },
  {
    id: 2,
    name: 'Floor Plan',
    backgroundColor: 'transparent',
    borderColor: colors.gold.gold100,
    textColor: colors.gold.gold100
  },
  {
    id: 3,
    name: 'Add Participants',
    backgroundColor: '#516D65',
    borderColor: colors.gold.gold100,
    textColor: 'white'
  },
  {
    id: 4,
    name: 'Remove Participants',
    backgroundColor: '#D08714',
    borderColor: colors.gold.gold100,
    textColor: 'white'
  },
  {
    id: 5,
    name: 'Leave Group',
    backgroundColor: '#8C0322',
    borderColor: colors.gold.gold100,
    textColor: colors.gold.gold100
  },
  {
    id: 6,
    name: 'Approve Request',
    backgroundColor: colors.gold.gold100,
    borderColor: colors.gold.gold100,
    textColor: 'black'
  },
  {
    id: 7,
    name: 'View Cart',
    backgroundColor: colors.gold.gold200,
    borderColor: colors.gold.gold200,
    textColor: 'black'
  },
  {
    id: 8,
    name: 'Add to General Tab',
    backgroundColor: colors.gold.gold200,
    borderColor: colors.gold.gold200,
    textColor: 'black'
  }
];

const PollingRoom = ({ navigation }) => {
  const onButtonPress = (id) => {
    if (id === 1) {
      // 'Menu',
    } else if (id === 2) {
      // 'Floor Plan'
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='Polling Room'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <ScrollView>
        <View>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHx8MHx8fDA%3D'
            }}
            resizeMode='cover'
            style={{ height: 200, width: '100%' }}>
            <View style={{ alignItems: 'flex-end', paddingTop: 20 }}>
              <View style={{ backgroundColor: 'black', height: 60, width: 160, justifyContent: 'center' }}>
                <Text style={{ color: colors.gold.gold100, paddingLeft: 4 }}>
                  Table request organized by Amanda May
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'black', height: 80, width: 140 }}>
              <Text style={{ color: colors.gold.gold100 }}>Waiting for 7 more people</Text>
              <Text style={{ color: colors.gold.gold100 }}>Tables : S1, D1</Text>
              <Text style={{ color: colors.gold.gold100 }}>Time: 11:00 PM</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ padding: 12 }}>
          <Text style={styles.heading}>Current Cost Breakdown:</Text>
          <View style={{ height: 180, borderWidth: 1, borderColor: colors.gold.gold100, borderRadius: 12 }}>
            <Text
              style={[
                styles.heading,
                {
                  padding: 10
                }
              ]}>
              Your Share: $ 200
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.gold.gold100,
                borderRadius: 8,
                padding: 12,
                margin: 6
              }}>
              <Text>Amanda May</Text>
              <Text> $ 100</Text>
            </View>
          </View>
        </View>
        <View>
          <FlatList
            data={btnArray}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.btnBox}>
                <TouchableOpacity
                  onPress={() => {
                    onButtonPress(item.id);
                  }}
                  style={[styles.btnStyling, { backgroundColor: item.backgroundColor, borderColor: item.borderColor }]}>
                  <Text style={[typography.medium.medium14, { color: item.textColor }]}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  mainBox: {
    paddingHorizontal: 18
  },
  heading: {
    fontSize: 16,
    color: colors.gold.gold100,
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 24,
    paddingTop: 18,
    color: colors.gold.gold100
  },
  btnStyling: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  btnBox: { width: '50%', justifyContent: 'space-evenly', paddingVertical: 6, paddingHorizontal: 10 }
});

export default PollingRoom;
