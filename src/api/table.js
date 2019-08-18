import request from '@/utils/request'

// this api is not useful
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
