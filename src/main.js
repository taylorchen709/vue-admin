import babelpolyfill from 'babel-polyfill'
//require('babel-polyfill');

//核心
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store,{muteTypes} from './vuex/index' //引入vuex中的store

//第三方库
// import VueResource from 'vue-resource';

//第三方UI
import ElementUI from 'element-ui' //UI框架,同bootstrap
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

//应用主组件


import {axiosInstance,oidcMgr } from './services';
//如果全局使用,定义在原型上面
Vue.prototype.$http = axiosInstance;
Vue.prototype.$oidcMgr = oidcMgr;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

import {routes} from './routes.config.js'
const router = new VueRouter({
    routes,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});
//console.log(router.options)
router.beforeEach((to, from, next) => {
    console.log('---路由切换---',from.path,'=>',to.path)
    NProgress.start();
    //store.commit()
    next()
});

// import { sync } from 'vuex-router-sync'
// Vue.router = router;
// sync(store, router);

router.afterEach(transition => {
    NProgress.done();
});

import App from './App.vue' //引入主组件,主模板只包含了router-view
const vm = new Vue({
    // el: '#app',
    //template: 'App',
    router,
    store,
    render :h => h(App) //当没指定模板时,必须指定render
}).$mount('#app');


