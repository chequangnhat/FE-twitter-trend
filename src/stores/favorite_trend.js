import { defineStore } from "pinia";

export const useFavoriteTrendStore = defineStore("favoriteTrend", {
  state: () => {
    return {
      favorite_trends: [],
    };
  },
  actions: {
    addFavoriteTrend(trend){
      this.favorite_trends.push({
        ...trend,
      });
    },
  },
});