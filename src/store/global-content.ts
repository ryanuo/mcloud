/*
 * @Author: Harry
 * @Date: 2022-08-12 21:20:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-03 14:07:13
 * @FilePath: \cloudm\src\store\global-content.ts
 */
import React from 'react'

export default React.createContext({
  isLogined: false as boolean,
  isShowLogin: false as boolean,
  setIsShowLogin: (e: boolean) => null,
  setIsLogined: (e: boolean) => null
})
