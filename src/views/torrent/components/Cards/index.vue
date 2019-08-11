<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          <router-link :to="{ name: 'TorrentCards' }">
            <el-button type="success">Cards</el-button>
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

      <el-row v-loading="listLoading" :gutter="10">
        <el-col v-for="(item, index) in torrentList" :key="index" class="card-list">
          <el-card class="box-card-info">
            <div slot="header" class="clearfix">
              <span class="card-title">
                <el-tag>Movies</el-tag>
                <el-tag>MKV</el-tag>
                <el-tag>{{ item.size | fileSize(item.size) }}</el-tag>
                <el-tag>
                  <svg-icon icon-class="card-up" />{{ item.seeders }} /
                  <svg-icon icon-class="card-up" class="icon-download" />{{ item.leechers }} /
                  <svg-icon icon-class="card-complete" />{{ item.completer }}
                </el-tag>
              </span>
            </div>
            <div class="card-info clearfix">
              <div class="card-poster">
                <img :src="doubanImg" :title="doubanInfo.title" alt="poster" class="card-poster-img">
              </div>
              <div class="card-main-info">
                <router-link :to="'/torrent/details/'+item.id" :title="item.title" class="link-type">
                  <h3> {{ doubanInfo.title }} </h3>
                </router-link>
                <span class="card-main-genre">
                  <span v-for="(typeName, typeNum) in doubanMovieType" :key="typeNum">
                    <el-button size="small">{{ typeName }}</el-button>
                  </span>
                </span>
                <p class="card-main-summary">
                  {{ doubanInfo.summary }}
                </p>
              </div>
            </div>
            <div class="card-footer clearfix">
              <span><el-tag><svg-icon icon-class="user" />{{ name }}</el-tag></span>
              <span style="float: right; padding: 3px 0;">
                <el-tag>{{ doubanInfo.rating.average }} / 10 ({{ doubanInfo.rating.numRaters }} votes)</el-tag>
              </span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="text-align: center" @pagination="getList" />
    </el-card>
  </div>
</template>

<script>
import { fetchList } from '@/api/torrent'
import { fetchDouban } from '@/api/main'
import { mapGetters } from 'vuex'
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
      doubanId: 26931786,
      doubanInfo: {},
      doubanPoster: '',
      bookmark: [],
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
  computed: {
    ...mapGetters([
      'name'
    ]),
    doubanImg() {
      return this.doubanPoster.replace(/img3/g, 'img1').replace(/s_ratio_poster/g, 'l_ratio_poster')
    },
    doubanMovieType() {
      return this.doubanInfo.attrs.movie_type
    }
  },
  created() {
    this.getList()
    this.getDouban()
  },
  methods: {
    getDouban() {
      fetchDouban(this.doubanId).then(res => {
        // console.log(res.data)
        this.doubanInfo = res.data
        this.doubanPoster = res.data.image
      }).catch(err => {
        console.log(err)
      })
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(res => {
        // console.log(res.data)
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
    bookMark(id) {
      if (this.bookmark.indexOf(id) !== -1) {
        const index = this.bookmark.indexOf(id)
        this.bookmark.splice(index, 1)
      } else {
        this.bookmark.push(id)
      }
    },
    handleFullSearch() {
      this.fullSearch = !this.fullSearch
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
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

.card-list {
  @media screen and (min-width: 1600px) {
    width: 33.33333%;
  }
  @media screen and (max-width: 1599px) and (min-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 899px) {
    width: 100%;
  }
}

.box-card-info {
  margin: 15px 0;
}

.card-title{
  float: right;
  padding: 0 3px;
}

.icon-download {
  transform: rotate(180deg);
}

.card-info {
  display: flex;
  height: 260px;
  .card-poster {
    img {
      height: 260px;
    }
  }
}

.card-main {
  &-info {
    padding: 10px 15px;
    margin-top: -20px;
    height: 260px;
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  &-genre {
    span {
      margin: 0 6px;
      .el-button {
        border: none;
        box-shadow: 0 0 5px 5px #eee;
        cursor: default;
      }
    }
  }
  &-summary {
    display: flex;
    font-size: 12px;
  }
}

.card-footer {
  span {
    .el-tag {
      margin: 10px 0 0 0;
    }
  }
}
</style>
