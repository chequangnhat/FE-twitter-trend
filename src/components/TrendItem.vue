<script setup>
  const {trend, index} = defineProps(['trend','index'])
</script>

<template>
  <div class="trend-item-container border-t flex justify-between items-center">
    <div class="trend-left flex justify-between items-center">
      <div class="trend-number mx-3">{{ index }}</div>
      <div class="trend-content my-2">
        <div class="trend-title">{{ trend["name"] }}</div>
        <div class="tweet-nums">382.7K tweets</div>
      </div>
    </div>
    <div class="trend-right mr-3"><font-awesome-icon icon="fa-solid fa-angle-right" /></div>
  </div>
</template>
