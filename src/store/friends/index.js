import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
const state = { friendList: [] };

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
