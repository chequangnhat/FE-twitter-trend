<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, watch, onBeforeMount, onMounted, onUpdated } from "vue";
import TrendItem from "../components/TrendItem.vue";
import axios from "axios";
import { useTrendsStore } from "../stores/trends";

const router = useRouter();

const trend_store = useTrendsStore();
const list_trends = ref([]);

const loopNum = ref(5);
const toggleShow = ref(true);

const increaseLoopNum = () => {
  loopNum.value = 20;
  toggleShow.value = !toggleShow.value;
};

const decreaseLoopNum = () => {
  loopNum.value = 5;
  toggleShow.value = !toggleShow.value;
};

const response = ref([]);

const get_data = async () => {
  response.value = await axios.get(
    // "https://backend-twitter-trend-production.up.railway.app/twittertrendapp/trends"
    "http://127.0.0.1:8000/twittertrendapp/trends"
  );
  // response.value = await axios.get("http://127.0.0.1:8000/twittertrendapp/hello")
  console.log(response.value.data["result"]["trends"]);
  list_trends.value = response.value.data["result"]["trends"];

  list_trends.value.forEach((item, index) => {
    trend_store.create(item);
  });
};
onBeforeMount(() => {
  get_data();
});

onUpdated(() => {
  console.log("onMounted");
  console.log("onMounted", trend_store.trends);
});

watch(trend_store, () => {
  console.log("watch", trend_store.trends);
});
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div class="page-content bg-slate-100 w-full pt-4">
      <div
        class="trend-container max-w-7xl flex md:flex-col xl:justify-between xl:flex-row flex-wrap mx-auto"
      >
        <div
          class="left-trend-content bg-white w-11/12 mx-auto xl:w-3/5 xl:mb-0 h-fit"
        >
          <div v-if="list_trends.length > 0">
            <TrendItem
              v-for="(trend, index) in list_trends"
              :trend_index="index"
              :trend="trend"
              @click="router.push(`/trend/${index}`)"
            ></TrendItem>
          </div>
          <div v-else>
            <p class="">loading...</p>
          </div>

         
         
        </div>
        
      </div>
    </div>
  </div>
</template>
