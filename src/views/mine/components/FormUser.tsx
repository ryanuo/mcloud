/*
 * @Author: Harry
 * @Date: 2022-10-05 13:26:00
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-06 18:09:32
 * @FilePath: \cloudm\src\views\mine\components\formUser.tsx
 */
import React from 'react'

import { modeType } from '@/constants'
import { userInfoType } from '@/typings/'

import DetailUser from './DetailUser'
import EditUser from './EditUser'

interface FormUserProps {
  type?: modeType
  data?: userInfoType
  onUpdate?: (val: userInfoType, callback: () => void) => void
  onCancel?: () => void
}

const FormUser = (props: FormUserProps) => {
  const { type, data, onUpdate, onCancel } = props
  return (
    type === modeType.Edit
      ? <EditUser onUpdate={onUpdate} onCancel={onCancel} data={data} />
      : <DetailUser />
  )
}

export default FormUser
