import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/forum/list',
    method: 'get',
    params: query
  })
}

export function fetchDetails(id) {
  return request({
    url: '/forum/details',
    method: 'get',
    params: { id }
  })
}
