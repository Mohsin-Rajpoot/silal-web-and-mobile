import React from 'react';
import Order from '../screens/orders/Order';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order_full_view from './../screens/orders/Current/Order_full_view';
import Longer_orders from './../screens/Orders_longer/Longer_orders'

const Stack = createNativeStackNavigator();
// const navTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'white',
//   },
// };
const OrderStack = () => {
  return (
    // <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Order_full_view" component={Order_full_view} />
        <Stack.Screen name="Longer_orders" component={Longer_orders} />

      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default OrderStack;
