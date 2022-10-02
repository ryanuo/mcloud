/*
 * @Author: Harry
 * @Date: 2022-08-07 21:49:42
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 03:32:27
 * @FilePath: \cloudm\src\router\index.tsx
 */
import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

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
        element: <Suspense fallback={<div>Loading</div>}><Home /></Suspense>
      },
      {
        path: 'ranking',
        element: <Suspense fallback={<div>Loading</div>}><Ranking /></Suspense>
      },
      {
        path: 'album',
        element: <Suspense fallback={<div>Loading</div>}><Album /></Suspense>
      },
      {
        path: 'singer',
        element: <Suspense fallback={<div>Loading</div>}><Songs /></Suspense>
      },
      {
        path: 'like',
        element: <Suspense fallback={<div>Loading</div>}><Like /></Suspense>
      },
      {
        path: '*',
        element: <Suspense fallback={<div>Loading</div>}><NotFound /></Suspense>
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
