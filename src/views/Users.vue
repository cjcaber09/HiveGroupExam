<template>
  <div>
    <searchBarVue></searchBarVue>
    <usersList></usersList>
  </div>
</template>

<script>
import searchBarVue from "../components/searchBar.vue";
import usersList from "../components/users/usersList.vue";
export default {
  created() {
    this.$store.dispatch("Users/FetchUsers");
  },
  components: {
    searchBarVue,
    usersList,
  },
};
</script>
