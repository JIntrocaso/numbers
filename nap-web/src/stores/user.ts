import { defineStore } from 'pinia';

interface User {
  name: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false,
    user: null as null | User,
  }),

  getters: {
    isLoggedIn: (state) => state.loggedIn,
    getUser: (state) => state.user,
  },

  actions: {
    login(user: User) {
      this.loggedIn = true;
      this.user = user;
    },

    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});
