import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Clints from '../screens/Clints';
import Products from '../screens/Products';
import OrderStack from './OrderStack';
import Order from '../screens/orders/Order';
import {useTranslation} from 'react-i18next';
import ProductStack from './ProductStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5AB3A8',
        unmountOnBlur: true,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('home'),
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
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          tabBarLabel: t('products'),
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
