const getData = (state) => {
  return state.userData;
};
const getContacts = (state) => {
  return state.userData.contact_details;
};
const isAdmin = (state) => {
  return state.userData.type == "admin" ? true : false;
};

export default {
  getData,
  getContacts,
  isAdmin,
};
