import Mock from 'mockjs'

const forumList = []
const count = 50

const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

for (let i = 0; i < count; i++) {
  forumList.push(Mock.mock({
    id: '@increment', // 该topic id
    author: {
      avatar_url: image_url,
      author_name: '@name' // 作者用户名
    },
    author_id: '@string(lower, 8)', // 作者id
    content: '@cparagraph', // 内容
    create_at: '@datetime', // 创建时间
    title: '@ctitle',
    'topicType|1': ['notice', 'guide', 'discuss', 'hobby', 'working'], // notice: 公告 guide: 新手指引  discuss: 综合交流  hobby: 爱好 working:站务工作
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
      const { page = 1, limit = 20 } = config.query
      const pageList = forumList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: forumList.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/forum/details',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const topic of forumList) {
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
