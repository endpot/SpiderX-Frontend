import request from '@/utils/request'

/**
 * @description post login user info
 * @param {string} data
 * @returns utils/request user info json
 */
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
/**
 * @description get token with username
 * @param {string} token
 * @returns utils/request ->
 */
export function getInfo(token) {
  return request({
    url: '/auth/me',
    method: 'get',
    params: { token }
  })
}
/**
 * @description logout
 */
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}
