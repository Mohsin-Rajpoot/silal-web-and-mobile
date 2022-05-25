import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TabStack from './TabStack';
import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import CustomDrawerContent from './Drawer';
import Profile from '../screens/Profile';
import Documents from '../screens/Documents';
import Offers from '../screens/offers/Offers';
import ContactUs from '../screens/ContactUs';
import Setting from '../screens/Setting';
import AboutApp from '../screens/AboutApp';
import LongerOrder from '../screens/Orders_longer/Longer_orders';
import Order_full_view from '../screens/orders/Current/Order_full_view';
import CreateItem from '../screens/CreateItem';
import Animated from 'react-native-reanimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ContactUs from '../screens/ContactUs';
// import Setting from '../screens/Setting';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Screens=({navigation})=>{
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
      headerTitle:null,
      
    }}
    >


    </Stack.Navigator>
  )
}
const MainStack = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const screenStyle = {borderRadius, transform: [scale]};
  return (
  
    <Drawer.Navigator
      initialRouteName="TabStack"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '35%',
          borderRadius: 20,
        },
      }}>
  


      <Drawer.Screen name="TabStack" component={TabStack}  />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="AboutApp" component={AboutApp} />
      <Drawer.Screen name="longerOrder" component={LongerOrder} />
      <Drawer.Screen name="Order_full_view" component={Order_full_view} />
      <Drawer.Screen name="CreateItem" component={CreateItem} />
  
    </Drawer.Navigator>

  );
};
export default MainStack;
