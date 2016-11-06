import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const config = new Vuex.Store({
    state: {
        count: 0,
        //currentPath: '/login',
        currentPathName: '登录',
        currentPathNameParent: '导航一',
        apiUrl: 'http://localhost:5683/WebForm1.aspx'
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setCurrentPath: function (state, path) {
            state.currentPath = path
        },
    }
})

export default config