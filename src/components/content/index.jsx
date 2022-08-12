/*
 * @Author: Harry
 * @Date: 2022-08-10 23:04:32
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 19:27:21
 * @FilePath: \cloudm\src\components\content\index.jsx
 */
import React from 'react'
import { useLocation } from 'react-router-dom'
import CtnHeader from '../ctnheader'
import classes from './index.module.scss'
const Content = (props) => {
    const local = useLocation()
    let currentGopage = local['pathname'].replace(/\//g, '')
    currentGopage = currentGopage === '' ? 'home' : currentGopage
    return (
        <div className={classes.Content}>
            <CtnHeader history={currentGopage} />
            {props.children}
        </div>
    )
}

export default Content