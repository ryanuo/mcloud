/*
 * @Author: Harry
 * @Date: 2022-08-07 18:13:44
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:33:35
 * @FilePath: \cloudm\src\index.tsx
 */
import './index.less'
import '@/assets/css/themeVar.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
