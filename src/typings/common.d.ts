/*
 * @Author: Harry
 * @Date: 2022-10-02 10:15:46
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 22:13:38
 * @FilePath: \cloudm\src\typings\common.d.ts
 */

/**
 * 菜单类型
 */
export interface menuChildrenType {
  idx?: string
  isactived?: boolean
  path?: string
  label?: string | JSX.Element
  icon?: JSX.Element
}

export interface menuListType {
  idx?: number
  path?: string
  label?: string | JSX.Element
  children?: menuChildrenType[]
}

// 登录传参类型
export interface formType {
  username?: string
  phone?: string
  email?: string
  password?: string
  md5_password?: string
  captcha?: string
}
