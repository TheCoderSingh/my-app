import { configureStore } from '@reduxjs/toolkit';
import pickerReducer from '../features/picker/PickerSlice';
import usersReducer from '../features/users/UsersSlice';

export const store = configureStore({
  reducer: {
    pickerReducer,
    usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
