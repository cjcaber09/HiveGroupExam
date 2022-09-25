const getData = (state) => {
  return state.userData;
};
const getContacts = (state) => {
  return state.userData.contact_details;
};
const isAdmin = () => {
  let userdata = JSON.parse(window.localStorage.getItem("user"));
  return userdata.type == "admin" ? true : false;
};
const userId = (state) => {
  return state.userData._id;
};
export default {
  getData,
  getContacts,
  isAdmin,
  userId,
};
