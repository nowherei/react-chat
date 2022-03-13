import { createSlice } from '@reduxjs/toolkit';

export const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState: null,
  reducers: { 
    auth: (state, action) => action.payload,
  },
});

export const { auth } = loginUserSlice.actions;

export default loginUserSlice.reducer;