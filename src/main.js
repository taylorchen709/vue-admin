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

// import 'whatwg-fetch';
// import restful, { fetchBackend } from 'restful.js';
// const api = restful('https://10.36.111.213/api', fetchBackend(fetch));
// //api.header('AcceptType', 'application/json');
// api.header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjE2dllvOUhSeDdrZk1fQzQxYmJic3NzXzc5USIsImtpZCI6IjE2dllvOUhSeDdrZk1fQzQxYmJic3NzXzc5USJ9.eyJpc3MiOiJodHRwczovL3RyaXBjb21wYW55c3RzL2lkZW50aXR5IiwiYXVkIjoidHJpcGdhbGxlcnloeWJyaWQiLCJleHAiOjE0ODQyNDQzNzYsIm5iZiI6MTQ4NDI0MzQ3Niwibm9uY2UiOiI2MzYxOTg0MDI5NjcyMTU4NTQuTlRFMk56Um1PREF0TVRnM09DMDBOemRqTFdJM01qSXRZamN5TXpFMk1EZzNNR1ZqTVRVeE0ySmtOR1F0WldGa01TMDBPREV4TFRnM1l6QXRPVGMzWXpJeE1EaG1NemN3IiwiaWF0IjoxNDg0MjQzNDc2LCJhdF9oYXNoIjoiN2xnSjl1TXhlc2d3cm55ekJ2WXJjQSIsImNfaGFzaCI6Im5IY0lXRktleWh4ZnJLczFlNzN4SVEiLCJzaWQiOiJjOTNjYTk4YTkxYTA2ZjU5ZTM4MWY5YTQ0YjliMjI4YSIsInN1YiI6ImIwNWQzNTQ2LTZjYTgtNGQzMi1iOTVjLTc3ZTk0ZDcwNWRkZiIsImF1dGhfdGltZSI6MTQ4NDIyNDU2OCwiaWRwIjoiaWRzcnYiLCJnaXZlbl9uYW1lIjoiS2V2aW4iLCJmYW1pbHlfbmFtZSI6IkRvY2t4IiwiYW1yIjpbInBhc3N3b3JkIl19.P2t01-D8y2Y33u8ULUk4XDyo8hJ9LPbmevyo4zsPkph4yT3jWGguqazi58ZGp6XarB0wQvL1JXIvD3gX8-fpIOFsi50TkGVNfz8p0zn6fS_Qyxxoxxg015TQdGvh0Wf0TxlEjL1pWHxN9zvgdgvMgvSP_XEkoIMNFvH57K1VJpyY5kxUOy7iP8B6F1m0swqwLIY5FUGpnt2cJCo6NiyRhx9MXwxpNcd-LCNCrpTzgPR5a4y0WvJ_G6JfkljFbZfvOmCUhHthhL-45XfAo1hM2N3nQMWrLb0WlwCrqDRpTCOpMOdbFO9AQOGa65s75Iu8uWCFk8Pg4D6imXLTg3CuZQ')
// Vue.prototype.$api = api;

// var AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjE2dllvOUhSeDdrZk1fQzQxYmJic3NzXzc5USIsImtpZCI6IjE2dllvOUhSeDdrZk1fQzQxYmJic3NzXzc5USJ9.eyJpc3MiOiJodHRwczovL3RyaXBjb21wYW55c3RzL2lkZW50aXR5IiwiYXVkIjoidHJpcGdhbGxlcnloeWJyaWQiLCJleHAiOjE0ODQyNDQzNzYsIm5iZiI6MTQ4NDI0MzQ3Niwibm9uY2UiOiI2MzYxOTg0MDI5NjcyMTU4NTQuTlRFMk56Um1PREF0TVRnM09DMDBOemRqTFdJM01qSXRZamN5TXpFMk1EZzNNR1ZqTVRVeE0ySmtOR1F0WldGa01TMDBPREV4TFRnM1l6QXRPVGMzWXpJeE1EaG1NemN3IiwiaWF0IjoxNDg0MjQzNDc2LCJhdF9oYXNoIjoiN2xnSjl1TXhlc2d3cm55ekJ2WXJjQSIsImNfaGFzaCI6Im5IY0lXRktleWh4ZnJLczFlNzN4SVEiLCJzaWQiOiJjOTNjYTk4YTkxYTA2ZjU5ZTM4MWY5YTQ0YjliMjI4YSIsInN1YiI6ImIwNWQzNTQ2LTZjYTgtNGQzMi1iOTVjLTc3ZTk0ZDcwNWRkZiIsImF1dGhfdGltZSI6MTQ4NDIyNDU2OCwiaWRwIjoiaWRzcnYiLCJnaXZlbl9uYW1lIjoiS2V2aW4iLCJmYW1pbHlfbmFtZSI6IkRvY2t4IiwiYW1yIjpbInBhc3N3b3JkIl19.P2t01-D8y2Y33u8ULUk4XDyo8hJ9LPbmevyo4zsPkph4yT3jWGguqazi58ZGp6XarB0wQvL1JXIvD3gX8-fpIOFsi50TkGVNfz8p0zn6fS_Qyxxoxxg015TQdGvh0Wf0TxlEjL1pWHxN9zvgdgvMgvSP_XEkoIMNFvH57K1VJpyY5kxUOy7iP8B6F1m0swqwLIY5FUGpnt2cJCo6NiyRhx9MXwxpNcd-LCNCrpTzgPR5a4y0WvJ_G6JfkljFbZfvOmCUhHthhL-45XfAo1hM2N3nQMWrLb0WlwCrqDRpTCOpMOdbFO9AQOGa65s75Iu8uWCFk8Pg4D6imXLTg3CuZQ';
var instance;
//如果全局使用,定义在原型上面
Vue.prototype.$http = instance = Axios.create({
    baseURL: 'https://10.36.111.213/api',
    withCredentials: false
});

const appSettings = {
    client_id: "tripgalleryimplicit",
    tripGalleryAPI: "https://10.36.111.213/",
    STSauthority: "http://10.36.111.213/identity",
}

var post_logout_redirect_uri = window.location.protocol + "//" + window.location.host + "/index.html";
var redirect_uri = window.location.protocol + "//" + window.location.host + "/callback.html";
var silent_redirect_uri = window.location.protocol + "//" + window.location.host + "/silentrefreshframe.html";

const oidcconfig2 = {
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
}
const mgr = new OidcTokenManager(oidcconfig2);
import 'oidc-token-manager'
instance.interceptors.request.use(function (cfg) {
    // debugger;
    // if the access token has expired, we need to redirect to the login page.过期了重新请求
    if (mgr.expired) {
        debugger;
        console.log('------------expired-------------')
        mgr.redirectForToken();
    }
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

// Axios.defaults.baseURL = 'https://10.36.111.213/api';
// Axios.defaults.headers.common.Accept = 'application/json';
// Axios.defaults.headers.common.contentType = 'application/json';
// Axios.defaults.headers.common['Authorization'] = 'dafdfdafafsfas';
// Axios.defaults.withCredentials = true;
//
//
// Axios.interceptors.response.use(
//     (response) => {
//         console.log('interceptors:'+response)
//     },
//     (error) => {
//         console.log(error)
//         if (error.response.status === 401) {
//
//         }
//     });

//初始化
//Vue.use(VueResource);

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

