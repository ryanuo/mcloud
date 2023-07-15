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
