import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import Clints from './src/screens/Clints';
import Products from './src/screens/Products';
import Order from './src/screens/orders/Order';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// import Login from '@SilalApp/common/screens/Auth/Login'
import AuthStack from './src/routes/AuthStack';
// import test from './test'
const App = ({navigation}) => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#5AB3A8',

        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Clints"
          component={Clints}
          options={{
            tabBarLabel: 'Clints',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          component={AuthStack}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pricetag" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
