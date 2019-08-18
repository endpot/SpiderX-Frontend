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
    </el-card>
    <!-- waterfall  -->
    <div class="waterfall">
      <div v-for="(item, index) in torrentList" :key="index" class="waterfall-item">
        <el-card class="waterfall-card">
          <router-link :to="'/torrent/details/'+item.id">
            <div class="waterfall-poster">
              <img :src="doubanImg" :title="item.title" alt="poster">
            </div>
            <div class="waterfall-caption">
              <p>{{ item.caption }}</p>
            </div>
          </router-link>
          <div class="waterfall-user-active">
            <span>
              {{ item.seeder_count }} 做种 {{ item.leecher_count }} 下载 {{ item.snatcher_count }} 完成
            </span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/torrent'
import { fetchDouban } from '@/api/main'
import { mapGetters } from 'vuex'
import { calcFileSize } from '@/utils'
export default {
  filters: {
    fileSize(size) {
      return calcFileSize(size)
    }
  },
  data() {
    return {
      torrentList: [], // default list
      torrentListMore: [], // 瀑布流第一次之后的加载
      fullSearch: false,
      doubanId: 26931786,
      doubanInfo: {},
      doubanPoster: '',
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
    }
  },
  created() {
    this.getList()
    this.getDouban()
    const that = this
    window.onscroll = function() {
      // scrollTop 滚动条滚动时，距离顶部的距离
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // windowHeight 可视区的高度
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // scrollHeight 滚动条的总高度
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件 多次测试发现会有小于1的偏差以至于无法生效 所以这里对scrollTop 向上取整
      if (Math.ceil(scrollTop) + windowHeight >= scrollHeight) {
        that.loadMore()
      }
    }
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
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    loadMore() {
      this.listQuery.page += 1
      fetchList(this.listQuery).then(res => {
        this.torrentListMore = res.data.items
        this.torrentList = this.torrentList.concat(this.torrentListMore)
      }).catch(err => {
        console.log(err)
      })
    },
    onSearch() {
      console.log(this.form.search)
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

.waterfall {
  column-count: 5;
  column-gap: 0;
  .waterfall-item {
    box-sizing: border-box;
    break-inside: avoid;
    transition: .3s;
    padding: 4px;
    img {
      width: 100%;
    }
    .waterfall-caption {
      font-size: 12px;
    }
    .waterfall-user-active {
      font-size: 12px;
      color: #838383;
    }
  }
}
@media screen and(min-width: 1800px) {
  .waterfall {
    column-count: 7;
  }
}
@media screen and(max-width: 1799px) and(min-width: 1600px) {
  .waterfall {
    column-count: 6;
  }
}
@media screen and(max-width: 1599px) and(min-width: 1200px) {
  .waterfall {
    column-count: 5;
  }
}
@media screen and(max-width: 1199px) and(min-width: 900px) {
  .waterfall {
    column-count: 4;
  }
}
@media screen and(max-width: 899px) and(min-width: 700px) {
  .waterfall {
    column-count: 3;
  }
}
@media screen and(max-width: 699px) and(min-width: 500px) {
  .waterfall {
    column-count: 2;
  }
}
@media screen and(max-width: 499px) {
  .waterfall {
    column-count: 1;
  }
}
</style>
