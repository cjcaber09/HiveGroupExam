<template>
  <div v-if="userData">
    <v-form ref="address">
      <v-row>
        <v-col cols="12">
          <div class="text-h6 font-weight-bold">
            Address Information
          </div>
        </v-col>
        <v-col cols="6" v-for="(item, index) in addressText" :key="index">
          <div class="text-subtitle-2">{{ item.label }}:</div>
          <v-text-field
            solo
            :name="item.model"
            :placeholder="item.label"
            v-model="textInputs[item.model]"
            :rules="item.rules"
          ></v-text-field>
        </v-col>
        <v-col cols="12"
          ><v-btn color="primary" type="submit" @click.prevent="submitAddress"
            >Save</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import validations from "../../validations/validations";

export default {
  methods: {
    submitAddress() {
      if (this.$refs.address.validate()) {
        this.textInputs;
        this.$store
          .dispatch("Users/UpdateAddress", {
            address: this.textInputs,
            _id: this.userData._id,
          })
          .then((result) => {
            this.$store.dispatch("Login/fetchUserProfile");
          });
      }
    },
  },

  mounted() {
    let profile_details = this.userData.address_details;
    if (profile_details) {
      this.textInputs = {
        apartment: profile_details.apartment,
        street: profile_details.street,
        city: profile_details.city,
        state: profile_details.state,
        country: profile_details.country,
        zip: profile_details.zip,
      };
    }
  },
  computed: {
    userData() {
      let data = this.$store.getters["Login/getData"];
      return data;
    },
  },
  // watch: {
  //   userData() {

  //   },
  // },
  data() {
    return {
      textInputs: {
        apartment: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      },
      addressText: [
        {
          label: "Apartment, house #",
          model: "apartment",
          type: "text",
          rules: [],
        },
        {
          label: "Street",
          model: "street",
          type: "text",
          rules: [],
        },
        {
          label: "City",
          model: "city",
          type: "text",
          rules: [validations.textRequired],
        },
        {
          label: "State/Province",
          model: "state",
          type: "text",
          rules: [validations.textRequired],
        },
        {
          label: "Country",
          model: "country",
          type: "text",
          rules: [validations.textRequired],
        },
        {
          label: "Postal / Zip Code",
          model: "zip",
          type: "text",
          rules: [],
        },
      ],
    };
  },
};
</script>
