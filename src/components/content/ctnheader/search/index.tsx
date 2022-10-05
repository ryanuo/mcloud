/*
 * @Author: Harry
 * @Date: 2022-08-12 18:20:57
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 21:08:21
 * @FilePath: \cloudm\src\components\content\ctnheader\search\index.tsx
 */
import { Select } from 'antd'
import debounce from 'lodash/debounce'
import React, { useState } from 'react'

// import SvgSearch from '@/assets/svg/SvgSearch'
import { searchAccess } from '@/service/api'
import { searchResponse } from '@/typings/'

const { Option } = Select

interface searchOption {
  id: string
  name: string
}

const fetch = async (value: string, callback: (data: searchOption[]) => void) => {
  const params = {
    keywords: value
  }
  const res = await searchAccess(params) as searchResponse

  if (res.code === 200) {
    const { result } = res
    callback(result.songs)
  }
}

const SearchInput: React.FC<{ placeholder: string, style?: React.CSSProperties }> = props => {
  const [data, setData] = useState<searchOption[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearch = debounce((newValue: string) => {
    if (newValue) {
      fetch(newValue, setData)
    } else {
      setData([])
    }
  }, 500)

  const handleChange = (newValue: string) => {
    setSearchValue(newValue)
  }

  const options = data.map(option => <Option key={option.id}>{option.name}</Option>)

  return (
    <>
      <Select
        showSearch
        value={searchValue}
        style={{ width: 300 }}
        placeholder={props.placeholder}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    </>
  )
}

export default SearchInput
