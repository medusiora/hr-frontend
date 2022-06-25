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

if (token) {
  const auth = useAuthStore();
  auth.user = jwt_decode(token);
}

router.isReady().then(() => {
  app.mount("#app");
});
