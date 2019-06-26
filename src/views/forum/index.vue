<template>
  <div class="app-container">
    <div class="panel">
      <el-row :gutter="14">
        <el-col :span="15" :offset="3">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
              <div v-for="(item, index) in topic_list" :key="index" class="topic-list">
                <div class="cell">
                  <el-row>
                    <el-col :xl="1" :lg="1" :md="2" :sm="2" :xs="3">
                      <a :href="'https:\/\/cnodejs.org\/user\/' + item.author.loginname" class="user-avatar" target="_blank">
                        <img :src="item.author.avatar_url" :title="item.author.loginname">
                      </a>
                    </el-col>
                    <el-col :xl="3" :lg="3" :md="4" :sm="2" :xs="3">
                      <span class="reply_count">
                        <span class="count_of_replies" title="回复数">
                          {{ item.reply_count }}
                        </span>
                        <span class="count_seperator">/</span>
                        <span class="count_of_visits" title="点击数">
                          {{ item.visit_count }}
                        </span>
                      </span>
                    </el-col>
                    <el-col :xl="15" :lg="16" :md="16" :sm="17" :xs="17">
                      <div class="topic_title_wrapper">
                        <span class="topic_tabs">
                          <el-tag v-if="item.tab === 'share'" size="small">分享</el-tag>
                          <el-tag v-else-if="item.tab === 'ask'" size="small" type="success">问答</el-tag>
                        </span>
                        <router-link :to="{ name: 'TopicDetails', params: { topicId: item.id }}" :title="item.title" class="topic_title">
                          {{ item.title }}
                        </router-link>
                      </div>
                    </el-col>
                    <el-col :xl="2" :lg="2" :md="2" :sm="4" :xs="3">
                      <span class="last_time">
                        <a class="last_active_time" href="#">
                          <!-- {{ item.last_reply_at }} -->
                          3 天前
                        </a>
                      </span>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>
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
              <div class="newTopic">
                <router-link :to="{name: 'NewTopic'}"><el-button icon="el-icon-edit">发布话题</el-button></router-link>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { parseTime } from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first',
      topic_list: []
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  mounted() {
    this.$axios.get('https://cnodejs.org/api/v1/topics')
      .then((res) => {
        console.log(res.data.data)
        // console.log(res.data.data[0].author.loginname)
        this.topic_list = res.data.data
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-lg-2 { // 这里单独对日期部分进行右对齐处理
  text-align: right;
}
@media only screen and (min-width:1200px) { // 单独对部分设备宽度的自适应做处理
  .el-col-lg-3 {
    width: 13.8% !important;
  }
  .el-col-lg-2 {
    width: 14.33333% !important;
  }
}
// 这里是主体部分
.topic-list {
  // display: block;
  line-height: 50px;
}
.cell {
  // display: flex;
  background-color: #fff;
  border-radius: 5px;
  margin:2px 0px;
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
    .reply_count {
      // width: 100px;
      margin-left:15px;
      .count_of_replies {
        color: #9e78c0;
        font-size: 16px;
      }
      .count_of_visits {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
  @media screen and(max-width: 999px) {
    .reply_count {
      font-size: 6px;
      position: absolute;
      padding-left: 40px;
      padding-top: 18px;
      .count_of_replies {
        color: #9e78c0;
      }
      .count_of_visits {
        color: #b4b4b4;
      }
    }
  }
  .topic_title_wrapper {
    width: 100%;
    display: flex;
    .topic_title {
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
  .last_time {
    .last_active_time {
      width: 100%;
      font-size: 12px;
      color: #b4b4b4;
    }
  }
}
// 右侧部分
.box-card {
  .user-avatar {
    text-align: center;
  }
  .newTopic {
    text-align: center;
  }
}
</style>

