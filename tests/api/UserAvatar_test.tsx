import useFetchData from '@src/hooks/useFetchData';
import React from 'react';
import { Text } from 'react-native';

const UserAvatarTest = () => {
  const { loading, data } = useFetchData('https://api.sunofbeaches.com/uc/user/avatar/13132053657');
  console.log('data', data);
  return (
    <>
      <Text>{data}</Text>
      <Text>{loading}</Text>
    </>
  );
};
export default UserAvatarTest;
