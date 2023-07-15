import { useRequest } from 'ahooks'
import QRCode from 'qrcode.react'
import React, { useEffect, useState } from 'react'

import { StylAnimateEnum } from '@/constants'
import { checkQrLoginStatus, createQrAPI, getQrKey } from '@/service/api'
import { QRType } from '@/typings/'

interface IQrLogin {
  onAnimate: (e: StylAnimateEnum) => void
}

enum QrStatus {
  Valid = 800,
  Wait = 801,
  WaitEnter = 802,
  LoginSuccess = 803
}

const QrMessage = {
  [QrStatus.Valid]: '二维码失效',
  [QrStatus.Wait]: '等待扫码',
  [QrStatus.WaitEnter]: '待确认',
  [QrStatus.LoginSuccess]: '授权登录成功'
}

const QrLogin = (props: IQrLogin) => {
  // const { onAnimate } = props
  const [qrUrl, setQrUrl] = useState<string>()
  const [qrStatus, setQrStatus] = useState()

  const { data: qrData, run, cancel } = useRequest(checkQrLoginStatus, {
    pollingInterval: 1000
  })

  useEffect(() => {
    if (qrData) {
      if (qrData?.code === QrStatus.LoginSuccess) {
        cancel()
        localStorage.setItem('Cookie', JSON.stringify(qrData.cookie))
      }

      setQrStatus(QrMessage[qrData?.code])
    }
  }, [qrData])

  const getQrStatus = function(key: string) {
    run({ key })
  }

  const getQrMessage = async function() {
    const res = await getQrKey()

    if (res?.data?.code === 200) {
      const qrRes = await createQrAPI({ key: res.data.unikey }) as unknown as QRType
      console.log(qrRes)
      if (qrRes.code === 200) {
        setQrUrl(qrRes.data?.qrurl)
        getQrStatus(res.data.unikey)
      }
    }
  }

  useEffect(() => {
    getQrMessage()
  }, [])
  return (
    <>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {qrStatus}
      </div>
      {
        qrUrl
          ? <QRCode
            value={qrUrl}
            size={200}
            fgColor="#000000"
          />
          : '正在生成登录二维码,请稍等。'
      }
    </>
  )
}

export default QrLogin
