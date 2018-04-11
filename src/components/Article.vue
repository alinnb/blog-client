<template>
  <div class="article-container">
    <div class="article-title"><h2>{{title}}</h2></div>
    <div class="article-time"><h4>{{publishTime}}</h4></div>
    <div class="article-tags">
      <span class="tag" v-for="(tag, index) in tags" :key="index">
        <span class="flag">#</span>{{tag}}
      </span>
    </div>
    <p v-html="md(content)"></p>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import markdown from 'markdown'

export default {
  data: function () {
    return {
      id: 0,
      title: '',
      publishTime: '',
      tags: [],
      content: ''
    }
  },
  created: function () {
    axios.get('/api/v1/articles/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        if (res.data.length > 0) {
          this.id = res.data[0].id
          this.title = res.data[0].title
          this.publishTime = moment(res.data[0].publishTime).format('YYYY-MM-DD HH:mm:ss')
          this.content = res.data[0].content
          this.tags = res.data[0].tags ? res.data[0].tags.split(',') : []
        }
      })
      .catch(err => alert(err))
  },
  methods: {
    md: function (content) {
      let a = markdown.markdown.toHTML(content)
      return a
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  text-align: left;
  margin: auto;
  padding: 1em;
  width: 100%;
  max-width: 850px;
  border-bottom: solid 1px rgba($color: #000000, $alpha: 0.25);

  .article-title {
    color: black;
    font-size: 1.2rem;
  }
  .article-time {
    font-size: .8rem;
    color: #999;
  }
  .article-tags .tag {
    display: inline;
    list-style: none;
    font-size: .8rem;
    color: olivedrab;

    .flag {
      color: orange;
    }
  }
}
</style>
