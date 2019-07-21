import request from '@/utils/request-info'

const douBanKeyList = ['0df993c66c0c636e29ecbb5344252a4a',
  '0dad551ec0f84ed02907ff5c42e8ec70',
  '02646d3fb69a52ff072d47bf23cef8fd',
  '0b2bdeda43b5688921839c8ecb20399b'
]

// apikey=b54df738
const OMDBApiKey = 'b54df738'

const douBanapikey = douBanKeyList[Math.floor(Math.random() * douBanKeyList.length)]

/**
 * @description 这里请求R酱api
 * @author ajycc20 <ajycc20@qq.com>
 * @export
 * @param {int} id
 * @returns {string}
 */
export function fetchDouban(id) {
  return request({
    url: '/douban/' + id,
    method: 'get',
    params: {
      apikey: douBanapikey
    }
  })
}

export function fetchOMDB(query) {
  return request({
    url: '/omdb',
    method: 'get',
    params: {
      i: 'tt' + query,
      apikey: OMDBApiKey,
      plot: 'full'
    }
  })
}
