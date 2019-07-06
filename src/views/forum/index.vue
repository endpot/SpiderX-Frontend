<template>
  <div class="app-container">
    <div class="panel">
      <el-row :gutter="14">
        <el-col :span="15" :offset="3">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane v-loading="listLoading" label="全部" name="first">
              <div v-for="(item, index) in topic_list" :key="index" class="topic-list">
                <div class="cell">
                  <el-row>
                    <el-col :xl="1" :lg="1" :md="2" :sm="2" :xs="3">
                      <a :href="item.author.author_name" class="user-avatar" target="_blank">
                        <img :src="item.author.avatar_url" :title="item.author.author_name">
                      </a>
                    </el-col>
                    <el-col :xl="2" :lg="4" :md="5" :sm="2" :xs="3">
                      <span class="reply-count">
                        <span class="count-of-replies" title="回复数">
                          {{ item.reply_count }}
                        </span>
                        <span class="count-seperator">/</span>
                        <span class="count-of-visits" title="点击数">
                          {{ item.pageviews }}
                        </span>
                      </span>
                    </el-col>
                    <el-col :xl="18" :lg="16" :md="14" :sm="17" :xs="15">
                      <div class="topic-title-wrapper">
                        <span class="topic-tabs"><!-- 这里考虑论坛的所有分类同标签页个数 -->
                          <el-tag v-if="item.tab === 'share'" size="small">分享</el-tag>
                          <el-tag v-else-if="item.tab === 'good'" size="small">精华</el-tag>
                          <el-tag v-else-if="item.tab === 'ask'" size="small" type="success">问答</el-tag>
                        </span>
                        <router-link :to="{ name: 'TopicDetails', params: { id: item.id }}" :title="item.title" class="topic-title">
                          {{ item.title }}
                        </router-link>
                      </div>
                    </el-col>
                    <el-col :span="3">
                      <span class="last-time">
                        <a class="last-active-time" href="#"><!-- 这里要对日期格式化 -->
                          {{ item.last_reply_at | formatLocalTime(item.last_reply_at) }}
                        </a>
                      </span>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <el-pagination
                background
                layout="total, prev, pager, next, jumper"
                :current-page.sync="listQuery.page"
                :page-size="listQuery.limit"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </el-tab-pane>
            <!-- 这里需要keep-alive -->
            <el-tab-pane label="精华" name="second">精华</el-tab-pane>
            <el-tab-pane label="分享" name="third">分享</el-tab-pane>
            <el-tab-pane label="问答" name="fourth">问答</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-card class="box-card" shadow="never">
              <div slot="header" class="clearfix">
                <span>个人信息</span>
                <el-button style="float: right; padding:3px 0" type="text">操作</el-button>
              </div>
              <div class="user-avatar">
                <img :src="avatar+'?imageView2/1/w/120/h/120'" alt="avatar"><br>
                <span>预留部分</span>
              </div>
            </el-card>
            <br>
            <el-card class="box-card" shadow="never">
              <div class="new-topic">
                这里不准备提供创建文章的按钮了  不过并没有想好放什么
                <!-- <router-link :to="{name: 'CreateTopic'}"><el-button icon="el-icon-edit">发布话题</el-button></router-link> -->
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { formatTime, timeStamp } from '@/utils' // 这里考虑到mockjs生成的日期是yyyy-MM-dd HH:mm:ss  所以封装了timeStamp将时间转为unix格式
import { fetchList } from '@/api/forum'
import { mapGetters } from 'vuex'
// import Pagination from '@/components/Pagination'
export default {
  filters: {
    formatLocalTime(time) {
      return formatTime(timeStamp(time))
    }
  },
  // components: {
  //   Pagination
  // },
  data() {
    return {
      activeName: 'first',
      topic_list: [],
      total: 1000,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList().then(res => {
        console.log(res.data)
        // console.log(formatTime(timeStamp(res.data.items[0].last_reply_at)))
        this.topic_list = res.data.items
        this.listLoading = false
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // 每页数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.getPageData()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-lg-2 { // 这里单独对日期部分进行右对齐处理
  text-align: right;
}
// @media only screen and (min-width:1200px) { // 单独对部分设备宽度的自适应做处理
  // .el-col-lg-3 {
  //   width: 15.555% !important;
  // }
  // .el-col-lg-2 {
  //   width: 14.33333% !important;
  // }
// }
// 这里是主体部分
.topic-list {
  // display: block;
  line-height: 50px;
}
.cell {
  box-sizing: border-box;
  border: 1px solid #999;
  margin-top: -1px;
  width: 100%;
  // display: flex;
  background-color: #fff;
  // margin:2px 0px;
  line-height: 50px;
  .user-avatar {
    width: 40px;
    img {
      margin-left:5px;
      width: 30px;
      height: 30px;
      border-radius: 3px;
      vertical-align: middle;
    }
  }
  @media screen and (min-width: 1000px) {
    .reply-count {
      // width: 100px;
      margin-left:15px;
      .count-of-replies {
        color: #9e78c0;
        font-size: 16px;
      }
      .count-of-visits {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
  @media screen and(max-width: 999px) {
    .reply-count {
      font-size: 6px;
      position: absolute;
      padding-left: 40px;
      padding-top: 18px;
      .count-of-replies {
        color: #9e78c0;
      }
      .count-of-visits {
        color: #b4b4b4;
      }
    }
  }
  .topic-title-wrapper {
    width: 100%;
    display: flex;
    .topic-title {
      overflow: hidden;
      width: 90%;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      line-height: 50px;
      text-overflow: ellipsis;
    }
    a:hover {
      text-decoration: underline !important;
    }
  }
  .last-time {
    .last-active-time {
      width: 100%;
      font-size: 12px;
      color: #b4b4b4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
    }
  }
}
// 右侧部分
.box-card {
  .user-avatar {
    text-align: center;
  }
  .new-topic {
    text-align: center;
  }
}
</style>

