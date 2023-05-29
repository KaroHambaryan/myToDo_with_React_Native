import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
		changeCategories: (state, action) => {
			console.log(action.payload);
			return action.payload
		},
  },
});

export const { changeCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.category;

export default categoriesSlice.reducer;