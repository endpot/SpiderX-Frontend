<template>
  <div class="app-container">
    <div class="panel">
      <el-row :gutter="20">
        <el-col :span="16" :xs="22" :offset="1">
          <el-tabs v-model="activeName" class="tab-container" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all">
              <!-- tab page 1 -->
              <tab-page ref="tab-page-all" @listenTabEvent="changeTabs" />

            </el-tab-pane>
            <!-- 这里需要keep-alive -->
            <el-tab-pane label="站务公告" name="notice">
              权限测试查看
              <el-tag v-permission="['admin']">This is admin</el-tag>
              <el-tag v-permission="['editor']">This is editor</el-tag>
              <el-tag v-permission="['admin','editor']">Both admin or editor can see this</el-tag>
              <!-- tab page 2 -->
              <tab-page ref="tab-page-notice" @listenTabEvent="changeTabs" />

            </el-tab-pane>
            <el-tab-pane label="新手指引" name="guide">
              <tab-page ref="tab-page-guide" @listenTabEvent="changeTabs" />
            </el-tab-pane>
            <el-tab-pane label="综合交流" name="discuss">
              <tab-page ref="tab-page-discuss" @listenTabEvent="changeTabs" />
            </el-tab-pane>
            <el-tab-pane label="兴趣爱好" name="hobby">
              <tab-page ref="tab-page-hobby" @listenTabEvent="changeTabs" />
            </el-tab-pane>
            <el-tab-pane v-permission="['admin']" label="站务工作" name="working">
              <tab-page ref="tab-page-working" @listenTabEvent="changeTabs" />
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="6" class="hidden-xs-only">
          <!-- front2back user info card -->
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
          <!-- create topic card -->
          <el-card class="box-card create-options">
            <div slot="header" class="clearfix">
              <span>Create Topic</span>
            </div>
            <div class="main-options">
              <router-link :to="{ name: 'CreateTopic' }">
                <el-button type="primary">Create</el-button>
              </router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import permission from '@/directive/permission'
import TabPage from './components/Tabs'
export default {
  directives: {
    permission
  },
  components: {
    TabPage
  },
  data() {
    return {
      activeName: 'all',
      front2Back: false,
      showHeader: false
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  mounted() {
    this.getTabAll()
  },
  methods: {
    // 页面初始化 请求page all
    getTabAll() {
      this.$refs['tab-page-all'].getList()
    },
    handleClick(tab, event) {
      switch (this.activeName) {
        case 'all':
          this.$refs['tab-page-all'].getTabName('all')
          break
        case 'notice':
          this.$refs['tab-page-notice'].getTabName('notice')
          break
        case 'guide':
          this.$refs['tab-page-guide'].getTabName('guide')
          break
        case 'discuss':
          this.$refs['tab-page-discuss'].getTabName('discuss')
          break
        case 'hobby':
          this.$refs['tab-page-hobby'].getTabName('hobby')
          break
        case 'working':
          this.$refs['tab-page-working'].getTabName('working')
          break
        default:
          this.$refs['tab-page-all'].getTabName('all')
      }
    },
    changeTabs(tabName) { // 接收从子组件传递过来的tabName 然后将获取到的tabName赋值给 activeName 然后执行请求数据
      this.activeName = tabName
      this.handleClick()
    },
    changeClick() {
      this.front2Back = !this.front2Back
    }
  }
}
</script>

<style lang="scss" scoped>
// 对原有样式修正
.tab-container {
  margin: 15px 0;
  border-radius: 0 0 5px 5px;
}
.titlelist {
  display: flex;
  // 标题部分的type='text' 按钮的大小
  .el-button {
    font-size: 12px;
    padding: 0 2px 0 0;
  }
}
.titleinfo {
  font-size: 12px;
}
.reply-read {
    font-size: 12px;
    margin-top: 30px;
    text-align: right;
}
.user-info-hover {
  width: 280px;
}
.clearfix {
  .user-name {
    display: inline-block;
    position: absolute;
    padding: 3px;
  }
}
.user-options {
  .el-row {
    .el-button {
      color: #aaa;
      text-shadow: 5px 0 15px #fff;
    }
  }
}
/* 可翻转的用户信息栏 */
.card-item {
    width: 25%;
    height: 300px;
    position: absolute;
    margin: 15px 0;
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
.create-options {
  position: absolute;
  margin-top: 360px;
  width: 25%;
  .main-options {
    text-align: center;
  }
}
</style>

