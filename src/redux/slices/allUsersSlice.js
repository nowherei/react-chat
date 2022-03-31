import { createSlice } from '@reduxjs/toolkit';
import { users } from '../constants';

export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: users,

  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: state.length + 1 }];
    },
    change: (state, action) => {
      const { id } = action.payload;
      return state.map((item) => (item.id === id ? action.payload : item));
    },
  },
});

export const { add, change } = allUsersSlice.actions;

export default allUsersSlice.reducer;
