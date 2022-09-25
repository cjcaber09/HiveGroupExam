<template>
  <div>
    <searchBarVue></searchBarVue>
    <FriendsCardVue></FriendsCardVue>
  </div>
</template>
<script>
import FriendsCardVue from "../components/friends/card.vue";
import searchBarVue from "../components/searchBar.vue";
export default {
  created() {
    this.$store.dispatch("Login/fetchUserProfile");
    this.$store.dispatch("Friends/FetchFriends", { _id: this.currentUser._id });
  },
  computed: {
    currentUser() {
      return this.$store.getters["Login/getData"];
    },
  },
  components: {
    searchBarVue,
    FriendsCardVue,
  },
};
</script>
