import { defineStore, acceptHMRUpdate } from "pinia";

export type Theme = "light" | "dark";

export const useThemeStore = defineStore({
  id: "theme",

  state: () => ({
    name: <Theme>(localStorage.theme || "light"),
  }),

  actions: {
    /**
     * Change the theme
     * @param payload string "light" | "dark"
     */
    setTheme(payload: Theme) {
      this.name = payload;

      // save theme to local storage
      localStorage.theme = payload;

      // toggle body class
      if (payload === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Hot Module Replacement
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
// make sure to pass the right store definition.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}
