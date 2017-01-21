import babelpolyfill from 'babel-polyfill'
//require('babel-polyfill');


//核心
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store' //引入vuex中的store

//第三方库
// import VueResource from 'vue-resource';

//第三方UI
import ElementUI from 'element-ui' //UI框架,同bootstrap
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

//应用主组件


import Axios from 'axios';
let instance;
//如果全局使用,定义在原型上面
Vue.prototype.$http = instance = Axios.create({
    baseURL: 'https://10.36.111.213/api',
    withCredentials: false
});

const appSettings = {
    client_id: "tripgalleryimplicit",
    tripGalleryAPI: "https://10.36.111.213/",
    STSauthority: "http://10.36.111.213/identity",
};

const post_logout_redirect_uri = window.location.protocol + "//" + window.location.host + "/index.html";
const redirect_uri = window.location.protocol + "//" + window.location.host + "/callback.html";
const silent_redirect_uri = window.location.protocol + "//" + window.location.host + "/silentrefreshframe.html";
const oidcConfig = {
  client_id: appSettings.client_id,
  redirect_uri: redirect_uri,
  post_logout_redirect_uri: post_logout_redirect_uri,
  response_type: "id_token token",
  scope: "openid profile gallerymanagement",
  authority: appSettings.STSauthority,
  silent_redirect_uri: silent_redirect_uri,
  silent_renew: true,
  with_credentials: false
  //acr_values: "2fa"
};
import 'oidc-token-manager';

const mgr = new OidcTokenManager(oidcConfig);

Vue.prototype.$oidcMgr = mgr;

instance.interceptors.request.use(function (cfg) {
    // debugger;
    // if the access token has expired, we need to redirect to the login page.过期了重新请求
    if (mgr.expired) {
        debugger;
        console.log('------------expired-------------')
        mgr.redirectForToken();
    }
    //api服务的规则:如果是公共api应采用jsonp访问,否则必须鉴权
    if (cfg.url.indexOf(appSettings.tripGalleryAPI) === 0) {
        debugger;
        console.log('---!---', cfg)
        cfg.headers.Authorization = 'Bearer ' + mgr.access_token;
        console.log(cfg.headers.Authorization);
    }
    return cfg;
}, function (error) {
    console.log('errrrrrrrrrrrrrrrrrrrrrror:', error)
    return error;
});

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


import {routes} from './routes.config.js'


const router = new VueRouter({
    routes
});
console.log(router.options)
router.beforeEach((to, from, next) => {
    console.log('---12-12-1-2-12-1-2',to,from,next)
    NProgress.start();
    next()
});
// import { sync } from 'vuex-router-sync'
// Vue.router = router;
// sync(store, router);

router.afterEach(transition => {
    NProgress.done();
});

import App from './App.vue' //引入主组件,主模板只包含了router-view
new Vue({
    // el: '#app',
    //template: 'App',
    router,
    store,
    component: App,
    // render: h => h(App)
}).$mount('#app');


