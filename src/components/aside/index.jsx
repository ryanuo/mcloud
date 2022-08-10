/*
 * @Author: Harry
 * @Date: 2022-08-08 15:53:24
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-09 22:32:05
 * @FilePath: \cloudm\src\components\aside\index.jsx
 */
import React, { useContext, useEffect, useState } from 'react'
import Meun from '@/components/menu';
import { MenuList } from '@/utils/menu'
import { Header } from '@/components/header';
import classes from './index.module.scss'
import { useLocation } from 'react-router-dom';
import MenuContext from '@/store/menu-context'
export const Asidemc = (props) => {
    const location = useLocation();
    const ctx = useContext(MenuContext)
    const [Menulist, setMenusData] = useState(MenuList)
    const { pathname } = location;
    // 菜单列表
    const [mList, setNewList] = useState({
        data: Menulist,
        clickPend: function () { }
    })
    ctx.data = Menulist
    // // 点击事件
    // const clickChanged = function (path) {
    //     const isactive = pathname.replace(/\//g, '')
    //     const a = oList.map(v => {
    //         v.isactived = v.path === isactive
    //         return v
    //     })
    //     console.log(a)
    //     setNewList(a)
    // }
    // 事件委托事件
    const clickPend = function (e) {
        // const { path } = e.target.dataset
        for (let i of Menulist) {
            for (let n of i.children) {
                n.isactived = n.path === e
            }
        }
        ctx.data = Menulist
        // setNewList(listtemp)
        // console.log(Menulist)
    }
    // // 只在页面加载时执行一次
    // useEffect(() => {
    //     ctx.data = Menulist
    // }, [ctx])
    return (
        <MenuContext.Provider value={{ ...mList, clickPend }}>
            <div className={classes.asideContainer}>
                <Header />
                {mList.data.map(v => <Meun children={v.children} key={v.idx} label={v.label} />)}
            </div>
        </MenuContext.Provider>
    )
}
