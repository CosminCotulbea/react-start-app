import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.freeze({
  data: null,
  error: {},
  loading: false,
});

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    loginUser: (state) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getUser: (state) => {
      state.loading = true;
    },
  },
});

export const { loginUser, setUser, setError, resetUser, getUser } =
  user.actions;

export default user.reducer;
