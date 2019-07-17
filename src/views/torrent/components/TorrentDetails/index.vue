<template>
  <div class="app-container">
    <el-card class="box-card">
      <div v-for="o in 24" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  opacity: 0.8;
}
</style>
