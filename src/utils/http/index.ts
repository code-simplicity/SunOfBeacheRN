/*
 * @Author: bugdr
 * @Date: 2022-07-13 19:44:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 21:34:50
 * @FilePath: \SunOfBeacheRN\src\utils\http\Fetch.ts
 * @Description:fetch返回的实例
 */
import { useHToast } from '@src/hooks/useHToast';
import qs from 'qs';
import { filterObject } from '../index';
import { Config } from './config';
import { IMethods } from './enum';

// 自定义请求错误接口类型
export interface ICustomRequestError {
  success: boolean; // 是否成功
  code: number; // 返回状态码
  message: string; // 返回消息
  data: any; // 返回数据
}

// 错误处理弹窗的吐司块
function defErrorToast(err: Error & ICustomRequestError, abortController?: AbortController) {
  // 通过不同的状态码显示不同的吐司块
  switch (err.code) {
    case 40000: {
      abortController && abortController.abort();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useHToast({ description: err.message });
      // 吐司块占据位置
      break;
    }
    default: {
      console.log('err', err);
      break;
    }
  }
}

// 声明请求头类型
interface IHeaderConfig {
  Accept?: string;
  'Content-Type': string;
  [propName: string]: any;
}

// 返回的接口数据类型
export interface IResponseData {
  success: boolean; // 是否成功
  code: number; // 返回状态码
  message: string; // 返回消息
  data: any; // 返回数据
}

interface IAnyMap {
  [propName: string]: any;
}

// 请求的配置类型
export interface IRequestOptions {
  headers?: IHeaderConfig;
  signal?: AbortSignal;
  method?: IMethods;
  query?: IAnyMap;
  params?: IAnyMap;
  data?: IAnyMap;
  body?: string;
  timeout?: number;
  credentials?: 'include' | 'same-origin';
  mode?: 'cors' | 'same-origin';
  cache?: 'no-cache' | 'default' | 'force-cache';
}

// http request
interface IHttpInterface {
  request<T>(url: string, options?: IRequestOptions): Promise<T>;
}

// 可以发送的请求
const SEND_METHOD = ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'];

class HttpFetch implements IHttpInterface {
  // 返回实例对象
  public async request<T>(
    url: string,
    options?: IRequestOptions,
    abortController?: AbortController,
  ): Promise<T> {
    const opts = Object.assign(
      {
        method: 'GET',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        credentials: 'include', // 允许跨域
        timeout: 60 * 1000,
        mode: 'cors',
        cache: 'no-cache',
      },
      options,
    ); // 拷贝参数，如果存在就替换，默认GET请求

    // 中断请求
    abortController && (opts.signal = abortController.signal);

    // query明码参数连接
    if (opts && opts.query) {
      url += `${url.includes('?') ? '&' : '?'}${qs.stringify(filterObject(opts.query, Boolean))}`;
    }

    // 发送
    const canSend = opts && opts.method && SEND_METHOD.includes(opts.method);

    if (canSend && opts.data) {
      opts.body = JSON.stringify(filterObject(opts.data, Boolean));
      opts.header && Reflect.set(opts.header, 'Content_Type', 'application/json');
    }

    // 输出log
    console.log('Request Opts', opts);

    // 正式发送
    try {
      const res = await Promise.race([
        fetch(Config.API_URL + url, opts),
        new Promise<any>((_, reject) => {
          setTimeout(() => {
            return reject({
              code: 40000,
              message: '请求超时，请稍后重试',
              data: url,
            });
          }, opts.timeout);
        }),
      ]);
      const result = await res.json();
      return result;
    } catch (error: any) {
      defErrorToast(error, abortController); // 中断请求
      return error;
    }
  }
}

const { request } = new HttpFetch();

export { request as default };
