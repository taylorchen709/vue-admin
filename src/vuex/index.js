import Vue from 'vue'
import Vuex from 'vuex'
import shared,{muteTypes as share_muteTypes} from './modules/__shared'
import abc,{muteTypes as abc_MuteTypes} from './modules/abc'
import importEngine,{muteTypes as ie_MuteTypes} from './modules/importEngine'
import sqlApp,{muteTypes as sa_MuteTypes} from './modules/sqlApp'

import createLogger from './plugins/logger';

export const muteTypes = {
  abc:abc_MuteTypes,
  sqlApp:sa_MuteTypes,
  importEngine:ie_MuteTypes,
  shared:share_muteTypes
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