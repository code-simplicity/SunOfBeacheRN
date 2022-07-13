/*
 * @Author: bugdr
 * @Date: 2022-07-13 13:18:50
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 14:28:16
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\ForgetPassword\index.tsx
 * @Description:忘记密码
 */
import { Button, FormControl, HStack, Icon, Input, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForgetPassword = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { setSwitchFormStatus, setSwitchFormTitle } = props;
  const handleClickSign = () => {
    setSwitchFormStatus('sign');
    setSwitchFormTitle('登录');
  };
  const handleClickRegister = () => {
    setSwitchFormStatus('register');
    setSwitchFormTitle('注册账户');
  };
  return (
    <>
      <VStack space={3} px="8" alignItems="center" w="100%">
        <FormControl>
          <Input
            placeholder="请输入图灵验证码"
            variant="filled"
            size="lg"
            InputLeftElement={
              <Icon as={<MaterialIcons name="verified" />} size={5} ml="2" color="muted.400" />
            }
            InputRightElement={<Text>图灵验证码</Text>}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="请输入手机号码"
            variant="filled"
            size="lg"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="phonelink-lock" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="手机验证码"
            variant="filled"
            size="lg"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="mark-email-unread" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            InputRightElement={<Text>获取手机验证码</Text>}
          />
        </FormControl>

        <Button w="100%" mt="2" colorScheme="indigo">
          修改密码
        </Button>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Button size="md" variant="ghost" onPress={() => handleClickSign()}>
            已注册，登录
          </Button>
          <Button
            size="md"
            variant="ghost"
            colorScheme="secondary"
            onPress={() => handleClickRegister()}
          >
            注册账户
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default ForgetPassword;
