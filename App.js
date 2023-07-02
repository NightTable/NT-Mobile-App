import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {store} from './src/store/store';
import {useDispatch} from 'react-redux';
import {loginUser} from './src/store/action/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import { NativeBaseProvider } from 'native-base';


// import * as dotenv from "dotenv";
// dotenv.config();
// console.log("process.env",process.env);


const UIRender = ({navigation}) => {
  // const {loginStore} = useStore();
  // const {loginUser} = loginStore();
  const dispatch = useDispatch ();

  const loginReducer = useSelector (state => state.login);

  useEffect (() => {
    console.log ('loginReducer', loginReducer);
     
     console.log ('loginReducer', loginReducer);


     setInterval(() => {
      // dispatch (loginUser ('VISHESH'));
     }, 2000);

    //  navigation.navigate('DetailsScreen')
  }, []);
  console.log ('loginReducer', loginReducer);

  return (
    <View style={styles.container}>
      <Text>Hello this web</Text>
      <Text>{loginReducer?.token}</Text>

      <StatusBar style="auto" />
      <Button
        onPress={() => {
          dispatch (loginUser ('VISHESH'));
          navigation.navigate('Details');
        }}
        style={{
          marginTop:30
        }}
        title="NAVIGATE"
      />
    </View>
  );
};

function HomeScreen () {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function DetailsScreen () {
  const dispatch = useDispatch ();

  const loginReducer = useSelector (state => state.login);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{loginReducer?.token}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator ();

export default function App () {
  return (
    <Provider store={store}>
       <NativeBaseProvider>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
