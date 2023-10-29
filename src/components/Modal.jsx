import React from 'react';
import { Text, TouchableOpacity, Modal, Dimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const DyModal = ({ children, openActionSheet, bgColor, onClosepress }) => (
  <Modal
    animationType='slide'
    transparent
    visible={openActionSheet}
    onRequestClose={() => {
      onClosepress();
    }}>
    <View style={{ width, height, backgroundColor: bgColor }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 18,
          paddingTop: 40
        }}>
        <Text style={{ color: 'white', paddingVertical: 12 }}> </Text>
        <TouchableOpacity
          onPress={() => {
            onClosepress();
          }}>
          <Ionicons name='close' size={32} color='silver' />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  </Modal>
);

export default DyModal;
