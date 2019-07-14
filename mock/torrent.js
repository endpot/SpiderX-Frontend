import Mock from 'mockjs'

const torrentList = []
const count = 100

for (let i = 0; i < count; i++) {
  torrentList.push(Mock.mock({
    id: '@id', // ID
    title: '@ctitle', // 资源标题
    caption: '@csentence', // 资源副标题
    descr: '@cparagraph', // 资源简介
    'category|1': ['电影', '剧集', '纪录', '综艺', '学习'], // 资源分类
    size: '@integer(1024, 1073741824)', // 种子大小
    created_by: '@name', // 上传者
    created_at: 'datetime', // 上传时间
    attachments: [], // 附件
    leechers: '@integer', // 下载数
    seeders: '@integer' // 做种数
  }))
}

export default [
  {
    url: '/torrents',
    type: 'get',
    response: config => {
      const items = torrentList
      return {
        data: items
      }
    }
  },
  {
    url: '/torrents/[0-9]+',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const torrent of torrentList) {
        if (torrent.id === +id) {
          return {
            data: torrent
          }
        }
      }
    }
  }
]
