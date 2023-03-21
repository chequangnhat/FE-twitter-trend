<script setup>
import { useTrendsStore } from "../stores/trends";

const trend_store = useTrendsStore()
</script>

<template>
  <div class="user-infor-container">
    user infor
  </div>
  <div>
    liked:
    {{ trend_store.liked }}
  </div>
</template>
