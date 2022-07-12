/*
 * @Author: bugdr
 * @Date: 2022-07-12 10:13:46
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-12 16:57:16
 * @FilePath: \SunOfBeacheRN\src\theme\index.ts
 * @Description:全局主题配置
 */
import { extendTheme } from 'native-base';
import { Platform } from 'react-native';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    amber: {
      400: '#d97706',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});
