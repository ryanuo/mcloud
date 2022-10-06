/*
 * @Author: Harry
 * @Date: 2022-10-03 10:46:26
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-06 13:38:57
 * @FilePath: \cloudm\src\constants\common.ts
 */

/**
 * 不同环境的接口
 */
export enum differentEnvUrl {
  dev = '/api',
  pro = 'https://music.mr90.cf/'
}

/**
 * 请求接口地址
 */
export enum apiUrl {
  LOGIN_URL = '/login/cellphone',
  LOGIN_MA_URL = '/login/qr/key',
  LOGIN_CAPTCHA_URL = '/captcha/sent',
  LOGIN_PIC_URL = '/login/qr/create',
  LOGIN_CHECK_MA_URL = '/login/qr/check',
  RECOMMEND_URL_TODAY = '/recommend/resource', // 获取每日推荐歌单
  Search_URL = '/search', // 搜索
  USERINFO_URL = '/user/detail',
  USERINFO_UPDATE_URL = '/user/update'
}

/**
 * 请求成功后的提示文本
 */
export const statusMessageText = {
  [apiUrl.LOGIN_URL]: '登录成功'
}

export enum timeNumberEnum {
  timerCount = 60,
  timeout = 5000
}

// 编辑或者新增
export enum modeType {
  Detail = 'detail',
  Add = 'add',
  Edit = 'edit'
}
