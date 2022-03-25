import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStack from './TabStack';
import React from 'react';
import CustomDrawerContent from './Drawer';
import Profile from '../screens/Profile';
import Documents from '../screens/Documents';
import Offers from '../screens/offers/Offers';
import ContactUs from '../screens/ContactUs';
import Setting from '../screens/Setting';
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabStack"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false, drawerStyle: {width: '40%', backgroundColor:'transparent'}}}>
      
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};
export default MainStack;
