<template>
  <div class="mt-5 ">
    <v-row>
      <v-col></v-col>
      <v-col cols="11" lg="4" class="mx-5">
        <v-card class="py-10 px-15">
          <v-row>
            <v-col>
              <v-alert type="error" dismissible v-model="loginAlert">
                {{ loginMessage }}
              </v-alert>
              <div class="text-h4 d-flex justify-center font-weight-bold">
                LOGIN
              </div></v-col
            >
          </v-row>
          <v-form ref="login">
            <v-row>
              <v-col cols="12">
                <div v-for="item in Textfields" :key="item.id">
                  <v-text-field
                    solo
                    :name="item.model"
                    :placeholder="item.label"
                    v-model="Userdata[item.model]"
                    :type="item.type"
                    :rules="item.rules"
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
              <v-col
                ><v-btn
                  color="primary"
                  block
                  type="submit"
                  large
                  @click.prevent="loginUser"
                  >Login</v-btn
                ></v-col
              >
            </v-row>
          </v-form>
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
import Rules from "../../validations/validations";

export default {
  props: {},
  components: { RegisterModalVue },
  methods: {
    loginUser() {
      this.loginAlert = false;

      if (this.$refs.login.validate()) {
        this.$store
          .dispatch("Login/LoginUser", this.Userdata)
          .then((res) => {
            this.$router.go("/dashboard");
          })
          .catch((err) => {
            this.loginMessage = err.data["message"];
            this.loginAlert = true;
          });
      }
    },
    toggleRegisterDialog() {
      this.showRegisterDialog = !this.showRegisterDialog;
    },
  },
  data() {
    return {
      loginAlert: false,
      loginMessage: "",
      showRegisterDialog: false,
      Userdata: {
        username: "",
        password: "",
      },
      Textfields: [
        {
          label: "Username",
          model: "username",
          rules: [Rules.textRequired],
          type: "text",
        },
        {
          label: "Password",
          model: "password",
          rules: [Rules.textRequired],
          type: "password",
        },
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
