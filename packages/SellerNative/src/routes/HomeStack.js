
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DetailedAnalytics from '../screens/DetailedAnalytics'
import Statistics from '../components/Statistics';
import Notification from '../screens/Notification';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailedAnalytics" component={DetailedAnalytics} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name='Notification' component={Notification}/>
       
    </Stack.Navigator>
  );
};

export default HomeStack;
