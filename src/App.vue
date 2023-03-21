<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomePage from "./pages/HomePage.vue"
import Header from "./components/Header.vue"
</script>

<template>
    <Header />
    <RouterView />
</template>

<style scoped></style>
