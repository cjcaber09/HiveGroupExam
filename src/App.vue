<template>
  <v-app>
    <div v-if="isAppbarActive">
      <AppBarVue></AppBarVue>
      <NavigationBarVue></NavigationBarVue>
    </div>
    <v-main>
      <v-container grid-list-xs>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBarVue from "./components/AppBar.vue";
import NavigationBarVue from "./components/NavigationBar.vue";
export default {
  name: "App",
  components: { AppBarVue, NavigationBarVue },
  data: () => ({
    //
  }),
  computed: {
    isAppbarActive() {
      return this.$store.getters["General/isAppbarActive"];
    },
  },
  created() {
    console.log(this.$store);
  },
};
</script>
