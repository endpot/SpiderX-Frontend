import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/torrent/list',
    method: 'get',
    params
  })
}

export function fetchDetails(id) {
  return request({
    url: '/torrent/details',
    method: 'get',
    params: { id }
  })
}
