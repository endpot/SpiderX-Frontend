import Mock from 'mockjs'

const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

const data = Mock.mock({
  'items|100': [{
    id: '@id',
    author: {
      // avatar_url: ('100x100', '@color', '@color', 'jpg', '@name'),
      avatar_url: image_url,
      author_name: '@name'
    },
    author_id: '@increment',
    content: '@cparagraph',
    create_at: '@datetime',
    title: '@ctitle',
    'tab|1': ['good', 'share', 'ask'],
    last_reply_at: '@now',
    reply_count: '@integer(20, 200)',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/forum/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
