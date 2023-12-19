import { createSlice } from '@reduxjs/toolkit';
import fetchUsers from '../services/api';

const initialState = {
  users: [],
  isloading: false,
  error: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isloading = true;
      state.error = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isloading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isloading = false;
      state.error = true;
    });
  },
});

export default usersSlice.reducer;
