/*
 * @Author: bugdr
 * @Date: 2022-07-11 12:30:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-11 14:12:48
 * @FilePath: \SunOfBeacheRN\src\navigation\StackNavigator.tsx
 * @Description:栈导航器，包括登录这些
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '@src/screens/Settings';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="设置" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
