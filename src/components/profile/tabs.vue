<template>
  <div>
    <v-tabs v-model="activeTab" vertical
      ><v-tab class="d-flex justify-start">
        <v-icon left>
          mdi-account
        </v-icon>
        Account and profile
      </v-tab>
      <v-tab class="d-flex justify-start">
        <v-icon left>
          mdi-pin
        </v-icon>
        Address
      </v-tab>
      <v-tab class="d-flex justify-start">
        <v-icon left>
          mdi-phone
        </v-icon>
        Contact
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
export default {
  props: ["currentTab"],
  data() {
    return {
      activeTab: this.currentTab,
    };
  },
  watch: {
    activeTab(old) {
      this.$emit("setTab", old);
    },
  },
};
</script>
