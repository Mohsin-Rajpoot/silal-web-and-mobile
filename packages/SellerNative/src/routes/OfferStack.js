import React from 'react';
import Order from '../screens/orders/Order';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OfferDetail from '../screens/OfferDetail';
import Offers from '../screens/offers/Offers';
const Stack = createNativeStackNavigator();
// const navTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'white',
//   },
// };
const OfferStack = () => {
  return (
    // <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="offer" component={Offers} />
      <Stack.Screen name="offerDetail" component={OfferDetail} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default OfferStack;
