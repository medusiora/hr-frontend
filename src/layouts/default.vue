<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="bg-white dark:bg-black">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>