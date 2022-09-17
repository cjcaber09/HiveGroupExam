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
  components: {
    searchBarVue,
    usersList,
  },
};
</script>
