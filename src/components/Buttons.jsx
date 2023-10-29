import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ActivityLoader } from './Loaders';
import { colors, typography } from '../theme';

// USEAGE
// Step 1:::> import {Button} from "_component_Directory_"
// Step 2:::> Use below code to render component and pass props according to requirement

  /* <Button
            text={'CLICK ME'}
            onSubmit={() => {
              console.log('BUtton clicked....!');
            }}
            bgColor={'red.900'}
            textColor={'white'}
            variant={''}
            borderColor={'green.900'}
            fontweight={'bold'}
            iconName={'eye'}
          /> */


export const Button = (props) => {
  const [loader, setloader] = useState(props.loader);
  return (
    <Pressable
        onPress={() => {
          props.onSubmit();
        }}
        style={{ width: '100%', height: 40 }}>
        <View
          justifyContent='center'
          alignItem='center'
         
        >
          {loader === false ? (
            <View style={{ alignItem: 'center', justifyContent: 'center' }}>
              <ActivityLoader />
            </View>
          ) : (
            <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  backgroundColor: props?.disabled === true ? colors.grey.grey400 : props.backgroundColor,
                  borderRadius: 4
                }}
                
              >
                <Text
                  style={[
                    {
                      color: props.textColor,
                      justifyContent: 'center',
                      alignItems: 'center'
                    },
                    typography.bold.bold16
                  ]}>
                  {props.text}
                </Text>
              </View>
          )}
        </View>
      </Pressable>
  );
};
