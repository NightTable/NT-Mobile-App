// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Modal, TouchableOpacity, Platform } from 'react-native';
import { ceil } from 'react-native-reanimated';
import { Colors } from '../../colors/Colors';
import { heightRatioProMax, windowHeight } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';

const EndOutingConfirmationModal = (props) => {

    return (<Modal 
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
            props.onRequestClose();
        }}>
        <View style={{
            height: windowHeight < 700 || Platform.OS === 'android' ? '120%' : '100%',
            width: '100%',
            backgroundColor: 'transparent',
            transform: [{
                translateY: windowHeight < 700 || Platform.OS === 'android' ? -70 * heightRatioProMax : 0,
            }],
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <View style={{
                height: '70%',
                borderColor: Colors.gold,
                borderRadius: 50 * heightRatioProMax,
                borderWidth: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: Colors.black,
                alignItems: 'center'
            }}>
              <View style={{
                  marginTop: 35 * heightRatioProMax,
                  width: '80%'
              }}>
                  <Text style={{
                      fontFamily: Fonts.mainFontReg,
                      fontSize: 18 * heightRatioProMax,
                      color: Colors.gold
                  }}>Are you sure you want to end the outing?</Text>
              </View>
              <View style={{
                  marginBottom: Platform.OS === 'android' ? 130 * heightRatioProMax : (windowHeight < 700 ? 150 * heightRatioProMax : 50 * heightRatioProMax),
                  flexDirection: 'row',
                  height: 70 * heightRatioProMax,
              }}>
                  <View style={{
                      flex: 2,
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                      <TouchableOpacity onPress={props.onRequestClose} style={[{
                          height: '60%',
                          borderRadius: 10 * heightRatioProMax,
                          width: '75%',
                          justifyContent: 'center',
                          backgroundColor: Colors.orange
                      }, {
                        shadowColor: Colors.black,
                        shadowRadius: 2,
                        shadowOpacity: 0.8,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        elevation: 3
                      }]}>
                          <Text style={{
                              color: Colors.white,
                              textAlign: 'center',
                              fontFamily: Fonts.mainFontReg
                          }}>cancel</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{
                      flex: 2,
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                      <TouchableOpacity onPress={props.endOutingConfirmationPress} style={[{
                        height: '60%',
                        width: '75%',
                        justifyContent: 'center',
                        backgroundColor: Colors.red,
                        borderRadius: 10 * heightRatioProMax
                      }, {
                        shadowColor: Colors.black,
                        shadowRadius: 2,
                        shadowOpacity: 0.8,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        elevation: 3
                      }]}>
                          <Text style={{
                              color: Colors.white,
                              textAlign: 'center',
                              fontFamily: Fonts.mainFontReg
                          }}>end outing</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>
        </View>
    </Modal>)
}

export default EndOutingConfirmationModal;

