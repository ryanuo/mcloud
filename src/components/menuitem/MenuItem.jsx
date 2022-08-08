/*
 * @Author: Harry
 * @Date: 2022-08-08 13:47:17
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 16:32:50
 * @FilePath: \cloudm\src\components\menuitem\MenuItem.jsx
 */
import React from 'react'
import classes from './index.module.scss'
export const MenuItem = (props) => {
    console.log(props)
    return (
        <div className={classes.MenuItem}>
            <span className={classes.Icon}>{props.icon}</span>
            <span>{props.label}</span>
        </div>
    )
}
