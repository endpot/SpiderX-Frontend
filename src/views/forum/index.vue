<template>
  <div class="app-container">
    <div class="panel">
      <el-row :gutter="20">
        <el-col :span="16" :offset="1">
          <el-tabs v-model="activeName" class="tab-container" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all">

              <el-table v-loading="listLoading" :data="forumData" :show-header="showHeader" fit highlight-current-row style="width: 100%">

                <el-table-column align="center" label="Icon" width="60">
                  <template slot-scope="scope">
                    <router-link :to="'#'">
                      <el-popover placement="right" trigger="hover">
                        <el-card class="user-info-hover" shadow="never">
                          <div slot="header" class="clearfix">
                            <el-image :src="scope.row.author.avatar_url" fit="fill" style="width: 40px; height: 40px;" />
                            <div class="user-name"> {{ scope.row.author.author_name }} </div>
                            <div v-for="role in roles" :key="role" style="float: right; padding: 3px 0">{{ role }}</div>
                          </div>
                          <div class="user-options">
                            <el-row>
                              <el-button size="small" round>加为好友</el-button>
                              <el-button size="small" round>发送信息</el-button>
                              <el-button size="small" round>打个招呼</el-button>
                            </el-row>
                          </div>
                        </el-card>
                        <el-image slot="reference" :src="scope.row.author.avatar_url" fit="fill" style="width: 40px; height: 40px; border-radius: 50%;" />
                      </el-popover>
                    </router-link>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="Title" width="auto">
                  <template slot-scope="{row}">
                    <div class="titlelist">
                      <el-button v-if="row.topicType === 'notice'" type="text" @click="changeTab(row)">[站务公告]</el-button>
                      <el-button v-if="row.topicType === 'guide'" type="text" @click="changeTab(row)">[新手指引]</el-button>
                      <el-button v-if="row.topicType === 'discuss'" type="text" @click="changeTab(row)">[综合交流]</el-button>
                      <el-button v-if="row.topicType === 'hobby'" type="text" @click="changeTab(row)">[兴趣爱好]</el-button>
                      <el-button v-if="row.topicType === 'working'" type="text" @click="changeTab(row)">[站务工作]</el-button>
                      <router-link :to="'/forum/details/'+row.id" :title="row.title" class="link-type">
                        <div>{{ row.title }}</div>
                      </router-link>
                    </div>
                    <div class="titleinfo">
                      <span>作者:</span>
                      <router-link :to="'/user/info/'+row.author_id" :title="row.author" class="link-type">
                        <span> {{ row.author.author_name }} </span>
                      </router-link>
                      <span> {{ row.create_at }} </span>
                      <span> | </span>
                      <span> 最后发表: </span>
                      <span>{{ row.author.author_name }}</span>
                      <span>{{ row.last_reply_at | formatLocalTime(row.last_reply_at) }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column align="right" label="ReplyOrRead" width="120">
                  <template slot-scope="scope">
                    <div class="reply-read">
                      <span>回帖:</span>
                      <span> {{ scope.row.reply_count }} </span>
                      <span> / </span>
                      <span> {{ scope.row.pageviews }} </span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>

              <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
            </el-tab-pane>
            <!-- 这里需要keep-alive -->
            <el-tab-pane label="站务公告" name="notice">
              权限测试查看
              <el-tag v-permission="['admin']">This is admin</el-tag>
              <el-tag v-permission="['editor']">This is editor</el-tag>
              <el-tag v-permission="['admin','editor']">Both admin or editor can see this</el-tag>

              <el-table v-loading="listLoading" :data="noticeList" :show-header="showHeader" fit highlight-current-row style="width: 100%">

                <el-table-column align="center" label="Icon" width="60">
                  <template slot-scope="scope">
                    <router-link :to="'#'">
                      <el-popover placement="right" trigger="hover">
                        <el-card class="user-info-hover" shadow="never">
                          <div slot="header" class="clearfix">
                            <el-image :src="scope.row.author.avatar_url" fit="fill" style="width: 40px; height: 40px;" />
                            <div class="user-name"> {{ scope.row.author.author_name }} </div>
                            <div v-for="role in roles" :key="role" style="float: right; padding: 3px 0">{{ role }}</div>
                          </div>
                          <div class="user-options">
                            <el-row>
                              <el-button size="small" round>加为好友</el-button>
                              <el-button size="small" round>发送信息</el-button>
                              <el-button size="small" round>打个招呼</el-button>
                            </el-row>
                          </div>
                        </el-card>
                        <el-image slot="reference" :src="scope.row.author.avatar_url" fit="fill" style="width: 40px; height: 40px; border-radius: 50%;" />
                      </el-popover>
                    </router-link>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="Title" min-width="300px">
                  <template slot-scope="scope">
                    <div class="titlelist">
                      <router-link :to="'/forum/details/'+scope.row.id" :title="scope.row.title" class="link-type">
                        <div>{{ scope.row.title }}</div>
                      </router-link>
                    </div>
                    <div class="titleinfo">
                      <span>作者:</span>
                      <router-link :to="'/user/info/'+scope.row.author_id" :title="scope.row.author" class="link-type">
                        <span> {{ scope.row.author.author_name }} </span>
                      </router-link>
                      <span> {{ scope.row.create_at }} </span>
                      <span> | </span>
                      <span> 最后发表: </span>
                      <span>{{ scope.row.author.author_name }}</span>
                      <span>{{ scope.row.last_reply_at | formatLocalTime(scope.row.last_reply_at) }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column align="right" label="ReplyOrRead">
                  <template slot-scope="scope">
                    <div class="reply-read">
                      <span>回帖:</span>
                      <span> {{ scope.row.reply_count }} </span>
                      <span> / </span>
                      <span> {{ scope.row.pageviews }} </span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>

              <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

            </el-tab-pane>
            <el-tab-pane label="新手指引" name="guide">分享</el-tab-pane>
            <el-tab-pane label="综合交流" name="discuss">问答</el-tab-pane>
            <el-tab-pane label="兴趣爱好" name="hobby">问答</el-tab-pane>
            <el-tab-pane v-permission="['admin']" label="站务工作" name="working">问答</el-tab-pane>
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
      activeName: 'notice',
      // tab all page
      forumData: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        tab: 'all'
      },
      // tab notice page
      noticeList: null,
      front2Back: false,
      showHeader: false
    }
  },
  computed: {
    ...mapGetters([
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(res => {
        // console.log(res.data)
        this.forumData = res.data.items
        this.total = res.data.total
        this.listLoading = false
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
      this.listQuery.tab = tab.name
      this.getList()
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
    },
    changeTab(id) {
      const idTab = id.row.topicType
      this.activeName = idTab
    }

  }
}
</script>

<style lang="scss" scoped>
// 对原有样式修正

.tab-container {
  opacity: 0.8;
  margin: 15px 0;
  border-radius: 0 0 5px 5px;
}
// 标题部分的type='text' 按钮的大小
.el-button {
  font-size: 12px;
  padding: 0 2px 0 0;
}
.titlelist {
  display: flex;
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

