/*
 * @Author: Harry
 * @Date: 2022-08-08 11:21:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 20:01:22
 * @FilePath: \cloudm\src\views\discover\index.jsx
 */
import React, { memo } from 'react'
import { useRoutes, Outlet } from "react-router-dom";
import { Asidemc } from '@/components/aside'
import classes from './index.module.scss'
// 导入自己定义的工具
import routes from "@/router";
export default memo(function Discover() {
    const ele = useRoutes(routes)
    console.log(ele);
    return (
        <div className={classes.Home}>
            <Asidemc />
            < Outlet />
        </div>
    )
})
