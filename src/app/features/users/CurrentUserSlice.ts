import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
  name: string;
  email: string;
  // profilePicture?: string;
  currentTitle?: string;
  currentCompany?: string;
  location?: string;
  linkedinUrl?: string;
  website?: string;
  skills?: string[];
  bio?: string;
}

const initialState: CurrentUser = {
  name: '',
  email: '',
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<CurrentUser>) {
      return { ...state, ...action.payload };
    },
    clearUserData() {
      return initialState;
    },
  },
});

export const { setUserData, clearUserData } = currentUserSlice.actions;
export default currentUserSlice.reducer;
