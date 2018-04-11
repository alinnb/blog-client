import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      component: Content
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
