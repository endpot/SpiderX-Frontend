import Mock from 'mockjs'

const List = []
const count = 10

const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment', // 该topic id
    author: {
      avatar_url: image_url,
      author_name: '@name' // 作者用户名
    },
    author_id: '@string(lower, 8)', // 作者id
    content: '@cparagraph', // 内容
    create_at: '@datetime', // 创建时间
    title: '@ctitle',
    'tab|1': ['good', 'share', 'ask'], // 该topic分类
    last_reply_at: '@now', // 最后回复时间
    'replies|50': [{
      author: {
        avatar_url: image_url, // 评论者用户图标
        author_name: '@name' // 评论者用户名
      },
      content: '@csentence', // 评论内容
      create_at: '@datetime', // 创建时间
      id: '@string(lower, 8)', // 该条目评论者 用户id
      'is_praised|1': 'true', // 当前登录用户是否 赞
      reply_id: '@string(lower, 8)' // 该条目若不是对上一条目的回复则为null  若是则等同于上一条目(replies)的id
    }],
    reply_count: '@integer(50, 50)',
    pageviews: '@integer(300, 5000)'
  }))
}

export default [
  {
    url: '/forum/list',
    type: 'get',
    response: config => {
      const items = List
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/forum/details',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const topic of List) {
        if (topic.id === +id) {
          return {
            code: 20000,
            data: topic
          }
        }
      }
    }
  }
]
