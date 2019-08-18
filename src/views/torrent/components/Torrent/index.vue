<template>
  <div class="app-container">
    <el-card class="box-card">
      <div v-if="isEdit" slot="header" class="clearfix">
        <span>Edit: title</span>
      </div>
      <el-form ref="form" :model="form">

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
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1j'
        }
      ],
      form: {
        title: '',
        category: 'movie',
        type: '1080p',
        imdb: '',
        douban: '',
        descr: ''
      },
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
  methods: {
    handleSubmit() {
      console.log('submit')
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
