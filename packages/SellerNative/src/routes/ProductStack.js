import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from '../screens/Products';
import Folder_Product from '../screens/Folder_Product';
import ItemCreaterFirstStep from '../screens/ItemCreaterFirstStep';

const Stack = createNativeStackNavigator();

const ProductStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Products">
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Folder_Product" component={Folder_Product} />
            <Stack.Screen name="ItemCreaterFirstStep" component={ItemCreaterFirstStep} />
        </Stack.Navigator>
    );
};

export default ProductStack;