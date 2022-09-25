<template>
  <div>
    <v-card class="py-2 px-5">
      <v-row>
        <v-col cols="12">
          <div class="text-h6">Friend Requests</div>
        </v-col>
        <v-col>
          <userFriendRequest></userFriendRequest>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import _ from "underscore";
import userFriendRequest from "./users/userFriendRequests.vue";
export default {
  components: { userFriendRequest },
  beforeCreate() {},
  computed: {},
};
</script>
