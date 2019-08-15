<template>
  <div class="app-container">
    <h1>{{ torrentDetail[0].title }}</h1>
    <el-row :gutter="20">
      <el-col :span="16" :offset="1">
        <!-- IMDB / DouBan / TMDB Information -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>IMDB / DouBan / TMDB Information</span>
            <span style="float: right; padding: 3px 0">
              <router-link :to="'/torrent/edit/'+torrentDetail[0].id">
                <el-button type="text">Edit</el-button>
              </router-link>
              <el-button type="text" @click="handleDelete">Delete</el-button>
            </span>
          </div>
          <div class="info-container">
            <el-image :src="doubanImg" fit="contain" />
            <div class="info">
              <div class="douban-title">{{ doubanInfo.title }}
                <a class="douban-icon" target="_blank" :href="'https://movie.douban.com/subject/' + doubanId">
                  <svg-icon icon-class="douban" :title="doubanInfo.title" />
                </a>
              </div>
              <div class="sub-title">
                <p>{{ doubanInfo.alt_title }}</p>
              </div>
              <dl>
                <dt>Rating</dt>
                <dd>
                  <div class="rating">
                    <el-rate v-model="doubanRating" :max="ratingMax" disabled text-color="#ff9900" />
                    <div class="rating-text">
                      {{ doubanRating }} / 10 ({{ doubanInfo.rating.numRaters }} votes)
                    </div>
                  </div>
                </dd>
                <dt>Year</dt>
                <dd>
                  <div class="movie-year">
                    {{ doubanMovieYear }}
                  </div>
                </dd>
                <dt>Place</dt>
                <dd>
                  <div class="movie-country">
                    {{ doubanMovieCountry }}
                  </div>
                </dd>
                <dt>Genres</dt>
                <dd>
                  <div class="movie-type">
                    {{ doubanMovieType }}
                  </div>
                </dd>
                <dt>Director</dt>
                <dd>
                  <div class="movie-directors">
                    {{ doubanMovieDirectors }}
                  </div>
                </dd>
                <dt>Language</dt>
                <dd>
                  <div class="movie-language">
                    {{ doubanMovieLanguage }}
                  </div>
                </dd>
                <dt>PubDate</dt>
                <dd>
                  <div class="movie-pubdate">
                    {{ doubanMoviePubDate }}
                  </div>
                </dd>
                <dt>Duration</dt>
                <dd>
                  <div class="movie-duration">
                    {{ doubanMovieDuration }}
                  </div>
                </dd>
                <dt v-if="doubanInfo.attrs.episodes">Episodes</dt>
                <dd v-if="doubanInfo.attrs.episodes">
                  <div class="movie-episode">
                    {{ doubanMovieEpisode }}
                  </div>
                </dd>
                <dt>Starring</dt>
                <dd>
                  <div class="movie-cast">
                    {{ doubanMovieStarring }}
                  </div>
                </dd>
                <dt>Tags</dt>
                <dd>
                  <div class="movie-tags">
                    {{ doubanMovieTags }}
                  </div>
                </dd>
                <dt>Plot</dt>
                <dd>
                  <div class="movie-plot">
                    {{ doubanInfo.summary }}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </el-card>
        <!-- General -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>General</span>
          </div>
          <div class="main-torrent-info">
            <table>
              <tbody>
                <tr>
                  <!-- first line is title column -->
                  <td><strong>Title</strong></td>
                  <td>{{ torrentDetail[0].title }}</td>
                </tr>
                <tr>
                  <td><strong>Staff Tools</strong></td>
                  <td>
                    <el-button type="primary" size="mini">
                      <svg-icon icon-class="star-pick" title="free" />Free
                    </el-button>
                    <el-button type="primary" size="mini">2x Free</el-button>
                    <el-button type="primary" size="mini">Half</el-button>
                    <el-button type="primary" size="mini">2x Half</el-button>
                    <el-button type="primary" size="mini">30%</el-button>
                    <el-button type="primary" size="mini">
                      <svg-icon icon-class="sticky" title="free" />Sticky
                    </el-button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Uploader</strong></td>
                  <td>
                    <router-link :to="'#'">
                      <el-button type="primary" size="mini">
                        <svg-icon icon-class="user" title="user" />{{ torrentDetail[0].created_by }}
                      </el-button>
                      <el-button type="primary" size="mini">
                        <svg-icon icon-class="heart" title="heart" style="color: red;" />Thanks
                      </el-button>
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td><strong>Uploaded</strong></td>
                  <td>{{ torrentDetail[0].created_at }}({{ torrentDetail[0].created_at | formatLocalTime(torrentDetail[0].created_at) }})</td>
                </tr>
                <tr>
                  <td><strong>Size</strong></td>
                  <td>{{ torrentDetail[0].size | fileSize(torrentDetail[0].size) }}</td>
                </tr>
                <tr>
                  <td><strong>Category</strong></td>
                  <td>Movie</td>
                </tr>
                <tr>
                  <td><strong>Peers</strong></td>
                  <td>
                    <el-button type="primary" size="mini" round>
                      <svg-icon icon-class="card-up" />{{ torrentDetail[0].seeder_count }}
                    </el-button>
                    <el-button type="primary" size="mini" round>
                      <svg-icon icon-class="card-up" class="icon-download" />{{ torrentDetail[0].leecher_count }}
                    </el-button>
                    <el-button type="primary" size="mini" round>
                      <svg-icon icon-class="card-snatch" />{{ torrentDetail[0].snatcher_count }}
                    </el-button>
                    <el-button type="primary" size="mini" round>
                      View Peers
                    </el-button>
                    <el-button type="primary" size="mini" round>
                      View Snatchers
                    </el-button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Tip Amount</strong></td>
                  <td>
                    <el-popover placement="top-start" trigger="click">
                      <el-row style="display:flex;">
                        <el-button type="success">10</el-button>
                        <el-button type="success">50</el-button>
                        <el-button type="success">100</el-button>
                        <el-button type="success">500</el-button>
                        <el-button type="success">1000</el-button>
                        <el-button type="success">2000</el-button>
                        <el-input v-model="tipCount" style="margin-left:5px;" placeholder="Enter a num for tip amount">
                          <template slot="append">
                            <el-button type="success">Leave tip</el-button>
                          </template>
                        </el-input>
                      </el-row>
                      <el-button slot="reference" type="primary" size="mini">Send</el-button>
                    </el-popover>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-card>
        <!-- Screenshots Info -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Screenshots Info</span>
          </div>
        </el-card>
        <!-- Comments -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Comments</span>
          </div>
          list the comments just like forum details list
        </el-card>
      </el-col>
      <el-col :span="6">
        <div class="card-item">
          <el-card :class="{front:front2Back}" class="box-card-front">
            <div slot="header" class="clearfix">
              <span>UserImg</span>
              <span style="float: right; padding: 3px 0">
                <svg-icon icon-class="change" @click="changeClick" />
              </span>
            </div>
            <div class="user-info">
              aaaaa
            </div>
          </el-card>

          <el-card :class="{back:front2Back}" class="box-card-back">
            <div slot="header" class="clearfix">
              <span>UserInfo</span>
              <span style="float: right; padding: 3px 0">
                <svg-icon icon-class="change" @click="changeClick" />
              </span>
            </div>
            <div class="user-info">
              user info
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { fetchDouban, fetchOMDB } from '@/api/main'
import { fetchDetails } from '@/api/torrent'
import { calcFileSize, formatTime, timeStamp } from '@/utils'
export default {
  filters: {
    fileSize(size) {
      return calcFileSize(size)
    },
    formatLocalTime(time) {
      return formatTime(timeStamp(time))
    }
  },
  data() {
    return {
      torrentDetail: [],
      doubanInfo: {},
      imdbPoster: '',
      doubanPoster: '',
      doubanId: 26931786,
      doubanRating: 0, // 豆瓣电影评分
      ratingMax: 10,
      imdbId: 6320628,
      width: 38,
      showHeader: false,
      front2Back: false,
      tipCount: 0
    }
  },
  computed: {
    imdbImg() {
      return this.imdbPoster.replace(/SX300/g, 'SX1000')
    },
    doubanImg() {
      return this.doubanPoster.replace(/img3/g, 'img1').replace(/s_ratio_poster/g, 'l_ratio_poster')
    },
    doubanMovieType() {
      return this.doubanInfo.attrs.movie_type.join(' / ')
    },
    doubanMovieDirectors() {
      return this.doubanInfo.attrs.director.join(' / ')
    },
    doubanMovieLanguage() {
      return this.doubanInfo.attrs.language.join(' / ')
    },
    doubanMovieCountry() {
      return this.doubanInfo.attrs.country.join(' / ')
    },
    doubanMovieYear() {
      return this.doubanInfo.attrs.year.join(' / ')
    },
    doubanMoviePubDate() {
      return this.doubanInfo.attrs.pubdate.join(' / ')
    },
    doubanMovieTags() {
      const movieTags = []
      for (let i = 0; i < this.doubanInfo.tags.length; i++) {
        movieTags.push(this.doubanInfo.tags[i].name)
      }
      return movieTags.join(' | ')
    },
    doubanMovieStarring() {
      return this.doubanInfo.attrs.cast.slice(0, 10).join(' / ')
    },
    doubanMovieDuration() {
      return this.doubanInfo.attrs.movie_duration.join(' / ')
    },
    doubanMovieEpisode() {
      return this.doubanInfo.attrs.episodes.join(' / ')
    }
  },
  created() {
    this.getDouban()
    this.getOMDB()

    const id = this.$route.params && this.$route.params.id
    this.getDetails(id)
  },
  methods: {
    getDetails(id) {
      fetchDetails(id).then(res => {
        console.log(res.data)
        this.torrentDetail.push(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getOMDB() {
      fetchOMDB(this.imdbId).then(res => {
        this.imdbPoster = res.data.Poster
      }).catch(err => {
        console.log(err)
      })
    },
    getDouban() {
      fetchDouban(this.doubanId).then(res => {
        // console.log(res.data)
        this.doubanInfo = res.data
        this.doubanPoster = res.data.image
        this.doubanRating = +res.data.rating.average
      }).catch(err => {
        console.log(err)
      })
    },
    handleDelete() {
      alert('Sure to delete')
    },
    searchSubTitles() {
      alert('This is subtitles search')
    },
    changeClick() {
      this.front2Back = !this.front2Back
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  >h1 {
    text-align: center;
    color: #ddd;
    text-shadow: 5px 0 15px #fff;
  }
}
.box-card {
  margin: 15px 0;
}

.info-container {
  // poster
  .el-image {
    display: block;
    max-width: 28%;
    float: left;
    margin: 0 0 15px 0;
  }
  .info {
    display: block;
    float: left;
    padding-left: 15px;
    padding-top: 5px;
    max-width: 68%;
    width: 100%;
    .douban-title {
      font-size: 22px;
      text-align: center;
    }

    .sub-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .rating {
      display: flex;
    }
    dl {
      font-size: 13px;
      padding-bottom: 20px;
      padding-left: 10px;
      padding-right: 10px;
      overflow: hidden;
      dt {
        padding: 6px 6px 6px 0;
        font-weight: bold;
        float: left;
        width: 70px;
      }
      dd {
        line-height: 20px;
        padding-bottom: 5px;
        padding-top: 5px;
        margin-left: 0px;
        text-align: justify;
        padding-left: 75px;
      }
    }
  }
}
/* General */
.main-torrent-info {
  margin: -20px;
  table {
    border-collapse: collapse;
    width: 100%;
  }
  tr {
    line-height: 24px;
  }
  tr td {
    border: 1px solid #f9f9f9;
    padding: 5px;
  }
  tr td:nth-child(1) {
    width: 120px;
  }
  tr td:nth-child(2) {
    font-size: 14px;
  }
  tr:nth-of-type(odd) {
    background: #e9e9e9;
  }
}
.icon-download {
  transform: rotate(180deg);
}
/* 可翻转的用户信息栏 */
.card-item {
    width: 25%;
    height: 300px;
    position: absolute;
    margin: 15px 0;
  .box-card-front,
  .box-card-back {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    transition: .5s ease-in-out;
  }
  .box-card-front {
    z-index: 1;
  }
  .box-card-back {
    transform: rotateY(180deg);
  }
  .box-card-back.back {
    transform: rotateY(0deg);
  }
  .box-card-front.front {
    z-index: 0;
    transform: rotateY(-180deg);
  }
}
.svg-icon {
  cursor: pointer;
}
</style>
