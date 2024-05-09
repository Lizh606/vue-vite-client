import http from '../http'

/**
 * 登录
 *
 * @param {object} loginForm 登录信息
 */
// export const login = function (loginForm) {
//   return http.post('/api/' + loginUrl, loginForm)
// }

//登录二维码
export const loginQrcode = function () {
  return http.get('/login/loginQrcode')
}
