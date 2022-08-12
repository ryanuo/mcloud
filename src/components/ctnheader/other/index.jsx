/*
 * @Author: Harry
 * @Date: 2022-08-12 20:50:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 21:32:25
 * @FilePath: \cloudm\src\components\ctnheader\other\index.jsx
 */
import React, { useState } from 'react'
import SvgNologin from '@/assets/svg/SvgNologin'
import classes from './index.module.scss'
import globalContent from '@/store/global-content'
import { useContext } from 'react'
const OtherHd = () => {
    const [isLogined, setIsLogined] = useState(false)
    const ctx = useContext(globalContent)
    return (
        <div className={classes.OtherHd}>
            {
                isLogined ?
                    <div>
                        <img src="" alt="" />
                    </div>
                    :
                    <div onClick={() => ctx.setShowState(true)} className={classes.OtherHdSvg}>
                        <SvgNologin /> 未登录
                    </div>
            }

        </div>
    )
}

export default OtherHd