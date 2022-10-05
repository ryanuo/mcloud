/*
 * @Author: Harry
 * @Date: 2022-10-05 18:18:38
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 18:25:18
 * @FilePath: \cloudm\src\components\common\CustomDatePicker.tsx
 */
import { DatePicker } from 'antd'
import moment from 'moment'
import React from 'react'

const CustomDatePicker = (props: { value: any, onChange: any }) => {
  const { value, onChange, ...other } = props

  const time = value ? moment(value) : null

  const triggerChange = (_, dateStr) => {
    onChange?.(dateStr)
  }

  return (
    <DatePicker
      defaultValue={time}
      onChange={triggerChange}
      {...other}
    />
  )
}

export default CustomDatePicker
