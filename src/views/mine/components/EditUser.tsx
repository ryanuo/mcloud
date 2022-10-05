/*
 * @Author: Harry
 * @Date: 2022-10-05 14:05:57
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-05 21:06:42
 * @FilePath: \cloudm\src\views\mine\components\EditUser.tsx
 */
import { Button, Form, Input, Radio, RadioChangeEvent, Select } from 'antd'
// import cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'
import React, { memo, useEffect, useState } from 'react'

import CustomDatePicker from '@/components/common/CustomDatePicker'
import { userInfoType } from '@/typings/'
import { cityData } from '@/utils/cities'
// import { cityData } from '@/utils/cities'
import { provinces } from '@/utils/province'

import styles from '../style.module.scss'

const { TextArea } = Input

const { Option } = Select

function EditUser(props: { data: userInfoType }) {
  const { data } = props
  const { gender, nickname, signature, birthday, province, city } = data

  const [form] = Form.useForm()

  const [radioVal, setRadioVal] = useState(gender)
  const [birthdayVal, setBirthdayVal] = useState(moment(birthday))
  const [provinceDefault, setProvinceDefault] = useState(province.toString())
  const [cityDefault, setCityDefault] = useState(city.toString())

  const onFinish = function(val: any) {
    console.log(val)
  }

  const onRadioChange = function(e: RadioChangeEvent) {
    const { value } = e.target
    form.setFieldValue('gender', value)
    setRadioVal(value)
  }

  const onDateChange = function(e: any) {
    setBirthdayVal(e)
    // 转换为时间戳
    const init = moment(e.valueOf()).valueOf()
    form.setFieldValue('birthday', init)
  }

  const onProvinceChange = function(e: string) {
    setProvinceDefault(e)
    form.setFieldValue('province', e)
  }

  const onCityChange = function(e: string) {
    setCityDefault(e)
    form.setFieldValue('city', e)
  }

  useEffect(() => {
    form.setFieldValue('city', cityData[provinceDefault][0].id)
  }, [provinceDefault])

  return (
    <>
      <h2>编辑个人信息</h2>
      <div className={styles.editWrap}>
        <Form
          form={form}
          className={styles.formWrap}
          initialValues={{
            nickname,
            signature,
            gender,
            birthday
          }}
          onFinish={onFinish}
        >
          <Form.Item label='昵称' name='nickname'>
            <Input />
          </Form.Item>
          <Form.Item label="介绍" name='signature'>
            <TextArea rows={4} maxLength={300} showCount />
          </Form.Item>
          <Form.Item label="性别" name='gender'>
            <Radio.Group value={radioVal} onChange={onRadioChange}>
              <Radio value={0}>打死也不告诉你</Radio>
              <Radio value={1}>男村民</Radio>
              <Radio value={2}>女村民</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="生日" name='birthday'>
            <CustomDatePicker onChange={onDateChange} value={birthdayVal} />
          </Form.Item>
          <Form.Item label='地区'>
            <div className={styles.address}>
              <Form.Item name='province' initialValue={provinceDefault} noStyle shouldUpdate>
                <Select onChange={onProvinceChange} value={provinceDefault} style={{ width: 120 }}>
                  {provinces.map(province => (
                    <Option value={province.id} key={province.id}>{province.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='city' noStyle initialValue={cityDefault} shouldUpdate>
                <Select onChange={onCityChange} value={cityDefault} style={{ width: 120 }}>
                  {cityData[provinceDefault].map(city => (
                    <Option key={city.id} value={city.id}>{city.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
            <Button className={styles.btn} type="primary" htmlType="submit">
              保存
            </Button>
            <Button>
              取消
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.editImg}>
          <img src={data.avatarUrl} alt="" />
        </div>
      </div>
    </>

  )
}

export default memo(EditUser)
