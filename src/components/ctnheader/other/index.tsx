
/*
 * @Author: Harry
 * @Date: 2022-08-12 20:50:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:45:28
 * @FilePath: \cloudm\src\components\ctnheader\other\index.Tsx
 */

import React, { useContext, useState } from 'react'

import SvgNologin from '@/assets/svg/SvgNologin'
import globalContent from '@/store/global-content'

import classes from './index.module.scss'

const OtherHd = () => {
  const [isLogined] = useState<boolean>(false)

  const ctx = useContext(globalContent)
  return (
    <div className={classes.OtherHd}>
      {
        isLogined
          ? <div>
            <img src="" alt="" />
          </div>
          : <div onClick={() => ctx.setShowState(true)} className={classes.OtherHdSvg}>
            <SvgNologin /> 未登录
          </div>
      }

    </div>
  )
}

export default OtherHd
