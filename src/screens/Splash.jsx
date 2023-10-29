/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Box } from 'native-base';
import { Image } from 'react-native';

// REDUX
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getAllCountriesData } from '../store/action/login';
import { colors } from '../theme';

// Image
import logoImg from '../../assets/logo/logo.png';

// Splash main function
const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  // states
  const loginStore = useSelector((state) => state.login, shallowEqual);

  // check auth
  useEffect(() => {
    const init = async () => {
      // check navigation
      if (loginStore.isUserLoggedIn === true) {
        navigation.navigate('DrawerNavigator');
      } else {
        dispatch(getAllCountriesData());
        navigation.navigate('Login');
      }
    };

    init();

    // unsubscribing the function
    const unsubscribe = () => init();
  }, []);

  return (
    <Box
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black.black800
      }}
      safeArea>
      <Image style={{ height: 200, width: 220 }} source={logoImg} />
    </Box>
  );
};

export default Splash;
