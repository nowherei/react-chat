import { createSlice } from '@reduxjs/toolkit';

export const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState: null,
  reducers: { 
    auth: (state, action) => action.payload,
    singOut: (state) => null,
    change: (state, action) => action.payload,
  },
});

export const { auth, singOut, change } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;