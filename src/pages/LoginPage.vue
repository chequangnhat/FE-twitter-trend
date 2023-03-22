<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useTrendsStore } from "../stores/trends";

const trend_store = useTrendsStore();


const router = useRouter();
const userName = ref("")
const password = ref("")

const submitLogin = () => {
  router.push(`/home/${trend_store.woeid}`);
  console.log("clicked");
};
</script>

<template>
  <div class="h-screen w-full bg-[#F8F8F8] flex justify-center items-center mb-10">

    <div class="login-container w-80 h-[450px] bg-white rounded-xl drop-shadow-2xl flex items-center justify-center flex-col ">
      <div class="header-title mb-10">
        <span class="font-light text-4xl">get</span>
        <span class="font-normal text-4xl">day</span>
        <span class="font-semibold text-4xl">trends</span>
      </div>
      <div class="input-container w-full flex justify-center items-center flex-col">
        <input type="text" placeholder="user name" v-model="userName" class="border w-72 h-10 mb-3 outline-none pl-2 rounded-xl">
        <input type="text" placeholder="password" v-model="password" class="border w-72 h-10 outline-none pl-2 rounded-xl">
      </div>
      <button class="border w-44 h-10 mt-5 rounded-xl text-white bg-sky-500" type="button" @click="submitLogin()">login</button>
    </div>
  </div>
</template>
