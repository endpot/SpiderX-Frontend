<template>
  <div class="home-container">
    <div class="home-announce">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近消息</span>
          <span style="float: right; padding: 3px 0;">
            <router-link :to="'/announce/create'" class="link-type">
              [New]
            </router-link>
            <router-link :to="'/announce/list'" class="link-type">
              [List]
            </router-link>
          </span>
        </div>

        <el-collapse v-model="activeName">
          <div v-for="(item, index) in announceList" :key="index" class="items">
            <el-collapse-item :name="item.announce_id">
              <template slot="title">
                {{ item.announce_title }}
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

      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>热门</span>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>推荐</span>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>聊天区</span>
          <el-button v-permission="['admin']" style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>投票</span>
          <el-button v-permission="['admin']" style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>

      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>竞价置顶</span>
          <el-button v-permission="['admin']" style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>

      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>站点数据</span>
          <el-button v-permission="['admin']" style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>
        <ve-line :data="chartData" :settings="chartSettings" />
      </el-card>
    </div>
    <div class="home-text">name:{{ name }}</div>
    <div class="home-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchAnnounce } from '@/api/home'
import permission from '@/directive/permission' // 页面内使用permission指令控制权限
export default {
  name: 'Home',
  directives: {
    permission
  },
  data() {
    this.chartSettings = {
      axisSite: { right: ['下单率'] },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['数值', '比率']
    }
    return {
      activeName: '',
      announceList: [],
      // activeItem: [],
      chartData: { // 待考虑怎么整2333
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
    this.getAnnounce()
  },
  methods: {
    getAnnounce() {
      fetchAnnounce().then(res => {
        // console.log(res.data.items)
        // 逆序保证最新数据为0号， 切片显示部分 考虑计算属性 为了方便activeName 直接在这里
        this.announceList = res.data.items.reverse().slice(0, 4)
        this.activeName = this.announceList[0].announce_id
        // this.activeItem.push(this.announceList[0].announce_id)
      })
    },
    // showItems(id) {
    //   console.log(id)
    //   if (this.activeItem.indexOf(id) !== -1) {
    //     const index = this.activeItem.indexOf(id)
    //     this.activeItem.splice(index, 1)
    //   } else {
    //     this.activeItem.push(id)
    //   }
    // },
    deleteAnnounceItem(item) {
      alert('Sure to delete this item?')
      for (let i = 0; i < this.announceList.length; i++) {
        if (this.announceList[i].announce_id === item.announce_id) {
          this.announceList.splice(i, 1)
        }
      }
      // 预留一个post 方法
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  margin: 20px;
  opacity: 0.8;
}
.box-card {
  margin: 15px 0;
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
