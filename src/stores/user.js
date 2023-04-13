import { defineStore } from "pinia";

export const useUserIdStore = defineStore("userId", {
  state: () => {
    return {
      user_id: null,
    };
  },
  actions: {
    setUserId(id){
      this.user_id = id
    },
    deleteUserId(){
      this.user_id = null;
    }
  },
});