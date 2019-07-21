<template>
  <div class="app-container">
    <h1>这里是种子Title</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>IMDB / DouBan / TMDB Information</span>
      </div>
      <div class="info-container">
        11111
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Torrent Info</span>
      </div>
      Just By UHDBits Torrent Details Torrents card
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Media Info</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Screenshots Info</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Comments</span>
      </div>
      list the comments just like forum details list
    </el-card>
  </div>
</template>
<script>
import { fetchDouban, fetchOMDB } from '@/api/main'
export default {
  data() {
    return {
      dataList: '',
      douban_id: 26931786,
      imdb_id: 6320628
    }
  },
  created() {
    this.getDouban()
    this.getOMDB()
  },
  methods: {
    getOMDB() {
      fetchOMDB(this.imdb_id).then(res => {
        console.log(res)
      })
    },
    getDouban() {
      fetchDouban(this.douban_id).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  color: #ddd;
  text-shadow: 5px 0 15px #fff;
}
.box-card {
  opacity: 0.8;
  margin: 15px 0;
}
</style>
