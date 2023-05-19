import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

// https://connections-api.herokuapp.com/users/signup

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', formData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', formData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     const storage = thunkApi.getState();
//     const persistToken = storage.auth.token;

//     console.log(persistToken);

//     if (persistToken === null) {
//       return thunkApi.rejectWithValue();
//     }
//     token.set(persistToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
export const fetchCurrentUser = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
