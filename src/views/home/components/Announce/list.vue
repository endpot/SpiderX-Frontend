<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>News List</span>
        <span style="float: right; padding: 3px 0;">
          <router-link :to="'/announce/create'" class="link-type">
            [New+]
          </router-link>
        </span>
      </div>
      <div style="margin-bottom: 15px;">
        <el-input v-model="listQuery.value" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-select v-model="listQuery.type" placeholder="Type" clearable style="width: 90px" class="filter-item">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </div>

      <el-collapse v-model="activeName" v-loading="listLoading">
        <div v-for="(item, index) in announcementList" :key="index" class="items">
          <el-collapse-item :name="item.announce_id">
            <template slot="title">
              {{ item.announce_title }}
              <el-tag v-if="newTag.includes(item.announce_id)" size="small" effect="dark">[New]</el-tag>
              <div class="item-title-right">
                <div class="item-title-options">
                  <span>
                    <router-link :to="'/announce/edit/'+item.announce_id" class="link-type">
                      Edit
                    </router-link>
                    <span class="link-type" @click="deleteAnnounceItem(item)">Delete</span>
                  </span>
                  <span class="item-title-time hidden-xs-only"> {{ item.announce_time }} </span>
                </div>
              </div>
            </template>
            <div class="items-text">{{ item.announce_text }}</div>
            <div class="items-footer">
              <div class="items-footer-note">{{ item.announce_footer_note }}</div>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getAnnounce" />

    </el-card>
  </div>
</template>

<script>
import { getAnnouncementList } from '@/api/announcement'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      activeName: '', // 当前激活的collspan
      announcementList: [], // announce list
      newTag: [], // 是否是最新的announce  待修改
      total: 0, // 分页 total
      listLoading: true,
      listQuery: { // 默认search 基于 title
        page: 1,
        perPage: 15,
        total: 0
      },
      typeOptions: [
        { label: 'Title', value: 'title' },
        { label: 'Body', value: 'body' },
        { label: 'Both', value: 'both' }
      ]
    }
  },
  mounted() {
    this.fetchAnnouncementList()
  },
  methods: {
    fetchAnnouncementList() {
      this.listLoading = true
      getAnnouncementList(this.listQuery.page, this.listQuery.p).then(res => {
        debugger

        this.announcementList = res.data.items.reverse()
        this.listQuery.total = res.data.meta.pagination.total

        this.activeName = this.announcementList[0].announce_id
        this.newTag[0] = this.announcementList[0].announce_id

        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    deleteAnnounceItem(item) {
      alert('Sure to delete this item?')
      for (let i = 0; i < this.announcementList.length; i++) {
        if (this.announcementList[i].announce_id === item.announce_id) {
          this.announcementList.splice(i, 1)
        }
      }
      // 预留一个post 方法
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getAnnounce()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  .el-input {
    width: 100px;
  }
}

.item-title {
  &-right {
    display: flex;
    flex-direction: column;
    width: calc(100% - 120px);
    position: absolute;
  }
  &-options {
    align-self: flex-end;
  }
  &-time {
    color: #838383;
  }
}
</style>
