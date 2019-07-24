<template>
  <div class="app-container">
    <div class="panel">
      <el-row :gutter="20">
        <el-col :span="16" :offset="1">
          <el-tabs v-model="activeName" class="main-container" type="border-card" @tab-click="handleClick">
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
                          <el-tag v-if="item.topicType === 'share'" size="small">分享</el-tag>
                          <el-tag v-else-if="item.topicType === 'good'" size="small">精华</el-tag>
                          <el-tag v-else-if="item.topicType === 'ask'" size="small" type="success">问答</el-tag>
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

              <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
            </el-tab-pane>
            <!-- 这里需要keep-alive -->
            <el-tab-pane label="精华" name="second">
              权限测试查看
              <el-tag v-permission="['admin']">This is admin</el-tag>
              <el-tag v-permission="['editor']">This is editor</el-tag>
              <el-tag v-permission="['admin','editor']">Both admin or editor can see this</el-tag>
            </el-tab-pane>
            <el-tab-pane label="分享" name="third">分享</el-tab-pane>
            <el-tab-pane label="问答" name="fourth">问答</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="6">
          <div class="card-item">
            <el-card :class="{front:front2Back}" class="box-card-front">
              <div slot="header" class="clearfix">
                <span>个人信息</span>
                <span style="float: right; padding: 3px 0">
                  <svg-icon icon-class="change" @click="changeClick" />
                </span>
              </div>
              <div class="user-avatar">
                <img :src="avatar+'?imageView2/1/w/120/h/120'" alt="avatar"><br>
                <span>预留部分</span>
              </div>
            </el-card>

            <el-card :class="{back:front2Back}" class="box-card-back">
              <div slot="header" class="clearfix">
                <span>UserInfo</span>
                <span style="float: right; padding: 3px 0">
                  <svg-icon icon-class="change" @click="changeClick" />
                </span>
              </div>
              <div class="user-info">
                user info
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
import permission from '@/directive/permission'
import Pagination from '@/components/Pagination'
export default {
  filters: {
    formatLocalTime(time) {
      return formatTime(timeStamp(time))
    }
  },
  directives: {
    permission
  },
  components: {
    Pagination
  },
  data() {
    return {
      activeName: 'first',
      topic_list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      front2Back: false
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
      fetchList(this.listQuery).then(res => {
        this.topic_list = res.data.items
        this.total = res.data.total
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
    },
    changeClick() {
      this.front2Back = !this.front2Back
    }

  }
}
</script>

<style lang="scss" scoped>
.el-col-lg-2 { // 这里单独对日期部分进行右对齐处理
  text-align: right;
}
.main-container {
  opacity: 0.8;
  border-radius: 0 0 4px 4px;
  margin: 15px 0;
}
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
/* 可翻转的用户信息栏 */
.card-item {
    width: 25%;
    height: 300px;
    position: absolute;
    margin: 15px 0;
    opacity: 0.8;
  .box-card-front,
  .box-card-back {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    transition: .5s ease-in-out;
  }
  .box-card-front {
    z-index: 1;
  }
  .box-card-back {
    transform: rotateY(180deg);
  }
  .box-card-back.back {
    transform: rotateY(0deg);
  }
  .box-card-front.front {
    z-index: 0;
    transform: rotateY(-180deg);
  }
}
</style>

