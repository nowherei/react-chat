import { createSlice } from '@reduxjs/toolkit';
import { users } from '../constants';

export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: users,

  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: state.length + 1 }];
    },
  },
});

export const { add } = allUsersSlice.actions;

export default allUsersSlice.reducer;
