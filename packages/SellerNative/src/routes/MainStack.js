import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from './TabStack'
import React from 'react';
import CustomDrawerContent from './Drawer'
import { View } from 'react-native'
const Drawer = createDrawerNavigator();

const MainStack=()=> {
  return (
    <Drawer.Navigator 
    
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{headerShown:false,
      drawerStyle:{width:'40%',}
    }}>
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
}
export default MainStack