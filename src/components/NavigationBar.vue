<template>
  <div>
    <v-navigation-drawer permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-img src="@/assets/HiveGroupLogo.png"></v-img>
          </v-list-item-title>
          <v-list-item-subtitle class="pl-5">
            Practical Exam
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in routes"
          :key="item.id"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.routeName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          routeName: "Dashboard",
          route: "/dashboard",
          icon: "mdi-view-dashboard",
        },
        {
          routeName: "Profile",
          route: "/profile",
          icon: "mdi-account",
        },
        {
          routeName: "Friend list",
          route: "/contacts",
          icon: "mdi-card-account-phone",
        },

        {
          routeName: "Users",
          route: "/users",
          icon: "mdi-account-multiple",
        },
      ],
    };
  },
};
</script>
