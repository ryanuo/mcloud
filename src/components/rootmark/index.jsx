/*
 * @Author: Harry
 * @Date: 2022-08-12 21:35:45
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 21:35:48
 * @FilePath: \cloudm\src\components\rootmark\index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.scss'
const rootMark = document.getElementById('root_mark')
export const RootMark = (props) => {
    return ReactDOM.createPortal(<div {...props} className={`${classes.rootmark} ${props.className}`}>
        {props.children}
    </div>, rootMark)
}