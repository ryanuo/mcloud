/*
 * @Author: Harry
 * @Date: 2022-08-08 13:20:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:03:53
 * @FilePath: \cloudm\src\components\menu\index.tsx
 */
import React, { useEffect, useState } from 'react'

import MenuItem from '@/components/menuitem/MenuItem'
import { menuChildrenType, menuListType } from '@/typings/'

import classes from './index.module.scss'

interface MenuProps extends menuListType {
  childrenList: menuChildrenType[]
}

export default function Meun(props: MenuProps) {
  const { childrenList, label } = props

  const [itemList, setNewItemList] = useState(childrenList)

  useEffect(() => {
    setNewItemList(childrenList)
  }, [props])

  return (
    <div className={classes.Meun}>
      <div className={classes.Label}>{label}</div>
      {itemList.map(v => <MenuItem icon={v.icon} isactived={v.isactived} key={v.idx} label={v.label} path={v.path}></MenuItem>)}
    </div >
  )
}
