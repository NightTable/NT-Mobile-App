import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';

// STORE
// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// FONTS LOADING
import { useFonts } from 'expo-font';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { EventRegister } from 'react-native-event-listeners';
import { StripeProvider } from '@stripe/stripe-react-native';
import LogoSplash from './src/screens/logo';
// net -info
import RootStack from './src/navigation/RootStack';
import { PopUpAlertUi } from './src/components/popUp/PopUp';
// App.ts
import { store } from './src/store/store';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  // INTERNET CONNECTION CHECK

  const netInfo = useNetInfo();

  const [isConnected, setIsConnected] = useState(true);
  const [showConnectionStatus, setShowConnectionStatus] = useState(false);
  const [popUpShow, setpopUpShow] = useState(false);
  const [popUpTheme, setpopUpTheme] = useState(false);
  const [message, setmessage] = useState('');
  const [popUprenderfn, setpopUprenderfn] = useState();
  const [closeBtnEnable, setcloseBtnEnable] = useState(false);
  const [Image, setImage] = useState('');

  useEffect(() => {
    const globalSucessPopUp = EventRegister.addEventListener('popupTriggerd', (data) => {
      UpdatePopData(data);
    });
    return () => {
      EventRegister.removeEventListener(globalSucessPopUp);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      // when no internet connection and if the state of the connection is true then need to set the status of connection true
      if (!isConnected && state.isConnected) {
        setShowConnectionStatus(true);
        setTimeout(() => {
          setShowConnectionStatus(false);
        }, 3000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  const UpdatePopData = async (data) => {
    if (data) {
      setpopUprenderfn(data.renderfn);
      setmessage(data.Heading);
      setpopUpTheme(data.headingColor);
      setImage(data.img);
      setcloseBtnEnable(data.closeBtnEnable);

      setpopUpShow(true);
      timeout = setTimeout(
        () => {
          onPopUpClose();
        },
        data?.closingTime === undefined ? 2000 : data?.closingTime
      );
    } else {
      setpopUpShow(false);
      clearTimeout(timeout);
    }
  };

  const onPopUpClose = () => {
    EventRegister.emit('popupTriggerd', '');
    setpopUpShow(false);
    clearTimeout(timeout);
  };

  // LOADING FONTS
  const [isLoaded] = useFonts({
    'vh-bold': require('./assets/fonts/VerahHumana-Bold.ttf'),
    'vh-regular': require('./assets/fonts/VerahHumana-Regular.ttf')
  });

  if (!isLoaded) {
    return <LogoSplash />;
  }

  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey='pk_live_51MIxt5KhH8zNT0eBV69mSH0djmZ50vIKUR71fICATT4g1qC6K6psICHaEePSIfQQqRUvHCRajt5HrQSCLoQzq8Bj00hiQS4fwh'
        merchantIdentifier='merchant.identifier' // required for Apple Pay
      >
          <NavigationContainer>
            {popUpShow === false ? null : (
              <Modal animationType='slide' transparent visible={popUpShow}>
                <PopUpAlertUi
                  onPopUpClose={() => {
                    onPopUpClose();
                  }}
                  message={message}
                  headingColor={popUpTheme}
                  renderfn={popUprenderfn}
                  closeBtnEnable={closeBtnEnable}
                  img={Image}
                />
              </Modal>
            )}
            <RootStack />
          </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}
