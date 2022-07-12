/*
 * @Author: bugdr
 * @Date: 2022-07-11 12:30:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-12 08:40:49
 * @FilePath: \SunOfBeacheRN\src\navigation\BottomTabNavigator.tsx
 * @Description:标签底部导航器
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FishCakesScreen from '../screens/FishCakesScreen';
import HomeScreen from '../screens/HomeScreen'; // 首页
import MineScreen from '../screens/MineScreen';
import RoundQuestionScreen from '../screens/RoundQuestionScreen';
import CollegeScreen from '../screens/CollegeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  // 这里抽出来作为一个独立的函数
  const getTabBarIcon = (route: any, focused: boolean, color: string, size: any) => {
    if (route.name === 'Home') {
      return getHomeBarIcon();
    }
    if (route.name === 'FishCakes') {
      return getFishCakesBarIcon();
    }
    if (route.name === 'RoundQuestion') {
      return getRoundQuestionBarIcon();
    }
    if (route.name === 'College') {
      return getCollegeBarIcon();
    }
    if (route.name === 'Mine') {
      return getMineBarIcon();
    }
    // 获取首页
    function getHomeBarIcon() {
      return (
        <MaterialIcons
          name={focused ? 'home-lightbulb' : 'home-lightbulb-outline'}
          size={size}
          color={color}
        />
      );
    }
    // 获取摸鱼
    function getFishCakesBarIcon() {
      return (
        <MaterialIcons name={focused ? 'fishbowl' : 'fishbowl-outline'} size={size} color={color} />
      );
    }
    // 获取问答
    function getRoundQuestionBarIcon() {
      return (
        <MaterialIcons
          name={focused ? 'chat-question' : 'chat-question-outline'}
          size={size}
          color={color}
        />
      );
    }
    // 获取学院
    function getCollegeBarIcon() {
      return (
        <Ionicons
          name={focused ? 'ios-school-sharp' : 'ios-school-outline'}
          size={size}
          color={color}
        />
      );
    }
    // 获取我的
    function getMineBarIcon() {
      return (
        <FontAwesomeIcons
          name={focused ? 'user-circle' : 'user-circle-o'}
          size={size}
          color={color}
        />
      );
    }
  };
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getTabBarIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
        }}
      />
      <BottomTab.Screen
        name="FishCakes"
        component={FishCakesScreen}
        options={{
          title: '摸鱼',
        }}
      />
      <BottomTab.Screen
        name="RoundQuestion"
        component={RoundQuestionScreen}
        options={{
          title: '问答',
        }}
      />
      <BottomTab.Screen
        name="College"
        component={CollegeScreen}
        options={{
          title: '学院',
        }}
      />
      <BottomTab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          title: '我的',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
