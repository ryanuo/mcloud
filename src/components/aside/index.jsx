/*
 * @Author: Harry
 * @Date: 2022-08-08 15:53:24
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-10 23:16:49
 * @FilePath: \cloudm\src\components\aside\index.jsx
 */
import React, { useEffect, useState } from 'react'
import Meun from '@/components/menu';
import { MenuList } from '@/utils/menu';
import { Header } from '@/components/header';
import classes from './index.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuContext from '@/store/menu-context';
export const Asidemc = (props) => {
    const location = useLocation();
    const [Menulist, setMenusData] = useState(MenuList)
    const { pathname } = location;
    const navigate = useNavigate()
    // 菜单列表
    // 事件委托事件
    const clickPend = function (e) {
        const a_copy = [...MenuList]
        for (let i of a_copy) {
            for (let n of i.children) {
                n.isactived = n.path === e
            }
        }
        setMenusData(a_copy)
        navigate('/' + e)
    }
    // 只在页面加载时执行一次
    useEffect(() => {
        const p_ = pathname.replace(/\//g, '')
        clickPend(p_)
    }, [])
    return (
        <MenuContext.Provider value={{ clickPend }}>
            <div className={classes.asideContainer}>
                <Header />
                {Menulist.map(v => <Meun children={v.children} key={v.idx} label={v.label} />)}
            </div>
        </MenuContext.Provider>
    )
}
