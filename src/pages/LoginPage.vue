<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const submitLogin = () => {
  router.push("/home");
  console.log("clicked");
};
</script>

<template lang="">
  <div>hello, this is login page</div>
  <button type="button" @click="submitLogin()">login</button>
</template>
