/*
 * @Author: Harry
 * @Date: 2022-10-02 10:15:46
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 19:25:52
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
  icon?: JSX.Element | string
  show?: boolean
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

export interface searchParamsType {
  keywords?: string
  type?: number
  limit?: number
}

interface userInfoType {
  level?: number
  listenSongs?: number
  userId?: number
  avatarUrl?: string
  gender?: number
  createTime?: number
  nickname?: string
  birthday?: number
  signature?: string
  followeds?: number
  follows?: number
  createDays?: number
  backgroundUrl?: string
  province?: number
  city?: number
  defaultAvatar?: boolean
  description?: string
  playlistCount?: number
}

export interface userInfoResponse {
  code?: number
  level?: number
  listenSongs?: number
  profile?: userInfoType
}

export interface searchResponse {
  code: number
  result: {
    hasMore: boolean
    songCount: number
    songs: []
  }
}
