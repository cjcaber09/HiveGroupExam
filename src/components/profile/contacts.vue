<template>
  <div>
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
          :placeholder="item.placeholder"
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
  data() {
    return {
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
          model: "phone",
          type: "text",
          rules: [],
        },
        {
          label: "Work number",
          model: "phone",
          type: "text",
          rules: [],
        },
        {
          label: "Telephone number",
          model: "phone",
          type: "text",
          rules: [],
        },
      ],
    };
  },
};
</script>
