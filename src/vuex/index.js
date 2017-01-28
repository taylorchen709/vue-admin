import Vue from 'vue'
import Vuex from 'vuex'
import shared,{interacts as inters_shared} from './modules/__shared'
import abc,{interacts as inters_abc} from './modules/abc'
import importEngine,{interacts as inters_imp} from './modules/importEngine'
import sqlApp,{interacts as inters_sql_app} from './modules/sqlApp'

import createLogger from './plugins/logger';

export const interacts = {
  abc:inters_abc,
  sqlApp:inters_sql_app,
  importEngine:inters_imp,
  shared:inters_shared
};

Vue.use(Vuex)
console.log('-----vuex-init------',process.env,process.env.NODE_ENV)
const debug = process.env.NODE_ENV !== 'production'

// 创建 store 实例
export default new Vuex.Store({
  modules: {
    shared,
    abc,
    importEngine,
    sqlApp
  },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})