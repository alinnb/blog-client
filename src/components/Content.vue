<template>
  <div id="main" class="content-container">
    <div class="article-list">
      <article class="artcile" v-for="{id, title, publishTime, content} in articles" :key="id">
        <header>
          <h2>
            <router-link class="article-title" :to="'/api/articles/' + id">{{title}}</router-link>
          </h2>
          <div class="article-time">{{publishTime}}</div>
        </header>
        <p v-html="md(content)"></p>
        <footer>
          <router-link class="article-footer" :to="'/api/articles/' + id">... continue reading</router-link>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import markdown from 'markdown'

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
        console.log(this.articles)
      })
      .catch(err => alert(err))
  },
  methods: {
    md: function (content) {
      console.log(content)
      let a = markdown.markdown.toHTML(content)
      console.log(a)
      return a
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin chosen-item {
    border-bottom: 3px solid #f18f01;
}

@mixin flex($flow: row wrap, $justify: center, $align: center) {
    display: flex;
    flex-flow: $flow;
    justify-content: $justify;
    align-items: $align;
}

.content-container {
  // @include flex($flow: column wrap);
  text-align: left;
  margin: auto;
  padding: 1em;
  width: 100%;
  max-width: 850px;
  border-bottom: solid 1px rgba($color: #000000, $alpha: 0.25);

  .artcile {
    padding-bottom: 0.5em;
    // border-bottom: solid 1px rgba($color: #000000, $alpha: 0.1)
  }

  .article-title {
    color: black;
    font-size: 1.2rem;

    &:hover {
      border-bottom: solid 2px #42b997;
    }
  }

  .article-footer {
    color: #42b997;
    font-size: 0.8rem;
  }

  .article-time {
    font-size: 0.5rem;
    color: #666;
  }
}
</style>
