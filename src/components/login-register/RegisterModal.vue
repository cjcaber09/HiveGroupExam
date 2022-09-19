<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      transition="dialog-transition"
      width="800"
    >
      <v-card>
        <v-card-text>
          <v-row class="py-5 px-5">
            <v-col>
              <v-row>
                <v-col
                  class="text-h4 font-weight-bold black--text d-flex justify-center"
                  >Register</v-col
                >
              </v-row>
              <v-form ref="register">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-for="field in rowOne"
                      :key="field.id"
                      solo
                      :name="field.model"
                      :label="field.label"
                      :rules="field.rules"
                      :type="field.type"
                      :placeholder="field.label"
                      v-model="UserInput[field.model]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-for="field in rowTwo"
                      :key="field.id"
                      solo
                      :name="field.model"
                      :label="field.label"
                      :rules="field.rules"
                      :type="field.type"
                      :placeholder="field.label"
                      v-model="UserInput[field.model]"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pb-7">
          <v-btn color="primary" @click="RegisterUser">Register</v-btn>
          <v-btn color="secondary" class="mr-7" @click="closeRegister"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Rules from "../../validations/validations";

export default {
  methods: {
    RegisterUser() {
      if (this.$refs.register.validate()) {
        let data = this.FormatPayload(this.UserInput);
        if (data) {
          this.$store.dispatch("Login/Register", data).then((result) =>
            setTimeout(() => {
              this.$router.go("/dashboard");
            }, 700)
          );
        }
      }
    },
    FormatPayload(data) {
      return {
        user: {
          username: data.username,
          password: data.password,
          email: data.email,
          type: "user",
        },
        contact: {
          phone: data.phone,
        },
        profile: {
          bday: data.birthdate,
          fname: data.fname,
          lname: data.lname,
        },
      };
    },
    ConfirmPassword(v) {
      return v == this.UserInput.password
        ? true
        : "Password and confirm password must match.";
    },
    closeRegister() {
      this.$emit("hideDialog");
    },
  },
  props: ["dialog"],
  data() {
    return {
      UserInput: {
        username: "",
        password: "",
        fname: "",
        lname: "",
        email: "",
        birthdate: "",
        phone: "",
      },
      rowOne: [
        {
          label: "Username",
          model: "username",
          rules: [Rules.textRequired],
          type: "text",
        },
        {
          label: "Password",
          model: "password",
          rules: [Rules.textRequired, Rules.passwordValidation],
          type: "password",
        },
        {
          label: "Confirm password",
          model: "cpassword",
          rules: [this.ConfirmPassword],
          type: "password",
        },
        {
          label: "Email Address",
          model: "email",
          rules: [Rules.textRequired, Rules.isEmail],
          type: "email",
        },
      ],
      rowTwo: [
        {
          label: "First name",
          model: "fname",
          rules: [Rules.textRequired],
          type: "text",
        },
        {
          label: "Last name",
          model: "lname",
          rules: [Rules.textRequired],
          type: "text",
        },
        {
          label: "Birth date",
          model: "birthdate",
          rules: [Rules.textRequired],
          type: "date",
        },
        {
          label: "Phone number",
          model: "phone",
          rules: [Rules.textRequired],
          type: "text",
        },
      ],
    };
  },
};
</script>
