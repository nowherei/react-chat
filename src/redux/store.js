import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allUsersSlice from './slices/allUsersSlice';
import loggedInUserSlice from './slices/loggedInUserSlice';
import allChatsSlice from './slices/allChatsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  allUsers: allUsersSlice,
  loggedInUser: loggedInUserSlice,
  allChats: allChatsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export default configureStore({
//   reducer: {
//     allUsers: allUsersSlice,
//     loggedInUser: loggedInUserSlice,
//     allChats: allChatsSlice,
//   },
// });
