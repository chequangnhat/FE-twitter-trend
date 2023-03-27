<script setup>
import { useRoute } from "vue-router";
import { useTrendsStore } from "../stores/trends";
import { useFavoriteTrendStore } from "../stores/favorite_trend";
import { ref, computed } from "vue";
import axios from "axios";

const route = useRoute();
const trend_store = useTrendsStore();
const favorite_store = useFavoriteTrendStore();

const trend_item = computed(()=>{
  return trend_store.trends[route.params.index];
})
const location =
  route.params.country == 1
    ? "Worldwide"
    : route.params.country == 23424984
    ? "Vietnam"
    : "Japan";

const addFavoriteTrend = async (trend) => {
  favorite_store.addFavoriteTrend(trend)

  axios.post(
    "http://127.0.0.1:8000/trendapp/add_favorite_trend/",  
    { 
      "name": trend.name, 
      "tweets": trend.tweet_volume
    },
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("access")}`}},
  ).then( response => {
    console.log(response);
  });

}
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
      <button class="border border-blue-500 border-solid rounded px-3 py-1 text-base hover:bg-blue-500 hover:text-white mx-auto bg-white  text-blue-500 font-semibold" type="button" @click="addFavoriteTrend(trend_item)">
        like
      </button>
    </div>
  </div>
</template>
