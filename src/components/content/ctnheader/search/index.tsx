/*
 * @Author: Harry
 * @Date: 2022-08-12 18:20:57
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:15:30
 * @FilePath: \cloudm\src\components\ctnheader\search\index.tsx
 */
import { Input } from 'antd'
import React from 'react'

import SvgSearch from '@/assets/svg/SvgSearch'

const Search = () => {
  return (
    <>
      <Input placeholder="有什么喜欢听的歌吗" prefix={<SvgSearch />} />
    </>
  )
}

export default Search
