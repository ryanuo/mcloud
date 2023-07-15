/*
 * @Author: Harry
 * @Date: 2022-08-07 18:30:29
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-06 17:15:29
 * @FilePath: \cloudm\src\service\api.ts
 */
import { AxiosResponse } from 'axios'

import { apiUrl } from '@/constants'
import { formType, QRKey, QRType, searchParamsType, searchResponse, userInfoType } from '@/typings/'

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
export const UserInfoAccess = function(params: { uid: number }) {
  return http<userInfoType>({
    url: apiUrl.USERINFO_URL,
    method: 'get',
    params
  })
}

// 更新用户信息
export const UpdateUserInfo = function(params: userInfoType) {
  return http({
    url: apiUrl.USERINFO_UPDATE_URL,
    method: 'get',
    params
  })
}

// 二维码Key
export const getQrKey = function() {
  return http<QRKey>({
    url: apiUrl.LOGIN_MA_URL,
    method: 'get'
  })
}

export const createQrAPI = function(params: { key: string }) {
  return http<QRType>({
    url: apiUrl.LOGIN_QR_Creat_URL,
    method: 'get',
    params
  })
}

export const checkQrLoginStatus = function(params: { key: string }) {
  return http<{ code: number, message: string, cookie: string }>({
    url: apiUrl.LOGIN_QR_Check_URL,
    method: 'get',
    params
  })
}
