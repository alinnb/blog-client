<template>
  <header class="nav-container">
    <nav class="site-nav">
      <router-link class="nav-title" :to="{path:'articles', query:{page:0}}">
        <img class="logo" src="../assets/logo.png" alt="...">
        <span class="title">学海无涯</span>
      </router-link>
      <ul class="nav-menu-list nav-list">
        <li @click="jump($)">
          <a name="articles" @click="jump($event)">文章</a>
        </li>
        <li>
          <a name="articles" @click="jump($event)">归档</a>
        </li>
        <li>
          <a name="articles" @click="jump($event)">标签</a>
        </li>
        <li>
          <a name="articles" @click="jump($event)">阅读列表</a>
        </li>
        <li>
          <a name="articles" @click="jump($event)">关于我</a>
        </li>
      </ul>
      <!-- nav-menu使用inline svg，作为菜单按钮，优化加载两张图片实现hover这一问题 -->
      <svg class="nav-menu" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" @click="toggleSlideMenu">
          <defs></defs>
          <path d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z" />
      </svg>
    </nav>
    <transition name="slide-nav">
      <nav class="mask-nav" v-if="isMaskShow">
        <ul class="slide-nav-list nav-list">
          <li @click="jump($)">
            <a name="articles" @click="jump($event)">文章</a>
          </li>
          <li>
            <a name="articles" @click="jump($event)">归档</a>
          </li>
          <li>
            <a name="articles" @click="jump($event)">标签</a>
          </li>
          <li>
            <a name="articles" @click="jump($event)">阅读列表</a>
          </li>
          <li>
            <a name="articles" @click="jump($event)">关于我</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isMaskShow: false
    }
  },

  methods: {
    jump: function (target) {
      // this.isMaskShow = !this.isMaskShow;
    },
    toggleSlideMenu: function () {
      this.isMaskShow = !this.isMaskShow
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

.nav-container {
  width: 100%;
  box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.25);
}
.site-nav {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  @include flex($justify: space-between, $align: center);
  height: 4em;
  width: 95%;
  max-width: 850px;
  background: #fff;

  .nav-title {
      @include flex;

    .logo {
      @include flex;
      width: 5em;
      height: 2.5em;
    }

    .title {
      @include flex;
    }
  }

  .nav-menu-list {
    @include flex;
  }

  .nav-menu {
    position: absolute;
    top: 50%;
    right: 0.5em;
    width: 1.5em;
    height: 1.5em;
    border: solid 1px #333;
    visibility: visible;
  }
}

.mask-nav {
  z-index: 1;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 235px;
  height: 100%;
  padding: 4.5em 1em 1em 1em;
  background: #f9f9f9;
  box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.25);

  .slide-nav-list {
    @include flex($flow: column wrap, $align: flex-start);
  }
}

.nav-list {
  padding: 0;
  list-style: none;
  a {
    margin: auto 0.3em;
    cursor: pointer;
    &:hover {
      @include chosen-item;
    }
  }
}

.slide-nav-enter-active {
  transition: all 0.5s ease;
}
.slide-nav-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-nav-enter, .slide-nav-leave-to {
  transform: translateX(235px);
}
.slide-nav-enter-to, .slide-nav-leave {
  transform: translateX(0);
}
// .slide-nav-enter-active {
//   transition: all 0.5s ease;
// }
// .slide-nav-leave-active {
//   transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-nav-enter, .slide-nav-leave-to {
//   opacity: 0;
// }
// .slide-nav-enter-to, .slide-nav-leave {
//   opacity: 1;
// }

@media screen and (max-width: 480px) {
  .site-nav {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    .nav-menu-list {
      display: none;
    }
    .nav-menu {
      visibility: visible;
    }
  }
}
</style>
