import { defineStore } from "pinia";

export const useTrendsStore = defineStore("trends", {
  state: () => {
    return {
      trends: [],
      liked: [],
      woeid: "1",
    };
  },
  actions: {
    create(trend) {
      this.trends.push({
        ...trend,
      });
    },
    addLike(trend){
      this.liked.push({
        ...trend,
      });
    },
    changeWoeid(woeid){
      this.woeid = woeid;
    }
  },
});
