import { createSlice } from "@reduxjs/toolkit";
import { chats } from "../constants";


export const allChatsSlice = createSlice({
  name: 'allChatsSlice',
  initialState: chats,

  reducers: { add: (state, action) => {
      return [...state, { ...action.payload, id: state.length + 1 }];
    }, },
});

export const { add } = allChatsSlice.actions;

export default allChatsSlice.reducer;