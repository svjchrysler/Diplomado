/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Product from './src/screens/Product';
import ProductDetail from './src/screens/ProductDetail';

import {navigationRef} from './src/Utils/RootNavigation';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Maps from './src/screens/Maps';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createMaterialBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Maps" component={Maps} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
