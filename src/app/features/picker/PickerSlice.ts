import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PickerState {
  selectedOption: string;
}

const initialState: PickerState = {
  selectedOption: 'Mentors',
};

const pickerSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = pickerSlice.actions;

export default pickerSlice.reducer;
