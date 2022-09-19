import config from "../config";
import axios from "axios";

const FetchUsers = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.get(`${config.baseURL}users`, config.axiosAuthHeader).then((res) => {
      if (res.status == 200) {
        commit("setUsersList", res.data.Users);
        resolve(res.data.Users);
      }
    });
  });
};

export default {
  FetchUsers,
};
