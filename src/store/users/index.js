import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
const state = {
  usersList: [],
};

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
