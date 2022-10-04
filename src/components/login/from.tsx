/*
 * @Author: Harry
 * @Date: 2022-08-12 22:03:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 10:35:33
 * @FilePath: \cloudm\src\components\login\from.tsx
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Switch } from 'antd'
import md5 from 'js-md5'
import React, { useContext, useState } from 'react'

import { StylAnimateEnum } from '@/constants'
import { LoginAccess } from '@/service/api'
import globalContent from '@/store/global-content'
import { formType } from '@/typings/'

import styles from './index.module.scss'
import VerificationCode from './VerificationCode'

// 登录成功后保存信息
const saveLoginMessage = function(res, callback) {
  const { code } = res

  if (code === 200) {
    for (const key in res) {
      if (key !== 'code') {
        localStorage.setItem(key, JSON.stringify(res[key]))
      } else {
        localStorage.clear()
      }
    }
    callback()
  }
}

const FormWrap = (props: { onAnimate: (e: StylAnimateEnum) => void }) => {
  const ctx = useContext(globalContent)

  const { onAnimate } = props

  const [form] = Form.useForm<formType>()

  const [switchChecked, setSwitchChecked] = useState<boolean>(false)

  const [loginLoading, setLoginLoading] = useState<boolean>(false)

  const nameValue = Form.useWatch('phone', form)

  const onFinish = (values: formType) => {
    const { phone, password, captcha } = values

    const result = (res) => {
      saveLoginMessage(res, () => {
        setLoginLoading(false)
        onAnimate(StylAnimateEnum.fadeOutDown)

        setTimeout(() => {
          ctx.setIsLogined(true)
        }, 800)
      })
    }

    if (phone && password) {
      setLoginLoading(true)
      const params = { phone, md5_password: String(md5(password)) }
      LoginAccess(params).then(result)
    }

    if (phone && captcha) {
      setLoginLoading(true)
      const params = { phone, captcha }
      LoginAccess(params).then(result)
    }
  }

  return (
    <>
      <Switch className={styles.switchStyl} checkedChildren="账号登录" unCheckedChildren="验证码登录" checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} />
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input your phone!" />
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
                placeholder="Please input your password!"
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
