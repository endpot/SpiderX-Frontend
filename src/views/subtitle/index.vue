<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Subtitles</span>
      </div>

      <div class="search-options">
        <el-input v-model="listQuery.value" placeholder="Title" style="width: 600px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </div>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="text-align: center" @pagination="getList" />

      <el-table v-loading="listLoading" :data="subtitleList" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="Language" width="120">
          <template #default="{ row }">
            <el-tag>{{ row.language }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Title" min-width="300px">
          <template #default="{ row }">
            <span>{{ row.title }}</span>
            <span class="icon-options" @click="handleDownload(row.id)">
              <svg-icon icon-class="download" />
            </span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Date" width="180">
          <template #default="{ row }">
            <span>{{ row.created_at }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Size" width="120">
          <template #default="{ row }">
            <span>{{ row.size | fileSize(row.size) }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Uploader" width="160">
          <template #default="{ row }">
            <span>{{ row.created_by }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Options" width="140" fixed="right">
          <template #default="scope">
            <el-button type="text" @click="handleTipOff(scope.row.id)">Tip-Off</el-button>
            <el-button type="text" @click="handleDelete(scope.$index, subtitleList)">Delete</el-button>
          </template>
        </el-table-column>

      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="text-align: center" @pagination="getList" />

    </el-card>
  </div>
</template>

<script>
import { fetchSubtitleList } from '@/api/subtitle'
import { calcFileSize } from '@/utils'
import Pagination from '@/components/Pagination'
export default {
  filters: {
    fileSize(size) {
      return calcFileSize(size)
    }
  },
  components: {
    Pagination
  },
  data() {
    return {
      subtitleList: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        value: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchSubtitleList(this.listQuery).then(res => {
        console.log(res)
        this.subtitleList = res.data.items
        this.total = res.data.total
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    handleDownload(id) {
      console.log(id)
      this.$notify({
        title: '提示',
        message: '下载触发',
        type: 'success',
        duration: 2000
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleTipOff(id) {
      console.log(id)
      this.$notify({
        title: '提示',
        message: '跳转举报页面',
        type: 'info',
        duration: 2000
      })
    },
    handleDelete(index, row) {
      row.splice(index, 1)
      this.$notify({
        title: '提示',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.search-options {
  text-align: center;
}

.icon-options {
  float: right;
}
</style>
