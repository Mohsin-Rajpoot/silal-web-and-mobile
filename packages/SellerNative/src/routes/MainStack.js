import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStack from './TabStack';
import React,{useState,useEffect} from 'react';
import {Dimensions} from 'react-native'
import CustomDrawerContent from './Drawer';
import Profile from '../screens/Profile';
import Documents from '../screens/Documents';
import Offers from '../screens/offers/Offers';
import ContactUs from '../screens/ContactUs';
import Setting from '../screens/Setting';
import AboutApp from '../screens/AboutApp';
import LongerOrder from '../screens/Orders_longer/Longer_orders'
import Order_full_view from '../screens/orders/Current/Order_full_view'
// import ContactUs from '../screens/ContactUs';
// import Setting from '../screens/Setting';
import {
    OrientationLocker,
    LANDSCAPE,
    PORTRAIT
  } from 'react-native-orientation-locker';


const Drawer = createDrawerNavigator();

const MainStack = () => {

  const [orientation, setOrientation] = useState(LANDSCAPE);
  const determineAndSetOrientation = () => {
      let width = Dimensions.get('window').width;
      let height = Dimensions.get('window').height;
  
      if (Dimensions == PORTRAIT) {
          setOrientation(LANDSCAPE);
          console.log(orientation,"orientation fff");
        } else {
          setOrientation(LANDSCAPE);
          console.log(orientation,'LANDSCAPE eeeeee');
        }
    }
  
    useEffect(() => {
  
      determineAndSetOrientation();
      Dimensions.addEventListener('change', determineAndSetOrientation);
  
      return () => {
        Dimensions.addEventListener('change', determineAndSetOrientation)
      }
    }, []);











  return (
    <Drawer.Navigator
      initialRouteName="TabStack"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '40%', backgroundColor: 'transparent'},
      }}>
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name='AboutApp' component={AboutApp}/>
      <Drawer.Screen name='longerOrder' component={LongerOrder}/>
      <Drawer.Screen name='Order_full_view' component={Order_full_view}/>
    </Drawer.Navigator>
  );
};
export default MainStack;
