<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="类型" width="80">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.category }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Title" min-width="300px">
        <template slot-scope="{row}">
          <router-link :to="'/torrent/edit/'+row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
          <div class="caption">
            <span>{{ row.caption }}</span>
            <div class="icon-options">
              <i class="el-icon-download" />
              <i class="el-icon-star-off" />
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Date">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.created_at | formatLocalTime(scope.row.create_at) }}</span> 这个格式化有点问题我们先去掉它 -->
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Size">
        <template slot-scope="scope">
          <span>{{ scope.row.size | fileSize(scope.row.size) }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Seeder">
        <template slot-scope="scope">
          <span>{{ scope.row.seeders }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Leecher">
        <template slot-scope="scope">
          <span>{{ scope.row.leechers }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Rate">
        <template slot-scope="scope">
          <el-progress type="circle" :percentage="scope.row.rate" :width="width" />
        </template>
      </el-table-column>

      <el-table-column align="center" label="Uploader">
        <template slot-scope="{row}">
          <router-link :to="'/user/details'" class="link-type">
            <span>{{ row.created_by }}</span>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { fetchList } from '@/api/torrent'
import { calcFileSize } from '@/utils'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  filters: {
    fileSize(size) {
      return calcFileSize(size)
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      width: 38,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList().then(res => {
        console.log(res.data)
        this.list = res.data.items
        this.total = res.data.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  opacity: 0.8;
}
.caption {
  font-size: 0.8rem;
  width: 100%;
  .icon-options {
    float: right;
  }
}

</style>
