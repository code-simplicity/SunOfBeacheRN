/*
 * @Author: bugdr
 * @Date: 2022-07-10 21:15:11
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-11 14:08:51
 * @FilePath: \SunOfBeacheRN\src\navigation\index.tsx
 * @Description:这是用户使用的页面，不包含登录等页面
 */
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const Navigation = () => {
  return (
    <SafeAreaProvider initialMetrics={null}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'withe' }}
        edges={['top', 'bottom', 'right', 'left']}
        mode="padding"
      >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigation;
