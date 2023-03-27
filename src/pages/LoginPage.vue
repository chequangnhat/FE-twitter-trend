<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useTrendsStore } from "../stores/trends";
import axios from "axios";
import { useLoginStore } from "../stores/login";

const trend_store = useTrendsStore();
const login_store = useLoginStore();

const router = useRouter();
const userName = ref("");
const password = ref("");

// const submitLogin = () => {
//   // router.push(`/home/${trend_store.woeid}`);

//   console.log("clicked");
// };
const response = ref(null);

const submitLogin = async () => {
  login_store.Login()
  response.value = await axios.post(
    "http://127.0.0.1:8000/trendapp/api/token/",
    { username: userName.value, password: password.value }
  );
  localStorage.setItem("access", response.value.data["access"]);
  localStorage.setItem("refresh", response.value.data["refresh"]);

  console.log(response.value.data);
  console.log("access: ", response.value.data["access"]);
  console.log("refresh: ", response.value.data["refresh"]);
  if (response.value.data["access"] && response.value.data["refresh"]) {
    router.push(`/home/${trend_store.woeid}`);
  }
};
</script>

<template>
  <div
    class="h-screen w-full bg-[#F8F8F8] flex justify-center items-center mb-10"
  >
    <div
      class="login-container w-80 h-[450px] bg-white rounded-xl drop-shadow-2xl flex items-center justify-center flex-col"
    >
      <div class="header-title mb-10">
        <span class="font-light text-4xl">get</span>
        <span class="font-normal text-4xl">day</span>
        <span class="font-semibold text-4xl">trends</span>
      </div>
      <div
        class="input-container w-full flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="user name"
          v-model="userName"
          class="border w-72 h-10 mb-3 outline-none pl-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="border w-72 h-10 outline-none pl-2 rounded-xl"
        />
      </div>
      <button
        class="border w-44 h-10 mt-5 rounded-xl text-white bg-sky-500"
        type="button"
        @click="submitLogin()"
      >
        login
      </button>
    </div>
  </div>
</template>
