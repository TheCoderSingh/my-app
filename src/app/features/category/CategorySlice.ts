import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Interface representing the Category's state.
 *
 * @property {string} selectedOption - The currently selected option in the Category.
 */
interface CategoryState {
  selectedOption: string;
}

/**
 * Initial state for the Category component.
 *
 * @property {string} selectedOption - The default selected option in the Category.
 */
const initialState: CategoryState = {
  selectedOption: 'Mentor',
};

/**
 * Category Slice
 *
 * A Redux slice for managing the state of the selected option in the Category component.
 * This slice handles updating the selected option using Redux Toolkit's `createSlice`.
 */
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    /**
     * Updates the selected option in the state.
     *
     * @param {CategoryState} state - The current state of the Category.
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
export const { setSelectedOption } = categorySlice.actions;

export default categorySlice.reducer;
