import { createSlice } from '@reduxjs/toolkit';

export const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState: null,
  reducers: { 
    auth: (state, action) => action.payload,
    singOut: (state) => null,
  },
});

export const { auth, singOut } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;