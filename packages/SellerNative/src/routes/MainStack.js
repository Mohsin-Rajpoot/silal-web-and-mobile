import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStack from './TabStack';
import React from 'react';
import CustomDrawerContent from './Drawer';
import Profile from '../screens/Profile';
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false, drawerStyle: {width: '40%'}}}>
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default MainStack;
