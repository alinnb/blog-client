import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content.vue'
import Article from '../components/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      component: Content
    },
    {
      path: '/articles/:id',
      component: Article
    },
    {
      path: '*',
      redirect: {
        path: 'articles',
        query: {
          page: 0
        }
      }
    }
  ]
})
