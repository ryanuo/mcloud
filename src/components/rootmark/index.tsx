/*
 * @Author: Harry
 * @Date: 2022-08-12 21:35:45
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:25:16
 * @FilePath: \cloudm\src\components\rootmark\index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'

import classes from './index.module.scss'

const rootMark = document.getElementById('root_mark')

interface RootMarkProps {
  className?: string
  children?: JSX.Element
  [key: string]: any
}

export const RootMark = (props: RootMarkProps) => {
  return ReactDOM.createPortal(<div {...props} className={`${classes.rootmark} ${props.className}`}>
    {props.children}
  </div>, rootMark)
}
