<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useTrendsStore } from "../stores/trends";
import { useLoginStore } from "../stores/login";

const router = useRouter();

const trend_store = useTrendsStore();
const login_store = useLoginStore();

const userInfo = () => {
  console.log("user info clicked");
  router.push("/user/1");
};

const location_selected = ref("1");
watch(location_selected, () => {
  console.log("location_selected", location_selected.value);
});

watch(location_selected, () => {
  console.log("location_change")
  router.push(`/home/${location_selected.value}`)
  trend_store.changeWoeid(location_selected.value)
})
</script>

<template>
  <div
    class="header text-white text-2xl w-full h-14 bg-blue-500 mx-auto sticky top-0 flex items-center justify-between p-2"
  >
    <div class="left-content flex items-center">
      <div class="header-title mx-3">
        <span class="font-light">get</span>
        <span class="font-normal">day</span>
        <span class="font-semibold">trends</span>
      </div>

      <select
        v-model="location_selected"
        class="text-white bg-blue-500 border rounded text-base py-1 outline-none w-28"
        value="Worldwide"
      >
        <option class="text-black bg-white" value="1">Worldwide</option>
        <option class="text-black bg-white" value="23424984">Vietnam</option>
        <option class="text-black bg-white" value="23424856">Japan</option>
      </select>
    </div>
    <div class="right-content flex items-center">
      <input
        class="rounded-md pl-2 py-2 my-auto text-base placeholder:text-white outline-none bg-blue-400 focus:bg-white focus:text-black"
        type="text"
        placeholder="Search..."
      />

      <button v-if="login_store.isLogin" class="ml-3 border-2 rounded-full w-10 h-10" @click="userInfo()">
        <div class="flex items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-user" class="text-lg" />
        </div>
      </button>
      <button v-if="login_store.isLogin" class="border py-1 px-2 rounded-md ml-3"  @click="login_store.Logout">
       <p class="text-base">Logout</p> 
      </button>
      <button v-if="!login_store.isLogin" class="border py-1 px-2 rounded-md ml-3" @click="router.push('/login')">
       <p class="text-base">login</p> 
      </button>
    </div>
  </div>
</template>
