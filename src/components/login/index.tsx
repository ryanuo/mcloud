/*
 * @Author: Harry
 * @Date: 2022-08-12 21:42:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 10:05:56
 * @FilePath: \cloudm\src\components\login\index.tsx
 */
import React, { useContext, useState } from 'react'

import { StylAnimateEnum } from '@/constants'
import globalContent from '@/store/global-content'

import { RootMark } from '../rootmark'
import FormWrap from './from'
import classes from './index.module.scss'

const Login = () => {
  const ctx = useContext(globalContent)

  const [stylAnimate, setStylAnimate] = useState<StylAnimateEnum>(StylAnimateEnum.fadeInDown)

  const PreForm = function(e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  return (
    <RootMark onClick={() => ctx.setIsShowLogin(false)} className={classes.rootmarklogin}>
      <div className={classes.login + stylAnimate} onClick={PreForm}>
        <FormWrap onAnimate={setStylAnimate} />
      </div>
    </RootMark>
  )
}

export default Login
