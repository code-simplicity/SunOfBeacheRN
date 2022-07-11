/*
 * @Author: bugdr
 * @Date: 2022-07-11 12:30:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-11 13:34:59
 * @FilePath: \SunOfBeacheRN\src\navigation\BottomTabNavigator.tsx
 * @Description:标签底部导航器
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CollegeScreen from '../screens/CollegeScreen';
import FishCakesScreen from '../screens/FishCakesScreen';
import HomeScreen from '../screens/HomeScreen'; // 首页
import MineScreen from '../screens/MineScreen';
import RoundQuestionScreen from '../screens/RoundQuestionScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="首页">
      <BottomTab.Screen name="首页" component={HomeScreen} />
      <BottomTab.Screen name="摸鱼" component={FishCakesScreen} />
      <BottomTab.Screen name="问答" component={RoundQuestionScreen} />
      <BottomTab.Screen name="学院" component={CollegeScreen} />
      <BottomTab.Screen name="我的" component={MineScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
