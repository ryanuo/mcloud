/*
 * @Author: Harry
 * @Date: 2022-10-02 21:57:43
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-04 13:34:59
 * @FilePath: \cloudm\src\components\login\VerificationCode.tsx
 */

import { Button, Form, Input } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

import SvgCaptcha from '@/assets/svg/SvgCaptcha'
import { captchaAccess } from '@/service/api'
import { formType } from '@/typings/'

import classes from './index.module.scss'

const timerCount = 60 // 默认60秒

const VerificationCode = (props: formType) => {
  const [count, setCount] = useState(timerCount)

  const timerRef = useRef(null) // 记录时间的定时器

  const { phone } = props

  const cutCount = () => {
    setCount((prevState) => prevState - 1) // 为什么这里要用函数- 如果用count 发现count闭包了 不会发生变化了
  }

  // 请求验证码
  const getCaptha = async function() {
    return await captchaAccess({ phone })
  }

  const sendCode = () => {
    // 要发送验证码
    getCaptha()
    cutCount()
    timerRef.current = setInterval(cutCount, 1000)
  }

  useEffect(() => {
    if (count === 0) {
      clearInterval(timerRef.current) // 清空定时器
      setCount(timerCount) // 重新将技术器设置为60秒
    }
  }, [count])

  return (
    <div className={classes.captcha}>
      <Form.Item noStyle name="captcha" >
        <Input prefix={<SvgCaptcha />} placeholder='Please input your captcha!' showCount maxLength={4} allowClear />
      </Form.Item>
      <Button
        disabled={count < timerCount}
        onClick={count === timerCount ? sendCode : null}
      >
        {count === timerCount ? '发送验证码' : `还剩${count}秒`}
      </Button>
    </div>
  )
}

export default VerificationCode
