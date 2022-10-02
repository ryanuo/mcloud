/*
 * @Author: Harry
 * @Date: 2022-08-07 20:45:51
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-10-02 11:33:56
 * @FilePath: \cloudm\src\setupProxy.ts
 */
import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function(app) {
  app.use(
    '/api', // 代理路径
    createProxyMiddleware({
      target: 'https://music.mr90.cf/', // 目标路径
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // 重写原路径
      }
    })
  )
}
