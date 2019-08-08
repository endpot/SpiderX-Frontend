import Mock from 'mockjs'

const homeList = []
const count = 50

for (let i = 0; i < count; i++) {
  homeList.push(Mock.mock({
    // 公告部分
    announce_id: '@increment',
    announce_title: '@ctitle',
    announce_text: '@cparagraph',
    announce_footer_note: '@title', // 类似于  ———— 某官方
    announce_time: '@now'
  }))
}

export default [
  {
    url: '/home/announce/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, value, type } = config.query

      const mockList = homeList.filter(item => {
        if (type && type === 'title') {
          if (value && item.announce_title.indexOf(value) < 0) {
            return false
          }
        } else if (type && type === 'body') {
          if (value && item.announce_text.indexOf(value) < 0) {
            return false
          }
        } else if (type && type === 'both') {
          if ((value && item.announce_title.indexOf(value) < 0) && (value && item.announce_text.indexOf(value) < 0)) {
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
    url: '/home/announce/details',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const item of homeList) {
        if (item.announce_id === +id) {
          return {
            code: 20000,
            data: item
          }
        }
      }
    }
  }
]
