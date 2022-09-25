<template>
  <div>
    <v-row>
      <v-col cols="1" class="d-flex justify-center"
        ><v-avatar size="60" color="red">
          <img src="@/assets/janeDoe1.jpg" alt="alt" /> </v-avatar
      ></v-col>
      <v-col cols="3" class="mt-2">
        <div class="text-body-1 font-weight-bold">
          {{ friendData.profile_details.fname }}
          {{ friendData.profile_details.lname }}
        </div>
        <div class="text-subtitle-2">
          {{ friendData.type }}
        </div>
      </v-col>
      <v-col cols="5">
        <div>
          <div class="text-subtitle-1">
            <v-icon class="mr-2">mdi-phone</v-icon>
            {{ friendData.contact_details.phone }}
          </div>
          <div class="text-subtitle-1">
            <v-icon class="mr-2">mdi-email</v-icon> {{ friendData.email }}
          </div>
          <div class="text-caption" v-if="friendData.address_details">
            <v-row>
              <v-col cols="1"
                ><v-icon class="mr-2">mdi-map-marker</v-icon></v-col
              >
              <v-col class="pl-5">
                {{ friendData.address_details.apartment }}
                {{ friendData.address_details.city }},
                {{ friendData.address_details.state }}
                {{ friendData.address_details.country }}
                {{ friendData.address_details.zip }}</v-col
              >
            </v-row>
          </div>
          <div class="text-caption" v-else>
            <v-icon class="mr-2">mdi-map-marker</v-icon> No address on record.
          </div>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-btn color="secodary" icon
          ><v-icon>mdi-human-greeting-proximity</v-icon></v-btn
        >
        <v-btn color="secodary" icon><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn color="error" icon @click="dialog = !dialog"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
      transition="dialog-transition"
    >
      <v-card class="px-4 py-4">
        <v-card-text>
          <div class="text-h5 black--text  text-center">
            Are you use you want to unfriend this user?
          </div>
          <div class="d-flex justify-center mt-10">
            <v-btn color="secondary" class=" mr-2" @click="unfriendUser"
              >yes</v-btn
            >
            <v-btn color="secondary" @click="dialog = !dialog">no </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    unfriendUser() {
      this.$store
        .dispatch("Friends/DenieRequest", {
          userId: this.currentUser._id,
          friend_id: this.data._id,
        })
        .then((res) =>
          this.$store.dispatch("Friends/FetchFriends", {
            _id: this.currentUser._id,
          })
        );
    },
  },
  props: ["data"],
  computed: {
    currentUser() {
      return this.$store.getters["Login/getData"];
    },
    friendData() {
      // if the user is not the requestor pass the requested user
      return this.isRequestor == false
        ? this.data.requestor
        : this.data.requested;
    },
    isRequestor() {
      // check if the user is the requestor
      return this.data.requestor._id == this.$store.getters["Login/userId"]
        ? true
        : false;
    },
  },
  data() {
    return {
      dialog: false,
      contacts: this.data,
    };
  },
};
</script>
