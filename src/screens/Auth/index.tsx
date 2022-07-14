/*
 * @Author: bugdr
 * @Date: 2022-07-11 21:43:12
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 14:09:04
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\index.tsx
 * @Description:
 */
import React, { useState } from 'react';
import { Box, Heading } from 'native-base';
import { StyleSheet } from 'react-native';
import SignHeader from './SignHeader';
import Sign from './Sign';
import ForgetPassword from './ForgetPassword';
import Register from './Register';
import useFetchData from '@src/hooks/useFetchData';

const Auth = () => {
  // 切换不同的表单
  const [switchFormStatus, setSwitchFormStatus] = useState('sign');
  const [switchFormTitle, setSwitchFormTitle] = useState('登录');
  // 根据不同的按钮切换不同的表单
  const handleSwitchFormStatus = () => {
    if (switchFormStatus === 'sign') {
      return (
        <Sign setSwitchFormStatus={setSwitchFormStatus} setSwitchFormTitle={setSwitchFormTitle} />
      );
    } else if (switchFormStatus === 'forgetPassword') {
      return (
        <ForgetPassword
          setSwitchFormStatus={setSwitchFormStatus}
          setSwitchFormTitle={setSwitchFormTitle}
        />
      );
    } else if (switchFormStatus === 'register') {
      return (
        <Register
          setSwitchFormStatus={setSwitchFormStatus}
          setSwitchFormTitle={setSwitchFormTitle}
        />
      );
    }
  };
  // TODO:明天完成fetch的后期编写和登录逻辑的编写
  // 获取头像
  const { data, loading } = useFetchData('/uc/user/avatar/13132053657');
  console.log('data', data);
  console.log('loading', loading);
  return (
    <>
      <Box style={styles.container}>
        <SignHeader data={data} />
        <Heading>{switchFormTitle}</Heading>
        {handleSwitchFormStatus()}
      </Box>
    </>
  );
};

// 编写样式
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 20,
  },
  logo: {},
  signForm: {
    width: '100%',
  },
});

export default Auth;
