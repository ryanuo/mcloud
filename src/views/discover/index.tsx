/*
 * @Author: Harry
 * @Date: 2022-08-08 11:21:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 10:14:45
 * @FilePath: \cloudm\src\views\discover\index.tsx
 */
import React, { memo, useEffect, useState } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import { Asidemc } from '@/components/aside'
import Content from '@/components/content'
import routes from '@/router'
import GlobalContent from '@/store/global-content'

import classes from './index.module.scss'

export default memo(function Discover() {
  const [isLogined, setIsLogined] = useState<boolean>(false)

  const [isShowLogin, setIsShowLogin] = useState<boolean>(false)

  const ele = useRoutes(routes)
  console.log(ele)

  useEffect(() => {
    if (isLogined) {
      setIsShowLogin(false)
    }
  }, [isLogined])

  return (
    <GlobalContent.Provider value={{ isShowLogin, isLogined, setIsShowLogin, setIsLogined }}>
      <div className={classes.Discover}>
        <Asidemc />
        <Content>
          <Outlet />
        </Content>
      </div>
    </GlobalContent.Provider>
  )
})
