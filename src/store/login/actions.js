// eslint-disable-next-line no-unused-vars
import axios from "axios";
import config from "../config";

const Register = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${config.baseURL}/login/register`, payload, config.baseURL)
      .then((result) => {
        if (result.status == 200) {
          window.localStorage.setItem("token", result.data.token);
          window.localStorage.setItem("user", result.data.user);
          commit("SetUser", result.data.user);
          resolve(result.data);
        }
      })
      .catch((err) => console.log(err));
  });
};

const LoginUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${config.baseURL}login`, payload, config.axiosHeader)
      .then((result) => {
        if (result.status == 200) {
          window.localStorage.setItem("token", result.data.token);
          commit("SetUser", result.data);
          resolve(result.data);
        }
      })
      .catch((err) => reject(err.response));
  });
};
const fetchUserProfile = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${config.baseURL}login/user`, config.axiosAuthHeader)
      .then((result) => {
        if (result.status == 200) {
          commit("SetUser", result.data);
          resolve(result.data);
        }
      });
  });
};
export default {
  Register,
  fetchUserProfile,
  LoginUser,
};
