const baseURL = "http://localhost:3000/api/";
const axiosHeader = {
  headers: {
    "Content-Type": "Application/json",
  },
};
const axiosAuthHeader = {
  headers: {
    "Content-Type": "Application/json",
    Authorization: "Bearer " + window.localStorage.getItem("token"),
  },
};
export default {
  baseURL,
  axiosHeader,
  axiosAuthHeader,
};
