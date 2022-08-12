/*
 * @Author: Harry
 * @Date: 2022-08-08 15:14:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-10 23:13:12
 * @FilePath: \cloudm\src\components\header\index.jsx
 */
import React from 'react'
import classes from './index.module.scss'
export const Header = () => {
    return (
        <>
            <div className={classes.Header}>
                <div>
                    <img src="/image/logo.svg" alt="" />
                </div>
                <div className={classes.titleWrapHd}>
                    <div>Hello,用户👏</div>
                    <div className={classes.title2}>Mcloud</div>
                </div>
            </div>
        </>
    )
}
