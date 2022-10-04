
/*
 * @Author: Harry
 * @Date: 2022-08-12 20:50:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 14:21:24
 * @FilePath: \cloudm\src\components\content\ctnheader\other\index.tsx
 */

import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Modal } from 'antd'
import React, { memo, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SvgNologin from '@/assets/svg/SvgNologin'
import globalContent from '@/store/global-content'

import classes from './index.module.scss'

const { confirm } = Modal

const layout = (callback) => {
  confirm({
    icon: <ExclamationCircleOutlined />,
    content: '是否退出登录？',
    onOk() {
      localStorage.clear()
      callback()
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}

const menu = function(fn, navigate) {
  return <Menu
    items={[
      {
        key: '1',
        label: (
          <span onClick={() => navigate('/main')}>我的主页</span>
        )
      },
      {
        key: '2',
        label: (
          <span onClick={() => layout(fn)}>退出登录</span>
        )
      }
    ]}
  />
}

const OtherHd = () => {
  const ctx = useContext(globalContent)
  const navigate = useNavigate()
  const [authorPic, setAuthorPic] = useState<string>('')

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('cookie')) {
      setAuthorPic(JSON.parse(localStorage.getItem('profile')).avatarUrl)
      ctx.setIsLogined(true)
    } else {
      ctx.setIsLogined(false)
    }
  }, [ctx.isLogined])

  return (
    <div className={classes.OtherHd}>
      {
        ctx.isLogined
          ? <Dropdown overlay={menu(() => ctx.setIsLogined(false), navigate)} placement="bottomLeft" arrow>
            <div className={classes.authorPic}>
              <img src={authorPic} alt="" />
            </div>
          </Dropdown>

          : <div onClick={() => ctx.setIsShowLogin(true)} className={classes.OtherHdSvg}>
            <SvgNologin /> 未登录
          </div>
      }

    </div>
  )
}

export default memo(OtherHd)
