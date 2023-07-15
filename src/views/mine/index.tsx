/*
 * @Author: Harry
 * @Date: 2022-10-04 14:16:53
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-06 18:22:18
 * @FilePath: \cloudm\src\views\mine\index.tsx
 */
import { message } from 'antd'
import cloneDeep from 'lodash/cloneDeep'
import React, { useContext, useEffect, useState } from 'react'

import NotLogin from '@/components/notlogin'
import { modeType } from '@/constants'
import { UpdateUserInfo, UserInfoAccess } from '@/service/api'
import globalContent from '@/store/global-content'
import { userInfoResponse, userInfoType } from '@/typings/'

import FormUser from './components/FormUser'

export const userInfoInit: userInfoResponse = {
  code: 0,
  level: 0,
  listenSongs: 0,
  profile: {
    birthday: 0,
    gender: 1,
    nickname: '',
    avatarUrl: '',
    province: 0,
    city: 140100,
    defaultAvatar: false,
    backgroundUrl: '',
    createTime: 0,
    description: '',
    userId: 0,
    signature: '',
    followeds: 0,
    follows: 0,
    playlistCount: 0
  }
}

function MainStage() {
  const { isLogined } = useContext(globalContent)

  const [userInfo, setUserInfo] = useState<userInfoResponse>(userInfoInit)

  const [mode, setMode] = useState<modeType>(modeType.Detail)

  const getUserInfo = async function() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const { userId } = profile

    const res = await UserInfoAccess({ uid: userId }) as userInfoResponse

    res.profile.level = res.level
    res.profile.listenSongs = res.listenSongs
    const newdata = cloneDeep(res)
    setUserInfo(newdata)
  }

  // 更新用户信息
  const onUpdateUser = async function(val: userInfoType, callback: () => void) {
    const res = await UpdateUserInfo(val)
    if (res.code === 200) {
      message.success('更新成功')
    } else {
      message.error('更新失败')
    }
    callback()
    setMode(modeType.Detail)
  }

  // 请求用户数据
  useEffect(() => {
    if (isLogined) {
      getUserInfo()
    }
  }, [isLogined, mode])

  return (
    <>
      {isLogined ? <FormUser onUpdate={onUpdateUser} onCancel={() => setMode(modeType.Detail)} type={mode} data={userInfo.profile} /> : <NotLogin />}
      {
        mode === modeType.Detail
          ? <span onClick={() => setMode(modeType.Edit)}>编辑</span>
          : null
      }
    </>
  )
}
export default MainStage
