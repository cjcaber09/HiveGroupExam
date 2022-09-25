<template>
  <div>
    <div v-if="currentFriendRequests.length > 0">
      <v-col v-for="item in currentFriendRequests" :key="item.id">
        <v-row>
          <v-col cols="3" lg="2">
            <v-avatar size="50" color="white">
              <v-img src="@/assets/default.png"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="9" lg="6">
            <div class="text-h6 font-weight-bold">
              {{ item.requested.profile_details.fname }}
              {{ item.requested.profile_details.lname }}
            </div>
            <div class="text-body-1">
              {{ item.requested.email }}
            </div>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              icon
              color="secondary"
              class="mr-2"
              @click="AcceptRequest(item)"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn icon color="secondary" @click="DenieRequest(item)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <div v-else class="mb-2">
      No active friend requests.
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    AcceptRequest(request) {
      this.$store
        .dispatch("Friends/AcceptRequest", {
          userId: this.currentUser._id,
          friend_id: request._id,
        })
        .then((res) =>
          this.$store.dispatch("Users/FetchFriendRequests", {
            id: this.currentUser._id,
          })
        );
    },
    DenieRequest(request) {
      this.$store
        .dispatch("Friends/DenieRequest", {
          userId: this.currentUser._id,
          friend_id: request._id,
        })
        .then((res) =>
          this.$store.dispatch("Users/FetchFriendRequests", {
            id: this.currentUser._id,
          })
        );
    },
  },

  mounted() {
    this.$store.dispatch("Users/FetchFriendRequests", {
      id: this.currentUser._id,
    });
  },
  computed: {
    currentFriendRequests() {
      return this.$store.getters["Users/GetFriendRequests"];
    },
    currentUser() {
      return this.$store.getters["Login/getData"];
    },
  },
};
</script>
