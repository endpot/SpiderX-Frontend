import Mock from 'mockjs'

const subtitleList = []
const count = 100

for (let i = 0; i < count; i++) {
  subtitleList.push(Mock.mock({
    id: '@increment', // 该subtitle id
    title: '@sentence(8)', // title
    created_at: '@datetime', // 创建时间
    created_by: '@name', // 上传者
    size: '@integer(1024, 1048576)', // 字幕大小
    'language|1': ['Chinese', 'English', 'Japanese', 'French'], // 字幕语言
    viewer: '@integer(20, 120)' // 点击数
  }))
}

export default [
  {
    url: '/subtitle/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, value } = config.query

      const mockList = subtitleList.filter(item => {
        if (value && item.title.toLowerCase().indexOf(value) < 0) {
          return false
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
  }
]
