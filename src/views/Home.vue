<script setup lang="ts">
import { useBookStore } from "@/stores/book";

const book = useBookStore();
</script>

<template>
  <div class="container">
    <h1>Home!!</h1>
    <pre>
      <code>
        {{ book.collection }}
      </code>
    </pre>
  </div>
</template>