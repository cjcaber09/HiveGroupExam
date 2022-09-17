<template>
  <div>
    <v-card class="py-5 px-10">
      <v-row>
        <v-col cols="6" v-for="item in 10" :key="item.id">
          <user></user>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import user from "../users/user.vue";
export default {
  components: {
    user,
  },
};
</script>
