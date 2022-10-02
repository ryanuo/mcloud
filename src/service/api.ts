/*
 * @Author: Harry
 * @Date: 2022-08-07 18:30:29
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 22:39:11
 * @FilePath: \cloudm\src\service\api.ts
 */
import { formType } from '@/typings/'

import http from './http'
// 请求列表
const ApiUrl = {
  LOGIN_URL: '/login/cellphone',
  LOGIN_MA_URL: '/login/qr/key',
  LOGIN_CAPTCHA_URL: '/captcha/sent',
  LOGIN_PIC_URL: '/login/qr/create',
  LOGIN_CHECK_MA_URL: '/login/qr/check',
  RECOMMEND_URL_TODAY: '/recommend/resource' // 获取每日推荐歌单
}

// 登录接口1 手动登录
export const LoginAccess = async function(params: formType) {
  return await http({
    url: ApiUrl.LOGIN_URL,
    method: 'get',
    params
  })
}

// 验证码接口
export const captchaAccess = async function(params: formType) {
  return await http({
    url: ApiUrl.LOGIN_CAPTCHA_URL,
    method: 'get',
    params
  })
}

// 登录接口二： 二维码登录

// 获取每日推荐歌单
export const todaySongSheet = async function() {
  return await http({
    url: ApiUrl.RECOMMEND_URL_TODAY
  })
}
