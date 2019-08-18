import request from '@/utils/request'

/**
 * @description fetch torrent list with query
 * @param {string} query
 * @returns utils/request -> torrent list json
 */
export function fetchList(query) {
  return request({
    url: '/torrent/list',
    method: 'get',
    params: query
  })
}
/**
 * @description fetch torrent details with torrent id
 * @param {number} id
 * @returns utils/request -> torrent details json
 */
export function fetchDetails(id) {
  return request({
    url: '/torrent/details',
    method: 'get',
    params: { id }
  })
}
