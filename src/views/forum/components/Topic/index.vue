<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col class="main" :span="20">

        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>New Topic</span>
          </div>
          <div class="main-form">
            <el-form ref="form" :model="form" :rules="rules">
              <el-form-item label="Type" prop="topic_type" label-width="50px">
                <el-select v-model="form.topic_type" clearable placeholder="Type">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </el-form-item>
              <el-form-item label="Title" prop="title" label-width="50px">
                <el-input v-model="form.title" placeholder="Title" />
              </el-form-item>
              <el-form-item prop="content">
                <div class="editor-container">
                  <markdown-editor v-model="form.content" class="md-editor" height="400px" />
                </div>
              </el-form-item>
              <el-form-item label-width="10px">
                <el-button v-loading="loading" type="primary" @click="handleSubmit">提交</el-button>
                <el-button @click="handleCancel">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>

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
  topic_type: '', // 话题类别
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
      form: Object.assign({}, defaultForm), // 拷贝defaultForm-> form
      rules: {
        topic_type: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      },
      tempRoute: {},
      options: [ // notice: 公告 guide: 新手指引  discuss: 综合交流  hobby: 爱好 working:站务工作
        { label: 'Notice', value: 'notice' },
        { label: 'Guide', value: 'guide' },
        { label: 'Discuss', value: 'discuss' },
        { label: 'Hobby', value: 'hobby' },
        { label: 'Working', value: 'working' }
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
    // 这里判断接收的参数isEdit true/false
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.getDetails(id)
    } else {
      this.form = Object.assign({}, defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    // 请求数据
    getDetails(id) {
      fetchDetails(id).then(res => {
        this.form = res.data
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    // 设置当前网页title
    setPageTitle() {
      const title = 'Edit Topic'
      document.title = `${title} - ${this.form.title}`
    },
    // submit form
    handleSubmit() {
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
    // router go back
    handleCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  border-radius: 6px;
}

.md-editor {
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
