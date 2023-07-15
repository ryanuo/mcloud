/*
 * @Author: Harry
 * @Date: 2022-08-08 15:14:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-03 15:19:47
 * @FilePath: \cloudm\src\components\header\index.tsx
 */
import React, { useContext, useEffect, useState } from 'react'

import globalContent from '@/store/global-content'

import classes from './index.module.scss'

export const Header = function() {
  const { isLogined } = useContext(globalContent)

  const [authorName, setAuthorName] = useState('用户')

  useEffect(() => {
    if (isLogined) {
      setAuthorName(JSON.parse(localStorage.getItem('profile'))?.nickname)
    } else {
      setAuthorName('用户')
    }
  }, [isLogined])

  return (
    <>
      <div className={classes.Header}>
        <div>
          <img src="./image/logo.svg" alt="" />
        </div>
        <div className={classes.titleWrapHd}>
          <div>Hello,{authorName}👏</div>
          <div className={classes.title2}>Mcloud</div>
        </div>
      </div>
    </>
  )
}
