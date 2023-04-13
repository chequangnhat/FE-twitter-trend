<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomePage from "./HomePage.vue"
import Header from "../components/Header.vue"
</script>

<template>
    <div class="bg-slate-100 h-screen w-full">
        <Header />
        <RouterView />
    </div>
</template>

<style scoped></style>
