<template>
  <div>
    <v-row>
      <v-col cols="12" lg="6">
        <FriendRequestsVue></FriendRequestsVue>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import FriendRequestsVue from "../components/FriendRequests.vue";

export default {
  components: { FriendRequestsVue },
};
</script>
