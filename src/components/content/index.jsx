/*
 * @Author: Harry
 * @Date: 2022-08-10 23:04:32
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-12 21:47:18
 * @FilePath: \cloudm\src\components\content\index.jsx
 */
import React from 'react'
import GlobalContent from '@/store/global-content'
import CtnHeader from '../ctnheader'
import RightComp from '../RightComp/RightComp'
import classes from './index.module.scss'
import { useContext } from 'react'
import Login from '../login'
import { useState } from 'react'
const Content = (props) => {
    const ctx = useContext(GlobalContent)
    const [isshowLogin, setisshowLogin] = useState(ctx.isShowLoginState)
    const setShowState = function (val) {
        ctx.isShowLoginState = val
        setisshowLogin(val)
    }
    return (
        <>
            <GlobalContent.Provider value={{ setShowState }}>
                <div className={classes.Content}>
                    <CtnHeader />
                    <div className={classes.MidContent}>
                        <div className={classes.Lcont}>
                            {props.children}
                        </div>
                        <div className={classes.Rcont}>
                            <RightComp />
                        </div>
                    </div>
                </div>
                {isshowLogin ? <Login /> : null}
            </GlobalContent.Provider>
        </>
    )
}

export default Content