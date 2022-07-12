/*
 * @Author: bugdr
 * @Date: 2022-07-09 22:07:01
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-12 16:46:18
 * @FilePath: \SunOfBeacheRN\App.tsx
 * @Description:App的入口文件，这里作为渲染系统入口
 *
 */
import { theme } from '@src/theme';
import React from 'react';
import Navigation from './src/navigation';
import { NativeBaseProvider } from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
