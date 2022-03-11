import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../../../common/screens/Auth/Login';
import Verification from '../../../../common/screens/Auth/Verification';
import ForgetPassword from '@SilalApp/common/screens/Auth/ForgetPassword';
import ChangePassword from '@SilalApp/common/screens/Auth/ChangePassword';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
