<script setup>
import { useRoute } from 'vue-router';
import { useTrendsStore } from "../stores/trends";
import {ref} from "vue"

const route = useRoute()
const trend_store = useTrendsStore()

const trend_item = trend_store.trends[route.params.index]
</script>

<template>
  <div class="trend-detail-container py-24">
   trend detail
   {{ trend_item }}

  </div>
  <button type="button" @click="trend_store.addLike(trend_item)">like</button>
</template>
