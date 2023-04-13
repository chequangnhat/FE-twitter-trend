<script setup>
import { useRoute } from "vue-router";
import { useTrendsStore } from "../stores/trends";
import { useFavoriteTrendStore } from "../stores/favorite_trend";
import { useUserIdStore } from "../stores/user";
import { ref, computed, onBeforeMount, onMounted, onUpdated } from "vue";
import axios from "axios";

const route = useRoute();
const trend_store = useTrendsStore();
const favorite_store = useFavoriteTrendStore();
const user_store = useUserIdStore();

const isLiked = ref(null)
const isLogin = ref(null)

const trend_item = computed(() => {
  return trend_store.trends[route.params.index];
});

const location =
  route.params.country == 1
    ? "Worldwide"
    : route.params.country == 23424984
    ? "Vietnam"
    : "Japan";

const responseAddFavorite = ref(null);

const addFavoriteTrend = async (trend) => {
  console.log("check include: ",favorite_store.favorite_trends.includes(trend_item))
  console.log("trend: ",trend)
  favorite_store.addFavoriteTrend(trend);
  console.log("favorites: ",favorite_store.favorite_trends) 
  responseAddFavorite.value = await axios.post(
    "http://127.0.0.1:8000/trendapp/add_favorite_trend/",
    {
      user_id: user_store.user_id,
      trend_id: trend.id,
    },
    { headers: { Authorization: `Bearer ${localStorage.getItem("access")}` } }
  );

  console.log("responseAddFavorite.value: ", responseAddFavorite.value);
};

const checkDisplayButton = () => {
  console.log("check display is called");
  console.log("check display is called check include", favorite_store.list_trend_name.includes(trend_item.value.name));
  console.log("check display is called check id", user_store.user_id);
  console.log("trend item namemmmmmm", trend_item.value.name)
  if(user_store.user_id != null){
    if(favorite_store.list_trend_name.includes(trend_item.value.name) == false){
      return true
    }
  }
  
  
  return false
}

onMounted(()=>{
  console.log("check detail on mounted", checkDisplayButton() )
  isLiked.value = checkDisplayButton()
  if(user_store.user_id != null){
    isLogin.value = true
  }else {
    isLogin.value = false
  }
})
</script>

<template>
  <div class="trend-detail-container w-4/5 mx-auto my-5 bg-white border pt-3">
    <div class="text-4xl flex items-end">
      {{ trend_item.name }}
      <div class="text-2xl font-normal text-slate-500 italic ml-3">
        {{ location }}
      </div>
    </div>
    <div v-if="isLogin" class="flex justify-center p-3">
      <button
        v-if="isLiked == true"
        class="border border-blue-500 border-solid rounded px-3 py-1 text-base hover:bg-blue-500 hover:text-white mx-auto bg-white text-blue-500 font-semibold"
        type="button"
        @click="addFavoriteTrend(trend_item)"
      >
        like
      </button>
      <button
        v-if="isLiked == false"
        class="border border-gray-500 border-solid rounded px-3 py-1 text-base bg-gray-500 text-white  font-semibold"
        type="button"
        @click="addFavoriteTrend(trend_item)"
        disabled
      >
        liked
      </button>
    </div>
  </div>
</template>
