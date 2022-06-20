import React from 'react';
import Order from '../screens/orders/Order';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order_full_view from './../screens/orders/Current/Order_full_view';
import Longer_orders from './../screens/Orders_longer/Longer_orders';
import FullOrderDetail from './../screens/FullOrderDetail';
import SellerToolScreen from '../screens/orders/molecule/SellerToolScreen';
import DailySummary from '../screens/orders/molecule/DailySummary';
import Notes from '../screens/orders/molecule/Notes';
import OrderFullViewMobile from '../screens/orders/Current/OrderFullViewMobile';
import OrderIdScreen from '../screens/orders/Archive/OrderIdScreen';
import Acceptance_order_mobile from '../screens/Orders_longer/Acceptance_order_mobile'
import LongOrderDetails from '../screens/Orders_longer/molecules/LongOrderDetails';
import Acceptance_orders from '../screens/Orders_longer/Acceptance_orders'
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
      <Stack.Screen name="FullOrderDetail" component={FullOrderDetail} />
      <Stack.Screen name="SellerToolScreen" component={SellerToolScreen} />
      <Stack.Screen name="DailySummary" component={DailySummary} />
      <Stack.Screen name='Notes' component={Notes}/>
      <Stack.Screen name='OrderFullViewMobile' component={OrderFullViewMobile}/>
      <Stack.Screen name='OrderIdScreen' component={OrderIdScreen}/>
      <Stack.Screen name='Acceptance_order_mobile' component={Acceptance_order_mobile}/>
      <Stack.Screen name='LongOrderDetails' component={LongOrderDetails}/>
      <Stack.Screen name='Acceptance_orders' component={Acceptance_orders}/>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default OrderStack;
