/*
 * @Author: Harry
 * @Date: 2022-08-10 23:10:26
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:15:46
 * @FilePath: \cloudm\src\components\ctnheader\index.tsx
 */
import React, { memo } from 'react'

import SvgLeft from '@/assets/svg/SvgLeft'
import SvgRight from '@/assets/svg/SvgRight'

import classes from './index.module.scss'
import OtherHd from './other'
import Search from './search'

const isHaveHistory = false

const CtnHeader = () => {
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
