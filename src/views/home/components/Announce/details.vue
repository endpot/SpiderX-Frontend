<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>New+</span>
      </div>
      <div class="main-text">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="Title" prop="announce_title" label-width="100px">
            <el-input v-model="form.announce_title" />
          </el-form-item>
          <el-form-item label="Created By" prop="announce_footer_note" label-width="100px">
            <el-input v-model="form.announce_footer_note" />
          </el-form-item>
          <el-form-item prop="announce_text">
            <markdown-editor v-model="form.announce_text" class="md-editor" height="400px" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { fetchAnnounceDetails } from '@/api/home'

const defaultForm = {
  announce_id: undefined,
  announce_title: '',
  announce_text: '',
  announce_footer_note: 'SpiderX-Frontend',
  announce_time: ''
}

export default {
  components: {
    MarkdownEditor
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必填项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必填项'))
      } else {
        callback()
      }
    }

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        announce_title: [{ validator: validateRequire }],
        announce_text: [{ validator: validateRequire }],
        announce_footer_note: [{ validator: validateRequire }]
      },
      tempRoute: {},
      checked: true,
      loading: false
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.getDetails(id)
    } else {
      this.form = Object.assign({}, defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    getDetails(id) {
      fetchAnnounceDetails(id).then(res => {
        this.form = res.data
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setPageTitle() {
      const title = 'Edit Topic'
      document.title = `${title} - ${this.form.id}`
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '发布话题成功',
            type: 'success',
            duration: 2000
          })
          this.loading = false
        } else {
          console.log('err submit')
          return false
        }
      })
    },
    handleCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
