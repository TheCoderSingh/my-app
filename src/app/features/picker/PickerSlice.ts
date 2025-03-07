import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Interface representing the Picker's state.
 *
 * @property {string} selectedOption - The currently selected option in the Picker.
 */
interface PickerState {
  selectedOption: string;
}

/**
 * Initial state for the Picker component.
 *
 * @property {string} selectedOption - The default selected option in the Picker.
 */
const initialState: PickerState = {
  selectedOption: 'Mentor',
};

/**
 * Picker Slice
 *
 * A Redux slice for managing the state of the selected option in the Picker component.
 * This slice handles updating the selected option using Redux Toolkit's `createSlice`.
 */
const pickerSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    /**
     * Updates the selected option in the state.
     *
     * @param {PickerState} state - The current state of the Picker.
     * @param {PayloadAction<string>} action - The action containing the new selected option.
     */
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

/**
 * Action creator for setting the selected option.
 *
 * @returns {PayloadAction<string>} The action to set the selected option.
 */
export const { setSelectedOption } = pickerSlice.actions;

export default pickerSlice.reducer;
