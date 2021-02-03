import Vue from "vue";
import Vuex from "vuex";
import auth from './auth/index'
import user from './user/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user
  }
});
