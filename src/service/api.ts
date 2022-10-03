/*
 * @Author: Harry
 * @Date: 2022-08-07 18:30:29
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-03 10:51:47
 * @FilePath: \cloudm\src\service\api.ts
 */
import { apiUrl } from '@/constants'
import { formType } from '@/typings/'

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

// 登录接口二： 二维码登录

// 获取每日推荐歌单
export const todaySongSheet = async function() {
  return await http({
    url: apiUrl.RECOMMEND_URL_TODAY
  })
}
