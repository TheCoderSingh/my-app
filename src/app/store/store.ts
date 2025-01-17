import { configureStore } from '@reduxjs/toolkit';
import pickerReducer from '../features/picker/pickerSlice';

export const store = configureStore({
  reducer: pickerReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
