import Vue from "vue";
import Vuex from "vuex";
import General from "./general";
import Login from "./login";
import Users from "./users";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    General,
    Login,
    Users,
  },
});
