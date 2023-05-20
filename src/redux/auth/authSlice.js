import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, register, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  isAuth: false,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   logOut() {
  //     return { ...initialState };
  //   },
  // },

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isAuth = true;
        state.error = null;
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isAuth = true;
        state.error = null;
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoggedIn = true;
        state.user = { ...payload };
        state.isAuth = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
