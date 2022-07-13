/*
 * @Author: bugdr
 * @Date: 2022-07-13 13:08:46
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 17:28:51
 * @FilePath: \SunOfBeacheRN\src\screens\Auth\SignHeader\index.tsx
 * @Description:验证用户的头部，包含头像背景框
 */
import React from 'react';
import { Center, Image } from 'native-base';

const SignHeader = () => {
  return (
    <Center mb="6">
      <Image
        size={100}
        alt="fallback text"
        borderRadius={100}
        source={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
      />
    </Center>
  );
};

export default SignHeader;
