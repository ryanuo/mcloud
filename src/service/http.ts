/*
 * @Author: Harry
 * @Date: 2022-08-07 18:29:57
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 12:59:32
 * @FilePath: \cloudm\src\service\http.ts
 */
import axios from 'axios'
import * as qs from 'qs'

import { timeNumberEnum } from '@/constants'

import { BASE_URL, errorHandler } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: timeNumberEnum.timeout
})

// 请求拦截
// qs 序列化 防止XSRF攻击 可以对深层次的json array进行序列化
instance.interceptors.request.use(
  (config: any) => {
    config.transformRequest = [
      (data) => {
        return qs.stringify(data, {
          allowDots: true
        })
      }
    ]

    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    config.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'repeat'
      })
    }

    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res: any) => {
    return res.data
  },
  (err) => {
    if (err) {
      errorHandler(err)
    }
    return err
  }
)

const http = <T>(config): Promise<T> => instance(config) as Promise<T>

export default http
