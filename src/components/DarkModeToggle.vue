<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

const theme = useThemeStore();

function toggle() {
  theme.setTheme(theme.name === "dark" ? "light" : "dark")
}
</script>

<template>
  <button @click="toggle" class="btn-mode transition-colors">

  </button>
</template>

<style lang="postcss">
.btn-mode {
  @apply relative bg-black rounded-[30px] w-14 h-8;

  &::before {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2.4' fill='white' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cpath d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/%3E%3C/svg%3E");
    background-size: 50%;
    @apply absolute w-8 h-full left-0 top-0 bg-no-repeat bg-center;
  }

  &::after {
    content: '';
    background-color: var(--primary-color, #2ebfff);
    @apply absolute w-5 h-5 right-[6px] top-[6px] rounded-full transition-transform;
  }
}

.dark .btn-mode {
  &::after {
    transform: translateX(-24px);
  }

  &::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2' fill='white' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/%3E%3C/svg%3E");
    transform: translateX(26px);
  }
}
</style>