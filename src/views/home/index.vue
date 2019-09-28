<template>
  <div class="app-container">
    <div class="home-announce">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Announcement</span>
          <span style="float: right; padding: 3px 0;">
            <router-link :to="'/announce/create'" class="link-type">
              <i class="el-icon-document-add" />
            </router-link>
            <router-link :to="'/announce/list'" class="link-type">
              <i class="el-icon-s-grid" />
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
          <span>Links</span>
          <el-button v-permission="['admin']" style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>
        <div class="links-text link-type">
          <span><a href="https://ajycc20.xyz" target="_blank">ajycc20's Blog</a></span>
        </div>
      </el-card>

    </div>
    <div class="home-text">name:{{ name }}</div>
    <div class="home-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAnnouncementList } from '@/api/announcement'
import permission from '@/directive/permission' // 页面内使用permission指令控制权限
export default {
  name: 'Home',
  directives: {
    permission
  },
  data() {
    return {
      activeName: '', // 当前激活的collspan
      announcementList: [] // 存放announce list
    }
  },
  computed: {
    // 从store获取 name roles
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
    // 调用getAnnounce
    this.fetchAnnouncementList()
  },
  methods: {
    fetchAnnouncementList() {
      getAnnouncementList().then(res => {
        // console.log(res.data.items)
        // 逆序保证最新数据为0号， 切片显示部分 考虑计算属性 为了方便activeName 直接在这里
        this.announcementList = res.data.reverse().slice(0, 4)
        // this.activeName = this.announcementList[0].announce_id
      }).catch(err => {
        console.log(err)
      })
    },
    deleteAnnounceItem(item) {
      alert('Sure to delete this item?')
      for (let i = 0; i < this.announceList.length; i++) {
        if (this.announceList[i].announce_id === item.announce_id) {
          this.announceList.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
