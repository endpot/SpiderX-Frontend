# SpiderX-Frontend
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fajycc20%2FSpiderX-Frontend.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fajycc20%2FSpiderX-Frontend?ref=badge_shield)


> SpiderX-Frontend 是一个基于vue-admin-template 的Private-Tracker前台模板


## Build Setup

```bash
# 克隆项目
git clone https://github.com/endpot/SpiderX-Frontend.git

# 进入项目目录
cd SpiderX-Frontend

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fajycc20%2FSpiderX-Frontend.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fajycc20%2FSpiderX-Frontend?ref=badge_large)