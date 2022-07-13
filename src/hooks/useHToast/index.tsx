/*
 * @Author: bugdr
 * @Date: 2022-07-13 21:16:46
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 21:22:08
 * @FilePath: \SunOfBeacheRN\src\hooks\useHToast\index.tsx
 * @Description:吐司块弹窗的封装
 */
import { useToast } from 'native-base';
import { InterfaceToastProps } from 'native-base/lib/typescript/components/composites/Toast/types';

// 导出吐司块
export function useHToast(options: InterfaceToastProps) {
  const toast = useToast();
  const { description, title, placement = 'top' } = options;
  return toast.show({ description, title, placement });
}
