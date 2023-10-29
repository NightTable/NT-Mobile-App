import React from 'react';
// components

// libraries
import { Dimensions, TouchableOpacity, Image, SafeAreaView, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { value } from '../../theme/spacing';
import { colors, typography } from '../../theme';
// Utils
const { height, width } = Dimensions.get('screen');

// HOW TO USE
// STEP 1:  import {EventRegister} from 'react-native-event-listeners';
// STEP 2:

// useEffect(() => {
//     const globalSucessPopUp = EventRegister.addEventListener(
//       'popupTriggerd',
//       data => {
//           console.log('data.message', data);
//         }
//       },
//     );

//     return () => {
//       EventRegister.removeEventListener(globalSucessPopUp);
//     };
//   }, []);

// STEP 3: IMPORT UI OF YOUR COMPONENT
//  <PopUpAlertUi
// onPopUpClose={() => {
//   onPopUpClose();
// }}
// message={message}
// popUpTheme={popUpTheme}
// />

// STEP 4 :
// IF THE POP-UP IS SUCESS SEND sucess as true or false
// send msg
// if you want to send other msg apart from this add in object
// let obj = {
//     sucess: true,
//     msg: 'ESL Mapping Updated',
//   };
//   EventRegister.emit('popupTriggerd', obj);

// GLOBAL POP-UP ALERT
export const PopUpAlertUi = (props) => (
    <SafeAreaView>
        <View
          style={{
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.shadowColor
          }}
        >
          <View
            style={{
              width,
              borderRadius: 12
            }}
          >
            {props?.closeBtnEnable === true ? (
              <View
                  style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
                >
                  <TouchableOpacity
                    style={{
                      paddingTop: value.micro,
                      paddingHorizontal: value.micro
                    }}
                    onPress={() => {
                      props.onPopUpClose();
                    }}
                  >
                    <MaterialIcons
                      name='close'
                      color={colors.black.black800}
                      size={26}
                    />
                  </TouchableOpacity>
                </View>
            ) : null}

            <Text
              style={[
                typography.bold.bold16,
                {
                  color: props.headingColor && props.headingColor,
                  textAlign: 'center',
                  paddingVertical:
                    props?.message?.length > 0 ? value.regular : 0,
                  width: '96%',
                  lineHeight: 30
                }
              ]}
            >
              {props?.message}
            </Text>

            {!props?.img ? null : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  paddingBottom: 16
                }}
              >
                <Image source={props?.img} style={{ height: 60, width: 60 }} />
              </View>
            )}

            <View style={{ justifyContent: 'flex-end' }}>{props?.renderfn}</View>
          </View>
        </View>
      </SafeAreaView>
  );
