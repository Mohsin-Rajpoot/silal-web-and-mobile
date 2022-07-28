import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@SilalApp/common/screens/Auth/login';
import Verification from '@SilalApp/common/screens/Auth/Verification';
import ForgetPassword from '@SilalApp/common/screens/Auth/ForgetPassword';
import ChangePassword from '@SilalApp/common/screens/Auth/ChangePassword';
import GettingStarted from '@SilalApp/common/screens/Auth/GettingStarted';
import ChooseAccount from '@SilalApp/common/screens/Auth/ChooseAccount';
import Onboarding from '@SilalApp/common/screens/Auth';
import SignUpForm from '@SilalApp/common/screens/Auth/SignUpForm';
import ConformationAccount from '@SilalApp/common/screens/Auth/ConformationAccount';
import SellerInformation from '@SilalApp/common/screens/Auth/SellerInformation';
import Map from '@SilalApp/common/screens/Map';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding"> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
      <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
      <Stack.Screen name="OnBoarding" component={Onboarding} />
      <Stack.Screen name="SignUpForm" component={SignUpForm} />
      <Stack.Screen name="SellerInformation" component={SellerInformation} />
      <Stack.Screen
        name="ConformationAccount"
        component={ConformationAccount}
      />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default AuthStack;
