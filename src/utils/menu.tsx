/*
 * @Author: Harry
 * @Date: 2022-08-08 12:31:52
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:22:46
 * @FilePath: \cloudm\src\utils\menu.tsx
 */
import React from 'react'

import { SvgAlbum } from '@/assets/svg/SvgAlbum'
import { SvgHome } from '@/assets/svg/SvgHome'
import { SvgLike } from '@/assets/svg/SvgLike'
import { SvgRank } from '@/assets/svg/SvgRank'
import { SvgSinger } from '@/assets/svg/SvgSinger'

export const MenuList = [
  {
    idx: 0,
    path: '',
    label: '发现音乐',
    children: [
      { idx: '0-1', isactived: false, path: 'home', label: '首页', icon: <SvgHome /> },
      { idx: '0-2', isactived: false, path: 'singer', label: '歌手', icon: <SvgSinger /> },
      { idx: '0-3', isactived: false, path: 'album', label: '专辑', icon: <SvgAlbum /> },
      { idx: '0-4', isactived: false, path: 'ranking', label: '排行', icon: <SvgRank /> }
    ]
  },
  {
    idx: 1,
    path: 'mine',
    label: '我的音乐',
    children: [
      { idx: '1-1', isactived: false, path: 'like', label: '我喜欢的音乐', icon: <SvgLike /> }
    ]
  }
]
