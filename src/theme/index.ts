/*
 * @Author: bugdr
 * @Date: 2022-07-12 10:13:46
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 08:02:43
 * @FilePath: \SunOfBeacheRN\src\theme\index.ts
 * @Description:全局主题配置
 */
import { extendTheme } from 'native-base';
import { colorsConfig } from './var/colorsConfig';
import { config } from './var/config';
import { fontConfig } from './var/fontConfig';

export const theme = extendTheme({
  colors: colorsConfig,
  config: config,
  fontConfig: fontConfig,
});
