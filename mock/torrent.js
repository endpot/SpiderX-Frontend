import Mock from 'mockjs'

const torrentList = []
const count = 150

for (let i = 0; i < count; i++) {
  torrentList.push(Mock.mock({
    id: '@increment', // ID
    title: '@title(6, 8)', // 资源标题
    caption: '@csentence', // 资源副标题
    descr: '@cparagraph', // 资源简介
    'category|1': ['电影', '剧集', '纪录', '综艺', '学习'], // 资源分类
    size: '@integer(1048576, 10737418240)', // 种子大小
    created_by: '@name', // 上传者
    created_at: '@datetime', // 上传时间
    attachments: [], // 附件
    leechers: '@integer(60, 100)', // 下载数
    seeders: '@integer(60, 100)', // 做种数
    completer: '@integer(20, 120)', // 完成数
    rate: '@integer(0, 100)' // 完成百分比
  }))
}

export default [
  {
    url: '/torrent/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, value, type } = config.query

      const mockList = torrentList.filter(item => {
        if (type && type === 'title') {
          if (value && item.title.indexOf(value) < 0) {
            return false
          }
        } else if (type && type === 'caption') {
          if (value && item.caption.indexOf(value) < 0) {
            return false
          }
        } else if (type && type === 'descr') {
          if (value && item.title.indexOf(value) < 0) {
            return false
          }
        } else if (type && type === 'created_by') {
          if (value && item.title.indexOf(value) < 0) {
            return false
          }
        }
        return true
      })

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/torrent/details',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const torrent of torrentList) {
        if (torrent.id === +id) {
          return {
            code: 20000,
            data: torrent
          }
        }
      }
    }
  }
]
