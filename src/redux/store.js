import { configureStore } from '@reduxjs/toolkit';

import allUsersSlice from './slices/allUsersSlice';
import loginUserSlice from './slices/loginUserSlice';

export default configureStore({
  reducer: {
    allUsers: allUsersSlice,
    loginUser: loginUserSlice,
  },
});
