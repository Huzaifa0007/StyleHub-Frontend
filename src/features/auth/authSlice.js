import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  token,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload.user || null;

      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      }

      state.isAuthenticated = !!state.token;
    },

    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
