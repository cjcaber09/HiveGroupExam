// eslint-disable-next-line no-unused-vars
const isAppbarActive = (state) => {
  return window.localStorage.getItem("token") ? true : false;
};
export default {
  isAppbarActive,
};
