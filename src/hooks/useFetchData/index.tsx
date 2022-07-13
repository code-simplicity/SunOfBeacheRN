/*
 * @Author: bugdr
 * @Date: 2022-07-13 21:42:29
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 21:56:50
 * @FilePath: \SunOfBeacheRN\src\hooks\useFetchData\index.tsx
 * @Description:接口数据封装的hooks
 */

import request, { ICustomRequestError, IRequestOptions, IResponseData } from '@src/utils/http';
import { useEffect, useRef, useState } from 'react';

interface IFetchResData<T> {
  data: T | undefined;
  loading: boolean;
  error: any;
}

function useFetchData<T = any>(url: string, options?: IRequestOptions): IFetchResData<T> {
  const [result, setResult] = useState<T>(); // 返回数据
  const [loading, setLoading] = useState<boolean>(false); // 返回加载状态
  const [error, setError] = useState<any>(null); // 返回错误结果

  // 中断取消请求
  const abortControllerRef = useRef<AbortController>();

  // 销毁函数
  function destory() {
    setResult(undefined);
    setLoading(false);
    setError(null);
    abortControllerRef.current && abortControllerRef.current.abort();
  }

  // 触发钩子

  useEffect(() => {
    setLoading(true);
    abortControllerRef.current = new AbortController();
    request(url, options || {}, abortControllerRef.current)
      .then((res) => {
        const { code, message, data } = res as IResponseData;
        // 这里后期做处理，判断返回的code，不同code做不同的提示就行
        if (code !== 10000) {
          console.log('Error Msg: ', message);
          throw new Error(message);
        }
        setResult(data);
      })
      .catch((err: ICustomRequestError) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => destory();
  }, [url, JSON.stringify(options)]);

  return { loading, data: result, error };
}

export default useFetchData;
