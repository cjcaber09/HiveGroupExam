<template>
  <div>
    <v-row>
      <v-col cols="6" v-for="item in friends" :key="item.id">
        <v-card class="py-2 px-5">
          <friendComponentVue :data="item" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import friendComponentVue from "./friendComponent.vue";
export default {
  components: {
    friendComponentVue,
  },
  computed: {
    friends() {
      return this.$store.getters["Friends/GetFriendLists"];
    },
  },
};
</script>
