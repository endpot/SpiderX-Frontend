import request from '@/utils/request'
/**
 * @description get home page announce
 * @author ajycc20 <ajycc20@qq.com>
 * @export
 * @param {*} params
 * @returns
 */
export function fetchAnnounce(params) {
  return request({
    url: '/home/announce',
    method: 'get',
    params
  })
}
