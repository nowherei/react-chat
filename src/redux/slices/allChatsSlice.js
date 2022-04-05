import { createSlice } from '@reduxjs/toolkit';
import { chats } from '../constants';

export const allChatsSlice = createSlice({
  name: 'allChatsSlice',
  initialState: chats,

  reducers: {
    addChat: (state, action) => {
      return [...state, { ...action.payload, id: state.length + 1 }];
    },
    addMessage: (state, action) => {
      console.log(action);
      const { userId, chatId, message } = action.payload;
      return state.map((item) => {
        if (item.id !== chatId) return item;
        /* item.history = [
          ...item.history,
          { id: item.history.length + 1, userId, time: Date.now(), message },
        ]; */
        return {
          ...item,
          history: [
            ...item.history,
            { id: item.history.length + 1, userId, time: Date.now(), message },
          ],
        };
      });
    },
  },
});

export const { addChat, addMessage } = allChatsSlice.actions;

export default allChatsSlice.reducer;
