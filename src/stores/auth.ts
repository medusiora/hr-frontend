import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { defineStore, acceptHMRUpdate } from "pinia";
import type { User, Credential } from "@/interfaces/auth";

/**
 * Simulate a login
 * @param {string} username
 * @param {string} password
 */
function apiLogin({
  username,
  password,
}: Credential): Promise<{ token: string }> {
  console.log(`Login with username: ${username} and password: ${password}`);

  if (username === "admin" && password === "admin") {
    return Promise.resolve({
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwic3ViIjoiMTIzNDU2Nzg5MCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.Bq50di-dDiyIOgTkE2-Svue_Kp7BLbW5hodd57QSY3s`,
    });
  }

  return Promise.reject(new Error("Invalid credentials"));
}

export const useAuthStore = defineStore({
  id: "auth",

  state: () => ({
    user: <User | null>null,
  }),

  getters: {
    loggedIn: (state) => !!state.user,
  },

  actions: {
    logout() {
      this.user = null;

      Cookies.remove("auth.user_token", {
        path: "/",
        sameSite: "lax",
      });
    },

    /**
     * Attempt to login a user
     * @param payload {Credential} is a username and password
     */
    async login(payload: Credential) {
      const res = await apiLogin(payload);
      const token = <string>res.token;

      // get next 30 minutes from now
      const now = new Date();
      const expires = new Date(now.getTime() + 30 * 60000);

      Cookies.set("auth.user_token", token, {
        expires,
        path: "/",
        sameSite: "lax",
      });

      // decode the token and set the user
      const decoded = <User>jwt_decode(token);
      this.user = decoded;
    },
  },
});

// Hot Module Replacement
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
// make sure to pass the right store definition.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
