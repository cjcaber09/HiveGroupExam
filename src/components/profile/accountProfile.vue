<template>
  <div v-if="userData">
    <v-row>
      <v-col>
        <div class="text-h6 font-weight-bold">
          Account & Profile
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-avatar size="150" color="red">
          <img src="@/assets/janeDoe1.jpg" alt="alt" />
        </v-avatar>
      </v-col>
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
          v-model="textInputs[item.model]"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row class="mb-2">
      <v-btn color="primary">Save</v-btn>
    </v-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
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
      textInputs: {
        fname: "",
        lname: "",
        mname: "",
        username: "",
        email: "",
        bday: "",
      },
      textFields: [
        {
          label: "First name",
          model: "fname",
          type: "text",
          rules: [],
        },
        {
          label: "Last name",
          model: "lname",
          type: "text",
          rules: [],
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
          rules: [],
        },
        {
          label: "Birth date",
          model: "bday",
          type: "date",
          rules: [],
        },
      ],
      // {
      //   label: "Password",
      //   model: "password",
      //   type: "password",
      //   cols: 12,
      //   rules: [],
      // },
    };
  },
};
</script>
