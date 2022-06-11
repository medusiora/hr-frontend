<script setup lang="ts">
import { useRecipesStore } from "@/stores/recipes";

const recipesStore = useRecipesStore();
</script>

<template>
  <div class="container">
    <h1>Home!!</h1>
    <pre>
      <code>
        {{ recipesStore }}
      </code>
    </pre>
  </div>
</template>