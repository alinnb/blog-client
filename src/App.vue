<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer class="app-footer">
      本博客由Alvin实现
    </footer>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.app-footer {
  font-weight: 200;
  width: 95%;
  max-width: 850px;
  text-align: center;
  font-size: 1.4rem;
  margin: 0 auto;
  padding: 2em 0;
  color: #c1bfb5;
}
</style>
