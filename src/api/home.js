import request from '@/utils/request'

/**
 * @description get home page announce
 * @param {*} params
 * @returns utils/request -> announce list json
 */
export function fetchAnnounceList(params) {
  return request({
    url: '/home/announce/list',
    method: 'get',
    params
  })
}
/**
 * @description fetch announce details with announce id
 * @param {number} id
 * @returns utils/request -> announce info json
 */
export function fetchAnnounceDetails(id) {
  return request({
    url: '/home/announce/details',
    method: 'get',
    params: { id }
  })
}
