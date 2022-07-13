/*
 * @Author: bugdr
 * @Date: 2022-07-13 13:21:24
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 14:35:05
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\Register\index.tsx
 * @Description:注册用户
 */
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Register = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { setSwitchFormStatus, setSwitchFormTitle } = props;
  const handleClickSign = () => {
    setSwitchFormStatus('sign');
    setSwitchFormTitle('登录');
  };
  const handleClickForgetPassword = () => {
    setSwitchFormStatus('forgetPassword');
    setSwitchFormTitle('找回密码');
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
            InputRightElement={<Text>获取手机验证码</Text>}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="起个独一无二的名字"
            variant="filled"
            size="lg"
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Icon as={<FontAwesome name="user" />} size={5} ml="2" color="muted.400" />
            }
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="请输入密码（8-20位）"
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
            placeholder="请再次输入密码"
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
          注册
        </Button>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Button size="md" variant="ghost" onPress={() => handleClickSign()}>
            已注册，登录
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
      </VStack>
    </>
  );
};

export default Register;
