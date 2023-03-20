<script setup>
  const {trend, trend_index} = defineProps(['trend','trend_index'],)
</script>

<template>
  <div class="trend-item-container border-t flex justify-between items-center">
    <div class="trend-left flex justify-between items-center">
      <div class="trend-number mx-3">{{ trend_index+1 }}</div>
      <div class="trend-content my-2">
        <div class="trend-title text-xl">{{ trend["name"] }}</div>
        <div class="tweet-nums text-stone-500 text-sm">{{ trend["tweet_volume"] == None ? "under 10k" : trend["tweet_volume"] }} tweets</div>
      </div>
    </div>
    <div class="trend-right mr-3 text-stone-500"><font-awesome-icon icon="fa-solid fa-angle-right" /></div>
  </div>
</template>
