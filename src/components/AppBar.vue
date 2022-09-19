<template>
  <div>
    <v-app-bar app height="80">
      <v-avatar color="red">
        <img src="@/assets/janeDoe1.jpg" alt="alt" />
      </v-avatar>
      <div class="ml-3 font-weight-bold">Jane Doe</div>
      <v-spacer></v-spacer>
      <div class="mr-3">
        <v-btn color="secondary" @click="logoutUser"
          ><v-icon>mdi-logout</v-icon> Logout</v-btn
        >
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    logoutUser() {
      window.localStorage.removeItem("token");
      this.$router.go("/login");
    },
  },
};
</script>
