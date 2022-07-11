/*
 * @Author: bugdr
 * @Date: 2022-07-11 13:32:33
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-11 13:34:34
 * @FilePath: \SunOfBeacheRN\src\screens\MineScreen.tsx
 * @Description:我的模块
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const MineScreen = ({ navigation }) => {
  return (
    <View>
      <Text>我的界面</Text>
      <Button title="Go to setting" onPress={() => navigation.navigate('设置')} />
    </View>
  );
};

export default MineScreen;
