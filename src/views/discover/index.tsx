/*
 * @Author: Harry
 * @Date: 2022-08-08 11:21:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 03:33:28
 * @FilePath: \cloudm\src\views\discover\index.tsx
 */
import React, { memo } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import { Asidemc } from '@/components/aside'
import Content from '@/components/content'
import routes from '@/router'

import classes from './index.module.scss'

export default memo(function Discover() {
  const ele = useRoutes(routes)
  console.log(ele)
  return (
    <div className={classes.Discover}>
      <Asidemc />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
})
