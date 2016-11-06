import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './store/config'
import Vuex from 'vuex'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Main from './components/Main.vue'
import Page1 from './components/nav1/Page1.vue'
import Page2 from './components/nav1/Page2.vue'
import Page3 from './components/nav1/Page3.vue'
import Page4 from './components/nav2/Page4.vue'
import Page5 from './components/nav2/Page5.vue'
import Page6 from './components/nav3/Page6.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/login', component: Login },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '导航一',
    children: [
      { path: '/main', component: Main },
      { path: '/page1', component: Page1, name: '页面1' },
      { path: '/page2', component: Page2, name: '页面2' },
      { path: '/page3', component: Page3, name: '页面3' },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    children: [
      { path: '/page4', component: Page4, name: '页面4' },
      { path: '/page5', component: Page5, name: '页面5' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航三',
    children: [
      { path: '/page6', component: Page4, name: '' }
    ]
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  console.log(to);
  console.log(from);
  store.state.currentPathNameParent = to.matched[0].name;
  store.state.currentPathName = to.name;
  //store.commit('setCurrentPath',to.path);
  NProgress.start();
  next()
})

// router.beforeEach(transition => {
//   NProgress.done();
// });

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
}).$mount('#app')

router.replace('/login')


