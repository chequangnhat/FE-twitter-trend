<script setup>
import { useFavoriteTrendStore } from "../stores/favorite_trend";
import TrendItem from "../components/TrendItem.vue";

const favorite_store = useFavoriteTrendStore();
</script>

<template>
  <div class="trend-detail-container w-4/5 mx-auto my-5 bg-white border pt-3">
    <div class="text-4xl flex items-center justify-center mb-5">Favorite trend</div>
    <TrendItem
      v-for="(trend, index) in favorite_store.favorite_trends"
      :trend_index="index"
      :trend="trend"
    ></TrendItem>
  </div>
</template>
