<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useThemeStore } from "@/stores/theme";
import Layout from "@/layouts/default.vue";

const theme = useThemeStore();

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  theme.setTheme("dark");
} else {
  theme.setTheme("light")
}
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
</style>