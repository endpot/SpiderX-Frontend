<template>
  <div class="app-container">
    <el-row :gutter="14">
      <el-col class="main" :span="15" :offset="3">
        <div class="panel">
          <div class="header">
            <span class="topic_full_title">
              <el-tag v-if="topic_details.tab === 'share'" size="small">分享</el-tag>
              <el-tag v-else-if="topic_details.tab === 'ask'" size="small" type="success">问答</el-tag>
              <span class="title">{{ topic_details.title }}</span>
            </span>
            <div class="title_details">
              <span>发布于 {{ topic_details.create_at }}</span>
              <span>作者<a :href="'https:\/\/cnodejs.org\/user\/' + topic_details.author.loginname">{{ topic_details.author.loginname }}</a></span>
              <span>{{ topic_details.visit_count }} 次浏览</span>
              <span>来自 {{ topic_details.tab }}</span>
              <el-button type="warning" icon="el-icon-star-off" class="bookmark" circle />
            </div>
            <hr>
          </div>
          <div class="main-content" v-html="topic_details.content" />
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic_details: []
    }
  },
  mounted() {
    const paramUrl = this.$route.params.topicId
    this.$axios.get('https://cnodejs.org/api/v1/topic/' + paramUrl)
      .then((res) => {
        this.topic_details = res.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;;
}
.header {
  display: block;
  .topic_full_title {
    .title {
      font-size: 24px;
      margin-top: 4px;
      line-height: 48px;
    }
  }
  .title_details {
    display: inline-block;
    width: 100%;
    font-size: 12px;
    color: #838383;
    span::before {
      content: "*";
    }
    .bookmark {
      float: right;
    }
  }
  .title_details + hr {
    background-color: #ddd;
    height: 1px;
    border: none;
  }
}
.main-content {
  display: block;
  margin: 0 10px;
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
</style>
