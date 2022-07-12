/*
 * @Author: bugdr
 * @Date: 2022-07-12 10:07:05
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-12 19:39:30
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\Sign\index.tsx
 * @Description:登录页面
 */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// TODO:明天继续写登录界面
const Sign = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <>
      <View>
        <Text>阳光沙滩App</Text>
      </View>
      <View>
        <Input
          placeholder="请输入你的独一无二的用户名"
          InputLeftElement={
            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
          }
        />
        <Input
          placeholder="请输入密码"
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Icon
              as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => handleClick()}
            />
          }
        />
        <Input
          placeholder="请输入图灵验证码"
          InputLeftElement={
            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
          }
        />
      </View>
    </>
  );
};

export default Sign;
