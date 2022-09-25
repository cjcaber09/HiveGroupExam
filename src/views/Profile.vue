<template>
  <div>
    <v-row>
      <v-col cols="12" lg="2">
        <tabComponent
          :currentTab="activeTab"
          @setTab="setNewTab"
        ></tabComponent>
      </v-col>
      <v-col cols="12" lg="5">
        <v-tabs-items v-model="activeTab">
          <v-tab-item class="mx-5">
            <AccountProfile
              :data="userData"
              :profile="userData.profile_details"
              v-if="userData"
            ></AccountProfile>
          </v-tab-item>
          <v-tab-item class="mx-5">
            <Address></Address>
          </v-tab-item>
          <v-tab-item class="mx-5">
            <Contacts></Contacts>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import tabComponent from "../components/profile/tabs.vue";
import AccountProfile from "../components/profile/accountProfile.vue";
import Address from "../components/profile/address.vue";
import Contacts from "../components/profile/contacts.vue";
export default {
  beforeCreate() {
    this.$store.dispatch("Login/fetchUserProfile");
  },
  computed: {
    userData() {
      let data = this.$store.getters["Login/getData"];
      return data;
    },
  },
  methods: {
    setNewTab(a) {
      this.activeTab = a;
    },
  },
  /* eslint-disable vue/no-unused-components */
  components: { tabComponent, AccountProfile, Address, Contacts },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
