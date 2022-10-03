/*
 * @Author: Harry
 * @Date: 2022-08-10 23:04:32
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-03 14:32:38
 * @FilePath: \cloudm\src\components\content\index.Tsx
 */
import React, { useContext } from 'react'

import CtnHeader from '@/components/content/ctnheader'
import globalContent from '@/store/global-content'

import Login from '../login'
import RightComp from '../RightComp/RightComp'
import classes from './index.module.scss'

const Content = (props: { children: JSX.Element }) => {
  const { children } = props

  const { isShowLogin } = useContext(globalContent)

  return (
    <>
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
      {isShowLogin ? <Login /> : null}
    </>
  )
}

export default Content
