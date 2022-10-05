/*
 * @Author: Harry
 * @Date: 2022-10-05 13:26:00
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 14:09:12
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
}

const FormUser = (props: FormUserProps) => {
  const { type, data } = props
  return (
    type === modeType.Edit
      ? <EditUser data={data} />
      : <DetailUser />
  )
}

export default FormUser
