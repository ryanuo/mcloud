/*
 * @Author: Harry
 * @Date: 2022-08-07 21:49:42
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 14:17:58
 * @FilePath: \cloudm\src\router\index.tsx
 */
import { Spin } from 'antd'
import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import MainStage from '@/views/main'
import SearchShow from '@/views/search/SearchShow'

const Discover = lazy(async () => await import('@/views/discover'))
const Home = lazy(async () =>
  await import('@/views/discover/home')
)
const Ranking = lazy(async () => await import('@/views/discover/ranking'))
const Album = lazy(async () => await import('@/views/discover/album'))
const Songs = lazy(async () => await import('@/views/discover/sing'))
const Like = lazy(async () => await import('@/views/discover/like'))
const NotFound = lazy(async () => await import('@/components/NotFound'))

const routes = [
  {
    path: '/',
    element: <Discover />,
    children: [
      {
        path: '',
        element: <Navigate to='/home' />
      },
      {
        path: 'home',
        element: <Suspense fallback={<Spin tip="Loading..." />}><Home /></Suspense>
      },
      {
        path: 'search',
        element: <Suspense fallback={<Spin tip="Loading..." />}><SearchShow /></Suspense>
      },
      {
        path: 'ranking',
        element: <Suspense fallback={<Spin tip="Loading..." />}><Ranking /></Suspense>
      },
      {
        path: 'album',
        element: <Suspense fallback={<Spin tip="Loading..." />}><Album /></Suspense>
      },
      {
        path: 'singer',
        element: <Suspense fallback={<Spin tip="Loading..." />}><Songs /></Suspense>
      },
      {
        path: 'like',
        element: <Suspense fallback={<Spin tip="Loading..." />}><Like /></Suspense>
      },
      {
        path: 'main',
        element: <Suspense fallback={<Spin tip="Loading..." />}><MainStage /></Suspense>
      },
      {
        path: '*',
        element: <Suspense fallback={<Spin tip="Loading..." />}><NotFound /></Suspense>
      }
    ]
  },
  {
    path: '*',
    exact: true,
    element: <NotFound />
  }
]
export default routes
