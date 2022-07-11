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
import Settings from '../views/Settings';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="首页">
        <Stack.Screen name="首页" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="设置" component={Settings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;