<template>
  <div>
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
          :placeholder="item.placeholder"
        ></v-text-field>
      </v-col>
      <v-col cols="12"><v-btn color="primary">Save</v-btn> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressText: [
        {
          label: "Apartment, house #",
          model: "houseNum",
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
          rules: [],
        },
        {
          label: "State/Province",
          model: "state",
          type: "text",
          rules: [],
        },
        {
          label: "Country",
          model: "country",
          type: "text",
          rules: [],
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
