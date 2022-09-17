<template>
  <div>
    <searchBarVue></searchBarVue>

    <v-row>
      <v-col cols="6" v-for="item in 10" :key="item.id">
        <v-card class="py-2 px-5">
          <v-row>
            <v-col cols="1" class="d-flex justify-center"
              ><v-avatar size="60" color="red">
                <img src="@/assets/janeDoe1.jpg" alt="alt" /> </v-avatar
            ></v-col>
            <v-col cols="3" class="mt-2">
              <div class="text-body-1 font-weight-bold">
                Jane Doe
              </div>
              <div class="text-subtitle-2">
                Admin
              </div>
            </v-col>
            <v-col cols="5">
              <div>
                <div class="text-subtitle-1">
                  <v-icon class="mr-2">mdi-phone</v-icon> 09777926148
                </div>
                <div class="text-subtitle-1">
                  <v-icon class="mr-2">mdi-email</v-icon> janedoe@gmail.com
                </div>
                <div class="text-caption">
                  <v-icon class="mr-2">mdi-map-marker</v-icon> 939 Joy Ridge
                  Road Delray Beach, FL 33445
                </div>
              </div>
            </v-col>
            <v-col cols="3" class="d-flex justify-end">
              <v-btn color="secodary" icon
                ><v-icon>mdi-human-greeting-proximity</v-icon></v-btn
              >
              <v-btn color="secodary" icon><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn color="error" icon><v-icon>mdi-delete</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import searchBarVue from "../components/searchBar.vue";
export default {
  components: {
    searchBarVue,
  },
};
</script>
