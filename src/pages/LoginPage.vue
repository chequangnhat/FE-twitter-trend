<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useTrendsStore } from "../stores/trends";
import axios from "axios";
import { useLoginStore } from "../stores/login";
import { useUserIdStore } from "../stores/user";
import { useFavoriteTrendStore } from "../stores/favorite_trend";

const trend_store = useTrendsStore();
const login_store = useLoginStore();
const user_store = useUserIdStore();
const favorite_store = useFavoriteTrendStore();


const router = useRouter();
const userName = ref("");
const password = ref("");

// const submitLogin = () => {
//   // router.push(`/home/${trend_store.woeid}`);

//   console.log("clicked");
// };
const response = ref(null);
const responseUserId = ref(null)
const responseFavorites = ref(null)

const list_favorite = ref([]);

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

  responseUserId.value = await axios.post(
    "http://127.0.0.1:8000/trendapp/get_user_id/",  
    { username: userName.value },
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("access")}`}},
  );

  console.log("responseUserId", responseUserId.value.data['id_user'])
  user_store.setUserId(responseUserId.value.data['id_user'])

  console.log("user id in store", user_store.user_id)
  responseFavorites.value = await axios.get(
    `http://127.0.0.1:8000/trendapp/get_favorite_trend/${user_store.user_id.toString()}/`,  
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("access")}`}},
  );

  console.log("responseFavorites", responseFavorites.value.data["result"])
  list_favorite.value = responseFavorites.value.data["result"]
  list_favorite.value.forEach((item, index) => {
    favorite_store.addFavoriteTrend(item);
    favorite_store.addTrendName(item.name)
  });

  console.log("list trendname", favorite_store.list_trend_name)
  
  if (response.value.data["access"] && response.value.data["refresh"]) {
    router.push(`/home/${trend_store.woeid}`);
  }
};


watch(user_store, () => {
  console.log("user_change", user_store.user_id)

})
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
