import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
//Libraries
import {Box} from 'native-base';
//theme
// import {colors} from '../theme/colors';

//{size, color}

//Main function
export const ActivityLoader = () => {
  return (
    <>
      <Box style={styles.loading}>
        <ActivityIndicator size={30} color={'white'} />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  //  backgroundColor: colors.grey.grey600,
  },
});
