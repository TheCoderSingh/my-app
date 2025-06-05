import { configureStore } from '@reduxjs/toolkit';
import pickerReducer from '../features/picker/PickerSlice';
import usersReducer from '../features/users/UsersSlice';
import currentUserReducer from '../features/users/CurrentUserSlice';

export const store = configureStore({
  reducer: {
    pickerReducer,
    usersReducer,
    currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
