/*
 * @Author: Harry
 * @Date: 2022-10-02 10:15:46
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:04:46
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
