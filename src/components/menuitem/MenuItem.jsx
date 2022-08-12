/*
 * @Author: Harry
 * @Date: 2022-08-08 13:47:17
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-10 22:37:29
 * @FilePath: \cloudm\src\components\menuitem\MenuItem.jsx
 */
import React from 'react'
import { useContext } from 'react'
import MenuContext from '@/store/menu-context'
import classes from './index.module.scss'
export default function MenuItem(props) {
    const ctx = useContext(MenuContext)
    return (
        <div onClick={() => ctx.clickPend(props.path)} data-path={props.path} className={props.isactived ? classes.MenuItem + ' ' + classes.isactived : classes.MenuItem}>
            < span className={classes.Icon} > {props.icon}</span >
            <span>{props.label}</span>
        </div >
    )
}
