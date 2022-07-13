/*
 * @Author: bugdr
 * @Date: 2022-07-12 10:07:05
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 16:57:06
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\Sign\index.tsx
 * @Description:登录页面
 */
import React, { useEffect, useState } from 'react';
import {
  Text,
  Input,
  Icon,
  FormControl,
  VStack,
  Button,
  HStack,
  Checkbox,
  Divider,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useFetchData from '@src/hooks/useFetchData';
const Sign = (props: any) => {
  const { setSwitchFormStatus, setSwitchFormTitle } = props;
  const handleClickRegister = () => {
    setSwitchFormStatus('register');
    setSwitchFormTitle('用户注册');
  };
  const handleClickForgetPassword = () => {
    setSwitchFormStatus('forgetPassword');
    setSwitchFormTitle('找回密码');
  };
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <VStack space={3} px="8" alignItems="center" w="100%">
        <FormControl>
          <Input
            placeholder="请输入你的独一无二的用户名"
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
            placeholder="请输入密码"
            variant="filled"
            size="lg"
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Icon as={<MaterialIcons name="fingerprint" />} size={5} ml="2" color="muted.400" />
            }
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
        </FormControl>
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
          <Checkbox
            shadow={2}
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            defaultIsChecked
          >
            <Text fontSize="xs">我已阅读并同意</Text>
            <Text fontSize="xs">《阳光沙滩》</Text>
            <Text fontSize="xs">《个人信息指引保护》</Text>
          </Checkbox>
        </FormControl>
        <Button w="100%" mt="2" colorScheme="indigo">
          登录
        </Button>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Button size="md" variant="ghost" onPress={() => handleClickRegister()}>
            注册账户
          </Button>
          <Button
            size="md"
            variant="ghost"
            colorScheme="secondary"
            onPress={() => handleClickForgetPassword()}
          >
            忘记密码
          </Button>
        </HStack>
        <VStack w="100%" space={2} alignItems="center" pt="16">
          <Text>其他方式登录</Text>
          <Divider bg="emerald.600" thickness="1" />
          <HStack space={4}>
            <AntDesign name="github" size={32} />
            <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
            <AntDesign name="wechat" size={32} />
            <Divider bg="amber.500" thickness="2" mx="2" orientation="vertical" />
            <AntDesign name="alipay-circle" size={32} />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Sign;
