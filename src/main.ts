import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import { createPinia } from "pinia";
import { useAuthStore } from "@/stores/auth";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import "@/assets/styles/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// check logged in user
const token = Cookies.get("auth.user_token");
const auth = useAuthStore();

if (token) {
  auth.user = jwt_decode(token);
}

router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if not page login and user is logged in
    if (to.name !== "Login" && !auth.loggedIn) next({ name: "Login" });
    else next();
  } else {
    // make sure to always call next()!
    next();
  }
});

router.isReady().then(() => {
  app.mount("#app");
});
