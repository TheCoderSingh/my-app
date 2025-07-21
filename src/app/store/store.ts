import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/CategorySlice';
import usersReducer from '../features/users/UsersSlice';
import currentUserReducer from '../features/users/CurrentUserSlice';

export const store = configureStore({
  reducer: {
    categoryReducer,
    usersReducer,
    currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
