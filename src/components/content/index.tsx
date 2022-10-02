/*
 * @Author: Harry
 * @Date: 2022-08-10 23:04:32
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:14:09
 * @FilePath: \cloudm\src\components\content\index.Tsx
 */
import React, { useContext, useState } from 'react'

import CtnHeader from '@/components/ctnheader'
import GlobalContent from '@/store/global-content'

import Login from '../login'
import RightComp from '../RightComp/RightComp'
import classes from './index.module.scss'

const Content = (props: { children: JSX.Element }) => {
  const { children } = props

  const ctx = useContext(GlobalContent)

  const [isshowLogin, setisshowLogin] = useState<boolean>(ctx.isShowLoginState)

  const setShowState = function(val: boolean) {
    ctx.isShowLoginState = val
    setisshowLogin(val)
  }

  return (
    <>
      <GlobalContent.Provider value={{ ...ctx, setShowState }}>
        <div className={classes.Content}>
          <CtnHeader />
          <div className={classes.MidContent}>
            <div className={classes.Lcont}>
              {children}
            </div>
            <div className={classes.Rcont}>
              <RightComp />
            </div>
          </div>
        </div>
        {isshowLogin ? <Login /> : null}
      </GlobalContent.Provider>
    </>
  )
}

export default Content
