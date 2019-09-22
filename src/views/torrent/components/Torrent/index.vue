<template>
  <div class="app-container">
    <el-card class="box-card">
      <div v-if="isEdit" slot="header" class="clearfix">
        <span>Edit: title</span>
      </div>
      <el-form ref="form" :model="form" :rules="rules">

        <el-form-item label="File" prop="file" label-width="70px">
          <el-upload
            class="torrent-file-upload"
            action="#"
            :on-change="handleChange"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="Title" prop="title" label-width="70px">
          <el-input v-model="form.title" />
        </el-form-item>

        <el-form-item label="Category" prop="category" label-width="70px">
          <el-select v-model="form.category" clearable>
            <el-option v-for="item in categoryList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="Type" prop="type" label-width="70px">
          <el-select v-model="form.type" clearable>
            <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="IMDB" prop="imdb" label-width="70px">
          <el-input v-model="form.imdb" />
        </el-form-item>

        <el-form-item label="Douban" prop="douban" label-width="70px">
          <el-input v-model="form.douban" />
        </el-form-item>

        <el-form-item prop="title">
          <markdown-editor v-model="form.descr" class="md-editor" height="400px" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
          <el-button @click="handleCancel">Cancel</el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { fetchDetails } from '@/api/torrent'

const defaultForm = {
  id: undefined,
  title: '',
  category: '',
  type: '',
  imdb: 'this is imdb link',
  douban: 'this is douban link',
  descr: ''
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
  data() { // 该页面并没有写完
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
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1j'
        }
      ],
      form: Object.assign({}, defaultForm),
      rules: {
        title: [{ validator: validateRequire }],
        category: [{ validator: validateRequire }],
        type: [{ validator: validateRequire }]
      },
      tempRoute: {},
      categoryList: [
        { label: 'Movie', value: 'movie' },
        { label: 'Tvseries', value: 'tvseries' },
        { label: 'Anime', value: 'anime' },
        { label: 'Tvshow', value: 'tvshow' },
        { label: 'Music', value: 'music' }
      ],
      typeList: [
        { label: '2160p', value: '2160p' },
        { label: '1080p', value: '1080p' },
        { label: '720p', value: '720p' },
        { label: 'Encode', value: 'encode' }
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
      })
    },
    setPageTitle() {
      const title = 'Edit Torrent'
      document.title = `${title} - ${this.form.title}`
    },
    handleSubmit() {
      console.log(this.form)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '发布种子成功',
            type: 'success',
            duration: 2000
          })
          this.loading = false
          this.$router.push('/torrent/details/' + this.$route.params.id)
        } else {
          console.log('err submit')
          return false
        }
      })
    },
    handleCancel() {
      this.$router.go(-1)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    }
  }
}
</script>

<style lang="scss" scoped>
.torrent-file-upload {
  display: flex;
  div {
    margin-right: 20px !important;
  }
}

.md-editor {
  line-height: 0;
}
</style>
