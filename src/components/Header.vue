<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const userInfo = () => {
    console.log("user info clicked")
    router.push("/user/1")
  }
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
      <button
        class="border border-solid border-white rounded px-2 py-1 text-base hover:bg-white hover:text-black"
        type="button"
      >
        <span class="mr-2">Worldwide</span>
        <span><font-awesome-icon icon="fa-solid fa-caret-down" /></span>
      </button>
    </div>
    <div class="right-content flex items-center">
      <input class="rounded-md pl-2 py-2 my-auto text-base placeholder:text-white outline-none bg-blue-400 focus:bg-white focus:text-black" type="text" placeholder="Search...">
      <button class="ml-3 border-2 rounded-full w-10 h-10" @click="userInfo()">
      <div class="flex items-center justify-center" >
        <font-awesome-icon icon="fa-solid fa-user" class="text-lg"/>
      </div>
      </button>
    </div>
  </div>
</template>
