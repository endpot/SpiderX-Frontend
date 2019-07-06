<template>
  <div class="app-container">
    <el-row :gutter="14">
      <el-col class="main" :span="15" :offset="3">
        <div class="new-title">创建新话题</div>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="选择版块:" prop="forumArea" label-width="90px">
            <el-select v-model="form.forumArea" placeholder="请选择版块">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="标题:" prop="title" label-width="90px">
            <el-input v-model="form.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label-width="10px">
            <div class="editor-container">
              <markdown-editor v-model="content" height="400px" />
            </div>
          </el-form-item>
          <el-form-item label-width="10px">
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>Markdown 语法参考</span>
          </div>
          <div v-for="item in grammerList" :key="item" class="markdown-grammers">
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

const content = `
**This is test**

* vue
* element
* webpack

`

export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      form: {
        forumArea: '',
        title: ''
      },
      rules: {
        forumArea: [
          { required: true, message: '请选择版块', trigger: 'change' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 - 20 个字符', trigger: 'blur' }
        ]
      },
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
      content: content, // mdEditor文本内容
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
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit')
        } else {
          console.log('err')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: block;
}
.new-title {
  margin: 25px;
}
.main {
  background-color: #fff;;
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
