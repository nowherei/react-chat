import { createSlice } from '@reduxjs/toolkit';

export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: [
    {
      id: 1,
      name: 'admin',
      surname: 'admin',
      email: 'admin@mail.ru',
      password: 'admin',
    },
  ],

  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: state.length + 1 }];
    },
  },
});

export const { add } = allUsersSlice.actions;

export default allUsersSlice.reducer;
