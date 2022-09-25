import axios from "axios";
import config from "../config";

const AcceptRequest = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${config.baseURL}friends/accept/${payload.userId}`,
        {
          friend_id: payload.friend_id,
          status: "active",
        },
        config.axiosAuthHeader
      )
      .then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        }
      });
  });
};
const FetchFriends = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${config.baseURL}friends/${payload._id}`, config.axiosAuthHeader)
      .then((res) => {
        if (res.status == 200) {
          commit("SetFriends", res.data);
          resolve(res.data);
        }
      });
  });
};
const DenieRequest = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${config.baseURL}friends/${payload.userId}/denie`, {
        data: { friend_id: payload.friend_id },
        headers: config.DeleteHeader,
      })
      .then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        }
      });
  });
};
export default {
  AcceptRequest,
  FetchFriends,
  DenieRequest,
};
