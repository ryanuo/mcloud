/*
 * @Author: Harry
 * @Date: 2022-08-08 15:14:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 03:16:10
 * @FilePath: \cloudm\src\components\header\index.tsx
 */
import React from 'react'

import classes from './index.module.scss'

export const Header = function() {
  return (
    <>
      <div className={classes.Header}>
        <div>
          <img src="/image/logo.svg" alt="" />
        </div>
        <div className={classes.titleWrapHd}>
          <div>Hello,用户👏</div>
          <div className={classes.title2}>Mcloud</div>
        </div>
      </div>
    </>
  )
}
