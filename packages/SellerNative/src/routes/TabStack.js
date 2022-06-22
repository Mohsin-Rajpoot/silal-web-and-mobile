import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clints from '../screens/Clints';
import Products from '../screens/Products';
import OrderStack from './OrderStack';
import Order from '../screens/orders/Order';
import {useTranslation} from 'react-i18next';
import ProductStack from './ProductStack';
import {NavigationContainer} from '@react-navigation/native';
import colors from '@SilalApp/common/assets/colors';
import HomeStack from './HomeStack';
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#05AE4B',
      }}
      initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: t('home'),
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarLabel: t('Order'),
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Clients"
        component={Clints}
        options={{
          tabBarLabel: t('client'),
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductsStack"
        component={ProductStack}
        options={{
          tabBarLabel: t('products'),
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pricetag" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
