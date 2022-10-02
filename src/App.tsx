/*
 * @Author: Harry
 * @Date: 2022-08-07 18:13:44
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 02:59:29
 * @FilePath: \cloudm\src\App.tsx
 */
import React, { memo } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import routes from './router'

export default memo(function App() {
  const element = useRoutes(routes)

  return (
    <>
      {element}
      <Outlet />
    </>
  )
})
