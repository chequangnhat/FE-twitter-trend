<script setup>
import { useFavoriteTrendStore } from "../stores/favorite_trend";
import TrendItem from "../components/TrendItem.vue";
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useUserIdStore } from "../stores/user";

const user_store = useUserIdStore();
const favorite_store = useFavoriteTrendStore();

// const favoriteResponse = ref(null)
// const getFavorite = async () => {
//   favoriteResponse.value = await axios.post(
//     "http://127.0.0.1:8000/trendapp/get_favorite_trend/",
//     {
//       user_id: user_store.user_id, 
//     },
//     { headers: { Authorization: `Bearer ${localStorage.getItem("access")}` } }
//   );

//   console.log("favoriteResponse: ", favoriteResponse.value);
// };

// onBeforeMount(()=>{
//   getFavorite()
// })
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
