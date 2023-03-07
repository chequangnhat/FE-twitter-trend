<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="app-container">
    <RouterView> </RouterView>
  </div>
</template>

<style scoped>
.app-container {
  background-color: #f6f6f6;
}
</style>
