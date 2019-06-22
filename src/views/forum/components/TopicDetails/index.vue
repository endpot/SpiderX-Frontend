<template>
  <div class="app-container">
    <el-row :gutter="14">
      <el-col class="main" :span="15" :offset="3">
        <div class="panel">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span class="topic_full_title">
                <el-tag v-if="topic_details.tab === 'share'" size="small">分享</el-tag>
                <el-tag v-else-if="topic_details.tab === 'ask'" size="small" type="success">问答</el-tag>
                <span class="title">{{ topic_details.title }}</span>
                <div class="title_details">
                  <span>发布于 {{ topic_details.create_at }}</span>
                  <span>作者<a :href="'https:\/\/cnodejs.org\/user\/' + topic_details.author.loginname">{{ topic_details.author.loginname }}</a></span>
                  <span>{{ topic_details.visit_count }} 次浏览</span>
                  <span>来自 {{ topic_details.tab }}</span>
                  <el-button type="warning" icon="el-icon-star-off" class="bookmark" circle />
                </div>
              </span>
            </div>
            <div class="main-content" v-html="topic_details.content" />
          </el-card><br>
          <el-card v-if="topic_details.reply_count !== 0" class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span>{{ topic_details.reply_count }} 回复</span>
            </div>
            <div v-for="(item, index) in topic_details.replies" :key="item.id" class="reply_list">
              <div :id="item.id" class="reply_item">
                <div class="author_content">
                  <a :href="'https:\/\/cnodejs.org\/user\/' + item.author.loginname" class="user_avatar">
                    <img :src="item.author.avatar_url">
                  </a>
                  <div class="user_info">
                    <a class="dark reply_author" :href="'https:\/\/cnodejs.org\/user\/' + item.author.loginname">{{ item.author.loginname }}</a>
                    <a class="reply_time" :href="'#' + item.id">{{ index + 1 }}楼 • {{ item.create_at }}</a>
                  </div>
                  <div class="user_action">
                    <span>
                      <svg-icon icon-class="reply" title="回复" @click="display(index)" />
                    </span>
                  </div>
                </div>
                <div class="reply_content" v-html="item.content" />
                <div class="clearfix">
                  <div v-show="isShow.includes(index)" class="reply2_area">
                    <el-form ref="replyForm" :model="replyForm">
                      <el-form-item>
                        <markdown-editor v-model="replyForm.content" height="200px" />
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="onSubmit('replyForm')">回复</el-button>
                        <el-button @click="handleCancel(index)">取消</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
          </el-card><br>
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span>添加回复</span>
            </div>
            <el-form ref="addReplyForm" :model="addReplyForm">
              <el-form-item>
                <markdown-editor v-model="addReplyForm.content" height="200px" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('addReplyForm')">回复</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>作者</span>
          </div>
          <div class="card-main">
            <a :href="'https:\/\/cnodejs.org\/user\/' + topic_details.author.loginname" class="user-avatar" target="_blank">
              <img :src="topic_details.author.avatar_url" :title="topic_details.author.loginname">
            </a>
            <span class="user_name">
              <a class="dark" :href="'https:\/\/cnodejs.org\/user\/' + topic_details.author.loginname">{{ topic_details.author.loginname }}</a>
            </span>
            <div class="user_details">
              预留部分  包括上传 下载  分享率 等...
            </div>
          </div>
        </el-card><br>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>作者其他话题</span>
          </div>
          <div v-for="item in author_topics.recent_topics" :key="item">
            <a class="topic_title" :href="'https:\/\/cnodejs.org\/topic\/' + item.id">{{ item.title }}</a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
// import { formatTime } from '@/utils'
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      topic_details: [],
      author_topics: [],
      isShow: [],
      replyForm: { // 回复其他回复该话题的操作
        content: ''
      },
      addReplyForm: { // 自己回复这个话题的操作
        content: ''
      }
    }
  },
  mounted() {
    const paramUrl = this.$route.params.topicId
    // 考虑到要调用第一次返回的值, 基于promise修改了回调的方式
    new Promise((resolve, reject) => {
      this.$axios.get('https://cnodejs.org/api/v1/topic/' + paramUrl)
        .then((res) => {
          this.topic_details = res.data.data
          resolve(this.topic_details.author.loginname)
        })
    }).then((userName) => {
      this.$axios.get('https://cnodejs.org/api/v1/user/' + userName)
        .then((res) => {
          this.author_topics = res.data.data
        })
    })
  },
  methods: {
    display(id) {
      if (this.isShow.indexOf(id) !== -1) {
        return
      } else {
        this.isShow.push(id)
      }
    },
    handleCancel(id) {
      const index = this.isShow.indexOf(id)
      this.isShow.splice(index, 1)
    },
    onSubmit(formName) {
      console.log(this.$refs[formName].model.content)
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix {
  display: block;
  .topic_full_title {
    .title {
      font-size: 24px;
    }
  }
  .title_details {
    display: inline-block;
    width: 100%;
    font-size: 12px;
    color: #838383;
    line-height: 40px;
    span::before {
      content: "*";
    }
    .bookmark {
      float: right;
    }
  }
}
.main-content {
  display: block;
  margin: 0 10px;
}
.reply_item {
  .author_content {
    // display: inline-flex;
    display: block;
    .user_avatar {
      display: inline-block;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .user_info {
      display: inline-block;
      margin-left: 10px;
      .reply_author {
        font-size: 12px;
        font-weight: 700;
        color: #666;
      }
      .reply_author + a:hover {
        text-decoration: underline;
      }
      .reply_time {
        font-size: 11px;
        color: #08c;
      }
    }
    .user_action {
      color: #666;
      float: right;
    }
  }
}
.markdown-text {
  p {
    a {
      color: #08c;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}

.card-main {
  display: block;
  text-align:center;
  .user-avatar {
    vertical-align: middle;
    img {
      width: 48px;
      height: 48px;
    }
  }
  .user_name {
    font-size: 16px;
    max-width: 120px;
    white-space: nowrap;
    .dark {
      color: #778087;
    }
  }
}
.topic_title {
  overflow: hidden;
  width: 90%;
  color: #778087;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
}
</style>
