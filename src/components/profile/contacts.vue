<template>
  <div v-if="contactData">
    <v-row>
      <v-col cols="12">
        <div class="text-h6 font-weight-bold">
          Contact Information
        </div>
      </v-col>
      <v-col cols="12">Personal Contact Infomation</v-col>

      <v-col cols="6" v-for="(item, index) in contactText" :key="index">
        <div class="text-subtitle-2">{{ item.label }}:</div>
        <v-text-field
          solo
          :name="item.model"
          :placeholder="item.label"
          v-model="contactInputs[item.model]"
        ></v-text-field>
      </v-col>
      <!-- <v-col cols="12">Emergency Infomation</v-col>
      <v-col cols="6" v-for="(item, index) in contactText" :key="index">
        <div class="text-subtitle-2">{{ item.label }}:</div>
        <v-text-field
          solo
          :name="item.model"
          :placeholder="item.placeholder"
        ></v-text-field>
      </v-col> -->
      <v-col cols="12"><v-btn color="primary">Save</v-btn> </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    contactData() {
      let data = this.$store.getters["Login/getContacts"];
      return data;
    },
  },
  watch: {
    contactData() {
      console.log(this.contactData);
    },
  },
  mounted() {
    let contact = this.contactData;
    this.contactInputs = {
      home: contact.home,
      work: contact.work,
      phone: contact.phone,
      telephone: contact.telephone,
    };
  },
  data() {
    return {
      contactInputs: {
        home: "",
        phone: "",
        work: "",
        telephone: "",
      },
      emergencyContact: [
        {
          label: "",
        },
      ],
      contactText: [
        {
          label: "Phone number",
          model: "phone",
          type: "text",
          rules: [],
        },
        {
          label: "Home number",
          model: "home",
          type: "text",
          rules: [],
        },
        {
          label: "Work number",
          model: "work",
          type: "text",
          rules: [],
        },
        {
          label: "Telephone number",
          model: "telephone ",
          type: "text",
          rules: [],
        },
      ],
    };
  },
};
</script>
