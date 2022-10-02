/*
 * @Author: Harry
 * @Date: 2022-08-12 22:03:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 23:18:09
 * @FilePath: \cloudm\src\components\login\from.tsx
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Switch } from 'antd'
import md5 from 'js-md5'
import React, { useState } from 'react'

import { LoginAccess } from '@/service/api'
import { formType } from '@/typings/'

import VerificationCode from './VerificationCode'

const FormWrap = () => {
  const [form] = Form.useForm<formType>()

  const [switchChecked, setSwitchChecked] = useState<boolean>(true)

  const [loginLoading, setLoginLoading] = useState<boolean>(false)

  const nameValue = Form.useWatch('phone', form)

  const onFinish = async (values: formType) => {
    const { phone, password, captcha } = values
    console.log(values)

    if (phone && password) {
      setLoginLoading(true)
      const params = { phone, md5_password: String(md5(password)) }
      LoginAccess(params).then(() => { setLoginLoading(false) })
    }

    if (phone && captcha) {
      setLoginLoading(true)
      const params = { phone, captcha }
      LoginAccess(params).then(() => { setLoginLoading(false) })
    }
  }

  return (
    <>
      <Switch checkedChildren="账号登录" unCheckedChildren="验证码登录" checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} />
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone!'
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="phone" />
        </Form.Item>
        {
          switchChecked
            ? <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            : <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your captcha!'
                }
              ]}
            >
              <VerificationCode phone={nameValue} />
            </Form.Item>
        }
        <Form.Item>
          <Button loading={loginLoading} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormWrap
