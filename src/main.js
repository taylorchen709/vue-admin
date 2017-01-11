import babelpolyfill from 'babel-polyfill'
//require('babel-polyfill');


//核心
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store' //引入vuex中的store

//第三方库
import VueResource from 'vue-resource';

//第三方UI
import ElementUI from 'element-ui' //UI框架,同bootstrap
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

//应用主组件

/*
import Axios from 'axios';
Vue.$http = Axios;
// Vue.http.options.root = 'https://10.36.111.213/api';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Axios.defaults.baseURL = 'https://10.36.111.213/api';
Axios.defaults.headers.common.Accept = 'application/json';
Axios.defaults.headers.common.contentType = 'application/json';
Axios.defaults.headers.common['Authorization'] = 'dafdfdafafsfas';
Axios.defaults.withCredentials = false;

Axios.interceptors.response.use(
    response => response,
    (error) => {
        console.log(error)
        if (error.response.status === 401) {

        }
    });
*/

//初始化
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

import App from './App.vue' //引入主组件,主模板只包含了router-view
import {routes} from './routes'



const router = new VueRouter({
    routes
})
console.log(router.options)
router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach(transition => {
    NProgress.done();
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: {App}
    //render: h => h(Login)
}).$mount('#app')

//router.replace('/login')

