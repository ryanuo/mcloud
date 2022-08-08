/*
 * @Author: Harry
 * @Date: 2022-08-08 15:53:24
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 15:59:04
 * @FilePath: \cloudm\src\components\aside\index.jsx
 */
import React from 'react'
import Meun from '@/components/menu';
import { MenuList } from '@/utils/menu'
import { Header } from '@/components/header';
import classes from './index.module.scss'
export const Asidemc = () => {
    return (
        <div className={classes.asideContainer}>
            <Header />
            {MenuList.map(v => <Meun children={v.children} key={v.idx} label={v.label} />)}
        </div>
    )
}
