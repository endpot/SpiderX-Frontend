<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item style="width:280px" prop="search">
          <el-input v-model="form.search" placeholder="请输入种子信息" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="onSearch" />
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-table v-loading="listLoading" :data="torrentList" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="类型" width="80">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.category }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Title" min-width="300px">
        <template slot-scope="{row}">
          <router-link :to="'/torrent/details/'+row.id" :title="row.title" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
          <div class="caption">
            <span>{{ row.caption }}</span>
            <div class="icon-options">
              <svg-icon icon-class="download" />
              <span @click="bookMark(row.id)">
                <svg-icon v-if="bookmark.includes(row.id)" icon-class="star-pick" />
                <svg-icon v-else icon-class="star" />
              </span>
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
      torrentList: null,
      total: 0,
      width: 38, // rate circle width
      bookmark: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      form: {
        search: '' // 搜索框
      },
      rules: {
        search: [{ required: true, message: '请输入要查询的种子信息', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(res => {
        console.log(res.data)
        this.torrentList = res.data.items
        this.total = res.data.total
        this.listLoading = false
      })
    },
    onSearch() {
      console.log(this.form.search)
    },
    bookMark(id) {
      if (this.bookmark.indexOf(id) !== -1) {
        const index = this.bookmark.indexOf(id)
        this.bookmark.splice(index, 1)
      } else {
        this.bookmark.push(id)
      }
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(this.pageSize)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(this.currentPage)
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
