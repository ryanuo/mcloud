/*
 * @Author: Harry
 * @Date: 2022-08-08 13:47:17
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:08:25
 * @FilePath: \cloudm\src\components\menuitem\MenuItem.tsx
 */
import React, { useContext } from 'react'

import MenuContext from '@/store/menu-context'
import { menuChildrenType } from '@/typings/'

import classes from './index.module.scss'

export default function MenuItem(props: menuChildrenType) {
  const { path, label, icon, isactived } = props
  const ctx = useContext(MenuContext)

  return (
    <div onClick={() => ctx.clickPend(path)} data-path={path} className={isactived ? classes.isactived + ' ' + classes.MenuItem : classes.MenuItem}>
      < span className={classes.Icon} > {icon}</span >
      <span>{label}</span>
    </div >
  )
}
