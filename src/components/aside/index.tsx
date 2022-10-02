/*
 * @Author: Harry
 * @Date: 2022-08-08 15:53:24
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:24:36
 * @FilePath: \cloudm\src\components\aside\index.tsx
 */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import Meun from '@/components/menu'
import MenuContext from '@/store/menu-context'
import { menuListType } from '@/typings/'
import { MenuList } from '@/utils/menu'

import classes from './index.module.scss'

export function Asidemc() {
  const location = useLocation()

  const [Menulist, setMenusData] = useState<menuListType[]>(MenuList)

  const { pathname } = location
  const navigate = useNavigate()
  // 菜单列表

  // 事件委托事件
  const clickPend = function(e: string): void {
    const newData: menuListType[] = [...MenuList]

    for (const i of newData) {
      for (const n of i.children) {
        n.isactived = n.path === e
      }
    }

    setMenusData(newData)
    navigate('/' + e)
  }

  // 只在页面加载时执行一次
  useEffect(() => {
    const p_ = pathname.replace(/\//g, '')
    const P2_ = p_ === '' ? 'home' : p_
    clickPend(P2_)
  }, [])

  return (
    <MenuContext.Provider value={{ clickPend }}>
      <div className={classes.asideContainer}>
        <Header />
        {Menulist.map(v => <Meun childrenList={v.children} key={v.idx} label={v.label} />)}
      </div>
    </MenuContext.Provider>
  )
}
