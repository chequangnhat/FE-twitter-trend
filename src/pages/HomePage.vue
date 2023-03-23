<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { ref, watch, onBeforeMount, computed, onMounted, onUpdated } from "vue";
import TrendItem from "../components/TrendItem.vue";
import axios from "axios";
import { useTrendsStore } from "../stores/trends";

const router = useRouter();
const route = useRoute();

const trend_store = useTrendsStore();
const list_trends = ref([]);

const loopNum = ref(10);
const toggleShow = ref(true);

const trends = computed(() => {
  console.log("list_trends computed", list_trends.value.slice(0, loopNum));
  // return list_trends.value.slice(0, loopNum.value);
  return trend_store.trends.slice(0, loopNum.value);
});

const woeid = computed(() => trend_store.woeid);

const increaseLoopNum = () => {
  loopNum.value = 50;
  toggleShow.value = !toggleShow.value;
  console.log("loopNum: " + loopNum.value);
};

const decreaseLoopNum = () => {
  loopNum.value = 10;
  toggleShow.value = !toggleShow.value;
  console.log("loopNum: " + loopNum.value);
};

const response = ref([]);

const get_data = async () => {
  response.value = await axios.get(
    `http://127.0.0.1:8000/twittertrendapp/get_trends_with_woeid/${woeid.value}`
  );

  console.log(response.value.data["result"]["trends"]);
  list_trends.value = response.value.data["result"]["trends"];
  if (trend_store.trends.length > 0) {
    trend_store.deleteAllTrends();
  }

  list_trends.value.forEach((item, index) => {
    trend_store.create(item);
  });

  return list_trends.value;
};

onBeforeMount(() => {
  console.log("onBeforeMount");
  if(trend_store.trends.length == 0) {
    console.log("trends length equal to 0")
    get_data();
  }
});

onMounted(() => {
  console.log("mounted");
  console.log("trends", trends.value);
});

onUpdated(() => {
  console.log("updated");
  console.log("updated", trend_store.trends);
  console.log("list_trends", list_trends.value);
  console.log("trends update", trends.value);
});

watch(woeid, () => {
  console.log("watch", woeid.value);
  console.log("get data in watch again ");
  get_data();
  console.log("trend store in watch", trend_store.trends);
});
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div class="page-content bg-slate-100 w-full pt-4">
      <div
        class="trend-container max-w-7xl flex md:flex-col xl:justify-between xl:flex-row flex-wrap mx-auto"
      >
        <div
          class="left-trend-content bg-white w-11/12 mx-auto xl:w-3/5 xl:mb-0 h-fit border-r border-l border-b"
        >
          <div v-if="trends.length">
            <TrendItem
              v-for="(trend, index) in trends"
              :trend_index="index"
              :trend="trend"
              @click="router.push(`/${route.params.country}/trend/${index}`)"
            ></TrendItem>
          </div>
          <div v-else>
            <p class="">loading...</p>
          </div>
          <div
            class="toogle-button-container w-full flex justify-center items-center p-2"
          >
            <button
              v-if="toggleShow"
              class="border border-blue-500 border-solid rounded px-3 py-1 text-base hover:bg-blue-500 hover:text-white mx-auto bg-white text-blue-500 font-semibold flex justify-center items-center"
              type="button"
              @click="increaseLoopNum()"
            >
              <div>show more</div>
            </button>
            <button
              v-if="!toggleShow"
              class="border border-blue-500 border-solid rounded px-3 py-1 text-base hover:bg-blue-500 hover:text-white mx-auto bg-white text-blue-500 font-semibold flex justify-center items-center"
              type="button"
              @click="decreaseLoopNum()"
            >
              <span class="mr-2">show less</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
