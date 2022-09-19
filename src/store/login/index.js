import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  userData: JSON.parse(window.localStorage.getItem("user")),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
