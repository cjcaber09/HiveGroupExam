const setUsersList = (state, payload) => {
  state.usersList = payload;
};

const setFriendRequests = (state, payload) => {
  state.friendRequests = payload;
};
export default {
  setUsersList,
  setFriendRequests,
};
