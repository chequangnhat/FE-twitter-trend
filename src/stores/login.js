import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
     isLogin: false
    };
  },
  actions: {
    Login() {
      this.isLogin = true
    },
    Logout() {
      this.isLogin = false
    },
  },
});
