import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/forum/list',
    method: 'get',
    params
  })
}
