import React from 'react';
import { Text, StyleSheet, View, Pressable, SafeAreaView } from 'react-native';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';

const PollingRoom = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <HeaderWithLeftIcon
      title='Polling Room'
      icon='arrowleft'
      iconDirectory='AntDesign'
      onSubmit={() => {
        navigation.navigate('Home');
      }}
        />
        

        <View>
            <View style={{height:120,backgroundColor:colors.red.red950}}>

            </View>

            
        </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  mainBox: {
    paddingHorizontal: 18
  }
});

export default PollingRoom;
