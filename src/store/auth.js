import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,

    isAuthenticated: false,
    token: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
          }),
          // credentials: "include", // Include cookies (e.g., accessToken) in the request
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Login response", data);
            // if (data.firstName === username && data.password === password) {
              // console.log(response)
              //  token = data.accessToken;
              if (data && data.accessToken) {
                this.user = data;
                this.token = data.accessToken;
                this.isAuthenticated = true;
                // Store token and user data in localStorage
                localStorage.setItem("auth_token", data.accessToken);
                localStorage.setItem("auth_user",
                  JSON.stringify(this.user) // Store user data in localStorage
                );
              } else {
                throw new Error("Invalid credentials");
              }
            
          });
      } catch (err) {
        console.error("Login error:", err.message);
      }
    },

    Logout() {
      this.user = null;
      this.isAuthenticated = false;
      this.token = null;
    },
    setUser(user) {
      this.user = user;
    },
    checkLogin() {
      const token = localStorage.getItem("auth_token");
      const user = localStorage.getItem("auth_user");
      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user);
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    }
  },
});
