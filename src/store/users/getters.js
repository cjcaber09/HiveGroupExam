const GetUsers = (state) => {
  return state.usersList;
};
const GetFriends = (state) => {
  return state.friendList;
};
const GetFriendRequests = (state) => {
  return state.friendRequests;
};

export default {
  GetUsers,
  GetFriends,
  GetFriendRequests,
};
