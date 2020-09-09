import request from '@/utils/request-info'

// four douban apikey only for test
// const douBanKeyList = ['0df993c66c0c636e29ecbb5344252a4a',
//   '0dad551ec0f84ed02907ff5c42e8ec70',
//   '02646d3fb69a52ff072d47bf23cef8fd',
//   '0b2bdeda43b5688921839c8ecb20399b'
// ]
// https://ptgen.rhilip.info/?

// apikey=b54df738 omdbapikey
const OMDBApiKey = 'b54df738'

// const douBanapikey = douBanKeyList[Math.floor(Math.random() * douBanKeyList.length)]

/**
 * @description fetch douban api by douban-id with apikey
 * @param {number} id
 * @returns utils/request-info -> douban info json
 */
export function fetchDouban(id) {
  return request({
    // url: '/douban/' + id,
    url: `https://ptgen.rhilip.info/?url=https://movie.douban.com/subject/${id}`,
    method: 'get',
    // params: {
    //   apikey: douBanapikey
    // }
  })
}
/**
 * @description fetch omdb api by imdb-id with omdbapi & plot-> full
 * @param {number} id
 * @returns utils/request-info -> imdb info json
 */
export function fetchOMDB(id) {
  return request({
    url: '/omdb',
    method: 'get',
    params: {
      i: 'tt' + id,
      apikey: OMDBApiKey,
      plot: 'full'
    }
  })
}
