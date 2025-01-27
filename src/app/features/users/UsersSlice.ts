// src/redux/slices/mockDataSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { users } from '@/src/utils/mockData';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: users, // Import your mock data here
  },
  reducers: {
    // Add reducers here if needed later
  },
});

export default usersSlice.reducer;
