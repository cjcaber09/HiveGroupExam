<template>
  <div>
    <v-card class="py-10 px-10">
      <v-row grid-list-xs>
        <v-col
          cols="12"
          sm="12"
          lg="6"
          v-for="item in usersList"
          :key="item.id"
        >
          <user :data="item"></user>
          <hr class="mt-2" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import user from "../users/user.vue";
export default {
  computed: {
    usersList() {
      return this.$store.getters["Users/GetUsers"];
    },
  },

  components: {
    user,
  },
};
</script>
