import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    role: 'user', // Initially empty
    isAdmin:false,
    user:'',
    isAuthenticated: false, // Flag for authentication state
  }),
  actions: {
    setUserData(data) {
        console.log('user data fetch from middelware',data.role);
      this.role = data.role; // Assign role from data (or default to empty)
      this.isAdmin =  data.role == 'admin' ? true: false
      this.user = data
      this.isAuthenticated = true;  // Update authentication flag
    },
    logout() {
      this.role = '';
      this.isAuthenticated = false;
      // Additional logic for clearing user data (optional)
    },
  },
});
