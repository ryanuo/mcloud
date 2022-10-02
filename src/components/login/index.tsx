/*
 * @Author: Harry
 * @Date: 2022-08-12 21:42:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:24:51
 * @FilePath: \cloudm\src\components\login\index.tsx
 */
import React, { useContext } from 'react'

import globalContent from '@/store/global-content'

import { RootMark } from '../rootmark'
import FormWrap from './from'
import classes from './index.module.scss'

const Login = () => {
  const ctx = useContext(globalContent)
  const PreFoam = function(e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }
  return (
    <RootMark onClick={() => ctx.setShowState(false)} className={classes.rootmarklogin}>
      <div className={classes.Login} onClick={PreFoam}>
        <FormWrap />
      </div>
    </RootMark>
  )
}

export default Login
