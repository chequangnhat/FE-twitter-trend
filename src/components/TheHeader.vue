<script setup></script>

<template>
  <div
    class="container-header text-white w-screen h-14 bg-blue-500 sticky top-0 flex justify-between items-center"
  >
    <div class="w-fit flex">
      <div class="navbar-title mx-3">
        <span class="font-light text-2xl">get</span>
        <span class="font-normal text-2xl">day</span>
        <span class="font-semibold text-2xl">trends</span>
      </div>
      <button class="w-40 border-2 border-white h-9 rounded-md" >
        <div class="h-full button-content flex justify-between items-center hover:bg-white hover:text-black">
          <div class="w-10/12">Vietnam</div>
          <div class="mr-2">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </div>
        </div>
      </button>
    </div>
    <div>
      <input class="rounded-md h-9 w-96 mr-3 text-black outline-none pl-1" type="text" value="aa"/>
    </div>
  </div>
</template>
