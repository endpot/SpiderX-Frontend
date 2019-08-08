import request from '@/utils/request'
/**
 * @description get home page announce
 * @author ajycc20 <ajycc20@qq.com>
 * @export
 * @param {*} params
 * @returns
 */
export function fetchAnnounceList(params) {
  return request({
    url: '/home/announce/list',
    method: 'get',
    params
  })
}
/**
 * @description
 * @export
 * @param {number} id
 * @returns
 */
export function fetchAnnounceDetails(id) {
  return request({
    url: '/home/announce/details',
    method: 'get',
    params: { id }
  })
}
