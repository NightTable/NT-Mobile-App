import { Button, StyleSheet, Text, View } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import { NativeBaseProvider } from "native-base";
//STORE
import { store } from "./src/store/store";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//SCREENS
import Splash from "./src/Screens/Splash";
import Login from "./src/Screens/Auth/Login";

function DetailsScreen() {
  const dispatch = useDispatch();

  const loginReducer = useSelector((state) => state.login);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{loginReducer?.token}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                headerShown: false,
              }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
