<template>
  <div id="main">
    <p>content</p>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data: function () {
    return {
      offset: 0,
      articles: [],
      maxpage: 0
    }
  },
  created: function () {
    this.offset = this.$route.query.page * 5
    axios.get(`/api/v1/articles?isPublished=1&offset=${this.offset}&limit=5`)
      .then(res => {
        const pattern = /<!-- more -->/i
        for (let article of res.data.articles) {
          article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
          pattern.test(article.content)
          article.content = RegExp['$`']
        }
        this.articles = res.data.articles
        this.maxPage = res.data.maxPage
      })
      .catch(err => alert(err))
  }
}
</script>

<style lang="scss" scoped>
#main {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 850px;
  border-bottom: solid 1px rgba($color: #000000, $alpha: 0.25);
}
</style>
