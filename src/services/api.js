import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('http://localhost:3001/users');
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.log(error.message);
  }
});

export default fetchUsers;
