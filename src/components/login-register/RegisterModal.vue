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
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pb-7">
          <v-btn color="primary">Register</v-btn>
          <v-btn color="secondary" class="mr-7" @click="closeRegister"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    closeRegister() {
      this.$emit("hideDialog");
    },
  },
  props: ["dialog"],
  data() {
    return {
      rowOne: [
        { label: "Username", model: "username", rules: [], type: "text" },
        { label: "Password", model: "password", rules: [], type: "password" },
        {
          label: "Confirm password",
          model: "cpassword",
          rules: [],
          type: "password",
        },
        {
          label: "Email Address",
          model: "email",
          rules: [],
          type: "email",
        },
      ],
      rowTwo: [
        { label: "First name", model: "fname", rules: [], type: "text" },
        { label: "Last name", model: "lname", rules: [], type: "text" },
        { label: "Birth date", model: "birthdate", rules: [], type: "date" },

        { label: "Phone number", model: "phone", rules: [], type: "text" },
      ],
    };
  },
};
</script>
