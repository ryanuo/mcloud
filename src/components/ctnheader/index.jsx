/*
 * @Author: Harry
 * @Date: 2022-08-10 23:10:26
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 19:26:50
 * @FilePath: \cloudm\src\components\ctnheader\index.jsx
 */
import React, { memo, useState, useEffect } from 'react'
import SvgLeft from '@/assets/svg/SvgLeft'
import SvgRight from '@/assets/svg/SvgRight'
import classes from './index.module.scss'
const CtnHeader = (props) => {
    const initHistoryList = []
    const [historyList, sethistoryList] = useState(initHistoryList)
    useEffect(() => {
        const newList = [...historyList]
        newList.push(props.history)
        sethistoryList(newList)
    }, [props.history])
    console.log(historyList)
    return (
        <div className={classes.CtnHeader}>
            <div className={classes.LfWrap}>
                <button className={historyList.length <= 1 ? classes.noPage : ''}><SvgLeft  /></button>
                <button className={historyList.length <= 1 ? classes.noPage : ''}><SvgRight /></button>
            </div>
            <div className={classes.Search}></div>
            <div className={classes.OtherEle}></div>
        </div>
    )
}

export default memo(CtnHeader)