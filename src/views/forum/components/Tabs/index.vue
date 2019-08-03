<template>
  <div>
    <el-table v-loading="listLoading" :data="tableData" :show-header="showHeader" fit highlight-current-row style="width: 100%">

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
  </div>
</template>

<script> // 考虑将该处所有tab封装为一个组件 通过props传值
import { formatTime, timeStamp } from '@/utils' // 这里考虑到mockjs生成的日期是yyyy-MM-dd HH:mm:ss  所以封装了timeStamp将时间转为unix格式
import { fetchList } from '@/api/forum'
import Pagination from '@/components/Pagination'
export default {
  filters: {
    formatLocalTime(time) {
      return formatTime(timeStamp(time))
    }
  },
  components: {
    Pagination
  },
  props: {
    tabName: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      tableData: null, // 全局表格data
      showHeader: false, // 表格不显示header
      total: 0, // page total
      listLoading: true, // 默认加载中
      listQuery: { // fetchList 参数
        page: 1,
        limit: 20,
        tab: this.tabName //default tab page  这里接收传递的tabName
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(res => {
        // console.log(res.data)
        this.tableData = res.data.items
        this.total = res.data.total
        this.listLoading = false
      })
    },
  }
}
</script>

<style lang="scss" scoped>
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
</style>
