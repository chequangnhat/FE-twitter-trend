<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref, watch } from "vue";
  import Header from "./components/Header.vue";
  import TrendItem from "./components/TrendItem.vue";

  const loopNum = ref(5);
  const toggleShow = ref(true)

  const increaseLoopNum = () => {
    loopNum.value = 20;
    toggleShow.value = !toggleShow.value
  };

  const decreaseLoopNum = () => {
    loopNum.value = 5;
    toggleShow.value = !toggleShow.value
  };
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <Header />
    <div class="page-content bg-slate-100 w-full pt-4">
      <div
        class="trend-container max-w-7xl flex md:flex-col xl:justify-between xl:flex-row flex-wrap mx-auto"
      >
        <div
          class="left-trend-content bg-white w-11/12 mx-auto xl:w-3/5 xl:mb-0 h-fit"
        >
          <TrendItem v-for="n in loopNum" />
          <!-- <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem /> -->
          <button v-if="toggleShow"
            class="border border-solid border-black rounded px-2 py-1 text-base hover:bg-white hover:text-black mx-auto"
            type="button"
            @click="increaseLoopNum()"
          >
            <span class="mr-2">show more</span>
          </button>
          <button v-if="!toggleShow"
            class="border border-solid border-black rounded px-2 py-1 text-base hover:bg-white hover:text-black mx-auto"
            type="button"
            @click="decreaseLoopNum()"
          >
            <span class="mr-2">show less</span>
          </button>
        </div>
        <div
          class="right-trend-content bg-white min-[0px]:mt-5 w-11/12 mx-auto xl:w-2/6 xl:mt-0 h-fit"
        >
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
