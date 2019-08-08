<template>
  <div class="app-container">
    <el-row :gutter="14">
      <el-col class="main" :span="15" :offset="3">
        <div class="new-title">创建新话题</div>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="选择版块:" prop="topicType" label-width="90px">
            <el-select v-model="form.topicType" placeholder="请选择版块">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="标题:" prop="title" label-width="90px">
            <el-input v-model="form.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label-width="10px" prop="content">
            <div class="editor-container">
              <markdown-editor v-model="form.content" class="md-editor" height="400px" />
            </div>
          </el-form-item>
          <el-form-item label-width="10px">
            <el-button v-loading="loading" type="primary" @click="submitForm">提交</el-button>
            <el-button @click="cancelForm">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>Markdown 语法参考</span>
          </div>
          <div v-for="(item, index) in grammerList" :key="index" class="markdown-grammers">
            {{ item.value }}
          </div>
          <span class="markdown-link"><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
        </el-card>
        <br>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>话题发布指南</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { fetchDetails } from '@/api/forum'

const defaultForm = {
  id: undefined,
  topicType: '', // 话题类别
  title: '', // 话题标题
  content: '' // 话题正文
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
      loading: false,
      form: Object.assign({}, defaultForm),
      rules: {
        topicType: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      },
      tempRoute: {},
      options: [
        {
          label: '精华',
          value: 'good'
        },
        {
          label: '分享',
          value: 'share'
        },
        {
          label: '问答',
          value: 'ask'
        }
      ],
      grammerList: [
        {
          value: '### 单行的标题'
        },
        {
          value: '**粗体**'
        },
        {
          value: '`console.log(\'行内代码\')`'
        },
        {
          value: '```js\n code \n``` 标记代码块'
        },
        {
          value: '[内容](链接)'
        },
        {
          value: '![文字说明](图片链接)'
        }
      ]
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
      fetchDetails(id).then(res => {
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
    submitForm() {
      console.log(this.form)
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
    cancelForm() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: block;
  opacity: 0.8;
}
.new-title {
  margin: 25px;
}
.main {
  background-color: #fff;;
}
.md-editor{
  line-height: 0;
}
.box-card {
  .markdown-grammers {
    font-size: 14px;
    line-height: 20px;
    color: #888;
  }
  .markdown-link {
    display: block;
    margin-top: 10px;
    cursor: pointer;
    a:hover {
      color: #00FF00;
    }
  }
}
</style>
