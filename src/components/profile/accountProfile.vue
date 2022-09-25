<template>
  <div v-if="userData">
    <v-form ref="account">
      <v-row>
        <v-col>
          <div class="text-h6 font-weight-bold">
            Account & Profile
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <v-avatar size="180" color="#f0b52f " @click="selectAvatar">
            <img src="@/assets/default.png" alt="alt" />
          </v-avatar>
        </v-col>
        <v-file-input
          ref="avatarPic"
          style="visibility:hidden"
          v-model="avatar"
        ></v-file-input>
      </v-row>
      <v-row class="mt-10">
        <v-col
          cols="12"
          :lg="item.cols ? item.cols : 6"
          v-for="item in textFields"
          :key="item.id"
        >
          <div class="text-subtitle-2">{{ item.label }}</div>
          <v-text-field
            solo
            :name="item.model"
            :placeholder="item.label"
            :type="item.type"
            :disabled="item.isDisabled"
            :rules="item.rules"
            v-model="textInputs[item.model]"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="mb-2">
        <v-btn color="primary" @click.prevent="submitData" type="submit"
          >Save</v-btn
        >
      </v-row>
    </v-form>
  </div>
</template>
<script>
import moment from "moment";
import validations from "../../validations/validations";
export default {
  methods: {
    selectAvatar() {
      this.$refs.avatarPic.$refs.input.click();
      console.log(this.avatar);
    },
    submitData() {
      if (this.$refs.account.validate()) {
        console.log(this.textInputs);
      }
    },
  },
  watch: {
    userData() {
      let profile_details = this.userData.profile_details;
      this.textInputs = {
        fname: profile_details.fname,
        lname: profile_details.lname,
        mname: profile_details.mname,
        username: this.userData.username,
        email: this.userData.email,
        bday: moment(profile_details.bday).format("YYYY-MM-DD"),
      };
    },
  },
  computed: {
    userData() {
      let data = this.$store.getters["Login/getData"];
      return data;
    },
  },
  props: ["data", "profile"],
  data() {
    return {
      avatar: null,
      textInputs: {
        fname: "",
        lname: "",
        mname: "",
        username: "",
        email: "",
        bday: "",
        profilePic: "",
      },
      textFields: [
        {
          label: "First name",
          model: "fname",
          type: "text",
          rules: [validations.textRequired],
        },
        {
          label: "Last name",
          model: "lname",
          type: "text",
          rules: [validations.textRequired],
        },
        {
          label: "Middle name",
          model: "mname",
          type: "text",
          rules: [],
        },
        {
          label: "Username",
          model: "username",
          type: "text",
          isDisabled: true,
          rules: [],
        },
        {
          label: "Email address",
          model: "email",
          type: "email",
          rules: [validations.textRequired],
        },
        {
          label: "Birth date",
          model: "bday",
          type: "date",
          rules: [validations.textRequired],
        },
      ],
    };
  },
};
</script>
