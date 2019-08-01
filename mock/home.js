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
    announce_time: '@now("yyyy-MM-dd")'
  }))
}

export default [
  {
    url: '/home/announce',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: homeList.length,
          items: homeList
        }
      }
    }
  }
]
