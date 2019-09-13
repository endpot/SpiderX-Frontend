<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          <router-link :to="{ name: 'TorrentCards' }">
            <el-button type="success">Cards</el-button>
          </router-link>
          <router-link :to="{ name: 'TorrentWaterfall' }">
            <el-button type="success">Waterfall</el-button>
          </router-link>
          <router-link :to="{ name: 'Torrent' }">
            <el-button type="success">Default(List)</el-button>
          </router-link>
        </span>
        <span style="float: right">
          <el-button type="success" @click="handleFullSearch">Filter</el-button>
        </span>
      </div>
      <div v-if="fullSearch" class="search-full-options">
        <el-form ref="formFullSearch" :model="form">
          <el-form-item label="Torrent Type">
            种子类型 movie tv music .etc
          </el-form-item>
          <el-form-item label="Type">
            媒介 just like CD DVD Encode WEB-DL HDTV Remux Blu-ray .etc
          </el-form-item>
          <el-form-item label="Code">
            编码 x265 x264 HEVC H264 .etc
          </el-form-item>
          <el-form-item label="IMDB / Douban">
            imdb or douban links
          </el-form-item>
          <el-form-item label="Year Range">
            年代  front - end
          </el-form-item>
          <el-form-item label="Resolution">
            分辨率
          </el-form-item>
          <el-form-item label="Genre">
            电影类型
          </el-form-item>
          <el-form-item label="Discounts">
            种子buff
          </el-form-item>
          <el-form-item label="Activity">
            活动 seeding or leeching or completed .etc
          </el-form-item>
        </el-form>
      </div>
      <div class="search-options">
        <el-input v-model="listQuery.value" placeholder="Title" style="width: 600px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-select v-model="listQuery.type" placeholder="Type" clearable style="width: 90px" class="filter-item">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </div>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="text-align: center" @pagination="getList" />

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
            <span>{{ scope.row.seeder_count }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Leecher">
          <template slot-scope="scope">
            <span>{{ scope.row.leecher_count }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Completer">
          <template slot-scope="scope">
            <span>{{ scope.row.snatcher_count }}</span>
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

        <el-table-column align="center" label="Options" fixed="right">
          <template slot-scope="scope">
            <router-link :to="'/torrent/edit/'+scope.row.id" class="link-type">
              <el-button type="text">Edit</el-button>
            </router-link>
            <el-button type="text" @click="handleDelete(scope.$index, torrentList)">Delete</el-button>
          </template>
        </el-table-column>

      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="text-align: center" @pagination="getList" />
    </el-card>
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
      torrentList: [],
      fullSearch: false,
      total: 0,
      width: 38, // rate circle width
      bookmark: [], // 同样基于 数组然后使用includes 返回的true/false 进行判断
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        value: undefined,
        type: 'title'
      },
      typeOptions: [
        { label: 'Title', value: 'title' },
        { label: 'Caption', value: 'caption' },
        { label: 'Description', value: 'descr' },
        { label: 'Uploader', value: 'created_by' }
      ],
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
        // console.log(res.data.items)
        this.torrentList = res.data.items
        this.total = res.data.total
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    onSearch() {
      console.log(this.form.search)
    },
    // 收藏
    bookMark(id) {
      if (this.bookmark.indexOf(id) !== -1) {
        const index = this.bookmark.indexOf(id)
        this.bookmark.splice(index, 1)
      } else {
        this.bookmark.push(id)
      }
    },
    // 基于多个筛选的查询 待修改
    handleFullSearch() {
      this.fullSearch = !this.fullSearch
    },
    // search
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    // 应该是先post 再 重新请求list
    // 或者可以考虑 post 基于返回的code -> this.$notify -> row.splice
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
.search-full-options {
  margin: 15px 8%;
  border: 1px solid #dddddd;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 5px 5px 5px #bbb;
  }
}

.search-options {
  text-align: center;
}

.caption {
  font-size: 0.8rem;
  width: 100%;

  .icon-options {
    float: right;
  }
}
</style>
