/*
 * @Author: Harry
 * @Date: 2022-08-08 13:20:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-10 22:36:43
 * @FilePath: \cloudm\src\components\menu\index.jsx
 */
import React, { useEffect, useState } from 'react'
import MenuItem from '@/components/menuitem/MenuItem';
import classes from './index.module.scss';
export default function Meun(props) {
    const [itemList, setNewItemList] = useState(props.children)
    useEffect(() => {
        setNewItemList(props.children);
    }, [props])
    return (
        <div className={classes.Meun}>
            <div className={classes.Label}>{props.label}</div>
            {itemList.map(v => <MenuItem icon={v.icon} isactived={v.isactived} key={v.idx} label={v.label} path={v.path}></MenuItem>)}
        </div >
    )
}
