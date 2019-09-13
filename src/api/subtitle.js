import request from '@/utils/request'

/**
 * @description get subtitle list
 * @param {string} query
 * @returns utils/request -> subtitle list json
 */
export function fetchSubtitleList(query) {
  return request({
    url: '/subtitle/list',
    method: 'get',
    params: query
  })
}
