
/*
 * @Author: Harry
 * @Date: 2022-08-12 20:50:11
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 11:43:00
 * @FilePath: \cloudm\src\components\content\ctnheader\other\index.tsx
 */

import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Modal } from 'antd'
import React, { memo, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SvgNologin from '@/assets/svg/SvgNologin'
import { checkLoginStatus, Logout } from '@/service/api'
import globalContent from '@/store/global-content'

import classes from './index.module.scss'

const { confirm } = Modal

const layout = (callback) => {
  confirm({
    icon: <ExclamationCircleOutlined />,
    content: '是否退出登录？',
    onOk() {
      localStorage.clear()
      // 清除所有cookie函数
      const cookies = document.cookie.split(';')
      Logout()
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
        document.cookie = 'cookieName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/path; domain=localhost'
      }

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
          <span onClick={() => navigate('/mine')}>我的主页</span>
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

  const getUserMessage = async function() {
    const res = await checkLoginStatus()

    if (res.data.code === 200 && res.data.profile && !document.cookie.split(';')?.[0]) {
      if (!localStorage.getItem('profile')) {
        localStorage.setItem('profile', JSON.stringify(res.data.profile))
      }

      ctx.setIsLogined(true)
      setAuthorPic(res.data.profile?.avatarUrl)
    } else {
      ctx.setIsLogined(false)
    }
  }

  useEffect(() => {
    getUserMessage()
  }, [ctx.isLogined, ctx.isShowLogin])

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
