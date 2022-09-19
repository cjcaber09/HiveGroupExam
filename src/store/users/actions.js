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
const PromoteUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${config.baseURL}users/promote`, payload, config.axiosAuthHeader)
      .then((result) => {
        if (result.status == 200) {
          resolve(result);
        }
      });
  });
};
const DemoteUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${config.baseURL}users/demote`, payload, config.axiosAuthHeader)
      .then((result) => {
        if (result.status == 200) {
          resolve(result);
        }
      });
  });
};
const requestAsFriend = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    console.log(payload._id);
    axios
      .patch(
        `${config.baseURL}users/friend/${payload._id}`,
        payload.user,
        config.axiosAuthHeader
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err.response));
  });
};
export default {
  FetchUsers,
  PromoteUser,
  DemoteUser,
  requestAsFriend,
};
