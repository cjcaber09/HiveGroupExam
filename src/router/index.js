import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard";
import Users from "../views/Users";
import Profile from "../views/Profile";
import Contacts from "../views/Contacts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      auth: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      auth: true,
    },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      auth: true,
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      auth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: true,
    },
  },
  {
    path: "/*",
    redirect: "/",
    meta: {
      auth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    to.meta.auth ? next() : next("/dashboard");
  } else {
    to.meta.auth ? next("/login") : next();
  }
});
export default router;
