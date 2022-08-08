/*
 * @Author: Harry
 * @Date: 2022-08-08 13:20:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 16:30:34
 * @FilePath: \cloudm\src\components\menu\index.jsx
 */
import React from 'react'
import { MenuItem } from '@/components/menuitem/MenuItem'
import classes from './index.module.scss'
export default function Meun(props) {
    return (
        <div className={classes.Meun}>
            <div className={classes.Label}>{props.label}</div>
            {props.children.map(v => <MenuItem icon={v.icon} key={v.idx} label={v.label}></MenuItem>)}
        </div >
    )
}
