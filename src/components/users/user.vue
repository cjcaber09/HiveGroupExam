<template>
  <div>
    <v-row>
      <v-col cols="3" sm="3" lg="2">
        <v-avatar color="red" size="70">
          <img src="@/assets/janeDoe1.jpg" alt="alt" />
        </v-avatar>
      </v-col>
      <v-col cols="9" sm="9" lg="6" class="mt-2">
        <div class="text-body-1 font-weight-bold">
          {{ data.profile_details.fname }} {{ data.profile_details.lname }}
        </div>
        <div class="text-subtitle-2">
          {{ data.type.toUpperCase() }}
        </div>
        <div v-if="isAdmin">
          <v-btn
            icon
            color="primary"
            @click="promoteUser(data)"
            v-if="data.type != 'admin'"
          >
            <v-icon>mdi-account-arrow-up</v-icon>
          </v-btn>
          <v-btn
            icon
            color="secondary"
            v-if="data.type != 'user'"
            @click="demoteUser(data)"
          >
            <v-icon>mdi-account-arrow-down</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="12" lg="2" class="mt-2 mb-5"
        ><v-btn
          v-if="!requestedAsFriend"
          color="secondary"
          @click="requestAsFriend(data)"
          ><v-icon class="mr-2">mdi-account-plus</v-icon>Add as friend</v-btn
        >
        <v-btn v-else color="secondary" disabled
          ><v-icon class="mr-2">mdi-account-clock</v-icon>Request sent</v-btn
        ></v-col
      >
    </v-row>
  </div>
</template>
<script>
const _ = require("underscore");
export default {
  methods: {
    requestAsFriend(user) {
      this.$store
        .dispatch("Users/requestAsFriend", {
          _id: this.currentUser._id,
          user,
        })
        .then((res) => {
          this.$store.dispatch("Login/fetchUserProfile");
          this.$store.dispatch("Users/FetchUsers");
        });
    },
    promoteUser(user) {
      this.$store
        .dispatch("Users/PromoteUser", { _id: user._id, rank: user.type })
        .then((res) => {
          if (res) {
            this.$store.dispatch("Users/FetchUsers");
          }
        });
    },
    demoteUser(user) {
      this.$store
        .dispatch("Users/DemoteUser", { _id: user._id, rank: user.type })
        .then((res) => {
          if (res) {
            this.$store.dispatch("Users/FetchUsers");
          }
        });
    },
  },

  computed: {
    requestedAsFriend() {
      let found = _.where(this.currentUser.friends, {
        friend_id: this.data._id,
      });
      return found.length > 0 ? true : false;
    },
    currentUser() {
      return this.$store.getters["Login/getData"];
    },
    isAdmin() {
      return this.$store.getters["Login/isAdmin"];
    },
  },
  data() {
    return {};
  },
  props: ["data"],
};
</script>
