<template>
  <div class="mt-5 ">
    <v-row>
      <v-col></v-col>
      <v-col cols="11" lg="4" class="mx-5">
        <v-card class="py-10 px-15">
          <v-row>
            <v-col
              ><div class="text-h4 d-flex justify-center font-weight-bold">
                LOGIN
              </div></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="12">
              <div v-for="item in Textfields" :key="item.id">
                <v-text-field
                  solo
                  :name="item.model"
                  :placeholder="item.label"
                  v-model="Userdata[item.model]"
                  :type="item.type"
                  class="centered-input"
                ></v-text-field>
              </div>
              <v-col class="d-flex justify-end">
                <div class="text-subtitle-1">
                  Forgot password?
                </div>
              </v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col><v-btn color="primary" block large>Login</v-btn></v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              Dont have an account?
              <span
                class="text-decoration-underline ml-1 primary--text link"
                @click="toggleRegisterDialog"
              >
                Sign up here
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col></v-col>
      <RegisterModalVue
        :dialog="showRegisterDialog"
        @hideDialog="toggleRegisterDialog"
      ></RegisterModalVue>
    </v-row>
  </div>
</template>
<script>
import RegisterModalVue from "./RegisterModal.vue";

export default {
  props: {},
  components: { RegisterModalVue },
  methods: {
    toggleRegisterDialog() {
      this.showRegisterDialog = !this.showRegisterDialog;
    },
  },
  data() {
    return {
      showRegisterDialog: false,
      Userdata: {
        username: "",
        password: "",
      },
      Textfields: [
        { label: "Username", model: "username", rules: [], type: "text" },
        { label: "Password", model: "password", rules: [], type: "password" },
      ],
    };
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
.link {
  cursor: pointer;
}
</style>
