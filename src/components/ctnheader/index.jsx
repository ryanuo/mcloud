/*
 * @Author: Harry
 * @Date: 2022-08-10 23:10:26
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 20:51:41
 * @FilePath: \cloudm\src\components\ctnheader\index.jsx
 */
import React, { memo } from 'react'
import SvgLeft from '@/assets/svg/SvgLeft'
import SvgRight from '@/assets/svg/SvgRight'
import classes from './index.module.scss'
import Search from './search'
import OtherHd from './other'
const CtnHeader = (props) => {
    let isHaveHistory = false
    return (
        <div className={classes.CtnHeader}>
            <div className={classes.LfWrap}>
                <button><SvgLeft /></button>
                <button className={isHaveHistory ? '' : classes.noPage}><SvgRight /></button>
            </div>
            <div className={classes.Search}>
                <Search />
            </div>
            <div className={classes.OtherEle}>
                <OtherHd />
            </div>
        </div>
    )
}

export default memo(CtnHeader)