<script setup>
import { useRoute } from "vue-router";
import { useTrendsStore } from "../stores/trends";
import { ref } from "vue";

const route = useRoute();
const trend_store = useTrendsStore();

const trend_item = trend_store.trends[route.params.index];
const location =
  route.params.country == 1
    ? "Worldwide"
    : route.params.country == 23424984
    ? "Vietnam"
    : "Japan";
</script>

<template>
  <div class="trend-detail-container w-4/5 mx-auto my-5 bg-white border pt-3">
    <div class="text-4xl flex items-end">
      {{ trend_item.name }}
      <div class="text-2xl font-normal text-slate-500 italic ml-3">
        {{ location }}
      </div>
    </div>
    <div class="flex justify-center p-3">
      <button class="border border-blue-500 border-solid rounded px-3 py-1 text-base hover:bg-blue-500 hover:text-white mx-auto bg-white  text-blue-500 font-semibold" type="button" @click="trend_store.addLike(trend_item)">
        like
      </button>
    </div>
  </div>
</template>
