import { defineStore } from "pinia";

export const useFavoriteTrendStore = defineStore("favoriteTrend", {
  state: () => {
    return {
      favorite_trends: [],
      list_trend_name:[]
    };
  },
  actions: {
    addFavoriteTrend(trend) {
      this.favorite_trends.push({
        ...trend,
      });
    },
    addTrendName(name) {
      this.list_trend_name.push(
        name
      );
    },
    deleteAllFavoriteTrend() {
      if (this.favorite_trends.length > 0) {
        this.favorite_trends.splice(0, this.favorite_trends.length);
        this.list_trend_name.splice(0, this.list_trend_name.length);
      }
    },
  },
});
