import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    role: '', // Initially empty
    isAuthenticated: false, // Flag for authentication state
  }),
  actions: {
    setUserData(data) {
        console.log('user data',data);
      this.role = data || 'user'; // Assign role from data (or default to empty)
      this.isAuthenticated = true;  // Update authentication flag
    },
    logout() {
      this.role = '';
      this.isAuthenticated = false;
      // Additional logic for clearing user data (optional)
    },
  },
});
