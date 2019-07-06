<template>
  <div class="app-container">
    <el-row :gutter="14">
      <el-col class="main" :span="15" :offset="3">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>Markdown 语法参考</span>
          </div>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          <el-button type="primary" @click="getInfo">请求数据</el-button>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>这里是header</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchList } from '@/api/forum'
export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    getInfo() {
      fetchList().then(res => {
        console.log('res: ', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  display: block;
}
</style>
