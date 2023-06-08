import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/Home";
import New from './components/New';
import Restaurant from './screens/Restaurant';
import { Provider } from 'react-redux';
import  {store} from './store/store';
import Basket from './screens/Basket';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name={"home"} component={Home} />
          <Stack.Screen name={"restaurant"} component={Restaurant} />
          <Stack.Screen name={"preparingOrder"} options={{headerShown:false,presentation:"fullScreenModal"}} component={PreparingOrder} />
          <Stack.Screen name={"basket"} component={Basket} options={{presentation:"modal",headerShown:false}} />
          <Stack.Screen name={"delivery"} component={Delivery} options={{presentation:"fullScreenModal",headerShown:false}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
