<template>
  <div class="home-container">
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <bulletin-panel />
        </el-card>
      </el-col>
      <el-col :span="12"><bulletin-panel /></el-col>
    </el-row>
    <div class="home-text">name:{{ name }}</div>
    <div class="home-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BulletinPanel from './components/BulletinPanel'

export default {
  name: 'Home',
  components: { BulletinPanel },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
