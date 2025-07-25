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
  authError?: string; // <-- Add this line
  phoneNumber?: string;
}

const initialState: CurrentUser = {
  name: '',
  email: '',
  authError: undefined, // <-- Add this line
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
    setAuthError(state, action: PayloadAction<string>) {
      // <-- Add this reducer
      return { ...state, authError: action.payload };
    },
    clearAuthError(state) {
      // <-- Optional: clear error
      return (state.authError = undefined);
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setUserData, clearUserData, setAuthError, clearAuthError, setPhoneNumber } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
