/*
 * @Author: Harry
 * @Date: 2022-08-07 18:30:29
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 12:45:24
 * @FilePath: \cloudm\src\service\api.ts
 */
import { AxiosResponse } from 'axios'

import { apiUrl } from '@/constants'
import { formType, searchParamsType, searchResponse, userInfoType } from '@/typings/'

import http from './http'

// 登录接口1 手动登录
export const LoginAccess = async function(params: formType) {
  return await http({
    url: apiUrl.LOGIN_URL,
    method: 'get',
    params
  })
}

// 验证码接口
export const captchaAccess = async function(params: formType) {
  return await http({
    url: apiUrl.LOGIN_CAPTCHA_URL,
    method: 'get',
    params
  })
}

// 搜索
export const searchAccess = function(params: searchParamsType): Promise<AxiosResponse<searchResponse, any>> | searchResponse {
  return http({
    url: apiUrl.Search_URL,
    method: 'get',
    params
  })
}

// 用户详情
export const UserInfoAccess = function(params: { uid: number }): Promise<AxiosResponse<userInfoType, any>> {
  return http({
    url: apiUrl.USERINFO_URL,
    method: 'get',
    params
  })
}
