/*
 * @Author: bugdr
 * @Date: 2022-07-13 18:10:45
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 21:34:36
 * @FilePath: \SunOfBeacheRN\src\utils\index.ts
 * @Description:
 */

// 格式化对象
export function filterObject(obj: Record<string, string>, filler: Function) {
  const res: Record<string, string> = {};
  Object.keys(obj).forEach((key) => {
    if (filler(obj[key], key)) {
      res[key] = obj[key];
    }
  });
  return res;
}
