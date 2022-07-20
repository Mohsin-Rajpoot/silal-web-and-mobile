import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
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
import PreOrderSettings from '../screens/Setting/molecule/PreOrderSettings';
import SecurityPreferance from '../screens/Setting/molecule/SecurityPreferance';
import EmailSettings from '../screens/Setting/molecule/EmailSettings';
import AdminCodeScreen from '../screens/Setting/molecule/AdminCodeScreen';
import AboutApp from '../screens/AboutApp';
import LongerOrder from '../screens/Orders_longer/Longer_orders';
import Order_full_view from '../screens/orders/Current/Order_full_view';
import CreateItems from '../screens/CreateItems';
import BarCodeScane from '../screens/CreateItems/CreateITemPages/BarCodeScane';
import CustomValue from '../screens/CreateItems/CreateITemPages/CustomValue';
import CreateItem from '../screens/CreateItems/index';
import NumberSettings from '../screens/Setting/molecule/NumberSettings';
import PasswordSettings from '../screens/Setting/molecule/PasswordSettings';
import Animated, {interpolate, useSharedValue} from 'react-native-reanimated';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import colors from '@SilalApp/common/assets/colors';
import InviteWorkforce from '../screens/Setting/molecule/InviteWorkforce';
import OfferStack from './OfferStack';
// import ContactUs from '../screens/ContactUs';
// import Setting from '../screens/Setting';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[style, {flex: 1}]}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="Offers" component={OfferStack} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="InviteWorkforce" component={InviteWorkforce} />
        <Stack.Screen name="PreOrderSettings" component={PreOrderSettings} />
        <Stack.Screen
          name="SecurityPreferance"
          component={SecurityPreferance}
        />
        <Stack.Screen name="EmailSettings" component={EmailSettings} />
        <Stack.Screen name="PasswordSettings" component={PasswordSettings} />
        <Stack.Screen name="NumberSettings" component={NumberSettings} />

        <Stack.Screen name="AdminCodeScreen" component={AdminCodeScreen} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="longerOrder" component={LongerOrder} />
        <Stack.Screen name="Order_full_view" component={Order_full_view} />
        <Stack.Screen name="CreateItems" component={CreateItems} />
        <Stack.Screen name="BarCodeScane" component={BarCodeScane} />
        <Stack.Screen name="CustomValue" component={CustomValue} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const MainStack = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [data, setData] = useState({
    inputRange: [0, 1],
    outputRange: [1, 1],
  });
  const scale = Animated.interpolateNode(progress, data);

  const screenStyle = {transform: [{scale}]};
  return (
    <Drawer.Navigator
      initialRouteName="TabStack"
      backBehavior="none"
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.0)',
        drawerType: !IsTablet ? 'slide' : 'front',
        headerShown: false,
        sceneContainerStyle: {backgroundColor: colors.textPrimeColor},
        drawerStyle: {
          flex: 1,
          width: !IsTablet ? '75%' : '39%',
          backgroundColor: colors.textPrimeColor,
          borderTopRightRadius: !IsTablet ? 0 : 40,
          borderBottomRightRadius: !IsTablet ? 0 : 40,
        },

        drawerContentContainerStyle: {
          flex: 1,
          backgroundColor: colors.textPrimeColor,
        },
        drawerContentStyle: {flex: 1, backgroundColor: 'red'},
      }}
      drawerContent={props => {
        setProgress(props.progress);
        return <CustomDrawerContent setData={setData} {...props} />;
      }}
      // screenOptions={{
      //   headerShown: false,

      //   // drawerStyle: {
      //   //   backgroundColor: 'transparent',
      //   //   width: '35%',
      //   //   borderRadius: 20,
      //   // },
      // }}
    >
      <Drawer.Screen name="Screen">
        {props => <Screens {...props} style={screenStyle} />}
      </Drawer.Screen>
      {/* <Drawer.Screen name="TabStack" component={TabStack}  />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="AboutApp" component={AboutApp} />
      <Drawer.Screen name="longerOrder" component={LongerOrder} />
      <Drawer.Screen name="Order_full_view" component={Order_full_view} />
      <Drawer.Screen name="CreateItem" component={CreateItem} /> */}
    </Drawer.Navigator>
  );
};
export default MainStack;
