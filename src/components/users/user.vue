<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-avatar color="red" size="70">
          <img src="@/assets/janeDoe1.jpg" alt="alt" />
        </v-avatar>
      </v-col>
      <v-col cols="6" class="mt-2">
        <div class="text-body-1 font-weight-bold">
          Jane Doe
        </div>
        <div class="text-subtitle-2">
          Supervisor
        </div>
      </v-col>
      <v-col cols="2" class="mt-2"
        ><v-btn color="secondary" class=""
          ><v-icon class="mr-2">mdi-account-plus</v-icon>Add friend</v-btn
        ></v-col
      >
    </v-row>
  </div>
</template>
