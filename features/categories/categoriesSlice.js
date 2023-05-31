import { createSlice } from '@reduxjs/toolkit';

const initialState = "list";

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
		changeCategories: (state, action) => {
			state = action.payload;
			return state;
		},
  },
});

export const { changeCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.category;

export default categoriesSlice.reducer;