import { Config } from '@src/utils/http/config';
import { Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

const VerificationCode = () => {
  const [url, setUrl] = useState<string>();
  const handleClickVerification = () => {
    const dataString: any = new Date();
    const newCode: any = Date.parse(dataString);
    const code: string = `${Config.API_URL}/uc/ut/captcha?code=${newCode}`;
    setUrl(code);
  };
  useEffect(() => {
    handleClickVerification();
  }, []);
  return (
    <>
      <TouchableOpacity onPress={() => handleClickVerification()}>
        <Image
          width={140}
          height={10}
          borderRadius={6}
          source={{
            uri: url,
          }}
          alt="验证码"
        />
      </TouchableOpacity>
    </>
  );
};

export default VerificationCode;
