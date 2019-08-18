import request from '@/utils/request'

/**
 * @description fetch forum list by query
 * @param {string} query
 * @returns utils/request -> forum list json
 */
export function fetchList(query) {
  return request({
    url: '/forum/list',
    method: 'get',
    params: query
  })
}
/**
 * @description fetch forum details with forum id
 * @param {number} id
 * @returns utils/request -> forum details json
 */
export function fetchDetails(id) {
  return request({
    url: '/forum/details',
    method: 'get',
    params: { id }
  })
}
