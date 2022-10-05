/*
 * @Author: Harry
 * @Date: 2022-10-04 14:16:53
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 21:13:07
 * @FilePath: \cloudm\src\views\mine\index.tsx
 */
// import cloneDeep from 'lodash/cloneDeep'
import React, { useContext, useEffect, useState } from 'react'

import NotLogin from '@/components/notlogin'
import { modeType } from '@/constants'
import { UserInfoAccess } from '@/service/api'
import globalContent from '@/store/global-content'
import { userInfoResponse } from '@/typings/'

import FormUser from './components/FormUser'

export const userInfoInit: userInfoResponse = {
  code: 0,
  level: 0,
  listenSongs: 0,
  profile: {
    birthday: 1664939424099,
    gender: 1,
    nickname: '夏天在努力',
    avatarUrl: 'http://p1.music.126.net/I5GXJbPRG2ZlVTbJIKwSWg==/109951166600068473.jpg',
    province: 140000,
    city: 140100,
    defaultAvatar: false,
    backgroundUrl: 'http://p1.music.126.net/l1Ju2mVq68uMpIUqQZJWbA==/109951165370245575.jpg',
    createTime: 1543479007737,
    description: '',
    userId: 1686269255,
    signature: '喜欢唱歌的男孩\n公众号：今日在学',
    followeds: 3,
    follows: 10,
    playlistCount: 2
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
    // const res: userInfoResponse = {
    //   level: 9,
    //   listenSongs: 16528,
    //   profile: {
    //     birthday: 1664939424099,
    //     gender: 1,
    //     nickname: '夏天在努力',
    //     avatarUrl: 'http://p1.music.126.net/I5GXJbPRG2ZlVTbJIKwSWg==/109951166600068473.jpg',
    //     province: 140000,
    //     city: 140100,
    //     defaultAvatar: false,
    //     backgroundUrl: 'http://p1.music.126.net/l1Ju2mVq68uMpIUqQZJWbA==/109951165370245575.jpg',
    //     createTime: 1543479007737,
    //     description: '',
    //     userId: 1686269255,
    //     signature: '喜欢唱歌的男孩\n公众号：今日在学',
    //     followeds: 3,
    //     follows: 10,
    //     playlistCount: 2
    //   },
    //   code: 200
    // }
    res.profile.level = res.level
    res.profile.listenSongs = res.listenSongs
    setUserInfo(res)
  }

  // 请求用户数据
  useEffect(() => {
    if (isLogined) {
      getUserInfo()
    }
  }, [isLogined])

  return (
    <>
      {isLogined ? <FormUser type={mode} data={userInfo.profile} /> : <NotLogin />}
      {
        mode === modeType.Detail
          ? <span onClick={() => setMode(modeType.Edit)}>编辑</span>
          : <span onClick={() => setMode(modeType.Detail)}>取消</span>
      }
    </>
  )
}
export default MainStage
