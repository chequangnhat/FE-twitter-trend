import { defineStore } from "pinia";

export const useTrendsStore = defineStore("trends", {
  state: () => {
    return {
      trends: [],
      liked: []
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
    }
  },
});
