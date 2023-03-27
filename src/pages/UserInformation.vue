<script setup>
import { useTrendsStore } from "../stores/trends";
import { useFavoriteTrendStore } from "../stores/favorite_trend";
const favorite_store = useFavoriteTrendStore();

const trend_store = useTrendsStore()
</script>

<template>
  <div class="user-infor-container">
    user infor
  </div>
  <div>
    liked:
    {{ favorite_store.favorite_trends }}
  </div>
</template>
