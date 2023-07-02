import React, { useEffect, useState} from 'react';

import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Platform,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    TextInput} from 'react-native';

import { Colors } from '../../../colors/Colors';
import { Fonts } from '../../../fonts/Fonts';

import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios';

import { API_URL_IOS, API_URL_ANDROID } from "@env";


import { heightRatioProMax, widthRatioProMax } from '../../../dimensions/Dimensions';

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(props.modalVisible);
        console.log("\n");
        console.log(props.times, "times");
        console.log("\n");
    }, []);

  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{backgroundColor: Colors.black, borderRadius: 5 * widthRatioProMax, justifyContent: 'space-evenly', marginHorizontal: 5 * widthRatioProMax, borderWidth: 1 * widthRatioProMax, borderColor: Colors.gold}}>
                    {props.times.map((time, index) => {

                        return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{fontSize: 20 * heightRatioProMax, textAlign: 'center', color: Colors.gold, padding: 5 * heightRatioProMax, fontFamily: Fonts.mainFontReg}}>{time}</Text>
                        </TouchableOpacity>);
                        })
                    }
                    </View>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>);
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: Colors.gold,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;