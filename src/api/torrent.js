import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/torrent/list',
    method: 'get',
    params: query
  })
}

export function fetchDetails(id) {
  return request({
    url: '/torrent/details',
    method: 'get',
    params: { id }
  })
}
