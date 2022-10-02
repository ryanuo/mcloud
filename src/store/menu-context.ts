/*
 * @Author: Harry
 * @Date: 2022-08-09 12:03:43
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 03:32:58
 * @FilePath: \cloudm\src\store\menu-context.ts
 */
import React from 'react'

export default React.createContext({
  clickPend: (path: string) => null
})
