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
    deleteAllTrends(){
      this.trends.splice(0, this.trends.length);
    },
    changeWoeid(woeid){
      this.woeid = woeid;
    }
  },
});
