<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-img
          src="@/assets/HiveGroupLogo.png"
          max-width="400"
          class="mt-15"
        ></v-img>
      </v-col>
      <v-col class="d-flex justify-center">
        <div class="text-h5">Practical Exam</div>
      </v-col>
      <v-col cols="12" class="justify-center">
        <LoginCardVue></LoginCardVue>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LoginCardVue from "../components/login-register/LoginCard.vue";

// @ is an alias to /src

export default {
  components: { LoginCardVue },
};
</script>
