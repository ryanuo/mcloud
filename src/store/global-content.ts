/*
 * @Author: Harry
 * @Date: 2022-08-12 21:20:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:13:16
 * @FilePath: \cloudm\src\store\global-content.ts
 */
import React from 'react'

export default React.createContext({
  isShowLoginState: false as boolean,
  setShowState: (e: Boolean) => null
})
